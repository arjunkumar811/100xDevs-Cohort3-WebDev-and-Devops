const { Router } = require("express");
const adminRouter = Router();

const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const { JWT_ADMIN_PASSWORD } = require("../config");




adminRouter.post("/signup", adminMiddleware, function(req, res){

    res.json({
    message: "SignUp Done"
});
    
});

adminRouter.post("/signin", function(req, res){
    res.json({
        message: "SignIp Done"
    });
        
    });

adminRouter.post("/course", function(req, res){
    res.json({
            message: "SignUp Done"
     });
            
 });


 adminRouter.put("/course", function(req, res){
    res.json({
        message: "SignUp Done"
    });
        
    });


    adminRouter.delete("/course", function(req, res){
        res.json({
            message: "SignUp Done"
     });
            
});

adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message: "SignUp Done"
    });
        
    });

    module.exports = {
        adminRouter: adminRouter,
    }