const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const contentsCtrl = require('../../controllers/api/contents');

// GET  /api/contents/sources
router.get('/sources', contentsCtrl.sources )

// GET /api/contents/hulutopten
router.get('/hulutopten', contentsCtrl.huluTopTen)







module.exports = router;