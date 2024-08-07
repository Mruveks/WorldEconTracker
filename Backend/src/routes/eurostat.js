const express = require('express');
const { getDataset } = require('../controllers/eurostatController');

const router = express.Router();

router.get('/:dataset', getDataset);

module.exports = router;