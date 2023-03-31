const Content = require('../../models/content');
const User = require('../../models/user');

module.exports = {
  createComment,
  deleteComment,
  // updateComment
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




// async function updateComment(req, res) {
//   const content = await Content.finddById({'comments._id' : req.params.id, 'comments.user' : req.user._id});
//   content.comments.update(req,params.id);
//   await content.save();
//   res.json(content)
// }
