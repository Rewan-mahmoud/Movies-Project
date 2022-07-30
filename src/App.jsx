import Navbar from './Components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Tvshow from "./Components/Tvshow/Tvshow";
import People from "./Components/People/People";
import About from "./Components/About/About";
import Networks from "./Components/Networks/Networks";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import Register from './Components/Register/Register';
import './App.css';
import Notfoundpage from './Components/NotFoundPage/Notfoundpage';
import Moviedetails from './Components/moviedetails/Moviedetails';
import { useEffect, useState } from 'react';
import ProtectedRouting , {NonProtectedRouting} from './Components/protectedrouting/ProtectedRouting';
import ApiContextProvider from "./Components/context/Store"

function App() {
  const[islogin,setislogin]=useState(false)

  function checkLogin (){
    let token = localStorage.getItem("userToken")
    if(token){
 
      setislogin(true) 
    }
    else{
      setislogin(false)
    }
   
  }
  useEffect(()=>{
    checkLogin()
  },[])

  return (
    <>
  <ApiContextProvider>


    <Navbar islogin={islogin} checkLogin={checkLogin} />
    <Routes>
      <Route path='*' element={ <Notfoundpage/>}/>
      <Route path='/' element={<NonProtectedRouting><Login/></NonProtectedRouting>}/>
      <Route
       path='home' 
       element={
      <ProtectedRouting>
        {""}
        <Home/>
        </ProtectedRouting>}/>
      <Route path='movie' element={<ProtectedRouting><Movies/></ProtectedRouting> }/>
      <Route path='tvshow' element={ <ProtectedRouting><Tvshow/></ProtectedRouting>}/>
      <Route path='people' element={ <ProtectedRouting><People/></ProtectedRouting>}/>
      <Route path='about' element={ <ProtectedRouting><About/></ProtectedRouting>}/>
      <Route path='networks' element={ <ProtectedRouting><Networks/></ProtectedRouting>}/>
      <Route path='login' element={ <NonProtectedRouting><Login checkLogin={checkLogin} /></NonProtectedRouting> }/>
      <Route path='register' element={<NonProtectedRouting> <Register/></NonProtectedRouting>}/>
      <Route path='logout' element={<Logout/>}/>
      <Route path='moviedetails/:movieid' element={<ProtectedRouting><Moviedetails/></ProtectedRouting> }/>
      


    </Routes>
 
    </ApiContextProvider>
    </>
  );
}

export default App;
