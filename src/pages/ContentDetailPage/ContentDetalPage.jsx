import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  * as contentAPI from '../../utilities/contents-api'


export default function ContentDetailPage() {
   const [contentDetails, setContentDetails] = useState([]);

useEffect(function() {
  async function getContentDetails() {
    const allContentDetails = await contentAPI.getContentDetails()
    setContentDetails(allContentDetails);
  }
  getContentDetails();
}, []);

  const AllContentDetails = contentDetails.map((contentDetail, idx) => (
    <div key={idx}>
     <ul>
      <li> {contentDetail.title} </li>
      <li> {contentDetail.type} </li>
      <li> {contentDetail.id} </li>
      <li> {contentDetail.year} </li>
      <li> {contentDetail.genre_name} </li>
      <li> {contentDetail.user_rating} </li>
      <li> {contentDetail.us_rating} </li>
      <li> {contentDetail.poster} </li>
     </ul>

    </div>

  ))

  return (
    <>
    <h1>Content Details</h1>
    <div className="contentDetails">
      <ul>
        <li>{AllContentDetails}</li>
      </ul>
    </div>

    </>
  )

}
