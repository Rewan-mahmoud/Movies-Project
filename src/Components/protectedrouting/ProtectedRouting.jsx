import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRouting({children}) {
    if (localStorage.getItem("userToken")){
        return children
    }
    else
    {
        return <Navigate to="/login"></Navigate>
    }

}
export  function NonProtectedRouting({children}) {
    if (localStorage.getItem("userToken")){
    <Navigate to="/home" ></Navigate>
    }
    else
    {
        return children
    }

}
