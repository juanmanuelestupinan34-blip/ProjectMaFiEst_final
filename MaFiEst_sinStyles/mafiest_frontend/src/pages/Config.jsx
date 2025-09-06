import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Config = () => {
    const [user, setUser] = useState(null);
    const [achievements, setAchievements] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        // Fetch user data and achievements
        const fetchData = async () => {
            try {
                const userResponse = await axios.get('/api/users/me'); // Endpoint to get current user
                const achievementsResponse = await axios.get('/api/achievements'); // Endpoint to get user achievements
                setUser(userResponse.data);
                setAchievements(achievementsResponse.data);
                setFormData({
                    name: userResponse.data.name,
                    email: userResponse.data.email,
                    password: ''
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
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
            await axios.put('/api/users/me', formData); // Endpoint to update user data
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div>
            <h1>Configuración</h1>
            {user && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Correo:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Actualizar</button>
                </form>
            )}
            <h2>Mis Logros</h2>
            <ul>
                {achievements.map((achievement) => (
                    <li key={achievement.id}>
                        <img src={achievement.icon} alt={achievement.title} />
                        <strong>{achievement.title}</strong>: {achievement.description} (Obtenido el: {new Date(achievement.dateEarned).toLocaleDateString()})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Config;