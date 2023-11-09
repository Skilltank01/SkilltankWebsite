import { catchAsyncError } from "../Middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { EmployerUser } from "../Model/Employeruser.js";
import { sendToken } from "../utils/sendToken.js";

export const Employerregister = catchAsyncError(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    mobile,
    collegeName,
    city,
    companyName,
    position,
  } = req.body;

  if (!email || !password || !firstName || !lastName)
    return next(new ErrorHandler("Please enter all the required fields", 400));

  let user = await EmployerUser.findOne({ email });
  if (user) return next(new ErrorHandler("User is already registered", 409));

  user = await EmployerUser.create({
    firstName,
    lastName,
    email,
    password,
    mobile,
    collegeName,
    city,
    companyName,
    position,
  });

  sendToken(res, user, "Registered Successfully", 201);
});

export const Employerlogin = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter all the required fields", 400));

  const user = await EmployerUser.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Incorrect email or password", 401));

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return next(new ErrorHandler("Incorrect email or password", 401));

  sendToken(res, user, `Welcome back ${user.firstName}`, 200);
});

export const Employerlogout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

export const getemployerProfile = catchAsyncError(async (req, res, next) => {
  const user = await EmployerUser.findById(req.user._id).select("-password");

  res.status(200).json({
    success: true,
    user,
  });
});
