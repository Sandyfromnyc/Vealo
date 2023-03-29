import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  * as contentAPI from '../../utilities/contents-api'



export default function ContentDetailPage() {
   const [contentDetails, setContentDetails] = useState(null);
   const {id} = useParams();

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
      <li> {contentDetail.title} </li>
      <li> {contentDetail.type} </li>
      <li> {contentDetail.id} </li>
      <li> {contentDetail.year} </li>
      <li> {contentDetail.genre_names} </li>
      <li> {contentDetail.user_rating} </li>
      <li> {contentDetail.us_rating} </li>
      <li> 
       <img src={contentDetail.poster} alt={contentDetail.title} style={{ width: '280px', height: '500px', objectFit: 'contain'  }} />   </li>
      <li>{contentDetail.plot_overview}</li>
     </ul>

    </div>

  ))
  return (
    <>
    <h1>Details</h1>
    <div className="contentDetails">
      <ul>
        <li>{AllContentDetails}</li>
      </ul>
    </div>

    </>
  )

}
