import React, { useState } from 'react';
import axios from "axios";
import Joi from "joi"
import {useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
export default function Register() {
  let navigate =useNavigate();
  const [errorList , setErrorList]=useState([])
const [error , setError] =useState("");
const [callApi,setCallApi]=useState(false)

  const [user, setUser]=useState({
    first_name:"",
    last_name:"",
    age:0,
    email:"",
    password:""

  });

    function getUserDate(e){
let myUser = {...user};
myUser[e.target.name]=e.target.value;
setUser(myUser)
// console.log(myUser);

  }
 async function formSubmit(e){
e.preventDefault();
setCallApi(true)
let validationResult = validationRegisterForm();
console.log(validationResult);
if (validationResult.error){
  setErrorList(validationResult.error.details)

}
else{
 
let {data} =await axios.post("https://route-egypt-api.herokuapp.com/signup",user)
console.log(data);
if (data.message === "success"){
  setCallApi(true)
  navigate("/login")
}
else {
  setError(data.message)
  setCallApi(false)
}
}

function validationRegisterForm (){
  let scheme = Joi.object({
    first_name:Joi.string().alphanum().min(3).max(10) .required(),
    last_name:Joi.string().alphanum().min(3).max(10) .required(),
    age:Joi.number().integer().min(18).max(60),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  })
return scheme.validate(user , {abortEarly:false})
}
  }

  return (
    <>
<div className="container mt-5 w-75 mx-auto">
  {errorList.map((error)=><div className='alert alert-danger'>{error.message}</div>)}
  {error.length>0? <div className='alert alert-danger'>{error}</div>: ""}
  <form onSubmit={formSubmit} action="">
<h3 className='mb-3'>Registeration Form</h3>
<label htmlFor="">firstName:</label>
<input onChange={getUserDate} className='form-control mb-3'  id='first_name'  name='first_name' type="text" />
<label htmlFor="">LastName:</label>
<input onChange={getUserDate} className='form-control mb-3'id='last_name'  name='last_name' type="text" />
<label htmlFor="">Age:</label>
<input  onChange={getUserDate} className='form-control mb-3' id='age' name='age' type="text" />
<label htmlFor="">email:</label>
<input onChange={getUserDate} className='form-control mb-3' id='email' name='email' type="text" />
<label htmlFor="">Password:</label>
<input  onChange={getUserDate} className='form-control mb-3' id='password' type="password" name='password'/>
<button type='submit' className='btn btn-primary d-flex ms-auto mt-5'>
{callApi? <i className=' align-self-center fa fa-spinner fa-spin' aria-hidden="true" ></i>:""}

  register</button>

</form>
</div>


    </>
  )
}
