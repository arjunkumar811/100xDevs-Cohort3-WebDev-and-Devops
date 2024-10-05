const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");


function userMiddleware(req, res, next) {
 const token = req.headers.authorization;

 const words = token.split(" "); 
 const jwtToken = words[1];
};