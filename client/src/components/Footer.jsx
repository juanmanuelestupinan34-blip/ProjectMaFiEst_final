const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#1a1a1a',
            color: '#f0f0f0',
            padding: '2rem',
            textAlign: 'center',
            marginTop: '3rem'
        }}>
            <h4>Comunidad MaFiEst</h4>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                MaFiEst no solo es una plataforma educativa, sino una comunidad en crecimiento. 
                Promovemos la colaboración entre estudiantes, docentes y entusiastas de las matemáticas 
                para construir juntos un aprendizaje más significativo.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#ccc' }}>
                &copy; {new Date().getFullYear()} MaFiEst. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
