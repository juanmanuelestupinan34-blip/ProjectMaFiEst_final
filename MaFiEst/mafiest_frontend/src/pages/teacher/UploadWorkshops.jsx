import React, { useState } from 'react';
import axios from 'axios';

const UploadWorkshops = () => {
    const [workshopData, setWorkshopData] = useState({
        title: '',
        description: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkshopData({
            ...workshopData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setWorkshopData({
            ...workshopData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', workshopData.title);
        formData.append('description', workshopData.description);
        formData.append('file', workshopData.file);

        try {
            const response = await axios.post('/api/workshops', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Workshop uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading workshop:', error);
        }
    };

    return (
        <div>
            <h2>Upload Workshop</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={workshopData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={workshopData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Upload File:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadWorkshops;