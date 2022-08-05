import React,{useState} from 'react'
import "../style/Login.css"
import googleSignInButton from "../assets/image 50.png"
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, googleSignIn, user, } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/home')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
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

  return (
    <div className="login-div">
      
      <form onSubmit={handleSubmit} className="frame-div">
        <div className="login-div1">LOGIN</div>
        <div className="pleas-enter-your-login-details">
          Pleas Enter your Login Details
        </div>
        <input className="frame-input3" type="email" placeholder="Username/Email" onChange={(e) => setEmail(e.target.value)}/>
        <input className="frame-input3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <div className="frame-div1">
          <div className="line-div" />
          <div className="social-login-div">SOCIAL LOGIN</div>
          <img className="image-53-icon" alt="" src={googleSignInButton} onClick={handleGoogleSignIn} />
        </div>
        <button type="submit" className="frame-div2">
        
          <div className="next-div">Next</div>
        
        </button>
        <div className="create-an-account" onClick={(e) => {e.preventDefault(); navigate("/registeration")}}>Create An Account</div>
        </form>
        
      
    </div>
  )
}

export default Login


