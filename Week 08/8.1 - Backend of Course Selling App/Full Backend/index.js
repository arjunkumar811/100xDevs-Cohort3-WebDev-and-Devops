const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { userRouter } = require("./router/user");
const { courseRouter } = require("./router/course");
const { adminRouter } = require("./router/admin");

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);


app.listen(3000);