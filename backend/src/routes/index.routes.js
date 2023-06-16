import { Router } from "express";
import  Task  from "../models/Task";

const router = Router();

router.get("/", (req, res) => {
  res.render('home');
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
