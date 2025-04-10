const express = require('express');
const router = express.Router();
const { getAssets, createAsset } = require('../controllers/assetController');

router.get('/', getAssets);
router.post('/', createAsset);

module.exports = router;
