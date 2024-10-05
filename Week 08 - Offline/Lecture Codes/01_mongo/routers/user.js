const express = require("express");
const { UserModel, CourseModel } = require("../db");
const { userMiddleware } = require("../middlewares/user");

const userrouter = express.Router();

userrouter.post("/signup", async function(req, res){
const username = req.body.username;
const password = req.body.password;

const existingUser = await UserModel.findOne({
username,
});

if(existingUser) {
    return res.status(400).json({
    message: "User already exist",
    });
}

await UserModel.create({ username, password });

res.status(201).json({
  message: "User created successfully",
});
});


userrouter.get("/courses", async function(req, res){
   const courses = await CourseModel.findOne({});
  
res.status(200).json({
 courses,
}); 
});


userrouter.post("/courses/:courseId", userMiddleware, async function(req, res){




});

userrouter.get("/purchasedCourses", function(req, res){

});


module.exports = {
    userrouter : userrouter,
}