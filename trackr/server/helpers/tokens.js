import jwt from "jsonwebtoken";

export const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "7d" });
}