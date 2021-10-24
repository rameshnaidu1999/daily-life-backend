import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  getTodosByEmail,
  updateTodoById,
} from "../controllers/todosController.js";

const router = express.Router();

router.post("/create", createTodo);

router.get("/getall", getAllTodos);

router.get("/get", getTodosByEmail);

router.delete("/delete/:id", deleteTodo);

router.get("/get/:id", getTodoById);

router.put("/update/:id", updateTodoById);

export default router;
