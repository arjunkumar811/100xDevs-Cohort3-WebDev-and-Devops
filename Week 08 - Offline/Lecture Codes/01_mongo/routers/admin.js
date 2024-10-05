const express = require("express");
const { AdminModel, CourseModel } = require("../db");

const adminMiddleware = require("../middlewares/admin");

const adminrouter = express.Router();


adminrouter.post("/signup", async function(req, res){
     const username = req.body.username;
     const password = req.body.password;

     const existingAdmin = await AdminModel.findOne({ username });
     
});


adminrouter.post("/courses", function(req, res){

});


adminrouter.get("/courses", function(req, res){

});


module.exports = {
    adminrouter : adminrouter,
}
