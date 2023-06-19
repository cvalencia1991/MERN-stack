import { Router } from "express";
import Task from "../models/Task";
import {
  renderTask,
  editTask,
  createTask,
  updateTask,
  deleteTask,
  toogleDoneTask
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/task/:id/edit", editTask);

router.post("/task/:id/edit", updateTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toogleDoneTask);

export default router;
