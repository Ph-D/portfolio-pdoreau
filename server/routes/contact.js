const express = require('express');
const router = express.Router();
const authService = require('../services/auth');

const contactCtrl = require('../controllers/contact');

router.post('', contactCtrl.saveMessage);

router.get('', contactCtrl.getMessage);


module.exports = router;
