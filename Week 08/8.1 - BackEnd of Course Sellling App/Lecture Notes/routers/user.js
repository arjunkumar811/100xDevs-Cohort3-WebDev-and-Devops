const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");


userRouter.post("/signup", async function(req, res){
   const { email, password, firstName, lastName } = req.body;

  await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
   })

   res.json({
    message : "SignUp endpoint",
});
});

userRouter.post("/signin", async function(req, res){
 const { email, password } = req.body;

 const user = await userModel.findOne({
    email: email,
    password: password
 });

 if(user){
    const token = jwt.sign({
        id: user._id
    }, JWT_USER_PASSWORD);

    res.json({
        token: token
    });
 } else {
    res.status(403).json({
        message: "Incorrect credencial"
    })
 }

res.json({
 message : "SignIN endpoint",
});
});

userRouter.get("/purchases", function(req, res){
res.json({
 message : "purchases endpoint"
});
});

module.exports = {
    userRouter : userRouter,
}