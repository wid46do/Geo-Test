import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLogin } from "../redux/Login/thunk";

export default function Login(){
    const dispatch = useDispatch()

    const [ formValue, setFormValue ] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()

    const onchageHandler = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value
        })
    }
    console.log(formValue);

    const login = async(e)=>{
        e.preventDefault()
        const res = await dispatch(userLogin({data: formValue}))
        res.payload.success && navigate('/')
    }
    
    return(
        <div className="login d-flex justify-content-center align-items-center">
            <div className="login-form border rounded shadow p-3">
                <form onSubmit={login} >
                    <div className="d-flex flex-column mt-3">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="email" name="email" onChange={onchageHandler} className="border rounded p-1" />
                    </div>
                    <div className="d-flex flex-column mt-3">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="password" name="password" onChange={onchageHandler} className="border rounded p-1" />
                    </div>
                    <div className="mt-3">
                        <p className="mb-0">Dont have an account? <Link to={'/register'}>Register now!</Link></p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary mt-3">login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};