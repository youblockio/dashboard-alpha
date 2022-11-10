import React from 'react'
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import backButton from "../assets/backButton.png";
import { useNavigate } from "react-router-dom";
import "../style/setWallet3.css";

const SetwalletAddress3 = () => {
  const navigate = useNavigate();
  return (
    <div className="SetwalletAddress3-div">
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
        <div className="SetWalletAddress3-div-main">
          <div className="SetWalletAddress3-text">PROFILE SETTING</div>
          <div className="SetWalletAddress3-container">
            <div className="SetWalletAddress3-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/choosewallet");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="SetWalletAddress3-container-back-div-text">SET WALLET ADDRESS</div>
            <div className="SetWalletAddress3-div-main-input-div">
              <div className="SetWalletAddress3-div-main-input-text">Wallet Address</div>
              <input className="SetWalletAddress3-div-main-input" />
            </div>
            <div className="SetWalletAddress3-div-main-input-div2">
              <div className="SetWalletAddress3-div-main-input-text">Name</div>
              <input className="SetWalletAddress3-div-main-input" />
            </div>
            <div className="SetWalletAddress3-div-main-button">
              <button className="SetWalletAddress3-button" onClick={(e) => {e.preventDefault(); navigate("/confirmWallet");}}>Connect Wallet</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SetwalletAddress3