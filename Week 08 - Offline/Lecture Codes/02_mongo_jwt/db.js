const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
username: { type: String, unique: true },
password: { type: String },
});

const UserSchema = new monggose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Course",
        },
    ],
});
