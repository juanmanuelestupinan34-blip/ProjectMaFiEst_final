import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Recursos = () => {
  return (
    <div>
      <Menu />
      <div style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem' }}>
        <h1 style={{ textAlign: 'center', color: '#1a1a1a' }}> Recursos Matemáticos</h1>
        
        <section style={{ marginTop: '2rem' }}>
          <h2>Libros recomendados</h2>
          <ul>
            <li>Álgebra de Baldor</li>
            <li>Trigonometría de Iezzi</li>
            <li>Matemáticas Universitarias de Swokowski</li>
            <li>Cálculo de Stewart</li>
            <li>Problemas de Olimpiadas Matemáticas</li>
            <li>Guías de Matemáticas CONAMAT (nivel medio y superior)</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Herramientas en línea</h2>
          <ul>
            <li>GeoGebra para geometría dinámica</li>
            <li>Desmos para gráficas de funciones</li>
            <li>Symbolab y WolframAlpha para resolver expresiones matemáticas</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Apoyo adicional</h2>
          <p>
            En MaFiEst utilizamos materiales didácticos variados, apoyados por una librería amplia y actualizada, 
            que nos permite ofrecer acompañamiento sólido en cada tema. Nuestros estudiantes tienen acceso a recursos 
            diseñados para fortalecer la comprensión y resolver dudas de forma efectiva.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Recursos;
