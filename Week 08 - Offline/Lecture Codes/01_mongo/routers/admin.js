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


adminrouter.post("/courses", function(req, res){

});


adminrouter.get("/courses", function(req, res){

});


module.exports = {
    adminrouter : adminrouter,
}
