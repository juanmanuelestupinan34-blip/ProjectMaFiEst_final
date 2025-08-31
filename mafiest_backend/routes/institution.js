const express = require('express');
const router = express.Router();
const institutionCtrl = require('../controllers/institution');

router.post('/', institutionCtrl.createInstitution);

module.exports = router;