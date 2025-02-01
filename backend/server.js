const express = require('express');
const cors = require('cors');
require('./config/db');
const userModel = require('./models/Users');
const JobModel = require('./models/JobData');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.post('/api/user_signup', async (req, res) => {
    try {
        const { user_name, user_password, user_role } = req.body;

        if (!user_name || !user_password || !user_role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await userModel.findOne({ user_name });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const user = new userModel({ user_name, user_password, user_role });
        await user.save();
        
        res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


app.get('/api/get_users', async (req, res) => {
    try {
        const users = await userModel.find(); // Fetch users from the database
        res.json(users); // Send the users as a JSON response
        console.log(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// POST route to add a new job
app.post('/api/add-job', async (req, res) => {
    try {
        // Extract job details from the request body
        const {
            username,
            logo_url,
            title,
            job_role,
            company_name,
            location,
            job_type,
            stream_required,
            salary,
            last_date,
            required_experience,
            job_description,
            qualifications,
            about_us
        } = req.body;

        // Create a new job instance
        const newJob = new JobModel({
            username,
            logo_url,
            title,
            job_role,
            company_name,
            location,
            job_type,
            stream_required,
            salary,
            last_date,
            required_experience,
            job_description,
            qualifications,
            about_us
        });

        // Save the job to the database
        const savedJob = await newJob.save();

        // Send a success response
        res.status(201).json({
            message: 'Job added successfully',
            job: savedJob
        });
    } catch (error) {
        // Handle errors
        console.error('Error adding job:', error);
        res.status(500).json({
            message: 'Failed to add job',
            error: error.message
        });
    }
});

app.get('/api/get-job/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const jobs = await JobModel.find({ username });
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching user jobs:', error);
        res.status(500).json({
            message: 'Failed to fetch jobs',
            error: error.message
        });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})