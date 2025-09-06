const jwt = require('jsonwebtoken');
const config = require('./config');

// Middleware para extraer el token de la cabecera de autorización
const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.token = authorization.substring(7);
    } else {
        req.token = null;
    }
    next();
};

// Middleware para extraer el usuario autenticado del token
const userExtractor = (req, res, next) => {
    const token = req.token;
    if (token) {
        jwt.verify(token, config.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ error: 'token invalid' });
            }
            req.user = decodedToken;
            next();
        });
    } else {
        req.user = null;
        next();
    }
};

module.exports = {
    tokenExtractor,
    userExtractor
};