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
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        await User.updateOne(
            { username }, 
            { "$push": { purchasedCourses: courseId } }
        );
    } catch (err) { 
     return res.status(400).json({
            message: "Course purchase failed",
            error: err.message,
        });
    }
    res.status(200).json({
        message: "Course purchased successfully",
    });
});

userrouter.get("/purchasedCourses", userMiddleware, async function(req, res){

    const user = await User.findOne({ username: req.headers.username });

    const courses = await Course.find({
        _id: { "$in": user.purchasedCourses }
    });

    res.status(200).json({ courses });
});


module.exports = {
    userrouter : userrouter,
};