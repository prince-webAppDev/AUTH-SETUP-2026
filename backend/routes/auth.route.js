import express from "express";
const router = express.Router();
import { registerUser , loginUser , logoutUser , getMe} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewears/verifyToken.middlewear.js";


router.post("/register",registerUser)
router.get("/login",loginUser)
router.get("/logout",logoutUser)
router.get("/me", verifyToken ,getMe)






export default router;