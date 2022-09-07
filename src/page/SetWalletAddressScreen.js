import React from 'react'
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import backButton from "../assets/backButton.png";
import largeWalletIcon from "../assets/walletIcon.png";
import { useNavigate } from "react-router-dom";
import "../style/SetWalletAddressScreen.css";

const SetWalletAddressScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="SetWalletAddressScreen-div">
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
        <div className="walletAddress-main-div">
          <div className="walletAddress-text">PROFILE SETTING</div>
          <div className="walletAddress-container">
            <div className="walletAddress-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/settings");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="walletAddress-container-back-div-text">SET WALLET ADDRESS</div>
            <div className="walletAddress-main-icon-div">
              <div className="walletAddress-icon-div" onClick={(e) => {e.preventDefault(); navigate("/choosewallet");}}>
                <img src={largeWalletIcon} alt='walletIcon' className="walletAddress-icon-div-image" />
              </div>
            </div>
            <div className="walletAddress-container-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia bibendum leo amet aliquet ultrices phasellus lacus. Nec lectus nisl, dictum risus ut amet. Diam tristique sed gravida eu, nisi, sagittis, semper mattis. Tellus cras est volutpat cras.</div>
            <div className="walletAddress-container-text-title">Please Click on the Icon to Connect Wallet.</div>
          </div>
        </div>
    </div>
  )
}

export default SetWalletAddressScreen