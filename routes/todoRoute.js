import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  getTodosByEmail,
} from "../controllers/todosController.js";

const router = express.Router();

router.post("/create", createTodo);

router.get("/getall", getAllTodos);

router.get("/get", getTodosByEmail);

router.delete("/delete/:id", deleteTodo);

router.get("/get/:id", getTodoById);

export default router;
