import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Components/Login.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
     e.preventDefault();

    const user = {
        email,
        password
    }
   console.log(user);      

     axios.post("https://reqres.in/api/login", user).then((res) => {
      console.log(res.data);
           if(res.data.token){
            navigate("/homepage");
           }
     }).catch((err) =>  {
      console.log(err);
      alert("Wrong Credentials")
     });
    
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login;