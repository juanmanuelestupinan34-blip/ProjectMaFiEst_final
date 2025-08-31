const express = require('express');
const router = express.Router();
const progressCtrl = require('../controllers/progress');

router.get('/example', progressCtrl.example);

module.exports = router;