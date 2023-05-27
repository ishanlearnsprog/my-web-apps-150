import express from "express";

import requireSeller from "../middlewares/requireSeller.js"
import requireBuyer from "../middlewares/requireBuyer.js";

import {
    getProductsOfSeller,
    addProductToProducts,
    activateWarranty,
    getProductsOnSale,
    getBoughtProducts,
    buyProduct,
    claimWarranty,
} from "../controllers/products.js";

const router = express.Router();

router.get("/product", getProductsOnSale);

router.get("/product/listed", requireSeller, getProductsOfSeller);
router.post("/product/add", requireSeller, addProductToProducts);
router.patch("/product/activatewarranty", requireSeller, activateWarranty);

router.get("/product/bought", requireBuyer, getBoughtProducts);
router.patch("/product/buy", requireBuyer, buyProduct);
router.patch("/product/claimwarranty", requireBuyer, claimWarranty);

export default router;