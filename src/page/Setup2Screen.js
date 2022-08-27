import React from 'react'
import "../style/Setup2Screen.css"
import { useNavigate } from "react-router-dom";

const Setup2Screen = () => {
  const navigate = useNavigate();
  return (
    <div className="setup2-div">
      
        <div className="frame-div506">
          <div className="congragulations-div">CONGRAGULATIONS</div>
          <div className="frame-div606">
            <div className="youre-all-done-welcome-to-th">
              <p className="youre-all-done">You’re all done!</p>
              <p className="welcome-to-the">Welcome to the Youblock Family</p>
            </div>
          </div>
          <button className="frame-button106" onClick={(e) => {e.preventDefault(); navigate("/dashboard");}}>
            <div className="begin-journey-div">Begin Journey</div>
          </button>
        </div>
      
    </div>
  )
}

export default Setup2Screen;


