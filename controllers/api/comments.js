const Content = require('../../models/content');
const User = require('../../models/user');

module.exports = {
  createComment,
  deleteComment,
  updateComment
}

async function createComment(req, res) {
  const user = await User.findById(req.user._id)
  const content = await Content.findById(req.params.id).populate('comments.user')
  const comment =  content.comments.create({
    content: req.body.content,
    rating: req.body.rating,
    user: user,
  })
  content.comments.push(comment);
  await content.save();
  await content.populate('comments.user', 'name');
  res.json(content)
}

async function deleteComment(req, res) {
  const content = await Content.findOne({'comments._id' : req.params.id, 'comments.user' : req.user._id});
  content.comments.remove(req.params.id);
  await content.save();
  res.json(content)
}

// async function editComment(req, res) {
//   const content = await Content.findOne({'comments._id': req.params.id, 'comments.user' : req.user._id});
//   const comment = content.comments.id(req.params.id);
//   res.json('comments/edit', { comment });
// }


async function updateComment(req, res) {
  const content = await Content.findByIdAndUpdate({'comments._id' : req.params.id, 'comments.user' : req.user._id});
  const commentId = Content.comments.id(req.params.id);
  if (!commentId.userId.equals(req.user._id)) {
    return res.status(401).json({message: "error"})  

  }
  commentId.text = req.body.text
  try {
    await content.save();
  } catch (e) {
    console.log(e.message);
  }
  res.json(content);
}

