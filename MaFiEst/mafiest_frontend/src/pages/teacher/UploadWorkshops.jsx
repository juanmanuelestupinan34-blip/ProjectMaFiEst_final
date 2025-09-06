import React, { useState } from 'react';
import axios from 'axios';
import '../styles/roles/teacher.css';

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
            alert('Taller subido con éxito');
        } catch (error) {
            console.error('Error al subir el taller:', error);
            alert('Error al subir el taller');
        }
    };

    return (
        <div>
            <h2>Subir Talleres</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={workshopData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="description"
                        value={workshopData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Archivo:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Subir Taller</button>
            </form>
        </div>
    );
};

export default UploadWorkshops;
