import express from "express";
import {
  getMyProfile,
  login,
  logout,
  register,
} from "../Controller/userController.js";
import { isAuthenticated } from "../Middleware/auth.js";
import singleUpload from "../Middleware/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);

export default router;
