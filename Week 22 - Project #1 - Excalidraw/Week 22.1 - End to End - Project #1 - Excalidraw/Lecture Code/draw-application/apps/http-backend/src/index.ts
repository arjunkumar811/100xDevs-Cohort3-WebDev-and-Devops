import express from "express"
import jwt from "jsonwebtoken";

import { JWT_SECRET } from '@repo/backend-comman/config';
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from '@repo/comman/types';
import { prismaClient } from "@repo/db/client";



const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

    const ParseData = CreateUserSchema.safeParse(req.body);
if(!ParseData.success) {
    res.json({
        massage: "Incorrect Inputs"
    })
    return;
}
 
try {
await prismaClient.user.create({
    data: {
        email: ParseData.data.email,
        password: ParseData.data.password,
        name: ParseData.data.name
    }
})

    res.json({
        messgae: "you have been signup"
    })
} catch {
    res.status(411).json({
        massage : "User already exist"
    })
}
})



app.post("/signin", function(req, res) {
const username = req.body.username;

const token = jwt.sign({
    username
}, JWT_SECRET)


    res.json({
        token
    })
})



// app.post("/room", middleware, function(req, res) {

//     res.json({
//         messgae: "you have been signup"
//     })
// })*/

app.listen(3001);