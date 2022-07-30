import React from 'react'
import {Link, useNavigate} from "react-router-dom"

import style from "../navbar/navbar.module.css"
export default function Navbar({islogin,checkLogin}) {
  let navigate = useNavigate()
function logOut(){
  localStorage.removeItem("userToken")
  checkLogin();
  navigate("/login")
}
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark shadow-lg ">
  <div className="container-fluid ">
    <a className="navbar-brand fw-bold fs-4">Noxe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {islogin?<>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="movie">Movies</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white " to="tvshow">Tv show</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="people" >People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white" to="networks" >Networks</Link>
        </li> </>:""
       
       } 
      
       
      </ul>
      <form className="d-flex justify-content-between me-5">
        <input className="form-control me-3 " type="search" placeholder="Search" aria-label="Search"/>
    <div className="icon d-flex justify-content-center align-items-center">
        <i className="fa-brands fa-facebook ms-2 fs-5"></i>
        <i className="fa-brands fa-spotify ms-2 fs-5"></i>
        <i className="fa-brands fa-instagram ms-2 fs-5"></i>
        <i className="fa-brands fa-youtube ms-2 fs-5"></i>
        </div>
      </form>
      {!islogin?
          <> 
          <li className="nav-item list-unstyled text-decoration-none me-2">
          <Link className='text-decoration-none text-white' to="login">Login</Link>
        </li>
      <li className="nav-item list-unstyled text-decoration-none me-2">
          <Link className='text-decoration-none text-white' to="register">Register</Link>
        </li>
        </>:"" }

        {islogin? <li className="nav-item list-unstyled">
          <span onClick={()=>logOut()} className='text-decoration-none text-white me-4' to="logout">Logout</span>
        </li>:""}
       
    </div>
  </div>
</nav>
    </>
  )
}
