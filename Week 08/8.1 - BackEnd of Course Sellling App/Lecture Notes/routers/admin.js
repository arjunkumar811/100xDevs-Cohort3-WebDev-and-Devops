const { Router } = require("express");
const adminRouter = Router();
const{ adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");


adminRouter.post("/signup", async function(req, res){
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
     })

res.json({
 message : "SignUp endpoint",
});
});

adminRouter.post("/signin", async function(req, res){
    const { email, password } = req.body;

    const user = await adminModel.findOne({
        email: email,
        password: password
     });
    
     if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_ADMIN_PASSWORD);
    
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

    adminRouter.post("/course", adminMiddleware, async function(req, res){
        const adminId = req.userId;

        const { title, description, price, imageUrl,creatorId } = req.body;

        const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
        });

        res.json({
           message : "course created",
           courseId: course._id
        });
    });

    adminRouter.put("/course", function(req, res){
        res.json({
           message : "course endpoint",
        });
    });

    adminRouter.get("/bulk", function(req, res){
        res.json({
           message : "course endpoint",
        });
    });

    module.exports = {
        adminRouter: adminRouter
    }