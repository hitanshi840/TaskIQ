// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // 🧠 Suggest & Categorize Tasks
// export const suggestTasks = async (req, res) => {
//   try {
//     const { text } = req.body;
//     if (!text || text.trim() === "") {
//       return res.status(400).json({ message: "Text input is required" });
//     }

//     const prompt = `
//     Analyze the following tasks: "${text}".
//     Return a JSON array of objects, where each object includes:
//     - "task": task name (string)
//     - "category": one of [Work, Study, Fitness, Personal, Other]
//     - "priority": one of [High, Medium, Low]
//     Example:
//     [
//       { "task": "Complete project report", "category": "Work", "priority": "High" },
//       { "task": "Gym workout", "category": "Fitness", "priority": "Medium" }
//     ]
//     `;

//     const response = await openai.responses.create({
//       model: "gpt-4.1-mini",
//       input: prompt,
//       temperature: 0.7,
//     });

//     const resultText = response.output[0].content[0].text;

//     // Safely parse AI output
//     let parsed;
//     try {
//       parsed = JSON.parse(resultText);
//     } catch (err) {
//       parsed = [{ message: "⚠️ Could not parse AI response", raw: resultText }];
//     }

//     res.json({ tasks: parsed });
//   } catch (error) {
//     console.error("❌ AI Suggest Error:", error);
//     res.status(500).json({ message: "Failed to generate task suggestions" });
//   }
// };

// // ✍️ Smart Notes / Plan My Day
// export const planDay = async (req, res) => {
//   try {
//     const { text } = req.body;
//     if (!text || text.trim() === "") {
//       return res.status(400).json({ message: "Text input is required" });
//     }

//     const prompt = `
//     You are a smart productivity assistant.
//     Based on this user input: "${text}",
//     create a structured and motivational day plan with time blocks and goals.
//     Format neatly with bullet points or timelines.
//     Example output:
//     🌅 7:00 AM - Morning Exercise
//     ☕ 8:00 AM - Breakfast & Planning
//     💻 9:00 AM - Work/Study Session
//     🍽 1:00 PM - Lunch Break
//     🧘‍♀️ 6:00 PM - Relax / Gym
//     🌙 10:00 PM - Review & Sleep
//     `;

//     const response = await openai.responses.create({
//       model: "gpt-4.1-mini",
//       input: prompt,
//       temperature: 0.7,
//     });

//     const planText = response.output[0].content[0].text;
//     res.json({ response: planText });
//   } catch (error) {
//     console.error("❌ AI Plan Error:", error);
//     res.status(500).json({ message: "Failed to generate plan" });
//   }
// };

// import express from "express";
// import { protect } from "../middleware/auth.js";
// import {
//   suggestTasks,
//   planDay,
// } from "../controllers/aiController.js";

// const router = express.Router();

// // 🧠 Suggest & Categorize Tasks
// router.post("/suggest", protect, suggestTasks);

// // ✍️ Smart Notes / Plan My Day
// router.post("/plan", protect, planDay);

// export default router;
