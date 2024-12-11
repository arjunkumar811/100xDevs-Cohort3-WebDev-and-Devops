
import { Request, Response } from 'express';
import express from 'express';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { UserModel } from './db';
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
const JWT_Token_pass = 'arjunkumar';



const app = express();
app.use(express.json());



app.post("/api/v1/signup", async (req: Request, res: Response): Promise<void> => {
   
    const requireBody = z.object({
        username: z.string().min(5),
        password: z.string().min(5),
        firstName: z.string().min(3),
        lastName: z.string().min(3),
    });
    


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





app.post("/api/v1/signin", async (req: Request, res: Response): Promise<void> => {
const requireBody = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

const parseDataWithSuccess = requireBody.safeParse(req.body);

if(!parseDataWithSuccess) {
     res.status(400).json({
        message: "Incorrect Cridential",
    });
    return;
}

const {username, password} = req.body;

const Find = await UserModel.findOne({
    username
});

if(!Find) {
     res.status(403).json({
        message: "Invalid Credentials!",
    });
    return;
}

const passwordMatch = await bcrypt.compare(password, Find.password);

if (!passwordMatch) {
   res.status(403).json({
        message: "Invalid Credentials!",
    });
    return;
}

if (passwordMatch) {
    const token = jwt.sign({
        id: Find._id
    }, JWT_Token_pass as string,
);
// { expiresIn: "1h" }
    res.status(200).json({
        token,
    });
} else {
    res.status(403).json({
        message: "Invalid Credentials!",
});
}

});


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