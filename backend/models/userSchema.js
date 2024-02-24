import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain atleast 3 characters!"],
    maxLength: [32, "Name cannot exceed 32 characters!"],
  },
  email: {
    type:String,
    required:true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  phone: {
    type:Number,
    required:true,
  },
  avatar: {
    public_id:{
        type:String
    },
    url:{
        type:String
    }
  },
  education: {
    type:String,
    required:true,
  },
  role: {
    type:String,
    required:true,
    enum:["Reader","Author"]
  },
  password: {
    type:String,
    required:true,
    minLength: [8, "Password must contain atleast 8 characters!"],
    maxLength: [32, "Password cannot exceed 32 characters!"],
  },
  createdOn: {
    type:Date,
    default: Date.now,
  },
});

export const User= mongoose.model("User",userSchema)
