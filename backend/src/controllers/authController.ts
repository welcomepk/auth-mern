import { Request, Response, NextFunction } from "express";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import User from "../models/User";

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.status(201).json({ accessToken, refreshToken });
}

export const login = async (req: Request, res: Response): Promise<Response | undefined> => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user || !(await user.comparePassword(password))) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return res.status(201).json({ accessToken, refreshToken });
}