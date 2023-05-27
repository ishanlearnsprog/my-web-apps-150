import User from "../models/users.js";

const requireBuyer = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) throw Error("AUTHORIZATION TOKEN REQUIRED");
        const { address, role } = JSON.parse(authorization.split(" ")[1]);
        const user = await User.find({ address });
        if (!user) throw Error("USER DOES NOT EXIST");
        if (user.role != role && role != "buyer") throw Error("USER NOT AUTHORIZED");
        req.address = address;
        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

export default requireBuyer;