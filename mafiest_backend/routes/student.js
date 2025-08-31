const express = require('express');
const router = express.Router();
const studentCtrl = require('../controllers/student');

router.get('/example', studentCtrl.example);

module.exports = router;