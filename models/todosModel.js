import mongoose from "mongoose";

const todos = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    completed: {
      type: Boolean,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("todos", todos);
