const express = require("express");
const adminrouter = express.Router();


adminrouter.post("/signup", function(req, res){

});


adminrouter.post("/courses", function(req, res){

});


adminrouter.get("/courses", function(req, res){

});


module.exports = {
    adminrouter : adminrouter,
}