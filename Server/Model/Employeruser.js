import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
  firstName: {
    type: "string",
    required: [true, "Please enter Your First Name"],
  },
  lastName: {
    type: "string",
    required: [true, "Please enter Your  last Name"],
  },
  email: {
    type: "string",
    required: [true, "Please enter Your Email"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: "string",
    required: [true, "Please enter Your Password"],
    minLength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  mobile: {
    type: "string",
    required: [true, "Please enter Your MobileNo."],
    minLength: [10, "MobileNo must be at least 10 characters"],
    select: false,
  },
  collegeName: {
    type: "string",
    required: [true, "Please enter Your  collegeName"],
  },
  city: {
    type: "string",
    required: [true, "Please enter Your  city"],
  },
  companyName: {
    type: "string",
    required: [true, "Please enter Your  companyName"],
  },
  position: {
    type: "string",
    required: [true, "Please Select Your  position"],
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};
schema.methods.comparePassword = async function (password) {
  console.log(this.password);
  return await bcrypt.compare(password, this.password);
};

export const EmployerUser = mongoose.model("EmployerUser", schema);
