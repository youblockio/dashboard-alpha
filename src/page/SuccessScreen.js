import React from 'react'
import "../style/SuccessScreen.css"
import { useNavigate } from "react-router-dom";

const SuccessScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="registration3-div">
      <div className="frame-div503">
        <div className="frame-div603">
          <div className="success-div">SUCCESS!</div>
        </div>
        <div className="please-click-next-to-set-up-th">
          <p className="please-click-next">Please click Next</p>
          <p className="to-set-up">to set up the system</p>
        </div>
        <button className="frame-button103" onClick={(e) => {e.preventDefault(); navigate("/dashboard");}}>
          <div className="next-div103">Next</div>
        </button>
      </div>
    </div>
  )
}

export default SuccessScreen;


