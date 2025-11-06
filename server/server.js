// // // // // // // // // // // import express from "express";
// // // // // // // // // // // import mongoose from "mongoose";
// // // // // // // // // // // import cors from "cors";
// // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // import userRoutes from "./routes/userRoutes.js";
// // // // // // // // // // // import taskRoutes from "./routes/taskRoutes.js";
// // // // // // // // // // // import aiRoutes from "./routes/aiRoutes.js";

// // // // // // // // // // // dotenv.config();
// // // // // // // // // // // const app = express();

// // // // // // // // // // // // Middleware
// // // // // // // // // // // app.use(express.json());
// // // // // // // // // // // app.use(cors());

// // // // // // // // // // // // Routes
// // // // // // // // // // // app.use("/api/users", userRoutes);
// // // // // // // // // // // app.use("/api/tasks", taskRoutes);
// // // // // // // // // // // app.use("/api/ai", aiRoutes);

// // // // // // // // // // // // MongoDB Connection
// // // // // // // // // // // mongoose
// // // // // // // // // // //   .connect(process.env.MONGO_URI, {
// // // // // // // // // // //     useNewUrlParser: true,
// // // // // // // // // // //     useUnifiedTopology: true,
// // // // // // // // // // //   })
// // // // // // // // // // //   .then(() => console.log("✅ MongoDB Connected"))
// // // // // // // // // // //   .catch((err) => console.error("❌ MongoDB Error:", err));

// // // // // // // // // // // // Root route
// // // // // // // // // // // app.get("/", (req, res) => {
// // // // // // // // // // //   res.send("🚀 TaskIQ Backend Running...");
// // // // // // // // // // // });

// // // // // // // // // // // // Server Start
// // // // // // // // // // // const PORT = process.env.PORT || 5000;
// // // // // // // // // // // app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));


// // // // // // // // // // import express from "express";
// // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // import cors from "cors";
// // // // // // // // // // import mongoose from "mongoose";

// // // // // // // // // // import userRoutes from "./routes/userRoutes.js";
// // // // // // // // // // import taskRoutes from "./routes/taskRoutes.js";

// // // // // // // // // // import authRoutes from "./routes/auth.js";

// // // // // // // // // // dotenv.config();

// // // // // // // // // // const app = express();

// // // // // // // // // // // 🌍 Middlewares
// // // // // // // // // // app.use(express.json());
// // // // // // // // // // app.use(cors());

// // // // // // // // // // // 🌐 Routes
// // // // // // // // // // app.use("/api/users", userRoutes);
// // // // // // // // // // app.use("/api/tasks", taskRoutes);


// // // // // // // // // // // 🧠 Default route
// // // // // // // // // // app.get("/", (req, res) => {
// // // // // // // // // //   res.send("🚀 TaskIQ Server is running successfully!");
// // // // // // // // // // });

// // // // // // // // // // app.use("/api/auth", authRoutes);
// // // // // // // // // // // // ⚙️ Connect to MongoDB
// // // // // // // // // // // mongoose
// // // // // // // // // // //   .connect(process.env.MONGO_URI, {
// // // // // // // // // // //     useNewUrlParser: true,
// // // // // // // // // // //     useUnifiedTopology: true,
// // // // // // // // // // //   })
// // // // // // // // // // //   .then(() => console.log("✅ MongoDB Connected"))
// // // // // // // // // // //   .catch((err) => console.error("❌ MongoDB Connection Failed:", err));
// // // // // // // // // // // ⚙️ Connect to MongoDB
// // // // // // // // // // mongoose
// // // // // // // // // //   .connect(process.env.MONGO_URI)
// // // // // // // // // //   .then(() => console.log("✅ MongoDB Connected"))
// // // // // // // // // //   .catch((err) => console.error("❌ MongoDB Connection Failed:", err));


// // // // // // // // // // // 🚀 Start Server
// // // // // // // // // // const PORT = process.env.PORT || 5000;
// // // // // // // // // // app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));

// // // // // // // // // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // // // // // // // // Use error handler
// // // // // // // // // // app.use(errorHandler);

// // // // // // // // // import express from "express";
// // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // import cors from "cors";
// // // // // // // // // import mongoose from "mongoose";

// // // // // // // // // import userRoutes from "./routes/userRoutes.js";
// // // // // // // // // import taskRoutes from "./routes/taskRoutes.js";
// // // // // // // // // import authRoutes from "./routes/auth.js";
// // // // // // // // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // // // // // // dotenv.config();

// // // // // // // // // const app = express();

// // // // // // // // // app.use(express.json());
// // // // // // // // // app.use(cors());

// // // // // // // // // // 🌐 Routes
// // // // // // // // // app.use("/api/auth", authRoutes);
// // // // // // // // // // app.use("/api/users", userRoutes);
// // // // // // // // // app.use("/api/tasks", taskRoutes);

// // // // // // // // // app.get("/", (req, res) => {
// // // // // // // // //   res.send("🚀 TaskIQ Server is running successfully!");
// // // // // // // // // });

// // // // // // // // // // ⚙️ MongoDB connection
// // // // // // // // // mongoose
// // // // // // // // //   .connect(process.env.MONGO_URI)
// // // // // // // // //   .then(() => console.log("✅ MongoDB Connected"))
// // // // // // // // //   .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// // // // // // // // // app.use(errorHandler);

// // // // // // // // // const PORT = process.env.PORT || 5000;
// // // // // // // // // app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));

// // // // // // // // import express from "express";
// // // // // // // // import dotenv from "dotenv";
// // // // // // // // import cors from "cors";
// // // // // // // // import mongoose from "mongoose";

// // // // // // // // import userRoutes from "./routes/userRoutes.js";
// // // // // // // // import taskRoutes from "./routes/taskRoutes.js";
// // // // // // // // import authRoutes from "./routes/auth.js";
// // // // // // // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // // // // // dotenv.config();

// // // // // // // // const app = express();

// // // // // // // // app.use(express.json());
// // // // // // // // app.use(cors());

// // // // // // // // // 🌐 Routes
// // // // // // // // app.use("/api/auth", authRoutes);     // ✅ Auth routes (register/login)
// // // // // // // // app.use("/api/users", userRoutes);    // ✅ Enable user routes for profile
// // // // // // // // app.use("/api/tasks", taskRoutes);    // ✅ Task routes

// // // // // // // // app.get("/", (req, res) => {
// // // // // // // //   res.send("🚀 TaskIQ Server is running successfully!");
// // // // // // // // });

// // // // // // // // // ⚙️ MongoDB connection
// // // // // // // // mongoose
// // // // // // // //   .connect(process.env.MONGO_URI)
// // // // // // // //   .then(() => console.log("✅ MongoDB Connected"))
// // // // // // // //   .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// // // // // // // // app.use(errorHandler);

// // // // // // // // const PORT = process.env.PORT || 5000;
// // // // // // // // app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));

// // // // // // // import express from "express";
// // // // // // // import dotenv from "dotenv";
// // // // // // // import cors from "cors";
// // // // // // // import mongoose from "mongoose";
// // // // // // // import path from "path";
// // // // // // // import { fileURLToPath } from "url";

// // // // // // // import userRoutes from "./routes/userRoutes.js";
// // // // // // // import taskRoutes from "./routes/taskRoutes.js";
// // // // // // // import authRoutes from "./routes/auth.js";
// // // // // // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // // // // dotenv.config();

// // // // // // // const app = express();
// // // // // // // app.use(express.json());
// // // // // // // app.use(cors());

// // // // // // // // 📂 Static folder for uploads
// // // // // // // const __filename = fileURLToPath(import.meta.url);
// // // // // // // const __dirname = path.dirname(__filename);
// // // // // // // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // // // // // // // 🌐 Routes
// // // // // // // app.use("/api/auth", authRoutes);     // Auth routes
// // // // // // // app.use("/api/users", userRoutes);    // User profile routes
// // // // // // // app.use("/api/tasks", taskRoutes);    // Tasks

// // // // // // // app.get("/", (req, res) => {
// // // // // // //   res.send("🚀 TaskIQ Server is running successfully!");
// // // // // // // });

// // // // // // // // ⚙️ MongoDB Connection
// // // // // // // mongoose
// // // // // // //   .connect(process.env.MONGO_URI)
// // // // // // //   .then(() => console.log("✅ MongoDB Connected"))
// // // // // // //   .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// // // // // // // app.use(errorHandler);

// // // // // // // const PORT = process.env.PORT || 5000;
// // // // // // // app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));


// // // // // // import express from "express";
// // // // // // import dotenv from "dotenv";
// // // // // // import cors from "cors";
// // // // // // import mongoose from "mongoose";
// // // // // // import path from "path";
// // // // // // import { fileURLToPath } from "url";

// // // // // // import aiRoutes from "./routes/aiRoutes.js";

// // // // // // import userRoutes from "./routes/userRoutes.js";
// // // // // // import taskRoutes from "./routes/taskRoutes.js";
// // // // // // import authRoutes from "./routes/auth.js";
// // // // // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // // // dotenv.config();

// // // // // // const app = express();

// // // // // // console.log("✅ OpenAI API Key Loaded?", !!process.env.OPENAI_API_KEY);

// // // // // // // ✅ Middleware
// // // // // // app.use(express.json());
// // // // // // app.use(cors());

// // // // // // // ✅ Static folder setup for uploaded images
// // // // // // const __filename = fileURLToPath(import.meta.url);
// // // // // // const __dirname = path.dirname(__filename);
// // // // // // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // // // // // // ✅ API Routes
// // // // // // app.use("/api/ai", aiRoutes);

// // // // // // app.use("/api/auth", authRoutes);     // Authentication routes
// // // // // // app.use("/api/users", userRoutes);    // User profile routes (profile, password, upload)
// // // // // // app.use("/api/tasks", taskRoutes);    // Task management routes

// // // // // // // ✅ Root route
// // // // // // app.get("/", (req, res) => {
// // // // // //   res.send("🚀 TaskIQ Server is running successfully!");
// // // // // // });

// // // // // // // ✅ MongoDB Connection
// // // // // // mongoose
// // // // // //   .connect(process.env.MONGO_URI, {
// // // // // //     useNewUrlParser: true,
// // // // // //     useUnifiedTopology: true,
// // // // // //   })
// // // // // //   .then(() => console.log("✅ MongoDB Connected Successfully"))
// // // // // //   .catch((err) => {
// // // // // //     console.error("❌ MongoDB Connection Failed:", err.message);
// // // // // //     process.exit(1); // Exit on DB connection failure
// // // // // //   });

// // // // // // // ✅ Error Handler Middleware
// // // // // // app.use(errorHandler);

// // // // // // // ✅ Server Listener
// // // // // // const PORT = process.env.PORT || 5000;
// // // // // // app.listen(PORT, () =>
// // // // // //   console.log(`🔥 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`)
// // // // // // );

// // // // // import express from "express";
// // // // // import dotenv from "dotenv";
// // // // // import cors from "cors";
// // // // // import mongoose from "mongoose";
// // // // // import path from "path";
// // // // // import { fileURLToPath } from "url";

// // // // // import aiRoutes from "./routes/aiRoutes.js";
// // // // // import userRoutes from "./routes/userRoutes.js";
// // // // // import taskRoutes from "./routes/taskRoutes.js";
// // // // // import authRoutes from "./routes/auth.js";
// // // // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // // dotenv.config();

// // // // // const app = express();

// // // // // // ✅ Middleware
// // // // // app.use(express.json());
// // // // // app.use(cors());

// // // // // // ✅ Check OpenAI Key Loaded
// // // // // console.log("✅ OpenAI API Key Loaded?", !!process.env.OPENAI_API_KEY);

// // // // // // ✅ Serve uploaded images
// // // // // const __filename = fileURLToPath(import.meta.url);
// // // // // const __dirname = path.dirname(__filename);
// // // // // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // // // // // ✅ API Routes
// // // // // app.use("/api/ai", aiRoutes);
// // // // // app.use("/api/auth", authRoutes);
// // // // // app.use("/api/users", userRoutes);
// // // // // app.use("/api/tasks", taskRoutes);

// // // // // // ✅ Root route
// // // // // app.get("/", (req, res) => {
// // // // //   res.send("🚀 TaskIQ Server is running successfully!");
// // // // // });

// // // // // // ✅ MongoDB Connection
// // // // // mongoose
// // // // //   .connect(process.env.MONGO_URI)
// // // // //   .then(() => console.log("✅ MongoDB Connected Successfully"))
// // // // //   .catch((err) => {
// // // // //     console.error("❌ MongoDB Connection Failed:", err.message);
// // // // //     process.exit(1);
// // // // //   });

// // // // // // ✅ Error Handler
// // // // // app.use(errorHandler);

// // // // // // ✅ Start Server
// // // // // const PORT = process.env.PORT || 5000;
// // // // // app.listen(PORT, () =>
// // // // //   console.log(`🔥 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`)
// // // // // );

// // // // import express from "express";
// // // // import dotenv from "dotenv";
// // // // import cors from "cors";
// // // // import mongoose from "mongoose";
// // // // import path from "path";
// // // // import { fileURLToPath } from "url";

// // // // import aiRoutes from "./routes/aiRoutes.js";
// // // // import userRoutes from "./routes/userRoutes.js";
// // // // import taskRoutes from "./routes/taskRoutes.js";
// // // // import authRoutes from "./routes/auth.js";
// // // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // dotenv.config();

// // // // const app = express();

// // // // // ✅ Middleware
// // // // app.use(express.json());
// // // // app.use(cors());

// // // // // ✅ Check Gemini Key Loaded
// // // // console.log("✅ Gemini API Key Loaded?", !!process.env.GEMINI_API_KEY);

// // // // // ✅ Serve uploaded images
// // // // const __filename = fileURLToPath(import.meta.url);
// // // // const __dirname = path.dirname(__filename);
// // // // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // // // // ✅ API Routes
// // // // app.use("/api/ai", aiRoutes);
// // // // app.use("/api/auth", authRoutes);
// // // // app.use("/api/users", userRoutes);
// // // // app.use("/api/tasks", taskRoutes);

// // // // // ✅ Root route
// // // // app.get("/", (req, res) => {
// // // //   res.send("🚀 TaskIQ Server is running successfully (Gemini-powered)!");
// // // // });

// // // // // ✅ MongoDB Connection
// // // // mongoose
// // // //   .connect(process.env.MONGO_URI)
// // // //   .then(() => console.log("✅ MongoDB Connected Successfully"))
// // // //   .catch((err) => {
// // // //     console.error("❌ MongoDB Connection Failed:", err.message);
// // // //     process.exit(1);
// // // //   });

// // // // // ✅ Error Handler
// // // // app.use(errorHandler);

// // // // // ✅ Start Server
// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () =>
// // // //   console.log(`🔥 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`)
// // // // );


// // // import express from "express";
// // // import dotenv from "dotenv";
// // // import cors from "cors";
// // // import mongoose from "mongoose";
// // // import path from "path";
// // // import { fileURLToPath } from "url";

// // // // ✅ Routes
// // // import aiRoutes from "./routes/aiRoutes.js";
// // // import userRoutes from "./routes/userRoutes.js";
// // // import taskRoutes from "./routes/taskRoutes.js";
// // // import authRoutes from "./routes/auth.js";
// // // import { errorHandler } from "./middleware/errorMiddleware.js";

// // // // ✅ Load environment variables
// // // dotenv.config();

// // // const app = express();

// // // // ✅ Middleware setup
// // // app.use(express.json());
// // // app.use(cors({ origin: "*", credentials: true }));

// // // // ✅ Check if Gemini API key is loaded
// // // console.log("✅ Gemini API Key Loaded?", !!process.env.GEMINI_API_KEY);

// // // // ✅ Serve uploaded files
// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = path.dirname(__filename);
// // // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // // // ✅ API Routes
// // // app.use("/api/ai", aiRoutes);
// // // app.use("/api/auth", authRoutes);
// // // app.use("/api/users", userRoutes);
// // // app.use("/api/tasks", taskRoutes);

// // // // ✅ Root route
// // // app.get("/", (req, res) => {
// // //   res.send("🚀 TaskIQ Server is running successfully (Gemini-powered)!");
// // // });

// // // // ✅ MongoDB Connection
// // // mongoose
// // //   .connect(process.env.MONGO_URI, {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //   })
// // //   .then(() => console.log("✅ MongoDB Connected Successfully"))
// // //   .catch((err) => {
// // //     console.error("❌ MongoDB Connection Failed:", err.message);
// // //     process.exit(1);
// // //   });

// // // // ✅ Error Handler
// // // app.use(errorHandler);

// // // // ✅ Start Server
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //   console.log(
// // //     `🔥 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
// // //   );
// // // });


// // import express from "express";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import mongoose from "mongoose";
// // import path from "path";
// // import { fileURLToPath } from "url";
// // import cron from "node-cron";

// // import aiRoutes from "./routes/aiRoutes.js";
// // import userRoutes from "./routes/userRoutes.js";
// // import taskRoutes from "./routes/taskRoutes.js";
// // import authRoutes from "./routes/auth.js";
// // import { errorHandler } from "./middleware/errorMiddleware.js";
// // import Task from "./models/Task.js";

// // dotenv.config();
// // const app = express();

// // app.use(express.json());
// // app.use(cors({ origin: "*", credentials: true }));

// // console.log("✅ Gemini API Key Loaded?", !!process.env.GEMINI_API_KEY);

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);
// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // app.use("/api/ai", aiRoutes);
// // app.use("/api/auth", authRoutes);
// // app.use("/api/users", userRoutes);
// // app.use("/api/tasks", taskRoutes);

// // app.get("/", (req, res) => {
// //   res.send("🚀 TaskIQ Server is running successfully (Gemini-powered)!");
// // });

// // mongoose
// //   .connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("✅ MongoDB Connected Successfully"))
// //   .catch((err) => {
// //     console.error("❌ MongoDB Connection Failed:", err.message);
// //     process.exit(1);
// //   });

// // // 🕐 Cron job: check reminders every minute
// // cron.schedule("* * * * *", async () => {
// //   const now = new Date();
// //   const tasks = await Task.find({
// //     reminderTime: { $lte: now },
// //     isReminded: false,
// //   });

// //   for (const task of tasks) {
// //     console.log(`🔔 Reminder: "${task.title}" is due soon for user ${task.user}`);
// //     task.isReminded = true;
// //     await task.save();
// //   }
// // });

// // // Error handler
// // app.use(errorHandler);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(
// //     `🔥 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
// //   );
// // });


// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import path from "path";
// import { fileURLToPath } from "url";
// import cron from "node-cron";
// import nodemailer from "nodemailer";

// import aiRoutes from "./routes/aiRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import taskRoutes from "./routes/taskRoutes.js";
// import authRoutes from "./routes/auth.js";
// import { errorHandler } from "./middleware/errorMiddleware.js";
// import Task from "./models/Task.js";
// import User from "./models/User.js";

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cors({ origin: "*", credentials: true }));

// console.log("✅ Gemini API Key Loaded?", !!process.env.GEMINI_API_KEY);

// // Serve uploads
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes
// app.use("/api/ai", aiRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/tasks", taskRoutes);

// app.get("/", (req, res) => {
//   res.send("🚀 TaskIQ Server is running successfully (Gemini-powered)!");
// });

// // Connect MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Failed:", err.message);
//     process.exit(1);
//   });

// // ✉️ Setup Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // 🕐 Cron job: check reminders every minute
// cron.schedule("* * * * *", async () => {
//   const now = new Date();
//   const tasks = await Task.find({
//     reminderTime: { $lte: now },
//     isReminded: false,
//   }).populate("user", "email name");

//   for (const task of tasks) {
//     if (task.user?.email) {
//       // Send email reminder
//       const mailOptions = {
//         from: `"TaskIQ Reminder" <${process.env.EMAIL_USER}>`,
//         to: task.user.email,
//         subject: `🔔 Reminder: ${task.title}`,
//         text: `Hey ${task.user.name || "there"},\n\nYour task "${task.title}" is due now!\n\n- TaskIQ Reminder Bot 🚀`,
//       };

//       try {
//         await transporter.sendMail(mailOptions);
//         console.log(`📧 Reminder email sent to ${task.user.email} for task "${task.title}"`);
//       } catch (err) {
//         console.error(`❌ Failed to send email to ${task.user.email}:`, err.message);
//       }
//     }

//     // Update reminder flag
//     task.isReminded = true;
//     await task.save();
//   }
// });

// // Error handler
// app.use(errorHandler);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(
//     `🔥 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
//   );
// });


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import cron from "node-cron";
import nodemailer from "nodemailer";

import aiRoutes from "./routes/aiRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/auth.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import Task from "./models/Task.js";
import User from "./models/User.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

console.log("✅ Gemini API Key Loaded?", !!process.env.GEMINI_API_KEY);

// Serve uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("🚀 TaskIQ Server is running successfully (Gemini-powered)!");
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

// ✉️ Setup Nodemailer transporter (fixed SSL issue)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // SSL port
  secure: true, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // ignore self-signed cert error
  },
});

// 🕐 Cron job: check reminders every minute
cron.schedule("* * * * *", async () => {
  const now = new Date();
  const tasks = await Task.find({
    reminderTime: { $lte: now },
    isReminded: false,
  }).populate("user", "email name");

  for (const task of tasks) {
    if (task.user?.email) {
      const mailOptions = {
        from: `"TaskIQ Reminder" <${process.env.EMAIL_USER}>`,
        to: task.user.email,
        subject: `🔔 Reminder: ${task.title}`,
        text: `Hey ${task.user.name || "there"},\n\nYour task "${task.title}" is due now!\n\n- TaskIQ Reminder Bot 🚀`,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`📧 Reminder email sent to ${task.user.email} for task "${task.title}"`);
      } catch (err) {
        console.error(`❌ Failed to send email to ${task.user.email}:`, err.message);
      }
    }

    // Update reminder flag
    task.isReminded = true;
    await task.save();
  }
});

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `🔥 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
  );
});
