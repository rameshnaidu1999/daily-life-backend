import mongoose from "mongoose";

const posts = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    postImageUrl: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("posts", posts);
