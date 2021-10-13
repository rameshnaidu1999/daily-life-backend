import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/getall", getAllPosts);

router.post("/create", createPost);

export default router;
