import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connDB from "./db/connDB.js";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import bookRoutes from "./routes/book.route.js";

const app = express()

dotenv.config();

const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/property", bookRoutes);

app.listen(PORT, () => {
    connDB();
	console.log(`Server Running on port ${PORT}`);
});