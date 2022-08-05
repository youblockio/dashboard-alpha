import React,{useState, useEffect} from "react"
import "../style/Register.css"
import { useNavigate } from "react-router-dom";
import googleButton from "../assets/image 50.png"
import { UserAuth } from '../context/AuthContext';

const Register = () => {
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
      navigate('/setup');
      
    }catch (e) {
      setError(e.message);
      console.log(e.message);
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
      navigate('/setup');
    }
  }, [user,navigate]);


  return (
    <div className="registration-div">
      
        <form onSubmit={handleSubmit} className="frame-div23">
        <div className="frame-div24">
          <div className="registration-div1">REGISTRATION</div>
          
          <div className="frame-div25">
            <div className="please-enter-your-details">
              Please Enter your details
            </div>
            
            <input
              className="frame-input3"
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input className="frame-input3" type="text" placeholder="Name" />
            <input
              className="frame-input3"
              type="text"
              placeholder="UserName"
            />
          </div>
          <div className="frame-div26">
            <div className="password-must-contain-more-tha">
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
            <div className="please-create-a-strong-passwor">
              Please create a strong password
            </div>
            <input
              className="frame-input3"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="frame-input3"
              type="password"
              placeholder="Re-Enter Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="frame-div27">
        
          <div className="next-div3">Next</div>
        
        </button>
        
        <div className="social-login-div1">Social Login</div>
        <img className="image-53-icon1" alt="" src={googleButton} onClick=
          {handleGoogleSignIn}
        />
        <div className="frame-div28">
          <div className="or-div">OR</div>
        </div>
        <div className="frame-div29" onClick={(e) => { e.preventDefault(); navigate("/login");}}>
          <b className="continue-to-login">Continue to Login</b>
        </div>
        </form>
      
    </div>
  )
}

export default Register



