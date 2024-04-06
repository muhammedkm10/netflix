import React, { useEffect, useState } from 'react'
import './posters.css'
import axios from '../../axios'
import { apikey, imageurl } from '../../constants/constants'
import YouTube from 'react-youtube'
import Swal from 'sweetalert2';

function Posters(props) {

  const [rowdata,setRowdata] = useState([])
  const [trailerid,setTrailerid] = useState(null)
  const [showVideo, setShowVideo] = useState(false); 
  

    const closeVideo = () => {
        setShowVideo(false); 
    };
  useEffect(()=>{
    axios.get(props.link)
    .then(response=>setRowdata(response.data.results))
    .catch(error=>alert("an error is occured",error))
  },[])

const trailershow = (id) =>{
   
   axios.get(`/movie/${id}/videos?api_key=${apikey}&languages=en-US`)
   .then(reponse=>{
      if (reponse.data.results.length !== 0){
        setTrailerid(reponse.data.results[0])
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The movie trailer is not present',
      });
        
      }
   })
   .catch(error=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The video is not present!',
      // You can customize the appearance of the alert further if needed
  });
   })
}


 

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }}

  return (
    <div className='row'>
        <h4>{props.title}</h4>
        <div className="posters">
        {
          rowdata.map((elements)=>(
            <div className='wrapper'>
            <img onClick={()=>trailershow(elements.id)}className={props.isSmall?"smallposter":"poster"}src={`${imageurl+elements.backdrop_path}`} alt="poster" />
            <p>{props.title === "Originals"?elements.name:elements.title}</p>
            </div>
          ))
        }
        </div>
      {showVideo && trailerid && (
                <div>
                    <YouTube videoId={trailerid.key} opts={opts} /> 
                    <button className="close"onClick={closeVideo}>Close Video</button> 
                </div>
            )}
            
            {!showVideo && trailerid && (
            <div>
            <button className='playbutton' onClick={() => setShowVideo(true)}>Play Video</button> 
            </div>
          )}

        
    </div>
  )
}

export default Posters
