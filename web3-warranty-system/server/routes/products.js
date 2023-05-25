import express from "express";

const router = express.Router();

// Seller
router.post("/product/create", createProduct);
router.patch("/product/edit", editProduct);
router.delete("/product/delete", deleteProduct);
