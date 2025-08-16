import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Recursos = () => {
  return (
    <div className="inicio-container">
      <Menu />
      <div className="inicio-main" style={{ maxWidth: 800 }}>
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
          <div style={{ background: '#f6f6f6', padding: '1rem', borderRadius: 8, marginTop: 12 }}>
            <strong>Ejemplo:</strong> Si tienes dudas sobre factorización, consulta el capítulo 3 de "Álgebra de Baldor" donde se explican los métodos paso a paso.
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Herramientas en línea</h2>
          <ul>
            <li>GeoGebra para geometría dinámica</li>
            <li>Desmos para gráficas de funciones</li>
            <li>Symbolab y WolframAlpha para resolver expresiones matemáticas</li>
          </ul>
          <div style={{ background: '#f6f6f6', padding: '1rem', borderRadius: 8, marginTop: 12 }}>
            <strong>Ejemplo:</strong> Usa Desmos para graficar la función <code>y = x^2 + 2x + 1</code> y observar cómo se forma la parábola.
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Apoyo adicional</h2>
          <p>
            En MaFiEst utilizamos materiales didácticos variados, apoyados por una librería amplia y actualizada, 
            que nos permite ofrecer acompañamiento sólido en cada tema. Nuestros estudiantes tienen acceso a recursos 
            diseñados para fortalecer la comprensión y resolver dudas de forma efectiva.
          </p>
          <div style={{ background: '#f6f6f6', padding: '1rem', borderRadius: 8, marginTop: 12 }}>
            <strong>Ejemplo:</strong> Si tienes problemas con integrales, puedes solicitar una guía personalizada y sesiones de resolución de dudas con nuestros tutores.
          </div>
        </section>
      </div>

    </div>
  );
};

export default Recursos;
