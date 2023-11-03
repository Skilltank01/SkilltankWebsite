import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "../Components/Homepage/Landing";
// import StudentSignup from "../Components/Signup/StudentSignup";
// import MentorSignup from './../Components/Signup/MentorSignup';
// import EmployerSignup from './../Components/Signup/EmployerSignup';
// import ProfessionalSingup from './../Components/Signup/ProfessionalSingup';

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/professional" element={<ProfessionalSingup />}/>
        <Route path="/signup/employer" element={<EmployerSignup />}/>
        <Route path="/signup/mentor" element={<MentorSignup />}/> */}
      </Routes>
    </>
  );
};

export default MainRoutes;
