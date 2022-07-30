import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Movies() {

  const[movies,setMovie]=useState([]);
  async function getData(){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    setMovie(data.results)
 }
useEffect(()=>{
  getData();
},[])
  return (
  
<>
<div className="container mt-5">
  <div className="row">
    {movies.map((movie)=>(
 <div className="col-md-2 position-relative">
  <div className="item">
    <Link to={"/Moviedetails/"+movie.id}> <img src={ "https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="w-100" alt="" /></Link>

 <h6 className='mt-2'>{movie.title}</h6>
 <span className=' bg-info p-2 position-absolute top-0 end-0'>{Math.round(movie.vote_average)}</span>
 </div>

</div>

   ))}
   
  </div>
  </div>

</>


   
  )
}
