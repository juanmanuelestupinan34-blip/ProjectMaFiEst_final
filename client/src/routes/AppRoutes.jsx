import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import CrearUsuario from "../pages/CrearUsuario"
import Inicio from "../pages/Inicio"
import Nosotros from "../pages/Nosotros"
import Recursos from "../pages/Recursos"
import Mision from "../pages/Mision"
import Vision from "../pages/Vision"
import Contactanos from "../pages/Contactanos"

const AppRoutes = () => {
  const userJSON = window.localStorage.getItem("user")
  const user = userJSON ? JSON.parse(userJSON) : null

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {user && (
          <>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/mision" element={<Mision />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route
              path="/crear-usuario"
              element={user.rol === "administrador" ? <CrearUsuario /> : <Navigate to="/login" replace />}
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
