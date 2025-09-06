const jwt = require('jsonwebtoken');
const { User } = require('../models');

const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.token = authorization.substring(7);
    } else {
        req.token = null;
    }
    next();
};

const userExtractor = async (req, res, next) => {
    const token = req.token;
    if (!token) {
        return res.status(401).json({ error: 'token missing or invalid' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken.id) {
            return res.status(401).json({ error: 'token invalid' });
        }
        req.user = await User.findByPk(decodedToken.id);
        next();
    } catch (error) {
        return res.status(401).json({ error: 'token invalid' });
    }
};

module.exports = {
    tokenExtractor,
    userExtractor,
};