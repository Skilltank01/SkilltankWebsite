import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import { StudentUser } from "../Model/Studentuser.js";
import { catchAsyncError } from "./catchAsyncError.js";
import { ProfessionalUser } from "../Model/Professionaluser.js";
import { MentorUser } from "../Model/Mentoruser.js";
import { EmployerUser } from "../Model/Employeruser.js";

export const isstudentAuthenticate = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Not Logged in", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await StudentUser.findById(decoded._id);

  next();
});
export const ProfessionalAuthenticate = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Not Logged in", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await ProfessionalUser.findById(decoded._id);

  next();
});
export const EmployerAuthenticate = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Not Logged in", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await EmployerUser.findById(decoded._id);

  next();
});
export const MentorAuthenticate = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Not Logged in", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await MentorUser.findById(decoded._id);

  next();
});
