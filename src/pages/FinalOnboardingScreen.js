import React from 'react'
import "../style/FinalOnboarding.css"
import { useNavigate } from "react-router-dom";

const FinalOnboardingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="finalonboarding-div">
      <div className="frame-div3">
        <div className="frame-div4">
          <div className="frame-div5">
            <div className="congragulations-div">Congragulations</div>
          </div>
        </div>
        <div className="youre-all-done-welcome-to-th">
          <p className="youre-all-done">You’re all done!</p>
          <p className="welcome-to-the">Welcome to the youoblock family</p>
        </div>
        <button className="frame-button" onClick={(e) => {e.preventDefault(); navigate("/home");}}>
          <div className="begin-div">Begin</div>
        </button>
      </div>
    </div>
  )
}

export default FinalOnboardingScreen

