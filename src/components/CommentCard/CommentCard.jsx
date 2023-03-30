

export default function CommentCard({comments, handleDeleteComment}) {
 const commentsMap = comments.map((comment, idx) => (
   <>
   <p>{comment.user.name}</p>
    <p>{comment.content}</p>
    <p>{comment.rating}</p>

  <button onClick={() => handleDeleteComment(comment._id)}> Delete </button>
   </>
)) 

  return (
        <>
        <div>
          
      <h2>All Comments</h2>
     {commentsMap}
        </div>

        </>
  )
}