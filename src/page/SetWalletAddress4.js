import React from 'react'
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import "../style/setWallet4.css";

const SetWalletAddress4 = () => {
  const navigate = useNavigate();
  return (
    <div className="SetwalletAddress4-div">
        <div className='menu-div'>
           <div className="green-logo-div">
            <img src={greenLogo} alt='home' className="greenLogo" />
           </div> 
           <div className="home-logo-div">
            <img src={home} alt='home' className="home" onClick={(e) => {e.preventDefault(); navigate("/dashboard");}} />
           </div>
           <div className="wallet-logo-div" onClick={(e) => {e.preventDefault(); navigate("/wallet");}}>
            <img src={walletlogo} alt='home' className="home" />
           </div>
           <div className="setting-logo-div" onClick={(e) => {e.preventDefault(); navigate("/settings");}}>
            <img src={settingIcon} alt='home' className="settingIcon" />
           </div>
        </div>
        <div className="SetWalletAddress4-div-main">
          <div className="SetWalletAddress4-text">PROFILE SETTING</div>
          <div className="SetWalletAddress4-container">
            <div className="SetWalletAddress4-container-back-div-text">SUCCESS</div>
            <div className="SetWalletAddress4-container-back-div-text-main">WALLET SUCCESFULLY ADDED!</div>
          </div>
        </div>
    </div>
  )
}

export default SetWalletAddress4