// mail route
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/mail');

router.post('/send-email', contactController.envoyerCourriel);

module.exports = router;
