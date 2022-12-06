import React from 'react'
import "../style/OnboardingScreen.css"
import globe from "../assets/Group 83.png"
import { useNavigate } from "react-router-dom";

const OnboardingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="onboarding1-div">
      
      <div className="frame-div">
        <div className="frame-div1">
          <div className="welcome-div">WELCOME</div>
          <img
            className="masternatureblue-globe-icon"
            alt=""
            src={globe}
          />
        </div>
        <div className="frame-div2">
          <div className="lorem-ipsum-dolor-sit-amet-co">
            <p className="lorem-ipsum-dolor">{`Go Green and Mine for Future `}</p>
            <p className="lorem-ipsum-dolor">&nbsp;</p>
            <p className="lorem-ipsum-dolor">
            We offer a unique hybrid mining solution, allowing users to 
            generate passive income every month in the simplest possible way.
            </p>
            <p className="lorem-ipsum-dolor">&nbsp;</p>
            <p className="lorem-ipsum-dolor">
            Our plug and mine Hybrid Service provides 
            you with cryptocurrency rewards—and 
            is powered by solar energy.
            </p>
          </div>
          <div className="frame-div3">
            <button className="frame-button" onClick={(e) => {e.preventDefault(); navigate("/onboarding2");}} >
              <div className="next-div">Next</div>
            </button>
            <div className="frame-div4">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen;



