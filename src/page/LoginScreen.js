import React,{useState,useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/LoginScreen.css"
import googleButton from "../assets/GButton.png"
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';




const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, googleSignIn, user, } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await googleSignIn();
      
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/dashboard');
    }
  }, [user]);


  return (
    <div className="login1-div">
    <ToastContainer />
      <form onSubmit={handleSubmit} className="frame-div508">
        <div className="login-div">LOGIN</div>
        <div className="please-enter-your-login-detail">
          Please Enter Your Login Details
        </div>
        <input
          className="frame-input108"
          type="email"
          placeholder="Username/Email Id"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="frame-input108" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <div className="frame-div608">
          <div className="line-div" />
          <div className="login-div">SOCIAL LOGIN</div>
          <img className="image-53-icon" alt="" src={googleButton} onClick={handleGoogleSignIn} />
        </div>
        <button className="frame-button108" type="submit">
          <div className="next-div108">Next</div>
        </button>
        <button className="create-an-account" onClick={(e) => {e.preventDefault(); navigate("/register");}} >
          Create An Account
        </button>
      </form>
    </div>
  )
}

export default LoginScreen;



