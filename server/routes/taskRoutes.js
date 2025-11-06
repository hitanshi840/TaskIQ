// // // // import express from "express";
// // // // import {
// // // //   addTask,
// // // //   getTasks,
// // // //   updateTask,
// // // //   deleteTask,
// // // //   getSmartSummary,
// // // // } from "../controllers/taskController.js";
// // // // // import protect from "../middleware/auth.js";
// // // // import { protect } from "../middleware/auth.js";

// // // // const router = express.Router();

// // // // // All routes are protected (user must be logged in)
// // // // router.post("/", protect, addTask);
// // // // router.get("/", protect, getTasks);
// // // // router.put("/:id", protect, updateTask);
// // // // router.delete("/:id", protect, deleteTask);
// // // // router.get("/ai/summary", protect, getSmartSummary);

// // // // export default router;

// // // import express from "express";
// // // import { protect } from "../middleware/auth.js";
// // // import {
// // //   createTask,
// // //   getTasks,
// // //   updateTask,
// // //   deleteTask,
// // // } from "../controllers/taskController.js";

// // // const router = express.Router();

// // // router.post("/", protect, createTask);
// // // router.get("/", protect, getTasks);
// // // router.put("/:id", protect, updateTask);
// // // router.delete("/:id", protect, deleteTask);

// // // export default router;

// // import express from "express";
// // import { protect } from "../middleware/auth.js";
// // import {
// //   createTask,
// //   getTasks,
// //   updateTask,
// //   deleteTask,
// // } from "../controllers/taskController.js";
// // import Task from "../models/Task.js";

// // const router = express.Router();

// // // ✅ Create a new task
// // router.post("/", protect, createTask);

// // // ✅ Get all user tasks
// // router.get("/", protect, getTasks);

// // // ✅ Update task
// // router.put("/:id", protect, updateTask);

// // // ✅ Delete task
// // router.delete("/:id", protect, deleteTask);

// // // 🧠 NEW: Save AI-generated tasks
// // router.post("/ai-save", protect, async (req, res) => {
// //   try {
// //     const { tasks } = req.body; // Expecting an array of strings or objects

// //     if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
// //       return res.status(400).json({ message: "No tasks provided" });
// //     }

// //     // Map and create multiple AI-generated tasks for the user
// //     const savedTasks = await Promise.all(
// //       tasks.map(async (task) => {
// //         const title = typeof task === "string" ? task : task.title;
// //         const description =
// //           typeof task === "object" ? task.description || "" : "";

// //         return await Task.create({
// //           user: req.user._id, // because your protect middleware sets req.user
// //           title,
// //           description,
// //           source: "AI",
// //         });
// //       })
// //     );

// //     res.status(201).json({
// //       message: "✅ AI-generated tasks saved successfully",
// //       savedTasks,
// //     });
// //   } catch (error) {
// //     console.error("AI Save Error:", error);
// //     res.status(500).json({ message: "Server error while saving AI tasks" });
// //   }
// // });

// // export default router;


// import express from "express";
// import { protect } from "../middleware/auth.js";
// import {
//   createTask,
//   getTasks,
//   updateTask,
//   deleteTask,
//   setReminder,
// } from "../controllers/taskController.js";
// import Task from "../models/Task.js";

// const router = express.Router();

// // ✅ CRUD
// router.post("/", protect, createTask);
// router.get("/", protect, getTasks);
// router.put("/:id", protect, updateTask);
// router.delete("/:id", protect, deleteTask);

// // 🧠 Save AI-generated tasks
// router.post("/ai-save", protect, async (req, res) => {
//   try {
//     const { tasks } = req.body;
//     if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
//       return res.status(400).json({ message: "No tasks provided" });
//     }

//     const savedTasks = await Promise.all(
//       tasks.map(async (task) => {
//         const title = typeof task === "string" ? task : task.title;
//         const description =
//           typeof task === "object" ? task.description || "" : "";

//         return await Task.create({
//           user: req.user._id,
//           title,
//           description,
//           source: "AI",
//         });
//       })
//     );

//     res.status(201).json({
//       message: "✅ AI-generated tasks saved successfully",
//       savedTasks,
//     });
//   } catch (error) {
//     console.error("AI Save Error:", error);
//     res.status(500).json({ message: "Server error while saving AI tasks" });
//   }
// });

// // ⏰ Reminder route
// router.put("/:id/reminder", protect, setReminder);

// export default router;


import express from "express";
import { protect } from "../middleware/auth.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  setReminder,
} from "../controllers/taskController.js";
import Task from "../models/Task.js";
import nodemailer from "nodemailer";

const router = express.Router();

// ✅ CRUD Routes
router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

// 🧠 Save AI-generated tasks
router.post("/ai-save", protect, async (req, res) => {
  try {
    const { tasks } = req.body;
    if (!tasks || !Array.isArray(tasks) || tasks.length === 0) {
      return res.status(400).json({ message: "No tasks provided" });
    }

    const savedTasks = await Promise.all(
      tasks.map(async (task) => {
        const title = typeof task === "string" ? task : task.title;
        const description =
          typeof task === "object" ? task.description || "" : "";

        return await Task.create({
          user: req.user._id,
          title,
          description,
          source: "AI",
        });
      })
    );

    res.status(201).json({
      message: "✅ AI-generated tasks saved successfully",
      savedTasks,
    });
  } catch (error) {
    console.error("AI Save Error:", error);
    res.status(500).json({ message: "Server error while saving AI tasks" });
  }
});

// ⏰ Set Reminder for Task
router.put("/:id/reminder", protect, setReminder);

// ✉️ Manual trigger route for testing reminder email (frontend toast + backend email)
router.post("/:id/send-reminder", protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user", "email name");
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"TaskIQ Reminders" <${process.env.EMAIL_USER}>`,
      to: task.user.email,
      subject: `Reminder: ${task.title}`,
      html: `
        <div style="font-family:sans-serif">
          <h2>⏰ Task Reminder</h2>
          <p><strong>${task.title}</strong></p>
          <p>${task.description || "No description provided."}</p>
          <hr/>
          <p>Set for: <strong>${new Date(task.reminderTime).toLocaleString()}</strong></p>
          <p>— TaskIQ Smart Assistant 🚀</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📩 Email sent to ${task.user.email} for "${task.title}"`);

    res.status(200).json({ message: "Reminder email sent successfully!" });
  } catch (error) {
    console.error("❌ Failed to send reminder email:", error);
    res.status(500).json({ message: "Failed to send reminder email" });
  }
});

export default router;
