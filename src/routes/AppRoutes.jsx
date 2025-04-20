import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import PlatformSetup from "../components/PlatformSetup";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlatformSetup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
