const { Router } = require("express");
const adminRouter = Router();

const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const { JWT_ADMIN_PASSWORD } = require("../config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");


adminRouter.post("/signup", adminMiddleware, async function(req, res){
    const requireBody = zod.object({
        email: zod.string().email().min(5),
        password: zod.string().min(5), 
        firstName: zod.string().min(3), 
        lastName: zod.string().min(3), 
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        return res.json({
         message: "Incorrect Data",
         error: parseDataWithSuccess.error,
        });
    }

    const { email, password, firstName, lastName } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
try {
    await adminModel.create({
       email,
       password,
       firstName,
       lastName,
    });
} catch (erroe) {
    return res.status(400).json({
      message: "You are already signup",
    });
}


res.status(201).json({
    message: "SignUp Done"
});  
});

adminRouter.post("/signin", adminMiddleware, async function(req, res){
    const requireBody = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);
    if(!parseDataWithSuccess) {
        return res.json({
            message: "Incorrect data",
            error: parseDataWithSuccess.error,
        });
    }

    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
    });

    if(!admin) {
        return res.status(403).json({
        message: "Invalid Credentials",
        });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if(passwordMatch) {
        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);

        res.status(200).json({
            token: token,
        });
    } else {
        return res.status(403).json({
           message: "Invalid Credentials",
        });
    }
    res.json({
        message: "SignIp Done"
    });
});

adminRouter.post("/course", adminMiddleware, async function(req, res){
    const adminId = req.adminId;

    const requireBody = zod.object({
     title: zod.string().min(3),
     description: zod.string().min(10),
     price: zod.number().positive(),
    });
    
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if(!parseDataWithSuccess) {
        return res.json({
            messgae: "Incorrect Data Format",
            error: parseDataWithSuccess.error,
        });
    }

    const { title, description, price } = req.body;

    const course = await courseModel.create({
       title,
       description,
       price,
       creatorId: adminId,
    });
  
    res.status(201).json({
        message: "Course created!",
        courseId: course._id,
    });
});

 adminRouter.put("/course", adminMiddleware, async function(req, res){
    const requireBody = zod.object({
     courseId: zod.string().min(5),
     title: zod.string().min(3).optional(),
     description: zod.string().min(5).optional(),
     price: zod.number().positive().optional(),
    });

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if(!parseDataWithSuccess) {
        return res.json({
        message: "Incorrect Data",\
        error: parseDataWithSuccess.error,
        });
    }

    const { courseId, title, description, price } = req.body;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId,
    });

    if(!course) {
        return res.status(404).json({
            message: "Course Not found",
        });
    }

    await courseModel.updateOne(
     {
        _id: courseId,
        creatorId: adminId,
     },
      {
        title: title || course.title, 
        description: description || course.description,
        imageUrl: imageUrl || course.imageUrl,
        price: price || course.price,
       }
    );
    
    res.status(200).json({
        message: "Course updated",
    });   
});


adminRouter.delete("/course", adminMiddleware, async  function(req, res){
       const adminId = req.adminId;
       
       const 
     
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