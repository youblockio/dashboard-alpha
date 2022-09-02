import React, { useEffect, useState } from "react";
import "../style/DashboardScreen.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import miner from "../assets/Miner.png";
import fireBoult from "../assets/fireboult.png";
import solarPanelImage from "../assets/solar.png";
import weatherImage from "../assets/weather.png";
import sunny from "../assets/sunny.png";
import groupSun from "../assets/Group 18.png";
import earth from "../assets/earth.png";
import bulb from "../assets/bulb.png";
import cpu from "../assets/CPU.png";
import network from "../assets/NETWORK.png";
import btc from "../assets/BTCSTORAGE.png";
import cloudMining from "../assets/cloudMining.png";
import downArrow from "../assets/Vector 5.png";
import upArrow from "../assets/Vector 6.png";
import sunset from "../assets/sunset.png";
import sunrise from "../assets/sunrise.png";
import miner1 from "../assets/miner1.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import greenLogo from "../assets/greenLogo.png";
import home from "../assets/homeicon.png";
import walletlogo from "../assets/Group1.png";
import settingIcon from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import refreshIcon from "../assets/Vector1.png";

const DashboardScreen = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const [currentCity, setCurrentCity] = useState("");
  let nodeId = "0002608353-000001-1c7b3";

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
      const crd = pos.coords;
      getCurrentLocation(crd.latitude, crd.longitude);
    }
  };
  //////sss

  const getCurrentLocation = async (lat, lon) => {
    let city = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=c5e7e9d67f7b4965bee9b4b0f2b077d9`
    );
    city = await city.json();

    city = city.results[0].formatted;

    setCurrentCity(city);
  };

  const apiData = async () => {
    await Promise.all([
      fetch(
        "https://us-central1-dashboard-alpha.cloudfunctions.net/YoublockSolarpannel/weather"
      ).then((resp) => resp.json()),
      fetch(
        "https://us-central1-dashboard-alpha.cloudfunctions.net/YoublockSolarpannel/pilotview/incomeInfo"
      ).then((resp) => resp.json()),
      fetch(
        "https://us-central1-dashboard-alpha.cloudfunctions.net/YoublockSolarpannel/pilotview/countGeneration"
      ).then((resp) => resp.json()),
      fetch(
        `https://us-central1-dashboard-alpha.cloudfunctions.net/threefoldApi/?nodeId=${nodeId}`
      ).then((resp) => resp.json()),
      fetch(
        "https://us-central1-dashboard-alpha.cloudfunctions.net/YoublockSolarpannel/chart/17246/powerDay?date=2022-09-02"
      ).then((resp) => resp.json()),
    ]).then((res) => setData((prevState) => (prevState = res)));
    console.log("print");
  };
  

  useEffect(() => {
    getLocation();
    apiData();
  }, []);

  const time = Data && Data[2].data.time.split("T")[1].split(".")[0];
  const date = Data && Data[2].data.time.split("T")[0];
  console.log(time);

  const consumption =
    Data &&
    Data[4].data.filter((item) => {
      return (
        item.time.split(":")[0] === time.split(":")[0] &&
        Math.abs(item.time.split(":")[1] - time.split(":")[1]) < 20
      );
    });

  console.log(consumption);

  const bars = Data && consumption.map((item) => {
    const bar1H = (100 / 300) * item.pac;
    const bar2H = (100 / 300) * item.selfConsumptionPower;

    return (
      <div className="bar-div" key={item.time}>
        <div className="bar1" style={{ height: `${bar1H}%` }}></div>
        <div className="bar2" style={{ height: `${bar2H}%` }}></div>
      </div>
    );
  });

  console.log(Data)

  return (
    <div className="main">
      <div className="menu-div">
        <div className="green-logo-div">
          <img src={greenLogo} alt="home" className="greenLogo" />
        </div>
        <div
          className="home-logo-div"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          <img src={home} alt="home" className="home" />
        </div>
        <div
          className="wallet-logo-div"
          onClick={(e) => {
            e.preventDefault();
            navigate("/wallet");
          }}
        >
          <img src={walletlogo} alt="home" className="home" />
        </div>
        <div
          className="setting-logo-div"
          onClick={(e) => {
            e.preventDefault();
            navigate("/settings");
          }}
        >
          <img src={settingIcon} alt="home" className="settingIcon" />
        </div>
      </div>
      <div className="home-coloumn">
        <div className="home-text">HOME</div>
        <div className="TE-div">
          <div className="refresh-div">
            <div className="refresh-div-title"> last updated {Data && time} {Data && date}{" "}</div>
            <div className="refresh-image-div">
              <img src={refreshIcon} alt="" className="refresh-image" />
            </div>
          </div>
          <div className="TE-text">Total Earned</div>
          <div className="TE-value-text">
            $ {Data && Data[1].data.totalIncome}
          </div>
        </div>
        <div className="EE-div">
          <div className="EE-text">Energy Earning</div>
          <div className="EE-value-text">$ 7.5</div>
        </div>
        <div className="ME-div">
          <div className="EE-text">Mining Earning</div>
          <div className="EE-value-text">$ 39</div>
        </div>
        <div className="solar-cell-div">
          <div className="refresh-div">
            <div className="refresh-div-title"> last updated {Data && time} {Data && date}{" "}</div>
            <div className="refresh-image-div" >
              <img src={refreshIcon} alt="" className="refresh-image" onClick={apiData} />
            </div>
          </div>
          <div className="solar-cell-image-div">
            <img
              src={solarPanelImage}
              alt="solar panel"
              className="solar-cell-image"
            />
          </div>
          <div className="solar-cell-image-div-text">
            Active Solar Cells: 120
          </div>
          <div className="weather-image-div">
            <img alt="wheather" src={weatherImage} className="weather-image" />
          </div>
          <div className="tempratue-div">
            {Data && Data[0].data.currWea.currTemp} °C
          </div>
          <div className="time-div">12:30 PM</div>
        </div>
        <div className="weather-div">
          <div className="weather-div-text">12KWh</div>
          <div className="weather-div-mini">
            <img alt="sunny" src={sunny} />
          </div>
          <div className="weather-div-title">Todays’ Production</div>
          <div className="weather-div-array">
            <img
              alt="group sun"
              src={groupSun}
              className="weather-div-array-image"
            />
          </div>
          <div className="temperature-array">
            <div></div>
          </div>
        </div>
        <div className="consumption-div">
          <div className="refresh-div">
            <div className="refresh-div-title"> last updated {Data && time} {Data && date}{" "}</div>
            <div className="refresh-image-div" >
              <img src={refreshIcon} alt="" className="refresh-image" onClick={apiData}/>
            </div>
          </div>
          <div className="self-production-div">
            <div className="self-production-div-title">
              Self Production Today
            </div>
            <div className="self-production-div-value">
              {Data && consumption[0].pac} kWh
            </div>
            <div className="self-production-image-div">
              <img
                alt="down"
                src={downArrow}
                className="self-production-image"
              />
            </div>
          </div>
          <div className="self-consumption-div">
            <div className="self-production-div-title">
              Self Consumption Today
            </div>
            <div className="self-production-div-value">
              {Data && consumption[0].selfConsumptionPower} kWh
            </div>
            <div className="self-production-image-div1">
              <img alt="up" src={upArrow} className="self-production-image" />
            </div>
          </div>
        </div>
        <div className="vertical-menu-div">
          <div className="green-logo-div1">
            <img src={greenLogo} alt="home" className="greenLogo1" />
          </div>
          <div
            className="home-logo-div1"
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
            <img src={home} alt="home" className="home1" />
          </div>
          <div
            className="wallet-logo-div1"
            onClick={(e) => {
              e.preventDefault();
              navigate("/wallet");
            }}
          >
            <img src={walletlogo} alt="home" className="home1" />
          </div>
          <div
            className="setting-logo-div1"
            onClick={(e) => {
              e.preventDefault();
              navigate("/settings");
            }}
          >
            <img src={settingIcon} alt="home" className="settingIcon1" />
          </div>
        </div>
      </div>
      <div className="graph-coloumn">
        <div className="graph-div">
          <div className="refresh-div">
            <div className="refresh-div-title"> last updated {Data && time} {Data && date}{" "}</div>
            <div className="refresh-image-div" >
              <img src={refreshIcon} alt="" className="refresh-image" onClick={apiData} />
            </div>
          </div>
          <div className="chart-div">
            {Data && bars}
          </div>
        </div>
        <div className="graph-denotion-div">
          <div className="graph-denotion-production-div">
            <div className="graph-denotion-production-bar" />
            <div className="graph-denotion-production-title"> Self Production</div>
          </div>
          <div className="graph-denotion-consumption-div">
            <div className="graph-denotion-consumption-bar" />
            <div className="graph-denotion-consumption-title"> Self Consumption</div>
          </div>
        </div>
        <div className="geolocation">
          <div className="refresh-div">
            <div className="refresh-div-title"> last updated {Data && time} {Data && date}{" "}</div>
            <div className="refresh-image-div" >
              <img src={refreshIcon} alt="" className="refresh-image" onClick={apiData} />
            </div>
          </div>
          <div className="geolocation-title-div">{currentCity}</div>
          <div className="geolocation-center-div">
            <div className="sunrise-div">
              <img alt="sunrise" src={sunrise} className="sunrise" />
              <div className="sunrise-div-title">Sunrise</div>
              <div className="sunrise-div-value">
                {Data && Data[0].data.currWea.sunrise}AM
              </div>
            </div>
            <div className="sunset-div">
              <img alt="sunset" src={sunset} className="sunrise" />
              <div className="sunrise-div-title">Sunset</div>
              <div className="sunrise-div-value">
                {Data && Data[0].data.currWea.sunset}PM
              </div>
            </div>
            <div className="daylight-div">
              <div className="daylight-div-title">
                Total Daylight Hours : 8 Hours
              </div>
            </div>
            {/* <div className="efficiency-div">
                        <div className="daylight-div-title">Peak</div>
                        <div className="daylight-div-title">Efficiency</div>
                        <div className="daylight-div-value">4 Hours</div>
                    </div> */}
          </div>
          {/* <div className="current-div">Current Efficiency: </div>
                    <div className="current-div-value">85%</div> */}
        </div>
        <div className="block">
          <div className="block-mining-div">
            <div className="block-mining-div-image">
              <img src={miner1} alt="mining" className="mining" />
            </div>
            <div className="block-mining-div-title">Mining Consumption</div>
            <div className="block-mining-div-value">2 kWh</div>
          </div>
          <div className="block-energy-div">
            <div className="block-mining-div-image">
              <img src={icon6} alt="mining" className="mining" />
            </div>
            <div className="block-mining-div-title">Total energy produced</div>
            <div className="block-mining-div-value">12 kWh</div>
          </div>
          <div className="block-grid-div">
            <div className="block-mining-div-image">
              <img src={icon7} alt="mining" className="mining" />
            </div>
            <div className="block-mining-div-value1">From Grid : </div>
            <div className="block-mining-div-value2">To Grid : </div>
          </div>
          <div className="block-home-div">
            <div className="block-mining-div-image">
              <img src={icon5} alt="mining" className="mining" />
            </div>
            <div className="block-mining-div-title">Home Consumption</div>
            <div className="block-mining-div-value">10.2 kWh</div>
          </div>
        </div>
      </div>
      <div className="profile-coloumn">
        <div className="connect-wallet-div">
          <ConnectButton chainStatus={{ smallScreen: 'icon', largeScreen: 'full' }} showBalance={{ smallScreen: false, largeScreen: true }} accountStatus={{ smallScreen: 'avatar', largeScreen: 'full', }} />
        </div>
        <div className="MS-div">
          <div className="MS-div-title">Miner Status</div>
          <div className="MS-div-value">Active</div>
          <div className="MS-div-image">
            <img src={miner} alt="Miner" className="Miner" />
          </div>
        </div>
        <div className="CS-div">
          <div className="CS-div-title">Current Energy Consumption</div>
          <div className="CS-div-value">1.9 kWh</div>
          <div className="CS-div-image">
            <img src={fireBoult} alt="fireboult" className="Miner" />
          </div>
        </div>
        <div className="picture-unit-div">
          <div className="refresh-div1">
            <div className="refresh-div-title"> last updated {Data && time} {Data && date}{" "}</div>
            <div className="refresh-image-div" onClick={apiData}>
              <img src={refreshIcon} alt="" className="refresh-image" />
            </div>
          </div>
          <div className="picture-unit">
            <div className="storage-unit-div">
              <div className="storage-unit-title">Storage Unit</div>
              <img src={btc} alt="storage" className="cpu" />
              <div className="storage-unit-value">
                {Data && Data[3].nodeResourcesTotalById.sru}
              </div>
            </div>
            <div className="compute-unit-div">
              <div className="compute-unit-title">Compute Unit</div>
              <img src={cpu} alt="storage" className="cpu" />
              <div className="compute-unit-value">
                {Data && Data[3].nodeResourcesTotalById.cru}
              </div>
            </div>
            <div className="Network-unit-div">
              <div className="Network-unit-title">Network Unit</div>
              <img src={network} alt="storage" className="cpu" />
              <div className="Network-unit-value">
                {Data && Data[3].nodeResourcesTotalById.mru}
              </div>
            </div>
            <div className="Network-unit-div1">
              <div className="Network-unit-title">Hardware Unit</div>
              <img src={network} alt="storage" className="cpu" />
              <div className="Network-unit-value">
                {Data && Data[3].nodeResourcesTotalById.hru}
              </div>
            </div>
          </div>
          <div className="cloudmining-image-div">
            <img
              alt="storage"
              src={cloudMining}
              className="cloudmining-image-div-image"
            />
            <div className="cloudmining-image-div-title">ThreeFold(TFT)</div>
            <div className="cloudmining-image-div-value">Price: $0.0938</div>
          </div>
          <div className="picture-unit-div-title">TFT Earnings Last month:</div>
          <div className="picture-unit-div-title1">+211</div>
        </div>
        <div className="emission-div">
          <div className="emission-div-title-1">CO2 Emissions Saved</div>
          <div className="emission-div-title-1-value">
            {Data && Data[1].data.eqCO2Reduction} lbs
          </div>
          <div className="emission-div-title-1-image">
            <img alt="earth" src={earth} className="earth" />
          </div>
          <div className="emission-div-title-2">Number of trees for the</div>
          <div className="emission-div-title-3">same effect</div>
          <div className="emission-div-title-2-value">
            {Data && Data[1].data.eqPlants}
          </div>
          <div className="emission-div-title-2-image">
            <img alt="bulb" src={bulb} className="bulb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
