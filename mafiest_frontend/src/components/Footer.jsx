import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>Comunidad MaFiEst</h4>
      <p>
        MaFiEst no solo es una plataforma educativa, sino una comunidad en crecimiento. 
        Promovemos la colaboración entre estudiantes, docentes y entusiastas de las matemáticas 
        para construir juntos un aprendizaje más significativo.
      </p>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} MaFiEst. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
