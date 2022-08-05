import React from 'react'
import "../style/Success.css"
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="successpage-div">
      <div className="frame-div19">
        <h1 className="frame-h1">
          <div className="frame-div20">
            <div className="success-div">SUCCESS!</div>
          </div>
        </h1>
        <div className="please-click-next-to-set-up-th">
          <p className="please-click-next">Please click Next</p>
          <p className="to-set-up">to set up the system</p>
        </div>
        <button className="frame-button1" onClick={(e) => {e.preventDefault(); navigate("/setup");}}>
          <button className="next-button">Next</button>
        </button>
      </div>
    </div>
  )
}

export default Success


