import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  * as contentAPI from '../../utilities/contents-api';
import * as commentsAPI from '../../utilities/comments-api';
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentCard from "../../components/CommentCard/CommentCard";



export default function ContentDetailPage() {
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
    // const contentDetailsArray = [allContentDetails] 

   
    setContentDetails([allContentDetails])
  }
  getContentDetails();
}, [id]);



  if (!contentDetails) return null
  console.log(contentDetails)
  const AllContentDetails = contentDetails.map((contentDetail, idx) => (
    <div key={idx}>
     <ul>
      <li> Title:  {contentDetail.title} </li>
      <li> Type: {contentDetail.type} </li>
      <li> ID: {contentDetail.id} </li>
      <li> Year: {contentDetail.year} </li>
      <li> Genre: {contentDetail.genre_names} </li>
      <li> User Rating: {contentDetail.user_rating} </li>
      <li> US Rating: {contentDetail.us_rating} </li>
      <li> {contentDetail.comments} </li>
      <li> 
       <img src={contentDetail.poster} alt={contentDetail.title} style={{ width: '280px', height: '500px', objectFit: 'contain'  }} />   </li>
      <li>{contentDetail.plot_overview}</li>
     </ul>

    </div>

  ))
  if (!contentDetails) return null
  return (
    <>
    <h1>Details</h1>
    <div className="contentDetails" section>
      <ul>
        <li>{AllContentDetails}</li>
      </ul>
    </div>
    <CommentForm handleAddComment={handleAddComment}  /> 
    {/* <CommentCard handleDeleteComment={handleDeleteComment} comments={contentDetails.comments} /> */}

    </>
  )
}
