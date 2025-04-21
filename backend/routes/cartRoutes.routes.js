import express from "express";
import { AddToCart } from "../controllers/cartController.js";
import { protectRoute } from "../mildeware/protectRoute.js";
const router = express.Router();

router.post("/addtocart/:_id",protectRoute,AddToCart);

export default router;