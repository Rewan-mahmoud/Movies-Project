
import React, { useContext } from 'react'
import {ApiContext} from "../context/Store"

 export default function Home() {

let{movies,Tv,people} = useContext(ApiContext);

  return (
    <>
    <div className="container mt-5">
  <div className="row">
    <div className="col-md-4 ">
    <hr className='w-25'/>
      <h3 className='mt-2'>trending <br/>movies <br/>to watch now</h3>
      <p>most watched movies by days</p>
      <hr className='w-75'/>
    </div>
    {movies.slice(0,10).map((movie)=>(
 <div className="col-md-2 position-relative" key={movies.id}>
  <div className="item">
 <img src={ "https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="w-100" alt="" />
 <h6 className='mt-2'>{movie.title}</h6>
 <span className=' bg-info p-2 position-absolute top-0 end-0'>{Math.round(movie.vote_average)}</span>
 </div>

</div>
   ))}
   
  </div>
  </div>


    <div className="container mt-5">
  <div className="row">

    <div className="col-md-4  ">
    <hr className='w-25'/>
      <h3 className='mt-2'>trending <br/>Tv <br/>to watch now</h3>
      <p>most watched movies by days</p>
      <hr className='w-70'/>
    </div>
    {Tv.slice(0,10).map((show)=>(
 <div className="col-md-2 position-relative" key={Tv.id}>
  <div className="item">
 <img src={ "https://image.tmdb.org/t/p/w500/" + show.poster_path} className="w-100" alt="" />
 <h6 className='mt-2'>{show.name}</h6>
 <span className=' bg-info p-2 position-absolute top-0 end-0'>{Math.round(show.vote_average)}</span>
 </div>

</div>
   ))}
   
  </div>
  </div>
    <div className="container mt-5">
  <div className="row">
    <div className="col-md-4  ">
    <hr className='w-25'/>
      <h3 className='mt-2'>trending People <br/>to watch now</h3>
      <p>most watched movies by days</p>
      <hr className='w-75'/>
    </div>
    {people.slice(0,10).map((person)=>(
 <div className="col-md-2 position-relative" key={people.id}>
  <div className="item">
 <img src={"https://image.tmdb.org/t/p/w500/" + person.profile_path} className="w-100" alt="" />
 <h6 className='mt-2'>{person.name}</h6>

 </div>

</div>
   ))}
   
  </div>
  </div>


  </>
  )
  }






// https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44