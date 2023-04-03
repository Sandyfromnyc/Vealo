import sendRequest from "./send-request";


export async function addComment(commentData, id) {
  const commentRequest = await sendRequest(`/api/contents/${id}/comments`, 'POST', commentData)
  return commentRequest
}

export async function deleteComment(id) {
  const deleteCommentRequest = await sendRequest(`/api/comments/${id}`, 'DELETE')
  return deleteCommentRequest
}

// export async function editComment(id){
//   const editCommentRequest = await sendRequest(`/api/comments/${id}`, 'GET')
//   return editCommentRequest
// }

export async function updateComment(id, commentData) {
  const updateCommentRequest = await sendRequest(`/api/comments/${id}`, 'PUT', commentData)
  return updateCommentRequest
}