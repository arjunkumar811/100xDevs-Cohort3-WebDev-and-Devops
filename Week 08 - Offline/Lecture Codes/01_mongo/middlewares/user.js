const { UserModel } = require("../db");


function userMiddleware(req, res, next){
 const username = req.headers.username;
 const password = req.headers.password;
  
 UserModel.findOne({
    username: username,
    password: password,
 })
 .then(function (error){
   if(user) {
    next();
   }
 });

};