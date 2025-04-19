import express from "express";
//import { protectRoute } from "../mildeware/protectRoute.js";
import {postProducts, getProducts,getProductById} from "../controllers/productController.js";
const router = express.Router();

router.post("/product", postProducts);
router.get("/getproduct", getProducts);
router.get("/getproduct/:_id", getProductById);
export default router;
