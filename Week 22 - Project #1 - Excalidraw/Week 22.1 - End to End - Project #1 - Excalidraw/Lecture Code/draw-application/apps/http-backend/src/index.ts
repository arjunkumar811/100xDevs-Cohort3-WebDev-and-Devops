import express from "express";
import jwt  from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";



const app = express();
app.use(express.json());


app.post("/signup", function(req, res) {
const username = req.body.username;
const password = req.body.password;

    res.json({
        message: "You are Signup"
    })
}) 

app.post("/signin", function(req, res) {
    const username = req.body.username;

    if(!username) {
        res.status(400).json({ "user not found" })
    }

    const token = jwt.sign({
        username
    }, JWT_SECRET);
    
    res.json({
        token
    })
})

app.post("/room", middleware, function(req, res) {

    res.json({

    })
})


app.listen(3001);