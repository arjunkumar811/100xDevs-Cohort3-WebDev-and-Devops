const { Router } = require("express");
const courseRouter = Router();

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