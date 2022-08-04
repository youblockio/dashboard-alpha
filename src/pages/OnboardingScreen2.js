import React from 'react'
import globe from "../assets/Group 83.png"
import "../style/OnboardingScreen2.css"
import { useNavigate } from "react-router-dom";

const OnboardingScreen2 = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome1-div">
      <div className="frame-div38">
        <div className="frame-div39">
          <div className="welcome-div1">WELCOME</div>
          <img
             className="masternatureblue-globe-icon1"
             alt=""
             src={globe}
           />
        </div>
        <div className="frame-div40">
          <div className="lorem-ipsum-dolor-sit-amet-co2">
             <p className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et morbi id tortor sit. Pharetra posuere euismod cras egestas suscipit leo. `}</p>
             <p className="lorem-ipsum-dolor2">&nbsp;</p>
             <p className="lorem-ipsum-dolor2">
               Dolor nibh a, congue turpis. Eget congue fusce sagittis tellus.
               Sit vitae ornare vulputate eu sed diam fermentum felis, tincidunt.
             </p>
             <p className="lorem-ipsum-dolor2">&nbsp;</p>
             <p className="lorem-ipsum-dolor2">
               In enim, massa commodo aliquam aliquet. In ac, nisi eu nulla
               commodo amet, habitant. Pharetra, sed ut diam fermentum ultricies
               tempor nec platea vitae.
             </p>
           </div>
           <button className="frame-button5">
             <button className="frame-button6" onClick={(e) => {e.preventDefault(); navigate("/welcome2");}}>
               <div className="next-div6">Next</div>
             </button>
             <button className="frame-button7">
               {/* <img className="ellipse-icon3" alt="" src="ellipse-14.svg" />
               <img className="ellipse-icon3" alt="" src="ellipse-16.svg" />
               <img className="ellipse-icon3" alt="" src="ellipse-16.svg" /> */}
             </button>
           </button>
         </div>
      </div>
    </div>
  )
}

export default OnboardingScreen2