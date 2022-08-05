import React from 'react'
import "../style/setup2.css"
import userIcon from "../assets/rectangle.png"
import circleAdd from "../assets/circleAdd.png"
import add from "../assets/add.png"
import { useNavigate } from "react-router-dom";

const SetupScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="setupconfig2-div">
      <div className="frame-div6">
        <div className="frame-div7">
          <div className="setup-and-config">
            <p className="setup-and">SETUP AND</p>
            <p className="config-p">CONFIG</p>
          </div>
        </div>
        <div className="frame-div8">
          <div className="frame-div9">
            <div className="rectangle-div" />
            <img className="vector-icon" alt="" src={circleAdd} />
          </div>
          <div className="frame-div10">
            <div className="frame-div11">
              <div className="create-nickname-div">Create Nickname</div>
            </div>
            <input className="frame-input3" type="text"/>
            <div className="please-enter-miner-id-where-ap">
              Please Enter Miner Id where applicable
            </div>
          </div>
        </div>
        <div className="frame-div14">
          <div className="frame-div15">
            <div className="tftthreefold-node-id">
              <span className="tft-span">{`Solar `}</span>
              <span className="threefold-node-id">Panel Id</span>
            </div>
            <div className="verify-div1">Verify</div>
          </div>
          <input className="frame-input3" type="text"  />
          <div className="group-div1">
            <div className="rectangle-div2" />
          </div>
        </div>
        <div className="frame-div14">
          <div className="frame-div15">
            <div className="tftthreefold-node-id">
              <span className="tft-span">{`Solar `}</span>
              <span className="threefold-node-id">Panel Id</span>
            </div>
            <div className="verify-div1">Verify</div>
          </div>
          <input className="frame-input3" type="text"  />
          <div className="group-div1">
            <div className="rectangle-div2" />
          </div>
        </div>
        <div className="frame-div16" onClick={(e) => {e.preventDefault(); navigate("/final");}}>
          <div className="next-div1">Next</div>
        </div>
      </div>
      <div className="frame-div17">
        <img className="rectangle-icon" alt="" src={userIcon} />
        <input
          className="frame-input2"
          type="text"
          placeholder="Miner#1: Jack_Home"
        />
      </div>
      <div className="frame-div18">
        <img className="vector-icon1" alt="" src={add} />
        <div className="create-nickname-div">Add a Miner</div>
      </div>
    </div>
  )
}

export default SetupScreen

