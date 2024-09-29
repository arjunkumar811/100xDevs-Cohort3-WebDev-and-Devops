const { Router } = require("express");
const adminRouter = Router();
const{ adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require('../middleware/admin');


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

    const admin = await adminModel.findOne({
        email: email,
        password: password
     });
    
     if(admin){
        const token = jwt.sign({
            id: admin._id
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

        const { title, description, price, imageUrl } = req.body;

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

    adminRouter.put("/course", adminMiddleware, async function(req, res){
        const adminId = req.userId;

        const { title, description, price, imageUrl,creatorId } = req.body;

        const course = await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        }, 
        {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        })
 
        res.json({
           message : "course created",
           courseId: course._id
        });
    })
       


    adminRouter.get("/bulk", adminMiddleware, async function(req, res){
        const adminId = req.userId;

        const course = await courseModel.find({
            creatorId: adminId
        }); 
    
        res.json({
           message : "courses you Have",
           courses
        });
    });
    
    module.exports = {
        adminRouter: adminRouter
    }