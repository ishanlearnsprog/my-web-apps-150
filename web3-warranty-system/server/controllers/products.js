import mongoose from "mongoose";
import Product from "../models/products.js";

export const getProductsOfSeller = async (req, res) => {
    try {
        const address = req.address;
        const products = await Product.find({ "seller": address }).sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const addProductToProducts = async (req, res) => {
    try {
        const address = req.address;
        const { data } = req.body;
        const product = await Product.create({ ...data, "seller": address });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const activateWarranty = async (req, res) => {
    try {
        const { productId, warrantyTokenId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(productId)) throw Error("PRODUCT NOT FOUND");
        const product = await Product.findByIdAndUpdate(productId, { "warrantyActive": true, ...data }, { new: true });
        if (!product) throw Error("PRODUCT NOT FOUND");
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getProductsOnSale = async (req, res) => {
    try {
        const products = await Product.find({ sold: "false" }).sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getBoughtProducts = async (req, res) => {
    try {
        const address = req.address;
        const products = await Product.find({ "buyer": address, "sold": true });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

export const buyProduct = async (req, res) => {
    try {
        const address = req.address;
        const { productId } = req.body
        if (!mongoose.Types.ObjectId.isValid(productId)) throw Error("PRODUCT NOT FOUND");
        const product = await Product.findByIdAndUpdate(productId, { "buyer": address, "sold": true }, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const claimWarranty = async (req, res) => {
    try {
        const { productId, data } = req.body;
        if (!mongoose.Types.ObjectId.isValid(productId)) throw Error("PRODUCT NOT FOUND");
        const product = await Product.findByIdAndUpdate(productId, { "warrantyRequested": true, ...data }, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}