import express from "express";

const router = express.Router();

router.post("/account/add", addAccount);
router.patch("/account/amount", changeAmount),
    router.delete("/account/delete", deleteAccount);