import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Logout(){
    useEffect(()=>{
        localStorage.removeItem('token')
    })
    return(
        <Navigate to="/Login"/>
    )
}
