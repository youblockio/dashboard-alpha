import { Routes, Route, BrowserRouter } from "react-router-dom";

import React from "react"; 

import Onboarding2 from "./onboarding2";
import Onboarding3 from "./onboarding3";
import Register from "./Register";
import VerifyScreen from "./VerifyScreen";
import Setup1Screen from "./Setup1Screen";
import SetupScreen2 from "./SetupScreen2";
import WalletScreen from "./WalletScreen";
import Login from "./Login";
import Dashboard from "./Dashboard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Onboarding2 />}></Route>
          <Route path="/1" element={<Onboarding3 />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/verify" element={<VerifyScreen/>}></Route>
          <Route path="/setup1" element={<Setup1Screen/>}></Route>
          <Route path="/setup2" element={<SetupScreen2/>}></Route>
          <Route path="/Wallet" element={<WalletScreen/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
