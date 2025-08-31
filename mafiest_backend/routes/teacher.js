const express = require('express');
const router = express.Router();
const teacherCtrl = require('../controllers/teacher');

router.get('/example', teacherCtrl.example);

module.exports = router;