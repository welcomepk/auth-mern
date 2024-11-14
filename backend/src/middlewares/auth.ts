import { NextFunction, Request, Response } from "express"
import { verifyToken } from "@utils/jwt";

interface CustomReq extends Request {
    userId?: string;
}
export function authenticateJWT(req: CustomReq, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.split(" ")[1]
    if (!token) return res.status(401).json({ message: "Access Denied" });
    try {
        const decoded = verifyToken(token);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid Token" });
    }
}