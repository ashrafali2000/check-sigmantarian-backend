import express from "express";
import { getUserData } from "../controllers/user.js";
const router = express.Router();
router.get("/getUserData", getUserData);

export default router;
