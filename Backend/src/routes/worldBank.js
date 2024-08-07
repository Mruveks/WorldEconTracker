const express = require('express');
const { getIndicator } = require('../controllers/worldBankController');

const router = express.Router();

router.get('/:country/:indicator', getIndicator);

module.exports = router;