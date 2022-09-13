import React from 'react';
import "../style/WalletScreen.css";
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/largeSettingIcon2.png";
import { useNavigate } from "react-router-dom";
import refreshIcon from "../assets/Vector1.png";
import graphWallet from "../assets/graphwallet.png";
import walletbtc from "../assets/walletBTC1.png";
import walletbtc1 from "../assets/walletBTC.png";
import largeYoublockLogo from "../assets/large-logo-Youblock.png";

const WalletScreen = () => {
    const navigate = useNavigate();
  return (
    <div className="wallet-main-div">
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
        <div className="wallet-coloumn">
            <div className="wallet-text">WALLET</div>
            <div className="TB-div">
                <div className="W-text">Total Balance</div>
                <div className="W-value-text">$ 36,500</div>
            </div>
            <div className="ERs-div">
                <div className="ERs-text">Earned Rewards (Solar)</div>
                <div className="refresh-last-div">
                    <img alt='refresh' src={refreshIcon} />
                </div>
                <div className="refresh-last-div-status">LAST UPDATED: 12:23:33 31/07/22</div>
                <div className="ERs-subtitle">Solar wt/hr $ 12.56579</div>
                <div className="ERs-value-div">$ 20,500</div>
            </div>
            <div className="ERt-div">
                <div className="ERs-text">Earned Rewards (TFT)</div>
                <div className="refresh-last-div">
                    <img alt='refresh' src={refreshIcon} />
                </div>
                <div className="refresh-last-div-status">LAST UPDATED: 12:23:33 31/07/22</div>
                <div className="ERs-subtitle">TFT 12.56579</div>
                <div className="ERs-value-div">$ 16,000</div>
            </div>
            <div className="graph-srt-div">
                <div className="graph-srt-div-image">
                    <img src={graphWallet} alt='graph' className="graph-image" />
                </div>
                <div className="TFT-value-div">TFT</div>
                <div className="TFT-value-div1">Earning Efficiency</div>
                <div className="TFT-value">25%</div>
                <div className="SRT-value-div">Solar</div>
                <div className="SRT-value-div1">Earning Efficiency</div>
                <div className="SRT-value">45%</div>
            </div>
        </div>
        <div className="RH-div">
            <div className="RH-div-advertise-image-div">
                <img src={largeYoublockLogo} alt='' className="RH-div-advertise-image" />
            </div>
            {/* <div className="RH-text">Reward History</div>
            <div className="RH-dark-div">
                <div className="RH-div-image">
                    <img src={walletbtc1} alt='btc' className="RH-image" />
                </div>
                <div className="RH-dark-div-text">
                    <div className="RH-dark-div-text-title">Solar Panel</div>
                    <div className="RH-dark-div-text-subtitle">Grid Earnings</div>
                </div>
                <div className="RH-dark-div-value">
                    <div className="RH-dark-div-value-main">1.34578</div>
                    <div className="RH-dark-div-value-main1">$ 24</div>
                </div>
            </div>
            <div className="RH-dark-div1">
                <div className="RH-div-image">
                    <img src={walletbtc} alt='btc' className="RH-image" />
                </div>
                <div className="RH-dark-div-text">
                    <div className="RH-dark-div-text-title">TFT</div>
                    <div className="RH-dark-div-text-subtitle">ThreeFold</div>
                </div>
                <div className="RH-dark-div-value">
                    <div className="RH-dark-div-value-main">1.34578</div>
                    <div className="RH-dark-div-value-main1">$ 24</div>
                </div>
            </div>
            <div className="RH-dark-div2">
                <div className="RH-div-image">
                    <img src={walletbtc1} alt='btc' className="RH-image" />
                </div>
                <div className="RH-dark-div-text">
                    <div className="RH-dark-div-text-title">Solar Panel</div>
                    <div className="RH-dark-div-text-subtitle">Grid Earnings</div>
                </div>
                <div className="RH-dark-div-value">
                    <div className="RH-dark-div-value-main">1.34578</div>
                    <div className="RH-dark-div-value-main1">$ 24</div>
                </div>
            </div>
            <div className="RH-dark-div3">
                <div className="RH-div-image">
                    <img src={walletbtc} alt='btc' className="RH-image" />
                </div>
                <div className="RH-dark-div-text">
                    <div className="RH-dark-div-text-title">TFT</div>
                    <div className="RH-dark-div-text-subtitle">ThreeFold</div>
                </div>
                <div className="RH-dark-div-value">
                    <div className="RH-dark-div-value-main">1.34578</div>
                    <div className="RH-dark-div-value-main1">$ 24</div>
                </div>
            </div>
            <div className="RH-dark-div4">
                <div className="RH-div-image">
                    <img src={walletbtc1} alt='btc' className="RH-image" />
                </div>
                <div className="RH-dark-div-text">
                    <div className="RH-dark-div-text-title">Solar Panel</div>
                    <div className="RH-dark-div-text-subtitle">Grid Earnings</div>
                </div>
                <div className="RH-dark-div-value">
                    <div className="RH-dark-div-value-main">1.34578</div>
                    <div className="RH-dark-div-value-main1">$ 24</div>
                </div>
            </div>
            <div className="RH-dark-div5">
                <div className="RH-div-image">
                    <img src={walletbtc} alt='btc' className="RH-image" />
                </div>
                <div className="RH-dark-div-text">
                    <div className="RH-dark-div-text-title">TFT</div>
                    <div className="RH-dark-div-text-subtitle">ThreeFold</div>
                </div>
                <div className="RH-dark-div-value">
                    <div className="RH-dark-div-value-main">1.34578</div>
                    <div className="RH-dark-div-value-main1">$ 24</div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default WalletScreen