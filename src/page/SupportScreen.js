import React from 'react'
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/Vector.png";
import backButton from "../assets/backButton.png";
import { useNavigate } from "react-router-dom";
import "../style/support.css";

const SupportScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="SupportScreen-div">
        <div className='menu-div'>
           <div className="green-logo-div">
            <img src={greenLogo} alt='home' className="greenLogo" />
           </div> 
           <div className="home-logo-div" onClick={(e) => {e.preventDefault(); navigate("/dashboard");}}>
            <img src={home} alt='home' className="home" />
           </div>
           <div className="wallet-logo-div" onClick={(e) => {e.preventDefault(); navigate("/wallet");}}>
            <img src={walletlogo} alt='home' className="home" />
           </div>
           <div className="setting-logo-div" onClick={(e) => {e.preventDefault(); navigate("/settings");}}>
            <img src={settingIcon} alt='home' className="settingIcon" />
           </div>
        </div>
        <div className="SupportScreen-div-main">
          <div className="ManageDevice-div-main-text">PROFILE SETTING</div>
          <div className="SupportScreen-div-main-container">
            <div className="ManageDevice-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/settings");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="ManageDevice-container-back-div-text">SUPPORT</div>
            <div className="SupportScreen-div-main-content">
            If you are facing any problems please don’t hesitate to contact us on 
            this address. Phone Calls are servicable 24x7.
            </div>
            <div className="SupportScreen-div-main-address">ADDRESS</div>
            <div className="SupportScreen-div-main-address-value">Home, Grove Street,Queens, NY-109011</div>
            <div className="SupportScreen-div-main-contact">CONTACT NUMBER</div>
            <div className="SupportScreen-div-main-contact-value1">+12 5645 789 100</div>
            <div className="SupportScreen-div-main-contact-value2">+12 5645 789 101</div>
          </div>
        </div>
    </div>
  )
}

export default SupportScreen