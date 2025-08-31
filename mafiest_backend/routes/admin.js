const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin');

router.get('/example', adminCtrl.example);

module.exports = router;