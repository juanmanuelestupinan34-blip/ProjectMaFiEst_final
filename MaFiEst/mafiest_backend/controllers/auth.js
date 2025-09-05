const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { tokenExtractor } = require('../utils/middleware');
const router = express.Router();

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
        return res.status(401).json({ error: 'invalid email or password' });
    }

    const userForToken = {
        id: user.id,
        email: user.email,
        role: user.role,
    };

    const token = jwt.sign(userForToken, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user: userForToken });
});

// Logout
router.post('/logout', tokenExtractor, (req, res) => {
    // Invalidate the token on the client side
    res.status(200).json({ message: 'Logged out successfully' });
});

// Register Independent User
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ error: 'Email already in use' });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
        name,
        email,
        passwordHash,
        role: 'independent',
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Refresh Token (optional)
router.post('/refresh', tokenExtractor, (req, res) => {
    const user = req.user;

    const newToken = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token: newToken });
});

module.exports = router;