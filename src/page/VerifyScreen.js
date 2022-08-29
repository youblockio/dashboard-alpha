import React from 'react'
import "../style/VerifyScreen.css"
import { useNavigate } from "react-router-dom";

const VerifyScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="registration2-div">
      <div className="frame-div502">
        <div className="frame-div602">
          <div className="verify-div01">Verify</div>
        </div>
        <div className="group-div01">
          <div className="please-enter-the-verification">
            Please enter the verification code to proceed
          </div>
          <input className="rectangle-input01" type="text" />
        </div>
        <div className="button-fix">
        <button className="frame-button102" onClick={(e) => {e.preventDefault(); navigate("/success");}}>
          <div className="next-div101">Next</div>
        </button>
        </div>
      </div>
    </div>
  )
}

export default VerifyScreen;



