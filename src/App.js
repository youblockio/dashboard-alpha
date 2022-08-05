import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import OnboardingScreen from "./pages/OnboardingScreen";
import OnboardingScreen2 from "./pages/OnboardingScreen2";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import OnboardingScreen3 from "./pages/OnboardingScreen3";
import Register from "./pages/Register";
import FinalOnboardingScreen from "./pages/FinalOnboardingScreen";
import SetupScreen from "./pages/SetupScreen";
import Success from "./pages/Success";
import Verify from "./pages/Verify";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<OnboardingScreen />}></Route>
          <Route path="/welcome" element={<OnboardingScreen2 />}></Route>
          <Route path="/welcome2" element={<OnboardingScreen3 />}></Route>
          <Route path="/registeration" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/setup" element={
            <ProtectedRoute>
              <SetupScreen />
            </ProtectedRoute>
          }></Route>
          <Route path="/verify" element={<Verify />}></Route>
          <Route path="/success" element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }></Route>
          <Route path="/final" element={
            <ProtectedRoute>
              <FinalOnboardingScreen />
            </ProtectedRoute>
          }></Route>
          <Route path="/home" element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }></Route>
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
