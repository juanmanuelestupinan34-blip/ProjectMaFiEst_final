import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Nosotros = () => {
    return (
        <div>
            <Menu />

            <main style={{ padding: "2rem" }}>
                <h1>Sobre MaFiEst</h1>

                <p>
                    <strong>MaFiEst</strong> es una plataforma educativa innovadora que nace con el propósito de transformar la manera
                    en que los estudiantes de secundaria aprenden matemáticas. Nuestro objetivo es brindar una experiencia
                    clara, accesible y motivadora que fortalezca las habilidades lógicas, analíticas y académicas de los estudiantes.
                </p>

                <p>
                    Sabemos que las matemáticas pueden ser un reto para muchos, por eso diseñamos un modelo educativo flexible
                    que se adapta a los distintos estilos de aprendizaje y niveles escolares. Contamos con un equipo de docentes
                    apasionados por la enseñanza y comprometidos con el progreso de cada estudiante.
                </p>

                <p>
                    Además, trabajamos con una <strong>selección de libros de matemáticas reconocidos</strong> y actualizados, lo cual nos
                    permite construir contenidos sólidos y alineados con los programas escolares. Para complementar este proceso,
                    disponemos del apoyo de una <strong>librería asociada</strong> que facilita el acceso a material didáctico, guías de estudio
                    y recursos de refuerzo.
                </p>

                <h2 style={{ marginTop: '2rem' }}>¿Qué ofrecemos?</h2>
                <ul style={{ lineHeight: '1.8' }}>
                    <li>
                        <strong>Clases pregrabadas:</strong> organizadas por temas y grados, disponibles 24/7 para que el estudiante pueda
                        aprender a su ritmo, repasar las veces que necesite y fortalecer los temas más importantes.
                    </li>
                    <li>
                        <strong>Asesorías presenciales personalizadas:</strong> sesiones prácticas con tutores expertos que ayudan a resolver dudas,
                        reforzar conceptos clave y acompañar al estudiante en su proceso formativo.
                    </li>
                    <li>
                        <strong>Apoyo bibliográfico:</strong> construimos nuestro contenido con base en libros confiables, lo que garantiza
                        una enseñanza estructurada, profesional y de calidad.
                    </li>
                    <li>
                        <strong>Librería aliada:</strong> contamos con una librería que apoya nuestros procesos educativos, proporcionando materiales físicos
                        y complementarios para el desarrollo del aprendizaje.
                    </li>
                    <li>
                        <strong>Expansión académica:</strong> próximamente incluiremos contenidos en <em>Física</em> y <em>Estadística</em> para fortalecer
                        el impacto integral de nuestra propuesta educativa.
                    </li>
                </ul>

                <p style={{ marginTop: '1rem' }}>
                    En <strong>MaFiEst</strong> creemos que aprender matemáticas no debe ser una carga, sino una oportunidad para crecer. 
                    Por eso, ofrecemos las herramientas necesarias para que cada estudiante se sienta acompañado, motivado y preparado para alcanzar el éxito académico con confianza.
                </p>
            </main>

            <Footer />
        </div>
    );
};

export default Nosotros;
