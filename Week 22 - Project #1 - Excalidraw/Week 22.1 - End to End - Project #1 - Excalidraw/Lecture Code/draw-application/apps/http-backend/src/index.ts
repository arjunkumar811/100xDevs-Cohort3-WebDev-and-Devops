import express from "express"
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();
app.use(express.json());

app.post("/signup", function(req, res) {
const username = req.body.username;
const password = req.body.password;

    res.json({
        messgae: "you have been signup"
    })
})


app.post("/signin", function(req, res) {
const username = req.body.username;

const token = jwt.sign({
    username
}, JWT_SECRET)


    res.json({
        token
    })
})



app.post("/room", middleware, function(req, res) {

    res.json({
        messgae: "you have been signup"
    })
})