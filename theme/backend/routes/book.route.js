import express from "express";
import { input, fetchProperties } from "./book.control.js";

const router = express.Router();

router.post("/input", input);

router.get("/data", fetchProperties);

export default router;