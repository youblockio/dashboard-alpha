import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
// import SetupConfigScreen from "./page/SetupConfigScreen";
import LoginScreen from "./page/LoginScreen";
import OnboardingScreen from "./page/OnboardingScreen";
import OnboardingScreen2 from "./page/OnboardingScreen2";
import OnboardingScreen3 from "./page/OnboardingScreen3";
import RegisterScreen from "./page/RegisterScreen";
import VerifyScreen from "./page/VerifyScreen";
import SuccessScreen from "./page/SuccessScreen";
// import Setup2Screen from "./page/Setup2Screen";
// import HomeScreen from "./page/HomeScreen";
import DashboardScreen from "./page/DashboardScreen";
import SettingScreen from "./page/SettingScreen";
import WalletScreen from "./page/WalletScreen";
import { AuthContextProvider } from "./context/AuthContext";
import SupportScreen from "./page/SupportScreen";
import ManageDeviceScreen from "./page/ManageDeviceScreen";
import SetWalletAddressScreen from "./page/SetWalletAddressScreen";
import SetWalletAddress2 from "./page/SetWalletAddress2";
import SetWalletAddress3 from "./page/SetwalletAddress3";
import SetWalletAddress4 from "./page/SetWalletAddress4";
import AddDevice from "./page/AddDevice";
import DeviceIdScreen from "./page/DeviceIdScreen";
import DeviceConfirmationScreen from "./page/DeviceConfirmationScreen";
// import ProtectedRoute from "./pages/ProtectedRoutes";
import ProtectedRoutes from "./page/ProtectedRoutes";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import AddDeviceSolar from "./page/AddDeviceSolar";
import DeviceIdSolar from "./page/DeviceIdSolar";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthContextProvider>
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Routes>
          {/* <Route path="/" element={<OnboardingScreen />}></Route>
          <Route path="/onboarding" element={<OnboardingScreen2 />}></Route>
          <Route path="/onboarding2" element={<OnboardingScreen3 />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route> */}
          {/* <Route path="/verify" element={<VerifyScreen />}></Route>
          <Route path="/success" element={<SuccessScreen />}></Route> */}
          <Route path="/login" element={<LoginScreen />}></Route>
          {/* <Route path="/setup" element={<SetupConfigScreen />}></Route>
          <Route path="/setup2" element={<Setup2Screen />}></Route>
          <Route path="/dashboard" element={<HomeScreen />}></Route> */}
          <Route
            path='/'
            element={
              <ProtectedRoutes>
                <DashboardScreen />
              </ProtectedRoutes>
            }
          /> 
           <Route
            path='/wallet'
            element={
              <ProtectedRoutes>
                <WalletScreen />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/settings'
            element={
              <ProtectedRoutes>
                <SettingScreen />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/support'
            element={
              <ProtectedRoutes>
                <SupportScreen />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/setwallet'
            element={
              <ProtectedRoutes>
                <SetWalletAddressScreen />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/managedevice'
            element={
              <ProtectedRoutes>
                <ManageDeviceScreen />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/choosewallet'
            element={
              <ProtectedRoutes>
                <SetWalletAddress2 />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/enterWalletAddress'
            element={
              <ProtectedRoutes>
                <SetWalletAddress3 />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/confirmWallet'
            element={
              <ProtectedRoutes>
                <SetWalletAddress4 />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/addDevice'
            element={
              <ProtectedRoutes>
                <AddDevice />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/addDeviceSolar'
            element={
              <ProtectedRoutes>
                <AddDeviceSolar />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/enterId'
            element={
              <ProtectedRoutes>
                <DeviceIdScreen />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/enterIdSolar'
            element={
              <ProtectedRoutes>
                <DeviceIdSolar />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/confirmDevice'
            element={
              <ProtectedRoutes>
                <DeviceConfirmationScreen />
              </ProtectedRoutes>
            }
          />
        
          {/* <Route path="/dashboard" element={<DashboardScreen />}></Route>
          <Route path="/wallet" element={<WalletScreen />}></Route>
          <Route path="/settings" element={<SettingScreen />}></Route>
          <Route path="/support" element={<SupportScreen />}></Route>
          <Route path="/setwallet" element={<SetWalletAddressScreen />}></Route>
          <Route path="/managedevice" element={<ManageDeviceScreen />}></Route>
          <Route path="/choosewallet" element={<SetWalletAddress2 />}></Route>
          <Route path="/enterWalletAddress" element={<SetWalletAddress3 />}></Route>
          <Route path="/confirmWallet" element={<SetWalletAddress4 />}></Route>
          <Route path="/addDevice" element={<AddDevice />}></Route>
          <Route path="/addDeviceSolar" element={<AddDeviceSolar />}></Route>
          <Route path="/enterId" element={<DeviceIdScreen />}></Route>
          <Route path="/enterIdSolar" element={<DeviceIdSolar />}></Route>
          <Route path="/confirmDevice" element={<DeviceConfirmationScreen />}></Route> */}
        </Routes>
        </RainbowKitProvider>
        </WagmiConfig>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
