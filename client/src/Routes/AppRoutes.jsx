import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavbApp } from "../Components/Navbar/NavbApp";
import { ErrorPage } from "..//pages/Error/ErrorPage";
import { Home } from "../pages/Dashboard/Home/Home";

export const AppRoutes = () => {
  return (
    <div>
      <NavbApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
