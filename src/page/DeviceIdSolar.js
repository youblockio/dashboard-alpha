import React from 'react'
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import backButton from "../assets/backButton.png";
import roundAdd from "../assets/circle-addSmall.png";
import { useNavigate } from "react-router-dom";
import "../style/DeviceId.css";

const DeviceIdSolar = () => {
    const navigate = useNavigate();
  return (
    <div className="DeviceIdScreen-div">
      <div className='menu-div'>
           <div className="green-logo-div">
            <img src={greenLogo} alt='home' className="greenLogo" />
           </div> 
           <div className="home-logo-div" onClick={(e) => {e.preventDefault(); navigate("/");}}>
            <img src={home} alt='home' className="home" />
           </div>
           <div className="wallet-logo-div" onClick={(e) => {e.preventDefault(); navigate("/wallet");}}>
            <img src={walletlogo} alt='home' className="home" />
           </div>
           <div className="setting-logo-div" onClick={(e) => {e.preventDefault(); navigate("/settings");}}>
            <img src={settingIcon} alt='home' className="settingIcon" />
           </div>
        </div>
        <div className="DeviceIdScreen-div-main">
          <div className="ManageDevice-div-main-text">PROFILE SETTING</div>
          <div className="DeviceIdScreen-div-main-container">
            <div className="ManageDevice-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/addDeviceSolar");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="ManageDevice-container-back-div-text">ENTER SOLAR PANEL SERIAL CODE</div>
            <div className="DeviceIdScreen-container-input-div">
              <input className="DeviceIdScreen-container-input" placeholder="verify" />
            </div>
            <div className="DeviceIdScreen-div-main-container-buton-div">
              <button className="DeviceIdScreen-div-main-container-buton" onClick={(e) => {e.preventDefault(); navigate("/confirmDevice");}}>
                <div className="DeviceIdScreen-div-main-container-buton-image-div">
                  <img src={roundAdd} alt='' className="DeviceIdScreen-div-main-container-buton-image" />
                </div>
                <div className="DeviceIdScreen-div-main-container-buton-text">ADD DEVICE</div>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DeviceIdSolar