const { model } = require("mongoose");
const { AdminModel } = require("../db");

function adminMiddleware(req, res, next) {
 const username = req.headers.username;
 const password = req.headers.password;


 AdminModel.findOne({
 username: username,
 password: password,
 })
  .then(function (admin) {
    if(admin) {
        next();
    } else {
        res.status(403).json({
           message: "Admin not exist",
        });
    }
 })
 .catch(error => {
    res.status(500).json({
    message: "error",
    error: error,
    });
 })
};


model.exports = {
    adminMiddleware: adminMiddleware,
};
