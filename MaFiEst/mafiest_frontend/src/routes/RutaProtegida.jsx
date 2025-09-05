import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
    const token = localStorage.getItem('token'); // Asumiendo que el token se guarda en localStorage

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default RutaProtegida;