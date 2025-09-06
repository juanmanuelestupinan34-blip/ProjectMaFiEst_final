import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Assuming you have a CSS file for styling

const Landing = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Bienvenido a MaFiEst</h1>
                <p>Tu plataforma de aprendizaje y desarrollo personal.</p>
            </header>
            <main className="landing-main">
                <section className="landing-info">
                    <h2>¿Qué es MaFiEst?</h2>
                    <p>
                        MaFiEst es una plataforma diseñada para facilitar el aprendizaje en diversas áreas,
                        ofreciendo cursos, talleres y un sistema de logros que te motiva a seguir avanzando.
                    </p>
                </section>
                <section className="landing-actions">
                    <h2>Comienza ahora</h2>
                    <Link to="/login" className="btn">Iniciar Sesión</Link>
                    <Link to="/register" className="btn">Registrarse</Link>
                </section>
            </main>
            <footer className="landing-footer">
                <p>&copy; 2023 MaFiEst. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Landing;