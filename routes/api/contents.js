const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const contentsCtrl = require('../../controllers/api/contents');

// GET  /api/contents/sources
router.get('/sources', contentsCtrl.sources )

// GET /api/contents/hulutopten
router.get('/hulutopten', contentsCtrl.huluTopTen)

// GET /api/contents/trending
router.get('/trending', contentsCtrl.trending)

// Get /api/contents/search
router.get('/search', contentsCtrl.search)

// GET /api/contents/:id
router.get('/:id', contentsCtrl.show)





module.exports = router;