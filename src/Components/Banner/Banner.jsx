import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../axios'
import {apikey,imageurl} from '../../constants/constants'

function Banner() {
  const [movie,setMovie] = useState()

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}&language=en-US`)

    .then(response=>{
    const randomIndex = Math.floor(Math.random() * response.data.results.length);

      setMovie(response.data.results[randomIndex])})
  },[])
  console.log(movie)
  return (
    <div className='banner-bg' style={{backgroundImage:`url(${movie?imageurl+movie.backdrop_path:""})`}}>
        <div className='details'>
            <h1 className='title'>{movie? movie.name:""}</h1>
            <div className="buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie?movie.overview:""}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner