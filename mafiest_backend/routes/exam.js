const express = require('express');
const router = express.Router();
const examCtrl = require('../controllers/exam');

router.get('/example', examCtrl.example);

module.exports = router;