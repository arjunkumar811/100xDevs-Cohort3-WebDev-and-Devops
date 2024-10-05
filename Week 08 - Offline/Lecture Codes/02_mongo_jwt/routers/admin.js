const express = require("express");
const { Admin } = require("../db");
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

userRouter.post("/signin", function(req, res){

});