import bcrypt from "bcrypt";

import { User, Account } from "../models/index.js";
import { createToken } from "../helpers/tokens.js";
import { checkEmail } from "../helpers/validators.js";

export const signUpUser = async (req, res) => {
    try {
        const { userData } = req.body;
        if (!checkEmail(userData.email))
            throw Error("INVALID EMAIL")

        const exists = await User.find({ email: userData.email });
        if (exists.length !== 0)
            throw Error("EMAIL ALREADY IN USE");

        const salt = await bcrypt.genSalt(13);
        const hash = await bcrypt.hash(userData.password, salt);

        const user = await User.create({
            firstName: userData.firstName,
            lastName: userData?.lastName,
            email: userData.email,
            password: hash
        })

        const defaultAccount = await Account.create({
            name: "Cash",
            type: "Cash",
            amount: 0,
            user: user._id
        })

        const token = createToken(user._id);

        res.status(200).json({ _id: user._id, firstName: user.firstName, lastName: user?.lastName, email: user.email, token: token })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const signInUser = async (req, res) => {

}