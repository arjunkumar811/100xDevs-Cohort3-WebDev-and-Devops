const jwt = require("jsonwebtoken");

const { JWT_ADMIN_PASSWORD } = require("../config");
const { model } = require("mongoose");


function adminMiddleware(req, res, next){
    const token = req.headers.token;

    try {
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

    req.adminId = decoded.id;

    next();
} catch (error){
      return res.status(403).json({
        message: "You are not yet Signin",
      });
}
}

module.exports = {
    adminMiddleware,
};