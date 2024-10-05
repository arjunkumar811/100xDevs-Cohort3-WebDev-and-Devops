const express = require("express");

const userrouter = express.Router();

userrouter.post("/signup", function(req, res){

});


userrouter.get("/courses", function(req, res){

});


userrouter.post("/courses/:courseId", function(req, res){

});

userrouter.get("/purchasedCourses", function(req, res){

});


module.exports = {
    userrouter : userrouter,
}