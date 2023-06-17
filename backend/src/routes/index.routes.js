import { Router } from "express";
import  Task  from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean()
  res.render('home', {tasks});
});

router.post("/tasks/add", async (req, res) => {

  const task = Task(req.body);
  await task.save();

  res.redirect('/');
 

  //res.send('save-task');
});

router.get("/about", (req, res) => {
  res.render('about');
});

export default router;
