import React from 'react'
import "../style/SetupConfigScreen.css"
import addButton from "../assets/add.png";
import circleAddButton from "../assets/circleAdd.png";
import { useNavigate } from "react-router-dom";


const SetupConfigScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="setupminer1-div">
    
      <div className="frame-div504">
        <div className="setup-and-config">SETUP AND CONFIG</div>
        <div className="frame-div604">
          <div className="frame-div704">
            <div className="rectangle-div704" />
            <img className="vector-icon1" alt="" src={circleAddButton} />
          </div>
          <div className="frame-div804">
            <input
              className="frame-input704"
              type="text"
              placeholder="Create Nickname"
            />
            <div className="please-enter-miner-id-where-ap">
              Please Enter Miner Id where applicable
            </div>
            
          </div>
        </div>
        <div className="frame-div904">
          <div className="frame-div104">
            <div className="tftthreefold-node-id">
              <span className="tft-span">TFT</span>
              <span className="threefold-node-id">(Threefold) Node Id</span>
            </div>
            <div className="verify-div104">Verify</div>
          </div>
          <div className="group-div104">
            <input className="rectangle-input104" type="text" />
          </div>
        </div>
        <div className="frame-div904">
          <div className="frame-div104">
            <div className="tftthreefold-node-id">
              <span className="tft-span">{`Solar `}</span>
              <span className="threefold-node-id">Panel Id</span>
            </div>
            <div className="verify-div1">Verify</div>
          </div>
          <input className="group-input" type="text" />
        </div>
        <button className="frame-button104" onClick={(e) => {e.preventDefault(); navigate("/setup2");}} >
          <div className="next-div104">Next</div>
        </button>
        
      </div>
      <div className='invisible-div3'>
      <img
    className="vector-icon3"
    alt=""
    src={addButton}
    />
      <div className="add-a-miner1">Add a Miner</div>
      </div>
      <div className='invisible-div2'>
      <img
    className="vector-icon104"
    alt=""
    src={addButton}
    />
      <div className="add-a-miner">Add a Miner</div>
      </div>
    </div>
  )
}

export default SetupConfigScreen;



