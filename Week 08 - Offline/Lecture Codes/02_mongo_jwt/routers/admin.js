const express = require("express");
const { Admin } = require("../db");
const userRouter = express.Router();

userRouter.post("/signup", async function(req, res){
const username = req.body.username;
const password = req.body.password;

const existingAdmin = await Admin.findOne({
username: username,
});

});

userRouter.post("/signin", function(req, res){

});