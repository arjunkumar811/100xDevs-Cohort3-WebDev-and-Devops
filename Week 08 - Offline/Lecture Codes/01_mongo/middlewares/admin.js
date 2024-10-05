const { AdminModel } = require("../db");

function adminMiddleware(req, res, next) {
 const username = req.headers.username;
 const password = req.headers.password;


 AdminModel.findOne({
 username: username,
 password: password,
 });

};