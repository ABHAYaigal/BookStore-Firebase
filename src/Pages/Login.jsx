import React, { useState } from 'react'
import '../styles/style.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from "react-google-button"
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";




const Login = () => {

    const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn,googleSignIn } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
 
 
  return (
    
    
    
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage bg-secondary  loginForm backgroundImage'>
        {/* <div className='p-3 rounded w-25 border loginForm backgroundImage'></div> */}
        
        
        
        <div className='p-3 rounded w-25 border'>
            <div className='text-warning'>
                {/* {error && error} */}
            </div>
            <h2 className="text-white">Login Page</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>

                {/* <form> */}
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Enter Email' 
                    style={{ width: '100%', height: '50px', fontSize: '16px' }}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Enter Password' 
                    style={{ width: '100%', height: '50px', fontSize: '16px' }}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                

                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                {/* <Link to="/phonesignup">
                <div class="d-grid gap-5">
                    <button class="btn btn-primary" type="button"> Sign in with Phone</button>
                </div>
                </Link> */}
               
                
                <Link to="/">
                <div className="d-grid gap-2">
                        <GoogleButton style={{ width: '100%', height: '50px', fontSize: '16px' }} onClick={handleGoogleSignIn} />
                </div>
                </Link>

                <div className="p-4 box mt-3 text-center text-white">
                Don't have an account? <Link to="/signup"><div className="text-white">Sign up</div></Link>
                </div>

                {/* <div className='mb-1'> 
                    <input type="checkbox" name="tick" id="tick" className='me-2'/>
                    <label htmlFor="password" className="text-white" >You are Agree with terms & conditions</label>
                </div> */}
            </form>
        </div>
    </div>
  )
}

export default Login