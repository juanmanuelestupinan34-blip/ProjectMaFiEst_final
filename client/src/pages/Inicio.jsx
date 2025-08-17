import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Inicio = () => {
    return (
        <div>
            <Menu />
            
            <main style={{ padding: "2rem" }}>
                <h1>Bienvenido a MaFiEst</h1>
                <p>
                    En MaFiEst nos apasiona la enseñanza de las matemáticas. Ofrecemos clases pregrabadas de alta calidad y asesorías personalizadas para clases presenciales, adaptadas a las necesidades de cada estudiante. 
                    Nuestro objetivo es que comprendas realmente las matemáticas, desarrolles pensamiento lógico y te prepares con éxito para tus retos académicos.
                </p>
                <p>
                    Explora nuestras secciones para conocer más sobre nuestros servicios, misión, visión, y cómo podemos ayudarte a alcanzar tus metas educativas.
                </p>
            </main>
            
            <Footer />
        </div>
    )
}

export default Inicio;
