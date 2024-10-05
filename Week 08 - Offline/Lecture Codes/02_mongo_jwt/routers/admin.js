const express = require("express");
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const adminMiddleware = require("./middlewares/admin");
const adminRouter = express.Router();

adminRouter.post("/signup", async function(req, res){
const username = req.body.username;
const password = req.body.password;

const existingAdmin = await Admin.findOne({
username: username,
});

if(existingAdmin) {
    return res.status(400).json({
      message: "Admin is already exist",
    });
}

await Admin.create({
    username,
    password,
});

res.status(201).json({
    message: "Admin created successfully", 
});
});

adminRouter.post("/signin", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.findOne({
        username,
        password 
    });

    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        return res.status(200).json({
            token: token, 
        });
    } else {
        return res.status(400).json({
            message: "Incorrect username and password", 
        });
    }
});

adminRouter.post("/courses", adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        price,
    });

    res.status(201).json({
        message: "Course created successfully", // Confirm course creation
        courseId: newCourse._id, 
    });
});


adminRouter.get("/courses", adminMiddleware, async (req, res) => {
    const response = await Course.find({});
});

