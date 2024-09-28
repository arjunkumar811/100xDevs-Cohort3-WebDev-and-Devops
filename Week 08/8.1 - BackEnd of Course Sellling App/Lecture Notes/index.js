require('dotenv').config()
const express = require("express");
const  mongoose = require("mongoose");
const app = express();
app.use(express.json());

const { userRouter } = require("./routers/user");
const { courseRouter } = require("./routers/course");
const { adminRouter } = require("./routers/admin");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);


async function main(){
await mongoose.connect(process.env.MONGO_URL);
app.listen(3000);
console.log("port 3000 is listening");
}

main();
