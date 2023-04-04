import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import EditCommentForm from '../EditCommentForm/EditCommentForm';


export default function CommentCard({comments, user, handleDeleteComment, 
handleUpdateComment}) {
  const [showEdit, setShowEdit] = useState(false); 

 const commentsMap = comments.map((comment, idx,) => (
        <>
        <div className='card mt-2 p-3 bg-secondary text-white'>

          <div className='card-body mb-3'>
            <div className="commentUser" style={{display: 'block', position: 'initial'}}>
              <p className="userName">Name: {comment.user.name}</p>
            </div>
              <p>{comment.content}</p>
              <p>Created on: {new Date().toLocaleString()}</p>
              <p>Rating: {comment.rating}</p>
                {user._id === comment.user._id ?
              <>
                <button onClick={() => handleDeleteComment(comment._id)} className="bg-danger"> Delete </button>

                <button onClick={() => setShowEdit(!showEdit)}>Edit comment</button>
                  {showEdit && (
                    <EditCommentForm handleUpdateComment={handleUpdateComment}  commentId={comment._id}/>
                    
                    )}
              </>          
              :
              null 
            }
            </div>
          </div>
        </>
    )) 

    return (
          <>
          
          {commentsMap}
        

          </>
    )
}