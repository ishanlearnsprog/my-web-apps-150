import User from "../models/users.js"
import { validateAddress, validateRole } from "../utils/validators.js";

export const signUpUser = async (req, res) => {
    const { address, role } = req.body;
    try {
        if (!validateAddress(address)) throw Error("INCORRECT ADDRESS");
        if (!validateRole(role)) throw Error("INCORRECT ROLE");
        const exists = await User.findOne({ address });
        if (exists) throw Error("USER ALREADY EXISTS");
        const user = await User.create({ address, role });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const signInUser = async (req, res) => {
    const { address } = req.body;
    try {
        if (!validateAddress(address)) throw Error("INCORRECT ADDRESS");
        const user = await User.findOne({ address });
        if (!user) throw Error("USER NOT FOUND");
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}