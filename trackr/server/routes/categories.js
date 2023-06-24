import express from "express";

import {
    addCategory,
    deleteCategory,
    fetchCategories
} from "../controllers/categories.js";
import requireAuth from "../middlewares/auth.js";

const router = express.Router();

router.get("/category", requireAuth, fetchCategories)
router.post("/category", requireAuth, addCategory);
router.delete("/category/:categoryId", requireAuth, deleteCategory);

export default router;