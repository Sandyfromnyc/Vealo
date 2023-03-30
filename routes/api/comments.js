const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const commentsCtrl = require('../../controllers/api/comments');


// POST /api/contents/:id/comments
router.post('/contents/:id/comments', commentsCtrl.createComment)

// DELETE /api/comments/:id
router.delete('/comments/:id', commentsCtrl.deleteComment)

// GET /api/comments/:id/edit
// router.get('/comment/:id/edit', commentsCtrl.editComment)

// PUT /api/comments/:id
router.put('/comments/:id', commentsCtrl.updateComment)


module.exports = router;

