import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly");

const userSchema = new Schema ({
  username: {type: String, unique: true},
  password: String
});

export const UserModel = model("User", userSchema);