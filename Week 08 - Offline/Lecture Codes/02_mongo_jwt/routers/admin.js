const express = require("express");
const { Admin } = require("../db");
const { JWT_SECRET } = require("../config");
const userRouter = express.Router();

userRouter.post("/signup", async function(req, res){
const username = req.body.username;
const password = req.body.password;

const existingAdmin = await Admin.findOne({
username: username,
});

if(existingAdmin) {
    return res.status(400).json({
      message: "Admin is already exist",
    });
}

await Admin.create({
    username,
    password,
});

res.status(201).json({
    message: "Admin created successfully", 
});
});

userRouter.post("/signin", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({
        username,
        password 
    });

    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        return res.status(200).json({
            token: token, 
        });
    }

});