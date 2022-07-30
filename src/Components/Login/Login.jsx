import React, { useState } from 'react';
import axios from "axios";
import Joi from "joi"
import {useNavigate } from "react-router-dom"

export default function Login({checkLogin}) {
  let navigate =useNavigate();
  const [errorList , setErrorList]=useState([])
const [error,setError] =useState("");
const[callApi,setCallApi]=useState(false)
  const [user,setUser]=useState({
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
let validationResult = validationLoginForm();
console.log(validationResult);
if (validationResult.error){
  setErrorList(validationResult.error.details)
  setCallApi(false)
}
else{
let {data} =await axios.post("https://route-egypt-api.herokuapp.com/signin",user)
console.log(data);
if (data.message === "success"){
  setCallApi(true)
 localStorage.setItem("userToken",data.token)
 checkLogin()
  navigate("/home")
}
else {
  setError(data.message)
  setCallApi(false)
}
}

function validationLoginForm (){
  let scheme = Joi.object({
  
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  })
return scheme.validate(user , {abortEarly:false})
}
  }

  return (
    <>
<div className="container mt-5 w-75 mx-auto">
  {errorList.map((error , i)=>i===1?<div className='alert alert-danger' key={i}>password invalid</div>:<div className='alert alert-danger'>{error.message}</div>)}
  {error.length>0? <div  className='alert alert-danger' >{error}</div>: ""}

  <form onSubmit={formSubmit} action="">
<h3 className='mb-3'>Login Form</h3>
<label htmlFor="">email:</label>
<input onChange={getUserDate} className='form-control mb-3' id='email' name='email' type="text" />
<label htmlFor="">Password:</label>
<input  onChange={getUserDate} className='form-control mb-3' id='password' type="password" name='password'/>
<div className="register d-flex justify-content-between mt-5">
  <p>dont have accout? <span> <a >register</a></span></p>
  <button type='submit' className='btn btn-primary '>
    {callApi? <i className='fa fa-spin fa-spinner'></i>:""}
    Login</button></div>

</form>
</div>


    </>
  )
}
