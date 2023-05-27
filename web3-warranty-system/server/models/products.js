import mongoose from "mongoose";

const schemaProduct = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    seller: {
        type: String,
        required: true,
    },
    buyer: {
        type: String,
        default: "",
    },
    sold: {
        type: Boolean,
        default: false,
    },
    warrantyOffered: {
        type: Boolean,
        default: false,
    },
    warrantyPeriodInYears: {
        type: Number,
        default: 0,
    },
    warrantyPeriodInMonths: {
        type: Number,
        default: 0,
    },
    warrantyActive: {
        type: Boolean,
        default: false,
    },
    warrantyTokenId: {
        type: Number
    },
    warrantyRequested: {
        type: Boolean,
        default: false,
    },
    warrantyIssue: {
        type: String,
        default: "",
    }
}, { timestamps: true });

const Product = mongoose.model("Product", schemaProduct);

export default Product;