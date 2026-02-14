const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

// Create Task
router.post("/", auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    user: req.user
  });

  await task.save();
  res.json(task);
});

// Get All Tasks
router.get("/", auth, async (req, res) => {
  const { status, sort } = req.query;

  let filter = { user: req.user };
  if (status) filter.status = status;

  const tasks = await Task.find(filter)
    .sort(sort ? { dueDate: sort === "asc" ? 1 : -1 } : { createdAt: -1 });

  res.json(tasks);
});

// Update Task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete Task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
});

module.exports = router;
