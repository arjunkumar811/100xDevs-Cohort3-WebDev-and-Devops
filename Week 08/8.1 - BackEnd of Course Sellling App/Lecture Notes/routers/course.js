const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res){
res.json({
 message : "Purchase endpoint",
});
});

courseRouter.get("/preview", function(req, res){
    res.json({
     message : "Purchase endpoint",
    });
    });

    module.exports = {
        courseRouter : courseRouter,
    }