import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from 'react';
import img from "../images/gambar.png"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { startQuestion, resetAnswer } from '../redux/Question';
import { useSelector } from 'react-redux';

export default function Home(){
    const [ currentUser, setCurrentUser ] = useState('')
    const {token} = useSelector((state) => state.login)
    console.log(token);

    const navigate = useNavigate()
    useEffect(()=>{
        const verifyToken = async(token)=>{
            try {
                const res = await axios.get('https://nawar-api.herokuapp.com/api/v1/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setCurrentUser(res.data.data.name)
                console.log(res.data);
            } catch (error) {
                console.log(error);
                alert("sesi login habis")
                navigate('/login')
            }
        }

        if(token){
            verifyToken(token)
        }else{
            alert("silahkan login terlebih dahulu")
        }
        
        dispatch(resetAnswer())
    },[])

    const dispatch = useDispatch()

    const startHandler = () => {
        dispatch(startQuestion())
        navigate("/question")
        console.log("test");
    }
    console.log(currentUser);

    return(
        <>
            <Navbar currentUser={currentUser}/>
            <div className="jumbotron d-flex mt-5 justify-content-center">
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <div className="d-flex flex-column m-0">
                        <h2 className='text-center'>Test your understanding</h2>
                        <button className='btn btn-primary' onClick={startHandler}> Start </button>
                    </div>
                </div>
                <div className='col-6 align-items-end d-flex align-items-center d-none d-lg-block'>
                    <img src={img} alt="" />
                </div>
            </div>

            <footer className='d-flex justify-content-center mt-5'>
                <p>© Ruben E.W. 2022 All rights reserved</p>
            </footer>
        </>
    )
}