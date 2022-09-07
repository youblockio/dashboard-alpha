import React from 'react'
import "../style/AddDevice.css";
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import backButton from "../assets/backButton.png";
import smallAddButton from "../assets/smallAdd.png";
import { useNavigate } from "react-router-dom";

const AddDevice = () => {
  const navigate = useNavigate();
  return (
    <div className="AddDevice-div">
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
        <div className="AddDevice-div-main">
          <div className="AddDevice-div-main-text">PROFILE SETTING</div>
          <div className="AddDevice-div-main-container">
            <div className="ManageDevice-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/managedevice");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="ManageDevice-container-back-div-text">MINERS / SOLAR PANELS</div>
            <div className="AddDevice-div-main-container-button-div">
              <button className="AddDevice-div-main-container-button" onClick={(e) => {e.preventDefault(); navigate("/enterId");}}>
                <div className="AddDevice-div-main-container-button-image-div">
                  <img src={smallAddButton} alt='' className="AddDevice-div-main-container-button-image" />
                </div>
                <div className="AddDevice-div-main-container-button-text">ADD NODE</div>
              </button>
            </div>
            <div className="AddDevice-div-main-miner-solar-div">
              <div className="AddDevice-div-main-miner-solar-div-small" />
              <div className="AddDevice-div-main-miner-solar-div-title">MinerName / SolarPanelId</div>
              <div className="AddDevice-div-main-miner-solar-div-subtitle">Status:</div>
              <div className="AddDevice-div-main-miner-solar-div-value">Running</div>
              <div className="AddDevice-div-main-miner-solar-div-time">Last Updated: 05-31-22</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddDevice