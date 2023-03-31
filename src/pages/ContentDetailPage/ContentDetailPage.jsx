import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  * as contentAPI from '../../utilities/contents-api';
import * as commentsAPI from '../../utilities/comments-api';
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";
import AuthPage from "../AuthPage/AuthPage";



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

useEffect(function() {
  async function getContentDetails() {
    const allContentDetails = await contentAPI.getContentDetails(id)

   
    setContentDetails(allContentDetails)
  }
  getContentDetails();
}, [id]);
 
  if (!contentDetails) return null

  return (
    <>
      <h1>Details</h1>
      <div className="contentDetails" section>
      <div>
      <ul>
        <li> Title:  {contentDetails.title} </li>
        <li> Type: {contentDetails.type} </li>
        <li> ID: {contentDetails.id} </li>
        <li> Year: {contentDetails.year} </li>
        <li> Genre: {contentDetails.genre_names} </li>
        <li> User Rating: {contentDetails.user_rating} </li>
        <li> US Rating: {contentDetails.us_rating} </li>
        <li> 
        <img src={contentDetails.poster} alt={contentDetails.title} style={{ width: '280px', height: '500px', objectFit: 'contain'  }} />   </li>
        <li>{contentDetails.plot_overview}</li>
          </ul>

        </div>
        </div>
        

      <CommentForm handleAddComment={handleAddComment}  /> 
      <CommentCard handleDeleteComment={handleDeleteComment} comments={contentDetails.comments} user={user} />
    </>

  );
}
