import CommentCard from "../CommentCard/CommentCard";
import { useState } from 'react';

export default function EditCommentForm({handleUpdateComment, commentId}) {
  const [updateCommentItem, setUpdateCommentItem] = useState();

  
  
  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateComment(updateCommentItem, commentId)
  }

  function handleInputChange(evt) {
    setUpdateCommentItem(evt.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Edit Comment</label>
      <input type="text" id="comment" value={updateCommentItem} onChange={handleInputChange} />
      <button type="submit">Update Comment</button>
    </form>
  );
}