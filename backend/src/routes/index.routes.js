import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render('home');
});

router.post("/tasks/add", (req, res) => {
  res.send('save-task');
});

router.get("/about", (req, res) => {
  res.render('about');
});

export default router;
