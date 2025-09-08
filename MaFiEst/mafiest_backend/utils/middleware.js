const jwt = require('jsonwebtoken');
const config = require('./config');

// Extrae el token de la cabecera
const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7);
  } else {
    req.token = null;
  }
  next();
};

// Verifica el token y coloca el usuario en req.user
const userExtractor = (req, res, next) => {
  const token = req.token;
  if (token) {
    jwt.verify(token, config.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
      }
      req.user = decodedToken; // { id, role }
      next();
    });
  } else {
    return res.status(401).json({ error: 'Token requerido' });
  }
};

module.exports = {
  tokenExtractor,
  userExtractor,
};
