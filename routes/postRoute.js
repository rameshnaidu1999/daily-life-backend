import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updateById,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/getall", getAllPosts);

router.post("/create", createPost);

router.get("/get/:id", getPostById);

router.delete("/delete/:id", deletePost);

router.put("/update/:id", updateById);

export default router;
