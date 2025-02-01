const mongoose = require('mongoose');

// Define the schema
var schema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true // Ensure username is required
        },
        logo_url: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        job_role: {
            type: String,
            required: true
        },
        company_name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        job_type: {
            type: String,
            required: true
        },
        stream_required: {
            type: String,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        last_date: {
            type: Date,
            required: true
        },
        required_experience: {
            type: String,
            required: true
        },
        job_description: {
            type: String,
            required: true
        },
        qualifications: {
            type: String,
            required: true
        },
        about_us: {
            type: String,
            required: true
        },
        updated_on: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true // Automatically adds `createdAt` and `updatedAt`
    }
);

// Create the model
var JobModel = mongoose.model('Job', schema);

// Export the model
module.exports = JobModel;
