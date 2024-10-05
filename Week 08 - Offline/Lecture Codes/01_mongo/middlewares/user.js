const { UserModel } = require("../db");


function userMiddleware(req, res, next){
 const username = req.headers.username;
 const password = req.headers.password;
  
 UserModel.findOne({
    username: username,
    password: password,
 })
 .then(function (user){
   if(user) {
    next();
   } else {
    res.status(403).json({
       message: "User Not exixt",
    });
   } 
 })
 .catch(error => {
   res.status(500).json({
   message: "Error",
   error: error,
   });
 });
}

module.exports = {
    userMiddleware: userMiddleware,
};