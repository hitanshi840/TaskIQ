// // // 

// // import asyncHandler from "express-async-handler";
// // import Task from "../models/Task.js";

// // // 📝 Create Task (Manual)
// // export const createTask = asyncHandler(async (req, res) => {
// //   const { title, description, status, dueDate, reminderTime } = req.body;

// //   if (!title || title.trim() === "") {
// //     res.status(400);
// //     throw new Error("Task title is required");
// //   }

// //   const task = await Task.create({
// //     title,
// //     description,
// //     status,
// //     dueDate,
// //     reminderTime,
// //     user: req.user._id,
// //     source: "Manual",
// //   });

// //   res.status(201).json(task);
// // });

// // // 📋 Get All Tasks (for logged-in user)
// // export const getTasks = asyncHandler(async (req, res) => {
// //   const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
// //   res.json(tasks);
// // });

// // // ✏️ Update Task
// // export const updateTask = asyncHandler(async (req, res) => {
// //   const task = await Task.findById(req.params.id);
// //   if (!task) {
// //     res.status(404);
// //     throw new Error("Task not found");
// //   }

// //   if (task.user.toString() !== req.user._id.toString()) {
// //     res.status(401);
// //     throw new Error("Not authorized");
// //   }

// //   const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
// //     new: true,
// //     runValidators: true,
// //   });

// //   res.json(updated);
// // });

// // // 🗑 Delete Task
// // export const deleteTask = asyncHandler(async (req, res) => {
// //   const task = await Task.findById(req.params.id);

// //   if (!task) {
// //     res.status(404);
// //     throw new Error("Task not found");
// //   }

// //   if (task.user.toString() !== req.user._id.toString()) {
// //     res.status(401);
// //     throw new Error("Not authorized");
// //   }

// //   await task.deleteOne();
// //   res.json({ message: "Task deleted" });
// // });

// // // 🤖 Save AI-generated Tasks
// // export const aiSaveTasks = asyncHandler(async (req, res) => {
// //   const { tasks } = req.body;
// //   const userId = req.user._id;

// //   if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
// //     res.status(400);
// //     throw new Error("No tasks provided");
// //   }

// //   const formattedTasks = tasks.map((t) => ({
// //     title: t.task || "Untitled Task",
// //     description: t.description || "",
// //     category: t.category || "General",
// //     priority: t.priority || "Medium",
// //     source: "AI",
// //     user: userId,
// //   }));

// //   const savedTasks = await Task.insertMany(formattedTasks);
// //   res.status(201).json({
// //     message: "AI tasks saved successfully!",
// //     savedTasks,
// //   });
// // });

// // // ⏰ Set or update reminder
// // export const setReminder = asyncHandler(async (req, res) => {
// //   const { id } = req.params;
// //   const { reminderTime } = req.body;

// //   const task = await Task.findById(id);
// //   if (!task) {
// //     res.status(404);
// //     throw new Error("Task not found");
// //   }

// //   if (task.user.toString() !== req.user._id.toString()) {
// //     res.status(401);
// //     throw new Error("Not authorized");
// //   }

// //   task.reminderTime = reminderTime;
// //   task.isReminded = false; // reset if re-scheduled
// //   await task.save();

// //   res.json({ message: "Reminder set successfully", task });
// // });


// import asyncHandler from "express-async-handler";
// import Task from "../models/Task.js";

// // 📝 Create Task (Manual)
// export const createTask = asyncHandler(async (req, res) => {
//   const { title, description, status, dueDate, reminderTime } = req.body;

//   if (!title || title.trim() === "") {
//     res.status(400);
//     throw new Error("Task title is required");
//   }

//   const task = await Task.create({
//     title,
//     description,
//     status,
//     dueDate,
//     reminderTime,
//     user: req.user._id,
//     source: "Manual",
//   });

//   res.status(201).json(task);
// });

// // 📋 Get All Tasks (for logged-in user)
// export const getTasks = asyncHandler(async (req, res) => {
//   const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
//   res.json(tasks);
// });

// // ✏️ Update Task
// export const updateTask = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);
//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("Not authorized");
//   }

//   const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.json(updated);
// });

// // 🗑 Delete Task
// export const deleteTask = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("Not authorized");
//   }

//   await task.deleteOne();
//   res.json({ message: "Task deleted" });
// });

// // 🤖 Save AI-generated Tasks
// export const aiSaveTasks = asyncHandler(async (req, res) => {
//   const { tasks } = req.body;
//   const userId = req.user._id;

//   if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
//     res.status(400);
//     throw new Error("No tasks provided");
//   }

//   const formattedTasks = tasks.map((t) => ({
//     title: t.task || "Untitled Task",
//     description: t.description || "",
//     category: t.category || "General",
//     priority: t.priority || "Medium",
//     source: "AI",
//     user: userId,
//   }));

//   const savedTasks = await Task.insertMany(formattedTasks);
//   res.status(201).json({
//     message: "AI tasks saved successfully!",
//     savedTasks,
//   });
// });

// // ⏰ Set or update reminder (with safe success response)
// export const setReminder = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const { reminderTime } = req.body;

//   if (!reminderTime) {
//     return res.status(400).json({ message: "Reminder time is required" });
//   }

//   const task = await Task.findById(id);
//   if (!task) {
//     return res.status(404).json({ message: "Task not found" });
//   }

//   if (task.user.toString() !== req.user._id.toString()) {
//     return res.status(401).json({ message: "Not authorized" });
//   }

//   task.reminderTime = reminderTime;
//   task.isReminded = false; // reset if re-scheduled
//   await task.save();

//   console.log(`✅ Reminder set for task "${task.title}" at ${reminderTime}`);

//   return res.status(200).json({
//     success: true,
//     message: `⏰ Reminder set successfully for "${task.title}"`,
//     task,
//   });
// });

import asyncHandler from "express-async-handler";
import Task from "../models/Task.js";

// 📝 Create Task (Manual)
export const createTask = asyncHandler(async (req, res) => {
  const { title, description, status, dueDate, reminderTime } = req.body;

  if (!title || title.trim() === "") {
    res.status(400);
    throw new Error("Task title is required");
  }

  const task = await Task.create({
    title,
    description,
    status,
    dueDate,
    reminderTime,
    user: req.user._id,
    source: "Manual",
  });

  res.status(201).json(task);
});

// 📋 Get All Tasks (for logged-in user)
export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(tasks);
});

// ✏️ Update Task
export const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json(updated);
});

// 🗑 Delete Task
export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  await task.deleteOne();
  res.json({ message: "Task deleted" });
});

// 🤖 Save AI-generated Tasks
export const aiSaveTasks = asyncHandler(async (req, res) => {
  const { tasks } = req.body;
  const userId = req.user._id;

  if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
    res.status(400);
    throw new Error("No tasks provided");
  }

  const formattedTasks = tasks.map((t) => ({
    title: t.task || "Untitled Task",
    description: t.description || "",
    category: t.category || "General",
    priority: t.priority || "Medium",
    source: "AI",
    user: userId,
  }));

  const savedTasks = await Task.insertMany(formattedTasks);
  res.status(201).json({
    message: "AI tasks saved successfully!",
    savedTasks,
  });
});

// ⏰ Set or update reminder (with safe success response)
export const setReminder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { reminderTime } = req.body;

  if (!reminderTime) {
    return res.status(400).json({ message: "Reminder time is required" });
  }

  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  task.reminderTime = reminderTime;
  task.isReminded = false; // reset if re-scheduled
  await task.save();

  console.log(`✅ Reminder set for task "${task.title}" at ${reminderTime}`);

  return res.status(200).json({
    success: true,
    message: `⏰ Reminder set successfully for "${task.title}"`,
    task,
  });
});
