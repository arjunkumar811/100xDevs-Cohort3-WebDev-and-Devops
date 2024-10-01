const { Router } = require("express");
const userRouter = Router();


userRouter.post("/signup", function(req, res){
res.json({
    message: "SignUp End Point"
});
});

userRouter.post("/signin", function(req, res){
    res.json({
        message: "Signin End Point"
    });
    });


userRouter.post("/purchases", function(req, res){
    res.json({
            message: "purchases End Point"
     });
    });

    module.exports = {
        usrRouter: userRouter,
    }
