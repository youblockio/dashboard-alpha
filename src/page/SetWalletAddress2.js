import React from 'react'
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import backButton from "../assets/backButton.png";
import { useNavigate } from "react-router-dom";
import "../style/setWallet2.css";
import binanceLogo from "../assets/image 61.png";
import metamaskLogo from "../assets/image 62.png";
import coinbaseLogo from "../assets/image 63.png";
import walletConnectLogo from "../assets/image 64.png";
import fortmaticLogo from "../assets/image 65.png";
import trezorLogo from "../assets/image 66.png";
import ledgerLogo from "../assets/image 67.png";

const SetWalletAddress2 = () => {
  const navigate = useNavigate();
  return (
    <div className="SetWalletAddress2-div">
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
        <div className="SetWalletAddress2-div-main">
          <div className="SetWalletAddress2-text">PROFILE SETTING</div>
          <div className="SetWalletAddress2-container">
            <div className="SetWalletAddress2-container-back-div" onClick={(e) => {e.preventDefault(); navigate("/setwallet");}}>
              <img src={backButton} alt='backbutton' />
            </div>
            <div className="SetWalletAddress2-container-back-div-text">SET WALLET ADDRESS</div>
            <div className="SetWalletAddress2-container-back-div-text2">Network</div>
            <div className="SetWalletAddress2-block-binnaca" onClick={(e) => {e.preventDefault(); navigate("/enterWalletAddress");}}>
              <div className="SetWalletAddress2-block-binnaca-image-div">
                <img src={binanceLogo} alt='binnaca' className= "SetWalletAddress2-block-binnaca-image"/>
                <div className="SetWalletAddress2-block-binnaca-image-text">Binance Chain</div>
              </div>
            </div>
            <div className="SetWalletAddress2-container-back-div-text3">Choose Wallet</div>
            <div className="SetWalletAddress2-block-metamask">
              <div className="SetWalletAddress2-block-binnaca-image-div">
                <img src={metamaskLogo} alt='binnaca' className= "SetWalletAddress2-block-binnaca-image"/>
                <div className="SetWalletAddress2-block-binnaca-image-text">Metamask</div>
              </div>
            </div>
            <div className="SetWalletAddress2-block-coinbase">
              <div className="SetWalletAddress2-block-binnaca-image-div">
                <img src={coinbaseLogo} alt='binnaca' className= "SetWalletAddress2-block-binnaca-image"/>
                <div className="SetWalletAddress2-block-binnaca-image-text">Coinbase</div>
              </div>
            </div>
            <div className="SetWalletAddress2-block-walletConnect">
              <div className="SetWalletAddress2-block-binnaca-image-div">
                <img src={walletConnectLogo} alt='binnaca' className= "SetWalletAddress2-block-binnaca-image"/>
                <div className="SetWalletAddress2-block-binnaca-image-text">Wallet Connect</div>
              </div>
            </div>
            <div className="SetWalletAddress2-block-fortmatice">
              <div className="SetWalletAddress2-block-binnaca-image-div">
                <img src={fortmaticLogo} alt='binnaca' className= "SetWalletAddress2-block-binnaca-image"/>
                <div className="SetWalletAddress2-block-binnaca-image-text">Fortmatic</div>
              </div>
            </div>
            <div className="SetWalletAddress2-block-Trezor">
              <div className="SetWalletAddress2-block-binnaca-image-div">
                <img src={trezorLogo} alt='binnaca' className= "SetWalletAddress2-block-binnaca-image"/>
                <div className="SetWalletAddress2-block-binnaca-image-text">Trezor</div>
              </div>
            </div>
            <div className="SetWalletAddress2-block-ledger">
              <div className="SetWalletAddress2-block-binnaca-image-div">
                <img src={ledgerLogo} alt='binnaca' className= "SetWalletAddress2-block-binnaca-image"/>
                <div className="SetWalletAddress2-block-binnaca-image-text">Ledger</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SetWalletAddress2