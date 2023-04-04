import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  * as contentAPI from '../../utilities/contents-api';
import * as commentsAPI from '../../utilities/comments-api';
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";


export default function ContentDetailPage({user}) {
   const [contentDetails, setContentDetails] = useState(null);
   const {id} = useParams();

async function handleAddComment(comment) {
  const newContentWComment = await commentsAPI.addComment(comment, contentDetails._id)
  setContentDetails(newContentWComment)
}

async function handleDeleteComment(id) {
  const updatedContent = await commentsAPI.deleteComment(id)
  setContentDetails(updatedContent)
}

async function handleUpdateComment(commentId, updateCommentItem) {
  const updateContentComment = await commentsAPI.updateComment(commentId, updateCommentItem)
  setContentDetails(updateContentComment)
}

useEffect(function() {
  async function getContentDetails() {
    const allContentDetails = await contentAPI.getContentDetails(id)

   
    setContentDetails(allContentDetails)
  }
  getContentDetails();
}, [id]);
 
  if (!contentDetails) return null
    console.log(contentDetails.comment)
  return (
    <>
    <div className="card p-3">
      <div className="card-header">
      <h1>Details</h1>
      </div>
      <div className="card-body bg-secondary">
        <div className="container">
          <img src={contentDetails.poster} alt={contentDetails.title} style={{ width: '280px', height: '500px', objectFit: 'contain'  }} className="poster" />   
        <div className="info">
          <h2 className="title"> {contentDetails.title} </h2>
          <p className="info"> {contentDetails.type} </p>
          {/* <p> ID: {contentDetails.id} </p> */}
          <p className="info">  {contentDetails.year} </p>
          <p className="info"> {contentDetails.genre_names} </p>
          <p className="info"> User Rating: {contentDetails.user_rating} </p>
          <p> US Rating: {contentDetails.us_rating} </p>
          <p className="plot" ><strong>{contentDetails.plot_overview}</strong></p>
              <iframe width="420" height="315"
                src={contentDetails.trailer} allowFullScreen>
              </iframe>
          </div>
        </div>
      </div>
    </div>
        

      <CommentForm handleAddComment={handleAddComment}  /> 
      <CommentCard 
        handleDeleteComment={handleDeleteComment}

        handleUpdateComment={handleUpdateComment} 
        comments={contentDetails.comments} 
        user={user} 
      />
   
    </>

  );
}
