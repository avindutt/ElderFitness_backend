const express = require('express');

const router = express.Router();

const contact_controller = require('../controller/contact_controller');

router.post('/submit-details', contact_controller.index);

module.exports = router;