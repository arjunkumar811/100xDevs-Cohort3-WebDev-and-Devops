const express = require("express");
const { adminrouter } = require("./routers/admin");
const { userrouter } = require("./routers/user");

app.use("/admin", adminrouter);
app.use("/user", userrouter);

const app = express();

app.listen(3000);