const express = require("express");
const { AdminModel, CourseModel } = require("../db");

const adminMiddleware = require("../middlewares/admin");

const adminrouter = express.Router();


adminrouter.post("/signup", async function(req, res){
     const username = req.body.username;
     const password = req.body.password;

     const existingAdmin = await AdminModel.findOne({ username });

     if(existingAdmin) {
        return res.status(400).json({
            message: "Admin is already exist",
        });
     }

  await AdminModel.create({ username, password });

  res.status(201).json({
    message: "Admin created successfully",
    });
});


adminrouter.post("/courses", adminMiddleware, async function(req, res){
  const { title, description, price } = req.body;

  const newCourse = await CourseModel.create({
    title,
    description,
    price,
  });

  res.status(201).json({
  message : "Course is Created",
  courseId: newCourse._id,
  });
});



adminrouter.get("/courses", function(req, res){
// find all the Courses you have
    CourseModel.find({})
    .then(function (response){
       res.status(200).json({
        courses: response,
       });
    })
});



module.exports = {
    adminrouter : adminrouter,
}
