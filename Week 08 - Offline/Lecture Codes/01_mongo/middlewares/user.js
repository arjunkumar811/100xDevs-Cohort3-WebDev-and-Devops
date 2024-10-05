const { UserModel } = require("../db");


function userMiddleware(req, res, next){
 const username = req.headers.username;
 const password = req.headers.password;

};