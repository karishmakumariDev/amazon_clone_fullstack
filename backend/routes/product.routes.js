import express from "express";

import {postProducts, getProducts} from "../controllers/productController.js";
const router = express.Router();

router.post("/product", postProducts);
router.get("/getproduct", getProducts);

export default router;
