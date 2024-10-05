const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://itagiarjun123:bassu%40123@cluster0.4gdfr.mongodb.net/01_mongoose");

const  UserSchema = new mongoose.Schema({
   username: { type: String, unique: true },
   password: String
});
