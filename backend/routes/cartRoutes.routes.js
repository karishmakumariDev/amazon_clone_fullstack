import express from "express";
import { AddToCart,getLength } from "../controllers/cartController.js";
import { protectRoute } from "../mildeware/protectRoute.js";
const router = express.Router();

router.post("/addtocart/:_id",protectRoute,AddToCart);
router.get("/getcartLength",protectRoute, getLength)

export default router;