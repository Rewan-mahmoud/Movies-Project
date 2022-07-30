
import React, { useContext } from 'react'
import {ApiContext} from "../context/Store"

export default function Movies() {
  
  let {people} = useContext(ApiContext)
  return (
  
<>
<div className="container mt-5">
  <div className="row">
    {people.slice(3,100).map((person)=>(
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
