import express from "express";
import { login, logout, signup, fetchUserByEmail } from "./auth.control.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get('/user/:email', fetchUserByEmail);

export default router;
