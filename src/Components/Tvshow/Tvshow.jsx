
import React, { useContext } from 'react'
import {ApiContext} from "../context/Store"

export default function Movies() {
  let {Tv} = useContext(ApiContext)
  return (
  
<>
<div className="container mt-5">
  <div className="row">
    {Tv.map((show)=>(
 <div className="col-md-2 position-relative">
  <div className="item">
 <img src={ "https://image.tmdb.org/t/p/w500/" + show.poster_path} className="w-100" alt="" />
 <h6 className='mt-2'>{show.title}</h6>
 <span className=' bg-info p-2 position-absolute top-0 end-0'>{Math.round(show.vote_average)}</span>
 </div>

</div>
   ))}
   
  </div>
  </div> 
</>


   
  )
}
