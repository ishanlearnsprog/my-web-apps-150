import {
    Record
} from "../models/index.js";

export const addRecord = async (req, res) => {
    try {
        const { userId, recordData } = req.body;
        let newRecord = await Record.create({
            ...recordData,
            userId,
        });
        newRecord = await newRecord.populate("category account recievingAccount");
        res.status(200).json(newRecord);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteRecord = async (req, res) => {
    try {
        const { recordId } = req.params;
        const deletedRecord = await Record.findByIdAndDelete(recordId);
        res.status(200).json(recordId);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const fetchRecords = async (req, res) => {
    try {
        const { userId } = req.body;
        const records = await Record.find({ userId }).populate("category account recievingAccount").sort({ createdAt: -1 });
        res.status(200).json(records);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}