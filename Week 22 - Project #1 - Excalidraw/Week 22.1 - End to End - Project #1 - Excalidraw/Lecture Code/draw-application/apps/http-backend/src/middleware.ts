import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "@repo/backend-comman/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"]?.split(" ")[1] ?? ""; 

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
     //@ts-ignore
        req.email = decoded.email; 
        next(); 
    } catch (error) {
        res.status(403).json({
            message: "Unauthorized",
        });
    }
}
