import express from "express";
import {
  studentlogin,
  studentlogout,
  studentregister,
  getstudentProfile,
} from "../Controller/studentController.js";
import {
  professionallogin,
  professionallogout,
  professionalregister,
  getprofessionalProfile,
} from "../Controller/professionalController.js";
import {
  Employerlogin,
  Employerlogout,
  Employerregister,
  getemployerProfile,
} from "../Controller/EmployerController.js";
import {
  Mentorlogin,
  Mentorlogout,
  Mentorregister,
  getmentorProfile,
} from "../Controller/MentorController.js";

import {
  isstudentAuthenticate,
  ProfessionalAuthenticate,
  EmployerAuthenticate,
  MentorAuthenticate,
} from "../Middleware/auth.js";

const router = express.Router();

// Routes for Student
router.route("/student/register").post(studentregister);
router.route("/student/login").post(studentlogin);
router.route("/student/logout").get(studentlogout);
router.route("/studentprofile").get(isstudentAuthenticate, getstudentProfile);

// Routes for Professional
router.route("/professional/register").post(professionalregister);
router.route("/professional/login").post(professionallogin);
router.route("/professional/logout").get(professionallogout);
router
  .route("/professionalprofile")
  .get(ProfessionalAuthenticate, getprofessionalProfile);

// Routes for Employer
router.route("/employer/register").post(Employerregister);
router.route("/employer/login").post(Employerlogin);
router.route("/employer/logout").get(Employerlogout);
router.route("/employerprofile").get(EmployerAuthenticate, getemployerProfile);

// Routes for Mentor
router.route("/mentor/register").post(Mentorregister);
router.route("/mentor/login").post(Mentorlogin);
router.route("/mentor/logout").get(Mentorlogout);
router.route("/mentorprofile").get(MentorAuthenticate, getmentorProfile);

export default router;
