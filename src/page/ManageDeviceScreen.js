import React from 'react'
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import backButton from "../assets/backButton.png";
import TFTlogo from "../assets/image 69.png";
import solarLogo from "../assets/image 68.png";
import { useNavigate } from "react-router-dom";
import "../style/ManageDevice.css"

const ManageDeviceScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="managedevice-div">
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
        <div className="ManageDevice-div-main">
          <div className="ManageDevice-div-main-text">PROFILE SETTING</div>
          <div className="ManageDevice-div-main-container">
            <div className="ManageDevice-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/settings");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="ManageDevice-container-back-div-text">MANAGE DEVICES ON YOUR ACCOUNT</div>
            <div className="ManageDevice-div-main-container-TFT" onClick={(e) => {e.preventDefault(); navigate("/addDevice");}}>
              <div className="ManageDevice-div-main-container-TFT-text">TFT Miner</div>
              <div className="ManageDevice-div-main-container-TFT-image-div">
                <img src={TFTlogo} alt='' className="ManageDevice-div-main-container-TFT-image" />
              </div>
            </div>
            <div className="ManageDevice-div-main-container-Solar" onClick={(e) => {e.preventDefault(); navigate("/addDeviceSolar");}}>
              <div className="ManageDevice-div-main-container-TFT-text">Solar Panel</div>
              <div className="ManageDevice-div-main-container-TFT-image-div">
                <img src={solarLogo} alt='' className="ManageDevice-div-main-container-TFT-image" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ManageDeviceScreen