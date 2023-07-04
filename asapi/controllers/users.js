import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/users.js";

export const signUpUser = async (req, res) => {
    try {
        const { userData } = req.body;

        //check userData
        if (!userData.email || !userData.password) throw Error("INVALID CREDENTIALS");

        //check if user exists
        const existingUser = await User.find({ email: userData.email });
        if (existingUser.length !== 0) throw Error("USER ALREADY EXISTS");

        //create hashed password
        const salt = await bcrypt.genSalt(13);
        const passwordHash = await bcrypt.hash(userData.password, salt);

        //commit new user to db
        const newUser = await User.create({
            email: userData.email,
            password: passwordHash,
        });

        const newUserId = newUser?._id;

        if (newUserId) {

            const accessToken = jwt.sign({ userId: newUserId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
            const refreshToken = jwt.sign({ userId: newUserId }, process.env.REFRESH_TOKEN_SECRET);

            res
                .status(200)
                .cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "None",
                    maxAge: 60 * 60 * 24 * 300,
                })
                .json({ ...newUser._doc, accessToken });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const signInUser = async (req, res) => {
    try {
        const { userData } = req.body;

        //check userData
        if (!userData.email || !userData.password) throw Error("INVALID CREDENTIALS");

        //check if user exists
        const allUsers = await User.find({ email: userData.email });
        if (allUsers.length === 0 || allUsers.length > 1) throw Error("USER DOES NOT EXIST");

        const existingUser = allUsers[0];
        const match = bcrypt.compare(userData.password, existingUser.password);

        if (!match) throw Error("INCORRECT  PASSWORD");

        if (match) {

            const accessToken = jwt.sign({ userId: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
            const refreshToken = jwt.sign({ userId: existingUser._id }, process.env.REFRESH_TOKEN_SECRET);

            res
                .status(200)
                .cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "None",
                    maxAge: 60 * 60 * 24 * 300,
                })
                .json({ ...existingUser._doc, accessToken });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const refreshAccessToken = async (req, res) => {
    try {

        //get refresh token from cookie
        const refreshToken = req.cookies["refreshToken"];
        if (!refreshToken) throw Error("REFRESH TOKEN NOT FOUND");

        const data = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        //check if user exists
        const existingUser = await User.findById(data?.userId);
        if (!existingUser) throw Error("USER NOT FOUND");

        const accessToken = jwt.sign({ userId: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
        const newRefreshToken = jwt.sign({ userId: existingUser._id }, process.env.REFRESH_TOKEN_SECRET);

        res
            .status(200)
            .cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 60 * 60 * 24 * 300,
            })
            .json({ accessToken });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};