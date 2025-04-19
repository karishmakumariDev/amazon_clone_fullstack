import express from "express";
import {registerUser,loginUser,getUserId} from "../controllers/authController.js"
const router = express.Router();


router.post("/register", registerUser);
router.post("/login",loginUser);
router.get("/getUserId/:_id", getUserId);
//router.post("/addToCar", produntAddTocart);
export default router;