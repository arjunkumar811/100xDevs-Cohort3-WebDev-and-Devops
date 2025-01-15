import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "@repo/backend-comman/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"]?.split(" ")[1] ?? ""; 

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { username: string };
     //@ts-ignore
        req.username = decoded.username; 
        next(); 
    } catch (error) {
        res.status(403).json({
            message: "Unauthorized",
        });
    }
}
