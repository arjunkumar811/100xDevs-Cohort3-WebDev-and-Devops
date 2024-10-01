const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
   title: String,
   discription: String,
   price: Number,
   creatorId: ObjectId,
});

const purchaseSchema = new Schema({
   userId: ObjectId,
   courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = monggose.model("course", courseSchema);
const purchaseModel = monggose.model("purchase", purchaseSchema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};