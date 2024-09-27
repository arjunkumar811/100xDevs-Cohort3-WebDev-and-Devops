// Import mongoose to communicate with MongoDB
const mongoose = require("mongoose");

// Use Schema and ObjectId from mongoose for creating models
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define the User schema of email, password and name
const User = new Schema({
    email: {type: String, unique: true}, // Make email unique to avoid duplicate entries
    password: String,
    name: String,
});

// Define the Todo schema of title, done and userId
const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId,
});

// Create Monggose models for users and todos collection using the User and Todo schemas
const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

// Export the User and Todo models for use in other files
module.exports = {
    UserModel,
    TodoModel,
};