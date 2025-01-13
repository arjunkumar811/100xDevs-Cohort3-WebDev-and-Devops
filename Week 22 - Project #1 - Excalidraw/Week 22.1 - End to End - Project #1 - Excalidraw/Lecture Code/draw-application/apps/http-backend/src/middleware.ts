import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

interface Request {
    username? : string;
}

export function middleware(req:Request, res:Response, next:NextFunction){
    //@ts-ignore
    const token = req.headers["authorization"] ?? "";

const decoded = jwt.verify(token, JWT_SECRET) as {username: string};

if(decoded) {
    req.username = decoded.username;
    next();
} else {
    //@ts-ignore
res.status(403).json({
    message: "Unauthorized"
})

}


}