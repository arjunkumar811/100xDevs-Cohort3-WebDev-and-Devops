const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const JWT_SECRET = "Arjun"
app.use(express.json());
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://itagiarjun123:bassu%40123@cluster0.4gdfr.mongodb.net/todo-database")

app.post("/signup", async function(req, res){
const email = req.body.email;
const password = req.body.password;
const name = req.body.name;

await UserModel.create({
    email : email,
    password : password,
    name : name
});

 res.json({
    message: "Successfully SignUp"
 })
});

app.post("/signin",async function(req, res){
const email = req.body.email;
const password = req.body.password;

 const user = await UserModel.findOne({
    email: email,
    password: password
})

if(user){
    const token = jwt.sign({
    id: user._id
    }, JWT_SECRET);


    res.json({
        message: "Signin successful",
        token: token 
    });

} else {
    res.json({
        message:"Not Signin"
    })
}

});



app.get("/todo", auth, function(req, res){
const userId = req.userId;

res.json({
    userId : userId
})

});



app.get("/todos", auth, function(req, res){
    const userId = req.userId;

    res.json({
        userId : userId
    })
    
});


app.listen(3001);


// Export the auth middleware
module.exports = auth;