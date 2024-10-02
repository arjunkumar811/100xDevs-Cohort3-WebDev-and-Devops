const { Router } = require("express");
const courseRouter = Router();

const { purchaseModel, courseModel } = require("../db");

const { userMiddleware } = require("../middlewares/user");



courseRouter.post("/purchase", function(req, res){
res.json({
  message: "Purchase endpoint"
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