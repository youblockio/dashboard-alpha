import React from 'react'
import "../style/OnboardingScreen3.css";
import { useNavigate } from "react-router-dom";

const OnboardingScreen3 = () => {
  const navigate = useNavigate();
  return (
    <div className="onboarding3-div">
      <div className="frame-div100">
        <div className="frame-div6">
          <div className="lets-begin-div">LETS BEGIN</div>
        </div>
        <div className="frame-div7">
          <div className="lorem-ipsum-dolor-sit-amet-co1">
            <p className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et morbi id tortor sit. Pharetra posuere euismod cras egestas suscipit leo. `}</p>
            <p className="blank-line-p2">&nbsp;</p>
          </div>
          <div className="frame-div99">
            <button className="frame-button9" onClick={(e) => {e.preventDefault(); navigate("/login");}}>
              <div className="next-div1">NEXT</div>
            </button>
          </div>
          {/* <div className="frame-div8" >
            <button className="frame-button1">
              <div className="next-div1">Next</div>
            </button>
            
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen3;


