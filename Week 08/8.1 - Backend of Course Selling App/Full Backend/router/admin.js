const { Router } = require("express");
const adminRouter = Router();

const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const { JWT_ADMIN_PASSWORD } = require("../config");




adminRouter.post("/signup", adminMiddleware, function(req, res){
    const requireBody = zod.object({
        email: zod.string().email().min(5), // Email must be a valid format and at least 5 characters
        password: zod.string().min(5), // Password must be at least 5 characters
        firstName: zod.string().min(3), // First name must be at least 3 characters
        lastName: zod.string().min(3), // Last name must be at least 3 characters
    });

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