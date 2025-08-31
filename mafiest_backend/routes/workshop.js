const express = require('express');
const router = express.Router();
const workshopCtrl = require('../controllers/workshop');

router.get('/example', workshopCtrl.example);

module.exports = router;