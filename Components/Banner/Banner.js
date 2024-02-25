import React, { useEffect, useState } from 'react'
import "./Banner.css"
import {apiKey,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'


const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      setMovie(response.data.results[5])
     })
  })
  return (
    
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path :''})`}}
     className='Banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <h1 className='description'>{movie? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner