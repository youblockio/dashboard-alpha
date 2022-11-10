import React,{useState, useEffect} from 'react'
import "../style/RegisterScreen.css"
import googleButton from "../assets/GButton.png"
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const {createUser, googleSignIn, user,} = UserAuth();

  let handleSubmit = async (e) => {
    e.preventDefault();
    
    if(password !== rePassword){
      return setError("Password do not match!")
    }
    try {
      setError('');
      await createUser(email, password);
      navigate('/dashboard');
      
    }catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setError('');
  //     await googleSignIn();
      
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate('/setup');
  //   }
  // }, []);


  return (
    <div className="registration1-div">
      
      <div className="frame-div555">
        <div className="frame-div666">
          <div className="social-login-div">Social Login</div>
          <div className="frame-div777">
            <img className="image-58-icon" alt="" src={googleButton}  />
          </div>
          <p className="frame-p">
            <div className="or-div">OR</div>
          </p>
          <button className="frame-button101" onClick={(e) => {e.preventDefault(); navigate("/login");}}>
            <b className="continue-to-login">Continue to Login</b>
          </button>
        </div>
      </div>
      <div className="frame-div888">
      <form onSubmit={handleSubmit}>
        <div className="frame-div90">
          <div className="registration-div">REGISTRATION</div>
          <div className="frame-div78">
            <div className="emailusername-has-already-bee">
              Email/UserName has already been used.
            </div>
            <div className="please-enter-your-details">
              Please Enter your details
            </div>
            <input className="frame-input" type="text" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input className="frame-input" type="text" placeholder="Name" />
            <input className="frame-input" type="text" placeholder="UserName" />
          </div>
          <div className="frame-div78">
            <div className="emailusername-has-already-bee">
              Password must contain more than 8 characters
            </div>
            <div className="password-must-contain-characte">
              <p className="password-must-contain-characte1">
                <span className="password-must-contain">
                  Password must contain characters in range
                </span>
              </p>
              <p className="a-za-z-p">
                <span className="password-must-contain">(0-9, A-Z,</span>
                <span className="a-z-span1">{`a-z, !,@,#,$,%,^,&,*,(,),{,},<,>)`}</span>
              </p>
            </div>
            <div className="please-enter-your-details">
              Please create a strong password
            </div>
            <input
              className="frame-input"
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="frame-input"
              type="text"
              placeholder="Re-Enter Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="frame-button2" type="submit">
          <div className="next-div107">Next</div>
        </button>
        </form>
        <div className="invisible-div">
        <div className="registration-div5">Social Login</div>
            <div className="frame-div11">
                <img className="image-58-icon1" alt="" src={googleButton}  />
            </div>
            <div className="p-div1">
            <p className="frame-p1">
                <div className="or-div1">OR</div>
             </p>
             </div>
             <button className="frame-button3" onClick={(e) => {e.preventDefault(); navigate("/login");}}>
            <b className="continue-to-login1">Continue to Login</b>
          </button>
          </div>
      </div>
    </div>
  )
}

export default RegisterScreen;


