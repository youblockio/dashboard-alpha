import React from 'react'
import "../style/Verify.css"
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  return (
    <div className="verify-div2">
    <form className="frame-form">
      <div className="frame-div21">
        <div className="verify-div3">Verify</div>
      </div>
      <div className="please-enter-the-verification">
        Please enter the verification code to proceed
      </div>
      <input className="rectangle-input" type="text" required />
      <div className="frame-div22" onClick={(e) => {e.preventDefault(); navigate("/success");}}>
        <div className="next-div2">Next</div>
      </div>
    </form>
  </div>
  )
}

export default Verify



