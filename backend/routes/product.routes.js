import express from "express";

import {postProducts, getProducts} from "../controllers/productController.js";
const router = express.Router();

router.post("/product", postProducts);
router.get("/getproduct", getProducts);
//router.get("/getProduct/:id",getproductid);
export default router;
