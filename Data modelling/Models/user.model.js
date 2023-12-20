// Import Mongoose
import mongoose from "mongoose";

//Use New keyword & and make schema
const userSchema = new mongoose.Schema(
  {
    //   username: String,
    //   email: String,
    //   isActive: Boolean,

    username: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

//export
export const User = mongoose.model("User", userSchema);
