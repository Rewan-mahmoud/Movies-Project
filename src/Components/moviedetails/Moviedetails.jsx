import axios from 'axios';
import React from 'react'
import {useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Moviedetails() {
    const [movieDetails,setMovieDetails]=useState({})
    let params = useParams();
   async function getDetails({movieid}) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        setMovieDetails(data)
        console.log(data);
    }
    useEffect(()=>
    {
    getDetails(params)
    },[])
  return (
    <div>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="item">
                        <img className='w-100' src={ "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path}   alt="" />
                    </div>
                    </div>
                    <div className="col-md-8">
                        <h2>{movieDetails.original_title}</h2>
                        <p>{movieDetails.tagline}.</p>
                 <div className="d-flex">
                 {movieDetails&&movieDetails.genres?movieDetails.genres.map((genre)=> <p className=' bg-info p-1 mx-2 rounded-1'>{genre.name}</p> ) :""}
                 </div>
                 <div className="info mt-4">
                 <p>vote : {movieDetails.vote_average}</p>
                 <p>vote count : {movieDetails.vote_count}</p>
                 <p>popularity : {movieDetails.popularity}</p>
                 <p>release date : {movieDetails.release_date}</p>
                 </div>
                 <p className='text-muted fs-5'>{movieDetails.overview}</p>
                    </div>
                
            </div>
        </div>
    </div>
  )
}
