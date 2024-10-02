const { Router } = require("express");
const courseRouter = Router();

const { purchaseModel, courseModel } = require("../db");

const { userMiddleware } = require("../middlewares/user");


courseRouter.post("/purchase", userMiddleware, async function(req, res){
  const userId = userId;
  const courseId =req.body.courseId;

  if (!courseId) {
    return res.status(400).json({
        message: "Please provide a courseId", // Error message sent back to the client
    });
}

const existingPurchase = await purchaseModel.findOne({
  courseId: courseId,
  userId: userId,
});

if (existingPurchase) {
  return res.status(400).json({
      message: "You have already bought this course",
  });
}

await purchaseModel.create({
  courseId: courseId, 
  userId: userId,   
});  

res.status(201).json({
  message: "You have successfully bought the course",
});
});

courseRouter.post("/preview", function(req, res){
    res.json({
      message: "preview endpoint"
    });
    });

    module.exports = {
        courseRouter: courseRouter,
    }