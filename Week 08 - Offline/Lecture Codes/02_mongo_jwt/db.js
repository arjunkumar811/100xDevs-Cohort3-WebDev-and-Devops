const mongoose = require("mongoose");
import { model } from './node_modules/mongoose/types/index.d';

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


const CourseSchema = new mongoose.Schema({
title: String,
description: String,
price: Number,
});

const Admin = monggose.model("Admin", AdminSchema);
const User = monggose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);
