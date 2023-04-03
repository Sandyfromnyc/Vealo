import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import EditCommentForm from '../EditCommentForm/EditCommentForm';


export default function CommentCard({comments, user, handleDeleteComment, 
handleUpdateComment}) {
  const [showEdit, setShowEdit] = useState(false); 

 const commentsMap = comments.map((comment, idx,) => (
        <>
          <div className='card-body'>
            <div className="commentUser" style={{display: 'block', position: 'initial'}}>
              <p className="userName">Name: {comment.user.name}</p>
            </div>
              <p>{comment.content}</p>
              <p>Created on: {new Date().toLocaleString()}</p>
              <p>Rating: {comment.rating}</p>
                {user._id === comment.user._id ?
              <>
                <button onClick={() => handleDeleteComment(comment._id)}> Delete </button>

                <button onClick={() => setShowEdit(!showEdit)}>Edit comment</button>
                  {showEdit && (
                    <EditCommentForm handleUpdateComment={handleUpdateComment}  commentId={comment._id}/>

                  )}
              </>          
              :
              null 
                }
          </div>
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