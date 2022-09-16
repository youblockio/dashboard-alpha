import React from 'react'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import backButton from "../assets/backButton.png";
import roundAdd from "../assets/circle-addSmall.png";
import { useNavigate } from "react-router-dom";
import "../style/DeviceId.css";



const DeviceIdScreen = () => {

  const notify =()=> toast.error("hello", {
    autoClose: 5000,
    });
  

  const navigate = useNavigate();
  return (
    <div className="DeviceIdScreen-div">
    <ToastContainer />
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
        <div className="DeviceIdScreen-div-main">
          <div className="ManageDevice-div-main-text">PROFILE SETTING</div>
          <div className="DeviceIdScreen-div-main-container">
            <div className="ManageDevice-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/addDevice");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="ManageDevice-container-back-div-text">ENTER MINER ID</div>
            <div className="DeviceIdScreen-container-input-div">
              <input className="DeviceIdScreen-container-input" placeholder="veri" />
            </div>
            <div className="DeviceIdScreen-div-main-container-buton-div">
              {/* <button className="DeviceIdScreen-div-main-container-buton" onClick={(e) => {e.preventDefault(); navigate("/confirmDevice");}}> */}
              <button className="DeviceIdScreen-div-main-container-buton" onClick={notify}>
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

export default DeviceIdScreen