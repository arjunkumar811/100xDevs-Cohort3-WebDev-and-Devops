import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly");

const userSchema = new Schema ({
  username: {type: String, unique: true},
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

export const UserModel = model("User", userSchema);

const ContentSchema = new Schema ({
  title: String,
  link: String,
  tag: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
  UserId: {type: mongoose.Types.ObjectId, ref: 'User', require: true}

})

export const ContentModel = model("Content", ContentSchema);





