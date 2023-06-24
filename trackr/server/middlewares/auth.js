import jwt from "jsonwebtoken";

const requireAuth = async (req, res, next) => {

    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "AUTH TOKEN REQUIRED" });
    }

    const token = authorization.split(" ")[1];

    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);
        req.body.userId = data?.userId;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: "NOT AUTHORIZED" });
    }
}

export default requireAuth;