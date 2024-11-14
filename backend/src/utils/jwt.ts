import jwt from "jsonwebtoken";
import { IUser } from "../models/User";
import { config } from "../config";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

export function generateAccessToken(user: IUser) {
    return jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: process.env.JWT_EXPIRATION });
}

export function generateRefreshToken(user: IUser) {
    return jwt.sign({ id: user._id }, config.jwtRefreshSecret, { expiresIn: process.env.JWT_REFRESH_EXPIRATION });
}

export function verifyToken(token: string, isRefresh: boolean = false): any {
    return jwt.verify(token, isRefresh ? config.jwtRefreshSecret : config.jwtSecret)
}