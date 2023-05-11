import jwt from "jsonwebtoken";

import User from "../models/users.js"

const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.SECRET, { expiresIn: "1d" });
}

export const signInUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signIn(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const signUpUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signUp(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}