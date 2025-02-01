import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie
import axios from 'axios';

const AddJob = () => {
    const [formData, setFormData] = useState({
        username: '', // Initialize username as empty
        logo_url: '',
        title: '',
        job_role: '',
        company_name: '',
        location: '',
        job_type: '',
        stream_required: '',
        salary: '',
        last_date: '',
        required_experience: '',
        job_description: '',
        qualifications: '',
        about_us: ''
    });

    // Retrieve the username from cookies when the component mounts
    useEffect(() => {
        const userName = Cookies.get('user'); // Get the username from cookies
        if (userName) {
            setFormData((prevData) => ({
                ...prevData,
                username: userName // Set the username in the form data
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/add-job', formData);

            if (response.status === 201) {
                console.log('Job added successfully:', response.data);
                alert('Job added successfully!');
                setFormData({
                    username: Cookies.get('user') || '',
                    logo_url: '',
                    title: '',
                    job_role: '',
                    company_name: '',
                    location: '',
                    job_type: '',
                    stream_required: '',
                    salary: '',
                    last_date: '',
                    required_experience: '',
                    job_description: '',
                    qualifications: '',
                    about_us: ''
                });
            }
        } catch (error) {
            console.error('Error adding job:', error);
            alert('Failed to add job. Please try again.');
        }
    };

    return (
        <div>
            <div id="job-add-container">
                <span className='has-text-weight-bold is-size-2'>Add Job Details</span>
                <div id="form-inputs">
                    {/* Username Input Field */}
                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        readOnly // Make it read-only if the username should not be editable
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Logo URL"
                        name="logo_url"
                        value={formData.logo_url}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Job Role"
                        name="job_role"
                        value={formData.job_role}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Company Name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Job Type"
                        name="job_type"
                        value={formData.job_type}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Stream Required"
                        name="stream_required"
                        value={formData.stream_required}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="date"
                        placeholder="Last Date"
                        name="last_date"
                        value={formData.last_date}
                        onChange={handleChange}
                    />

                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Required Experience in years"
                        name="required_experience"
                        value={formData.required_experience}
                        onChange={handleChange}
                    />

                    <textarea
                        className="textarea is-medium"
                        placeholder="JD (Job Description)"
                        name="job_description"
                        value={formData.job_description}
                        onChange={handleChange}
                    ></textarea>

                    <textarea
                        className="textarea is-medium"
                        placeholder="Qualifications"
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleChange}
                    ></textarea>

                    <textarea
                        className="textarea is-medium"
                        placeholder="About Us"
                        name="about_us"
                        value={formData.about_us}
                        onChange={handleChange}
                    ></textarea>

                    <button
                        className='button-big has-text-white'
                        onClick={handleSubmit}
                    >
                        Add Job
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddJob;