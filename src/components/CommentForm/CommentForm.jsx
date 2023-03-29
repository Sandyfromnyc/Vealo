import { useState } from "react";


export default function CommentForm({handleAddComment}) {
  const [newComment, setNewComment] = useState ({ content: "", rating: 5 });

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddComment(newComment);
    setNewComment({
      content: "",
      rating: 5
    });
  }

  function handleChange(evt) {
    setNewComment({...newComment, [evt.target.name]: evt.target.value})
  }

  return (
      <>
      
      <hr />
        <form onSubmit={handleSubmit}>
          <textarea 
          name='content' 
          placeholder='Add a comment'
          onChange={handleChange}
          value={newComment.content} 
          />
          <label htmlFor="rating">Rating</label>
          <select name="rating" value={newComment.rating} onChange={handleChange}>
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
          <button type="submit">Add a comment</button>
        </form>

      </>


  )
}