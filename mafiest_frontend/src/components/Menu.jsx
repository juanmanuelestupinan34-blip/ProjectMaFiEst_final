import { Link } from "react-router-dom";
import "../styles/menu.css";

const Menu = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/asesorias">Asesorías</Link>
      <Link to="/recursos">Recursos</Link>
      <Link to="/contactanos">Contáctanos</Link>
      <Link to="/crear-usuario">Crear Usuario</Link>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
};

export default Menu;
