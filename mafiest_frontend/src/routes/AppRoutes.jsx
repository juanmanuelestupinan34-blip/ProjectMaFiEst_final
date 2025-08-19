import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import CrearUsuario from "../pages/CrearUsuario"
import Inicio from "../pages/Inicio"
import Nosotros from "../pages/Nosotros"
import Recursos from "../pages/Recursos"
import Asesorias from "../pages/Asesorias"
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
            <Route path="/asesorias" element={<Asesorias />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/crear-usuario" element={<CrearUsuario />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
