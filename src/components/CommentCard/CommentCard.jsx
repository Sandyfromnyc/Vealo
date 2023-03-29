

export default function CommentCard({comments, handleDeleteComment}) {

 const commentsMap = comments.map((comment, idx) => (
   <>
   <h1>
    {comment.user}
    {comment.content}
    {comment.rating}
   </h1>


  <button onClick={() => handleDeleteComment(comment._id)}> Delete </button>
   </>
)) 

  return (
      {commentsMap}
  );
}