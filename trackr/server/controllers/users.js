import bcrypt from "bcrypt";

import { User, Account, Record } from "../models/index.js";
import { createToken } from "../helpers/tokens.js";
import { checkEmail } from "../helpers/validators.js";

export const signUpUser = async (req, res) => {
    try {
        const { userData } = req.body;
        if (!checkEmail(userData.email)) throw Error("INVALID EMAIL");

        const exists = await User.find({ email: userData.email });
        if (exists.length !== 0) throw Error("EMAIL ALREADY IN USE");

        const salt = await bcrypt.genSalt(13);
        const hash = await bcrypt.hash(userData.password, salt);

        const user = await User.create({
            firstName: userData.firstName,
            lastName: userData?.lastName,
            email: userData.email,
            password: hash
        });

        await Account.create({
            name: "Cash",
            type: "Cash",
            initialAmount: 0,
            userId: user._id
        });

        const token = createToken(user._id);

        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user?.lastName,
            email: user.email,
            token: token
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const signInUser = async (req, res) => {
    try {
        const { userData } = req.body;

        if (!checkEmail(userData.email)) throw Error("INVALID EMAIL");

        const exists = await User.findOne({ email: userData.email });
        if (exists.length === 0) throw Error("EMAIL DOES NOT EXISTS");

        const match = bcrypt.compare(userData.password, exists.password);
        if (!match) throw Error("INCORRECT PASSWORD");

        const token = createToken(exists._id);

        res.status(200).json({
            _id: exists._id,
            firstName: exists.firstName,
            lastName: exists?.lastName,
            email: exists.email,
            token: token
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const changeName = async (req, res) => {
    try {
        const { userId, userData } = req.body;
        const user = await User.findOneAndUpdate({ _id: userId }, { firstName: userData.firstName, lastName: userData.lastName }, { new: true });
        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user?.lastName,
            email: user.email,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteAccount = async (req, res) => {
    try {
        const { userId } = req.body;
        await Record.deleteMany({ userId });
        await Account.deleteMany({ userId });
        await User.deleteMany({ _id: userId });
        res.status(200).json(userId);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}