import CommentCard from "../CommentCard/CommentCard";
import { useState } from 'react';

export default function EditCommentForm({handleUpdateComment, commentId}) {
  const [updateCommentItem, setUpdateCommentItem] = useState({
    content: "",
    rating: 5,
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateComment(commentId, updateCommentItem)
  }

  function handleInputChange(evt) {
    setUpdateCommentItem({...updateCommentItem, [evt.target.name]: evt.target.value}); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Edit Comment</label>
      <textarea name="content"
      placeholder="update comment"  
      value={updateCommentItem.content} 
      onChange={handleInputChange}
      required
      />
       <select name="rating" value={updateCommentItem.rating} onChange={handleInputChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5} selected>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
          </select>
      <button type="submit">Update Comment</button>
    </form>
  );
}