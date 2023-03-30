const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const commentsCtrl = require('../../controllers/api/comments');


// POST /api/contents/:id/comments
router.post('/contents/:id/comments', commentsCtrl.createComment)

// DELETE /api/comments/:id
router.delete('/comments/:id', commentsCtrl.deleteComment)

// PUT /api/comments/:id


module.exports = router;

