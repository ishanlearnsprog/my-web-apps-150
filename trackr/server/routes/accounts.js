import express from "express";

import {
    fetchAccounts,
    addAccount,
    changeAmount,
    deleteAccount
} from "../controllers/accounts.js"
import requireAuth from "../middlewares/auth.js";

const router = express.Router();

router.get("/account", requireAuth, fetchAccounts);
router.post("/account", requireAuth, addAccount);
router.patch("/account/:accountId", requireAuth, changeAmount);
router.delete("/account/:accountId", requireAuth, deleteAccount);

export default router;