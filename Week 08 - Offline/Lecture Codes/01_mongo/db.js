const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://itagiarjun123:bassu%40123@cluster0.4gdfr.mongodb.net/01_mongoose");

const  UserSchema = new mongoose.Schema({
   username: { type: String, unique: true },
   password: String,
   purchasedCourses: [
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
     }
   ],
});

const AdminSchema = new mongoose.Schema({
   username: { type: String, unique:true },
   password: String
});

const CourseSchema = new mongoose.Schema({
   title: String,
 description: String,
 price: Number,
});


const Admin = mongoose.model("admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

