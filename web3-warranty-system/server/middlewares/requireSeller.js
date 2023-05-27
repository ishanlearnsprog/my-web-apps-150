import User from "../models/users.js";
import { validateAddress, validateRole } from "../utils/validators.js";

const requireSeller = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) throw Error("AUTHORIZATION TOKEN REQUIRED");
        const { address, role } = JSON.parse(authorization.split(" ")[1]);
        if (!validateAddress(address)) throw Error("FAULTY ADDRESS");
        if (!validateRole(role)) throw Error("FAULTY Role");
        const user = await User.find({ address });
        if (!user) throw Error("USER DOES NOT EXIST");
        if (user.role != role && role != "seller") throw Error("USER NOT AUTHORIZED");
        req.address = address;
        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

export default requireSeller;