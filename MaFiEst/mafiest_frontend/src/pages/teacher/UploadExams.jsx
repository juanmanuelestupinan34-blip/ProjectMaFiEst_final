import React, { useState } from 'react';
import axios from 'axios';

const UploadExams = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            setMessage('Por favor, selecciona un archivo para subir.');
            return;
        }

        const formData = new FormData();
        formData.append('exam', file);

        try {
            const response = await axios.post('/api/exams/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error al subir el examen. Intenta nuevamente.');
        }
    };

    return (
        <div>
            <h2>Subir Exámenes</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Subir Examen</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UploadExams;