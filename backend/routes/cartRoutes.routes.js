import express from "express";
import { AddToCart,getLength,showingCartList,increaseQuantity,decreaseQuantity } from "../controllers/cartController.js";
import { protectRoute } from "../mildeware/protectRoute.js";
const router = express.Router();

router.post("/addtocart/:_id",protectRoute,AddToCart);
router.get("/getcartLength",protectRoute, getLength);
router.get("/showCartList",protectRoute, showingCartList);
router.patch("/increaseQuantity", protectRoute,increaseQuantity );
router.patch("/decreaseQuantity",protectRoute,decreaseQuantity);
export default router;