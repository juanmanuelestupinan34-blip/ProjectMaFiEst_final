import { Link } from "react-router-dom";
import "../styles/menu.css";

const Menu = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/proyectos/crear">Crear Proyecto</Link>
      <Link to="/tareas">Tareas</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/registro">Equipo</Link>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
};

export default Menu;
