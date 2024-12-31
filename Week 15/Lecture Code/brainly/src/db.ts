import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly");

const userSchema = new Schema ({
  username: {type: String, unique: true},
  password: { type: String, required: true },
});

export const UserModel = model("User", userSchema);

const ContentSchema = new Schema ({
  title: String,
  link: String,
  tag: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
  type: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true}

})

export const ContentModel = model("Content", ContentSchema);


const LinkSchema = new Schema(({
  hash: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true , unique: true },
}))


export const LinkModel  = model("Links", LinkSchema)




