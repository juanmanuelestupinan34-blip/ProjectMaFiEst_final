const jwt = require('jsonwebtoken');
const config = require('./config');

// Extrae token de la cabecera
const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.token = authorization.substring(7);
    } else {
        req.token = null;
    }
    next();
};

// Extrae usuario desde el token
const userExtractor = (req, res, next) => {
    const token = req.token;
    if (token) {
        jwt.verify(token, config.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ error: 'Token inválido' });
            }
            req.user = decodedToken;
            next();
        });
    } else {
        return res.status(401).json({ error: 'Token requerido' });
    }
};

// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Acceso denegado: solo administradores' });
    }
    next();
};

module.exports = {
    tokenExtractor,
    userExtractor,
    isAdmin
};
