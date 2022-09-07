import React from 'react'
import "../style/SettingScreen.css"
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';


const SettingScreen = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="setting-div-main">
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
        <div className="setting-div">
          <div className="setting-text">PROFILE SETTING</div>
          <div className="setting-div-button-container">
            <div className="setting-div-button">
              <div className="setting-div-button-text" onClick={(e) => {e.preventDefault(); navigate("/setwallet");}}>SET WALLET ADDRESS</div>
              <div className="setting-div-button-divider" />
              <div className="setting-div-button-text" onClick={(e) => {e.preventDefault(); navigate("/managedevice");}}>MANAGE DEVICES</div>
              <div className="setting-div-button-divider" />
              <div className="setting-div-button-text">STAKING  (Coming Soon)</div>
              <div className="setting-div-button-divider" />
              <div className="setting-div-button-text" onClick={(e) => {e.preventDefault(); navigate("/support");}}>SUPPORT</div>
              <div className="setting-div-button-divider" />
              <div className="setting-div-button-text1" onClick={handleLogout}>SIGN OUT</div>
              <div className="setting-div-button-divider" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SettingScreen