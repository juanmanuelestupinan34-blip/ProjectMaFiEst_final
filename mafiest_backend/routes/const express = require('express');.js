const express = require('express');
const router = express.Router();
const independentCtrl = require('../controllers/independent');

router.get('/example', independentCtrl.example);

module.exports = router;