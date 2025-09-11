import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css'; 

const Landing = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Bienvenido a MaFiEst</h1>
                <p>Tu plataforma de aprendizaje en línea.</p>
            </header>
            <main className="landing-main">
                <section className="landing-features">
                    <h2>Características</h2>
                    <ul>
                        <li>Acceso a cursos en diversas áreas.</li>
                        <li>Seguimiento de progreso personalizado.</li>
                        <li>Logros y recompensas por tu esfuerzo.</li>
                    </ul>
                </section>
                <section className="landing-actions">
                    <h2>Comienza ahora</h2>
                    <Link to="/login" className="btn">Iniciar Sesión</Link>
                    <Link to="/register" className="btn">Registrarse</Link>
                </section>
            </main>
            <footer className="landing-footer">
                <p>&copy; 2025 MaFiEst. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Landing;
