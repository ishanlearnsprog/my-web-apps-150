import express from "express";

import {
    fetchRecords,
    addRecord,
    deleteRecord,
    // changeAmount,
} from "../controllers/records.js"
import requireAuth from "../middlewares/auth.js";

const router = express.Router();

router.get("/record", requireAuth, fetchRecords);
router.post("/record", requireAuth, addRecord);
router.delete("/record/:recordId", requireAuth, deleteRecord);

export default router;