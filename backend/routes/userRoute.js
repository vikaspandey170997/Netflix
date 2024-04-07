import express from "express";
import { Login, Register, Logout } from "../controllers/User.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

// router.route("/logout").get(Logout);

export default router;