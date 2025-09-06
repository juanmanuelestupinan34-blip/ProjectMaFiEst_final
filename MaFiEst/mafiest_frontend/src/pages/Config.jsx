import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/config.css';

const Config = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        // Fetch user data and achievements
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/users/me'); // Endpoint to get user data
                setUser(response.data);

                const achievementsResponse = await axios.get('/api/achievements'); // Endpoint to get user achievements
                setAchievements(achievementsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('/api/users/me', user); // Endpoint to update user data
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div className="config-container">
            <h1>Configuración de Perfil</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Actualizar</button>
            </form>
            <h2>Mis Logros</h2>
            <ul>
                {achievements.map((achievement) => (
                    <li key={achievement.id}>
                        <img src={achievement.icon} alt={achievement.title} />
                        <span>{achievement.title}</span> - {achievement.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Config;