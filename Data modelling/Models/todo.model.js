import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      tyor: String,
      require: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], //Array of subtodo
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
