import React from 'react'
import "../style/Login.css"

const Login = () => {
  return (
    <div className="login-div">
      <div className="frame-div">
        <div className="login-div1">LOGIN</div>
        <div className="pleas-enter-your-login-details">
          Pleas Enter your Login Details
        </div>
        <input
          className="frame-input"
          type="text"
          placeholder="Username/Email Id"
        />
        <input className="frame-input" type="text" placeholder="Password" />
        <div className="frame-div1">
          <div className="line-div" />
          <div className="social-login-div">SOCIAL LOGIN</div>
          <img className="image-53-icon" alt="" src="image-53@2x.png" />
        </div>
        <div className="frame-div2">
          <div className="next-div">Next</div>
        </div>
        <div className="create-an-account">Create An Account</div>
      </div>
    </div>
  )
}

export default Login


