const express = require('express');
const { getDataset } = require('../controllers/imfController');

const router = express.Router();

router.get('/:dataset/:indicator/:country/:frequency', getDataset);

module.exports = router;