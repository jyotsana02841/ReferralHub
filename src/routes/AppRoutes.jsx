import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import PlatformSetup from "../components/PlatformSetup";
import PlatformSetupContent from "../components/PlatformSetupContent";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page" element={<PlatformSetup />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/platform" element={<PlatformSetupContent />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
