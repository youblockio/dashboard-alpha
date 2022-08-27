import React from 'react'
import "../style/HomeScreen.css"
import profileImage from "../assets/image 45.png";
import miniLogo from "../assets/minilogo.png";
import refreshIcon from "../assets/Vector1.png";
import weatherImage from "../assets/weather.png";
import solarPanelImage from "../assets/solar.png";
import greenLogo from "../assets/greenLogo.png";
import groupSun from "../assets/Group 18.png";
import sunset from "../assets/sunset.png";
import miner from "../assets/Miner.png";
import miner1 from "../assets/miner1.png";
import fireBoult from "../assets/fireboult.png";
import earth from "../assets/earth.png";
import bulb from "../assets/bulb.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import cloudMining from "../assets/cloudMining.png";
import cpu from "../assets/CPU.png";
import network from "../assets/NETWORK.png";
import btc from "../assets/BTCSTORAGE.png";
import settingButton from "../assets/Vector.png";


const HomeScreen = () => {
  return (
    <div className="thirddraftwdock-div">
      {/* <img className="ellipse-icon22" alt="" src="ellipse-1210.svg" />
      <img className="ellipse-icon23" alt="" src="ellipse-139.svg" />
      <img className="image-44-icon9" alt="" src="image-44@2x.png" />
      <img className="location-1-icon9" alt="" src="location-1@2x.png" />
      <div className="rectangle-div90" /> */}
      {/* <div className="group-div44">
        <div className="rectangle-div91" />
        <div className="rectangle-div92" />
        <div className="rectangle-div93" />
      </div> */}
      {/* <img
        className="screenshot-2022-06-20-at-12258"
        alt=""
        src="screenshot-20220620-at-1225-1@2x.png"
      /> */}
      <img className="group-icon15" alt="" src={profileImage} />
      <p className="f1taaz5x1huxr0i-p">1F1tAaz5x1HUXr0i...</p>
      <button className="profile-settings-button1">Profile Settings</button>
      <p className="home-p">HOME</p>
      <img className="vertical-white-19" alt="" src="vertical-white-1@2x.png" />
      <div className="group-div45">
        <div className="group-div46">
          <div className="rectangle-div94" />
          <div className="total-earned-div">Total Earned</div>
          <div className="div16">$ 39.67</div>
        </div>
        <div className="group-div47">
          <div className="rectangle-div95" />
          <div className="energy-earning-div">Energy Earning</div>
          <div className="div17">$ 7.5</div>
        </div>
        <div className="group-div48">
          <div className="rectangle-div96" />
          <div className="mining-earning-div">Mining Earning</div>
          <div className="div18">$ 32.17</div>
        </div>
        <div className="group-div49">
          <div className="currenttimeweather-div">
            
              <div className="rectangle-div97" />
              <div className="activecells-div">
                <div className="active-solar-cells-120">
                  Active Solar Cells: 120
                </div>
              </div>
              <div className="frame-div24">
                <img
                  className="weather-graadient-cloudy-day-1"
                  alt=""
                  src={weatherImage}
                />
                <div className="frame-div25">
                  <div className="c1-div">24 °C</div>
                  <div className="pm-div">12:30 PM</div>
                </div>
              </div>
            
          </div>
          <img className="group-icon16" alt="" src={solarPanelImage} />
        </div>
        <div className="group-div51">
          <div className="rectangle-div98" />
          <div className="todays-production-div">Todays’ Production</div>
          <div className="group-div52">
            <div className="kwh-div">12kWh</div>
            <img
              className="weather-graadient-sunny-1"
              alt=""
              src={sunset}
            />
          </div>
          <div className="group-div53">
            <img className="group-icon17" alt="" src={groupSun}/>
            <div className="frame-div26">
              <div className="c-div">24 °C</div>
              <div className="c-div">23 °C</div>
              <div className="c-div">23 °C</div>
              <div className="c-div">23 °C</div>
              <div className="c-div">22 °C</div>
              <div className="c-div">22 °C</div>
            </div>
          </div>
        </div>
        <div className="group-div54">
          <div className="rectangle-div99" />
          <div className="rectangle-div100" />
          <div className="group-div55">
            <div className="geolocation-cannes-france">
              Geolocation: Cannes, France
            </div>
            <div className="group-div56">
              <div className="current-efficiency-div">{`Current Efficiency: `}</div>
              <div className="div19">85%</div>
            </div>
            <div className="group-div57">
              <div className="group-div58">
                <div className="frame-div27">
                  <div className="pm-div1">01:00 PM</div>
                  <div className="pm-div1">02:00 PM</div>
                  <div className="pm-div1">03:00 PM</div>
                  <div className="pm-div1">03:00 PM</div>
                  <div className="pm-div1">04:00 PM</div>
                  <div className="pm-div1">04:00 PM</div>
                </div>
                <div className="group-div59">
                  <div className="rectangle-div101" />
                  <div className="group-div60">
                    <img
                      className="weather-graadient-sunrise-icon"
                      alt=""
                      src={sunset}
                    />
                    <div className="group-div61">
                      <div className="sunrise-div">Sunrise</div>
                      <div className="am-div">8:00 AM</div>
                    </div>
                  </div>
                  <div className="group-div62">
                    <div className="total-daylight-hours">
                      <p className="total-daylight">{`Total Daylight `}</p>
                      <p className="hours-p">Hours</p>
                    </div>
                    <div className="peak-efficiency-div">
                      <p className="total-daylight">Peak</p>
                      <p className="hours-p">Efficiency</p>
                    </div>
                    <div className="hours-div">8 Hours</div>
                    <div className="hours-div1">4.5 Hours</div>
                  </div>
                  <div className="group-div63">
                    <img
                      className="weather-graadient-sunset-icon"
                      alt=""
                      src={sunset}
                    />
                    <div className="group-div64">
                      <div className="pm-div7">7:00 PM</div>
                      <div className="sunset-div">Sunset</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-div65">
          <div className="group-div66">
            <div className="rectangle-div102" />
            <img
              className="decentralized-02-1-icon"
              alt=""
              src={icon7}
            />
            <div className="from-grid-div">From Grid:</div>
            <div className="to-grid-div">To Grid:</div>
            <div className="kwh-div1">2.2 kWh</div>
            <div className="kwh-div2">2.0 kWh</div>
          </div>
          <div className="group-div67">
            <div className="rectangle-div103" />
            <img className="group-icon18" alt="" src={icon6} />
            <div className="total-energy-produced">Total Energy Produced</div>
            <div className="kwh-div3">12 kWh</div>
          </div>
          <div className="group-div68">
            <div className="rectangle-div103" />
            <img className="hashrate-2-icon" alt="" src={icon5} />
            <div className="home-consumption-div">Home Consumption</div>
            <div className="kwh-div4">10.2 kWh</div>
          </div>
          {/* <div className="line-div5" />
          <div className="line-div6" />
          <div className="line-div7" />
          <div className="line-div8" /> */}
          <div className="group-div69">
            <div className="rectangle-div103" />
            <div className="mining-consumption-div">Mining Consumption</div>
            <div className="kwh-div5">2 kWh</div>
            <img className="asic-miner-1-icon" alt="" src={miner1} />
          </div>
        </div>
        <div className="group-div70">
          <div className="rectangle-div106" />
          <div className="self-production-today">Self Production Today</div>
          <div className="self-consumption-today">Self Consumption Today</div>
          <div className="kwh-div6">12 kWh</div>
          <div className="kwh-div7">12.2 kWh</div>
          <img className="vector-icon40" alt="" src="vector-5.svg" />
          <img className="vector-icon41" alt="" src="vector-6.svg" />
        </div>
        <div className="group-div71">
          <div className="rectangle-div107" />
          <div className="tft-earnings-last-month-211">
            <span>{`TFT Earnings Last month: `}</span>
            <span className="span10">+211</span>
          </div>
          
          <img className="cloudmining-icon" alt="" src={cloudMining} />
          <img className="btcstorage-icon" alt="" src={btc} />
          <img className="cpu-icon" alt="" src={cpu} />
          <img className="network-icon" alt="" src={network} />
          <div className="storage-unit-div">Storage Unit</div>
          <div className="div20">1200</div>
          <div className="compute-unit-div">Compute Unit</div>
          <div className="div21">937</div>
          <div className="network-unit-div">Network Unit</div>
          <div className="div22">1200</div>
          <div className="group-div72">
            <div className="threefoldtft-div">ThreeFold(TFT)</div>
            <div className="price-00938-div">Price: $0.0938</div>
            <img className="vector-icon45" alt="" src="vector-10.svg" />
          </div>
        </div>
        <div className="group-div73">
          <div className="rectangle-div108" />
          <div className="rectangle-div109" />
          <img className="ecology-15-2-icon" alt="" src={earth} />
          <img className="ecology-17-1-icon" alt="" src={bulb} />
          <div className="co2-emissions-saved">CO2 Emissions Saved</div>
          <div className="number-of-trees-for-the-same-e">
            <p className="total-daylight">Number of trees for the same</p>
            <p className="hours-p">effect</p>
          </div>
          <div className="lbs-div">938 lbs</div>
          <div className="div23">20</div>
        </div>
        <div className="group-div74">
          <div className="rectangle-div110" />
          <div className="rectangle-div111" />
          <div className="miner-status-div">Miner Status</div>
          <div className="active-div">Active</div>
          <img className="miner-icon" alt="" src={miner} />
        </div>
        <div className="group-div75">
          <div className="group-div76">
            <div className="rectangle-div112" />
            <div className="rectangle-div111" />
            <div className="current-energy-consumption">
              Current Energy Consumption
            </div>
            <div className="kwh-div8">1.9 kWh</div>
          </div>
          <img
            className="weather-graadient-bolt-1"
            alt=""
            src={fireBoult}
          />
        </div>
        <div className="group-div77">
          <div className="group-div78">
            <div className="rectangle-div114" />
            <div className="rectangle-div115" />
            <div className="rectangle-div116" />
            <div className="rectangle-div117" />
            <div className="rectangle-div118" />
            <div className="rectangle-div119" />
            <div className="rectangle-div120" />
            <div className="rectangle-div121" />
            <div className="rectangle-div122" />
            <div className="rectangle-div123" />
            <div className="rectangle-div124" />
            <div className="rectangle-div125" />
            <div className="rectangle-div126" />
            <div className="rectangle-div127" />
            <div className="energy-earning-div1">Energy Earning</div>
            <div className="miner-earning-div">Miner Earning</div>
          </div>
          <div className="rectangle-div128" />
          <div className="energy-production-div">Energy Production</div>
          <div className="energy-consumption-div">Energy Consumption</div>
          <div className="miner-performance-div">Miner Performance</div>
          <div className="earned-rewards-div">Earned Rewards</div>
          <div className="line-div9" />
          <div className="line-div10" />
          <div className="line-div11" />
        </div>
      </div>
      <img className="vertical-white-29" alt="" src="vertical-white-2@2x.png" />
      <div className="rectangle-div129" />
      <section className="rectangle-section" />
      <div className="frame-div28">
        <img
          className="vertical-white-3-traced9"
          alt=""
          src={greenLogo}
        />
        <div className="frame-div29">
          <img className="vector-icon46" alt="" src="vector40.svg" />
          <img
            className="group-icon19"
            alt=""
            src="group4.svg"
            
          />
        </div>
        <img className="vector-icon47" alt="" src="vector41.svg" />
      </div>
      <img className="vector-icon48" alt="" src={settingButton} />
      <div className="group-div79">
        <div className="rectangle-div130" />
        <img className="vector-icon49" alt="" src={refreshIcon} />
        <div className="last-updated-122333-310723">
          <span className="last-updated-span3">LAST UPDATED:</span>
          <span>{` `}</span>
          <span className="span11">12:23:33 31/07/22</span>
        </div>
      </div>
      <div className="group-div80">
        <div className="rectangle-div130" />
        <img className="vector-icon49" alt="" src={refreshIcon}  />
        <div className="last-updated-122333-310723">
          <span className="last-updated-span3">LAST UPDATED:</span>
          <span>{` `}</span>
          <span className="span11">12:23:33 31/07/22</span>
        </div>
      </div>
      <div className="group-div81">
        <div className="rectangle-div130" />
        <img className="vector-icon49" alt="" src={refreshIcon} />
        <div className="last-updated-122333-310723">
          <span className="last-updated-span3">LAST UPDATED:</span>
          <span>{` `}</span>
          <span className="span11">12:23:33 31/07/22</span>
        </div>
      </div>
      <div className="group-div82">
        <div className="rectangle-div130" />
        <img className="vector-icon49" alt="" src={refreshIcon} />
        <div className="last-updated-122333-310723">
          <span className="last-updated-span3">LAST UPDATED:</span>
          <span>{` `}</span>
          <span className="span11">12:23:33 31/07/22</span>
        </div>
      </div>
      <div className="group-div83">
        <div className="rectangle-div130" />
        <img className="vector-icon49" alt="" src={refreshIcon}  />
        <div className="last-updated-122333-310723">
          <span className="last-updated-span3">LAST UPDATED:</span>
          <span>{` `}</span>
          <span className="span11">12:23:33 31/07/22</span>
        </div>
      </div>
      <div className="group-div84">
        <div className="rectangle-div130" />
        <img className="vector-icon49" alt="" src={refreshIcon}  />
        <div className="last-updated-122333-310723">
          <span className="last-updated-span3">LAST UPDATED:</span>
          <span>{` `}</span>
          <span className="span11">12:23:33 31/07/22</span>
        </div>
      </div>
      <div className="group-div85">
        <div className="rectangle-div130" />
        <img className="vector-icon49" alt="" src={refreshIcon}  />
        <div className="last-updated-122333-310723">
          <span className="last-updated-span3">LAST UPDATED:</span>
          <span>{` `}</span>
          <span className="span11">12:23:33 31/07/22</span>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen;




