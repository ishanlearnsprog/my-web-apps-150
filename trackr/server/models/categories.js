import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parent: {
        type: String,
        default: "none",
    },
    user: {
        type: String,
        default: "all",
    }
})

const Category = mongoose.model("Category", categorySchema);

export default Category;