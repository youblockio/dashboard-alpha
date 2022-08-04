import React from 'react'
import "../style/Register.css"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="registration-div">
      <div className="frame-div23">
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
              required
            />
            <input
              className="frame-input3"
              type="password"
              placeholder="Re-Enter Password"
              required
            />
          </div>
        </div>
        <div className="frame-div27" onClick={(e) => {e.preventDefault(); navigate("/verify");}}>
          <div className="next-div3">Next</div>
        </div>
        <div className="social-login-div1">Social Login</div>
        <img className="image-53-icon1" alt="" src="image-531@2x.png" />
        <div className="frame-div28">
          <div className="or-div">OR</div>
        </div>
        <div className="frame-div29">
          <b className="continue-to-login">Continue to Login</b>
        </div>
      </div>
    </div>
  )
}

export default Register



