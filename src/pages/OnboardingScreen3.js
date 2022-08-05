import React from 'react'
import "../style/OnboardingScreen3.css"
import { useNavigate } from "react-router-dom";

const OnboardingScreen3 = () => {
  const navigate = useNavigate();
  return (
    <div className="letsbegin1-div">
      <div className="frame-div30">
        <div className="frame-div31">
          <div className="lets-begin-div">LETS BEGIN</div>
        </div>
        <div className="frame-div32">
          <div className="lorem-ipsum-dolor-sit-amet-co">
            <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et morbi id tortor sit. Pharetra posuere euismod cras egestas suscipit leo. `}</p>
            <p className="blank-line-p">&nbsp;</p>
          </div>
          <div className="frame-div33">
            <button className="frame-button2" onClick={(e) => {e.preventDefault(); navigate("/registeration");}}>
              <div className="next-div4">Next</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default OnboardingScreen3