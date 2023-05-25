import mongoose, { Schema } from "mongoose";

const schemaProduct = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    prince: {
        type: Number,
        required: true,
    },
    sold: {
        type: Boolean,
        default: false,
    },
    warrantyOfferred: {
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