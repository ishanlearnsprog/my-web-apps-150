import { Category, Record } from "../models/index.js";

export const addCategory = async (req, res) => {
    try {
        const { userId, categoryData } = req.body;
        const newCategory = await Category.create({
            ...categoryData,
            userId,
        })
        res.status(200).json(newCategory);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const recordsWithCategory = await Record.find({ categoryId });
        if (recordsWithCategory.length != 0)
            throw Error("RECORD WITH CATEGORY EXISTS");
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json(categoryId);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const fetchCategories = async (req, res) => {
    try {
        const { userId } = req.body;
        const categories = await Category.find({ $or: [{ user: { $eq: "all" } }, { user: { $eq: userId } }] });
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}