const express = require("express");
const mongoose = require("mongoose");


const { userRouter } = require("./router/user");
const { courseRouter } = require("./router/course");
const { adminRouter } = require("./router/admin");

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);


app.use(express.json());


async function main(){
    try{
        await mongoose.connect("process.env.MONGODB_URL");
        
        console.log("Connected to the database");

        app.listen(PORT, () => {
            console.log("Server is running on port" + PORT);
        });
    } catch (error){
        console.error("Failed to connect to the database", error);
    }
}


main();