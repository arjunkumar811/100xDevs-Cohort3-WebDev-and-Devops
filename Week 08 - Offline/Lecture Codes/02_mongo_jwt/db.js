const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
username: { type: String, unique: true },
password: { type: String },
});