import { Request, Response } from 'express';
import express from 'express';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { UserModel } from './db';
import { Jwt } from 'jsonwebtoken';
import mongoose from 'mongoose';




const app = express();
app.use(express.json());



const requireBody = z.object({
    username: z.string().min(5),
    password: z.string().min(5),
    firstName: z.string().min(3),
    lastName: z.string().min(3),
});


app.post("/api/v1/signup", async (req: Request, res: Response): Promise<void> => {
   
const parseDataWithSuccess = requireBody.safeParse(req.body);

if(!parseDataWithSuccess.success) {
    res.status(400).json({
        message: "Incorrect data format",
        error: parseDataWithSuccess.error,
    });
}

const {username, password, firstName, lastName} = req.body;
const hashedPassword = await bcrypt.hash(password, 10);


    try {
   await UserModel.create ({
    username: username,
    password: hashedPassword,
   });

   res.status(200).json({
    message: "User signed up",
   });

}  catch (e) {
    res.status(411).json({
        message: "user already exist",   
   });
}

})  



app.post("/api/v1/signin", (req, res) => {
const username = req.body.username;
const password = req.body.password;
})


app.post("/api/v1/content", (req, res) => {
    
})

app.get("/api/v1/content", (req, res) => {
    
})

app.delete("/api/v1/content", (req, res) => {
    
})



app.post("/api/v1/brain/:share", (req, res) => {
    
})

app.get("/api/v1/brain/:shareLink", (req, res) => {
    
})

app.listen(3000);