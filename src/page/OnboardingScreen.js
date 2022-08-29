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
            <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et morbi id tortor sit. Pharetra posuere euismod cras egestas suscipit leo. `}</p>
            <p className="lorem-ipsum-dolor">&nbsp;</p>
            <p className="lorem-ipsum-dolor">
              Dolor nibh a, congue turpis. Eget congue fusce sagittis tellus.
              Sit vitae ornare vulputate eu sed diam fermentum felis, tincidunt.
            </p>
            <p className="lorem-ipsum-dolor">&nbsp;</p>
            <p className="lorem-ipsum-dolor">
              In enim, massa commodo aliquam aliquet. In ac, nisi eu nulla
              commodo amet, habitant. Pharetra, sed ut diam fermentum ultricies
              tempor nec platea vitae.
            </p>
          </div>
          <div className="frame-div3">
            <button className="frame-button" onClick={(e) => {e.preventDefault(); navigate("/onboarding");}} >
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



