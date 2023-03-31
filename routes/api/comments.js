const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const commentsCtrl = require('../../controllers/api/comments');


// POST /api/contents/:id/comments
router.post('/contents/:id/comments', ensureLoggedIn,  commentsCtrl.createComment)

// DELETE /api/comments/:id
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.deleteComment)

// GET /api/comments/:id/edit
// router.get('/comment/:id/edit', ensureLoggedIn, commentsCtrl.editComment)

// PUT /api/comments/:id
router.put('/comments/:id', ensureLoggedIn, commentsCtrl.updateComment)


module.exports = router;

