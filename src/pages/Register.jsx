import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate()
    let isRegistered = false
    const register = ()=>{
        if(isRegistered==true){
            navigate("/")
        }else{
            alert("password is incorrect")
        }
    }
  return (
    <div>
        <h1>Register Page</h1>
        <button onClick={register}>Click here to register</button>
    </div>
    
  )
}

export default Register