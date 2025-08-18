import Menu from '../components/Menu';
import Footer from '../components/Footer';
import '../styles/recursos.css';

const Recursos = () => {
  return (
    <div>
      <Menu />
      <div className="recursos-container">
        <h1>Recursos Matemáticos</h1>

        <section className="recursos-section">
          <h2>📚 Libros recomendados</h2>
          <p>
            Estos textos son referencias clásicas y modernas que abarcan desde fundamentos hasta niveles avanzados. 
            Se recomiendan tanto para el autoestudio como para reforzar los contenidos de las clases.
          </p>
          <ul>
            <li><strong>Álgebra de Baldor</strong> – Ideal para fortalecer el razonamiento algebraico.</li>
            <li><strong>Trigonometría de Iezzi</strong> – Una guía clara para dominar las funciones trigonométricas.</li>
            <li><strong>Matemáticas Universitarias de Swokowski</strong> – Excelente para estudiantes de ingeniería y ciencias.</li>
            <li><strong>Cálculo de Stewart</strong> – Referencia mundial para el estudio del cálculo diferencial e integral.</li>
            <li><strong>Problemas de Olimpiadas Matemáticas</strong> – Colección de retos que desarrollan el pensamiento lógico.</li>
            <li><strong>Guías de Matemáticas CONAMAT</strong> – Material práctico para nivel medio y superior.</li>
          </ul>
        </section>

        <section className="recursos-section">
          <h2>🛠️ Herramientas en línea</h2>
          <p>
            Estas plataformas digitales permiten explorar conceptos matemáticos de manera interactiva, facilitando el aprendizaje práctico.
          </p>
          <ul>
            <li><a href="https://www.geogebra.org/" target="_blank" rel="noopener noreferrer">GeoGebra</a> – Geometría dinámica y álgebra visual.</li>
            <li><a href="https://www.desmos.com/" target="_blank" rel="noopener noreferrer">Desmos</a> – Graficador intuitivo para funciones matemáticas.</li>
            <li><a href="https://www.symbolab.com/" target="_blank" rel="noopener noreferrer">Symbolab</a> – Resolución paso a paso de expresiones.</li>
            <li><a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">WolframAlpha</a> – Motor de conocimiento computacional avanzado.</li>
          </ul>
        </section>

        <section className="recursos-section">
          <h2>📖 Recursos para clases MaFiEst</h2>
          <p>
            Hemos recopilado un conjunto de materiales de apoyo exclusivos para nuestros estudiantes. 
            Estos libros y guías sirven como complemento a las sesiones de clase, fortaleciendo la teoría con ejemplos prácticos.
          </p>
          <a 
            href="https://drive.google.com/drive/folders/1VGq9QVr1xbdxmtdnmKt9nMdKHJTbvslp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="recursos-link"
          >
            📂 Acceder a la biblioteca MaFiEst
          </a>
        </section>

        <section className="recursos-section">
          <h2>💡 Apoyo adicional</h2>
          <p>
            En <strong>MaFiEst</strong> contamos con una librería amplia y constantemente actualizada. 
            Los estudiantes tienen acceso a recursos diseñados para reforzar cada tema y aclarar dudas con explicaciones claras y ejemplos aplicados.
            Nuestro objetivo es que el aprendizaje sea progresivo, accesible y profundo.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Recursos;
