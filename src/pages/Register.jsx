import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const [ inputValue, setInputValue ] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onchageHandler = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value,
            [e.target.email] : e.target.value,
            [e.target.password] : e.target.value
        })
    }

    const navigate = useNavigate()

    const regis = async(e) => {
        e.preventDefault()
        const user = await axios.post("https://nawar-api.herokuapp.com/api/v1/users/register", {
            name: inputValue.name,
            email: inputValue.email,
            password: inputValue.password
        })
        setInputValue(user.data)
        navigate("/login")
    }
    console.log(inputValue)
    return(
        <div className="login d-flex justify-content-center align-items-center">
            <div className="login-form border rounded shadow p-3">
                <form onSubmit={regis}>
                    <div className="d-flex flex-column mt-3">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="email" name="name" className="border rounded p-1" onChange={onchageHandler} />
                    </div>
                    <div className="d-flex flex-column mt-3">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="email" name="email" className="border rounded p-1" onChange={onchageHandler} />
                    </div>
                    <div className="d-flex flex-column mt-3">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="password" name="password" className="border rounded p-1" onChange={onchageHandler} />
                    </div>
                    <div className="mt-3">
                            <p className="mb-0">Already have an account? <Link to={'/login'}>Login now!</Link></p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary mt-3">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}