import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "../Components/Homepage/Landing";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
