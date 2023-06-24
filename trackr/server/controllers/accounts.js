import { Account, Record } from "../models/index.js";

export const addAccount = async (req, res) => {
    try {
        const { userId, accountData } = req.body;
        const account = await Account.create({
            name: accountData.name,
            type: accountData.type,
            initialAmount: accountData.initalAmount,
            userId
        })
        res.status(200).json(account);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const changeAmount = async (req, res) => {
    try {
        const { accountId } = req.params;
        const { userId, accountData } = req.body;
        if (accountData.changeType === "adjust") {
            const account = await Account.findOne({ _id: accountId });
            let paymentType;
            let recordAmount;
            if (+account.initialAmount > +accountData.initialAmount) {
                paymentType = "expense";
                recordAmount = +account.initialAmount - +accountData.initialAmount;
            } else {
                paymentType = "income";
                recordAmount = +accountData.initialAmount - +account.initialAmount;
            }
            await Record.create({
                paymentType,
                amount: recordAmount,
                category: "adjustment",
                accountId,
                userId
            })
        }
        const newAccount = await Account.findOneAndUpdate({ _id: accountId }, { initialAmount: accountData.initialAmount }, { new: true });
        res.status(200).json(newAccount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const fetchAccounts = async (req, res) => {
    try {
        const { userId } = req.body;
        const accounts = await Account.find({ userId });
        res.status(200).json(accounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteAccount = async (req, res) => {
    try {
        const { accountId } = req.params;
        await Record.deleteMany({ accountId });
        await Account.deleteMany({ _id: accountId });
        res.status(200).json(accountId);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}