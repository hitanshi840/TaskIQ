// // // // // // // // // // // // // // // // import express from "express";
// // // // // // // // // // // // // // // // import OpenAI from "openai";
// // // // // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // // // // // // // dotenv.config();
// // // // // // // // // // // // // // // // const router = express.Router();

// // // // // // // // // // // // // // // // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// // // // // // // // // // // // // // // // // 🧠 Suggest & Categorize Tasks
// // // // // // // // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // //     const { text } = req.body;

// // // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // // //     Analyze the following tasks: "${text}".
// // // // // // // // // // // // // // // //     Return a JSON list where each task has:
// // // // // // // // // // // // // // // //     - "task": name
// // // // // // // // // // // // // // // //     - "category": one of [Work, Study, Fitness, Personal, Other]
// // // // // // // // // // // // // // // //     - "priority": one of [High, Medium, Low]
// // // // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // // // //     const response = await openai.responses.create({
// // // // // // // // // // // // // // // //       model: "gpt-4.1-mini",
// // // // // // // // // // // // // // // //       input: prompt,
// // // // // // // // // // // // // // // //       temperature: 0.7,
// // // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // // //     const result = response.output[0].content[0].text;
// // // // // // // // // // // // // // // //     res.json({ tasks: JSON.parse(result) });
// // // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // // //     console.error("AI Suggest Error:", error);
// // // // // // // // // // // // // // // //     res.status(500).json({ message: "Failed to generate task suggestions" });
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // ✍️ Smart Notes / Plan My Day
// // // // // // // // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // // //     You are a productivity assistant. Based on the text: "${text}",
// // // // // // // // // // // // // // // //     create a structured day plan with times and activities in a clear format.
// // // // // // // // // // // // // // // //     Keep it concise and motivational.
// // // // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // // // //     const response = await openai.responses.create({
// // // // // // // // // // // // // // // //       model: "gpt-4.1-mini",
// // // // // // // // // // // // // // // //       input: prompt,
// // // // // // // // // // // // // // // //       temperature: 0.7,
// // // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // // //     const plan = response.output[0].content[0].text;
// // // // // // // // // // // // // // // //     res.json({ plan });
// // // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // // //     console.error("AI Plan Error:", error);
// // // // // // // // // // // // // // // //     res.status(500).json({ message: "Failed to generate plan" });
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // export default router;


// // // // // // // // // // // // // // // import express from "express";
// // // // // // // // // // // // // // // import OpenAI from "openai";
// // // // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // // // // // // dotenv.config();
// // // // // // // // // // // // // // // const router = express.Router();

// // // // // // // // // // // // // // // const openai = new OpenAI({
// // // // // // // // // // // // // // //   apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // 🧠 Suggest & Categorize Tasks
// // // // // // // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // // // // //     if (!text?.trim()) {
// // // // // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // //     Analyze the following tasks: "${text}".
// // // // // // // // // // // // // // //     Return a JSON list where each task has:
// // // // // // // // // // // // // // //     - "task": name
// // // // // // // // // // // // // // //     - "category": one of [Work, Study, Fitness, Personal, Other]
// // // // // // // // // // // // // // //     - "priority": one of [High, Medium, Low]
// // // // // // // // // // // // // // //     Example:
// // // // // // // // // // // // // // //     [
// // // // // // // // // // // // // // //       {"task":"Complete assignment","category":"Study","priority":"High"},
// // // // // // // // // // // // // // //       {"task":"Go for a run","category":"Fitness","priority":"Medium"}
// // // // // // // // // // // // // // //     ]
// // // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // // // // //       temperature: 0.7,
// // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // //     const result = response.choices[0].message.content;
// // // // // // // // // // // // // // //     let tasks = [];

// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       tasks = JSON.parse(result);
// // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // //       console.error("❌ AI JSON Parse Error:", err);
// // // // // // // // // // // // // // //       return res.status(500).json({ message: "AI returned invalid JSON" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     res.json({ tasks });
// // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // //     console.error("AI Suggest Error:", error);
// // // // // // // // // // // // // // //     res.status(500).json({ message: "Failed to generate task suggestions" });
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // ✍️ Smart Notes / Plan My Day
// // // // // // // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // // // // //     if (!text?.trim()) {
// // // // // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // // //     You are a productivity assistant. Based on this text: "${text}",
// // // // // // // // // // // // // // //     create a structured, time-based day plan with short motivational lines.
// // // // // // // // // // // // // // //     Format clearly with emojis, e.g.:
// // // // // // // // // // // // // // //     🌅 7:00 AM - Wake up & Stretch
// // // // // // // // // // // // // // //     ☕ 8:00 AM - Breakfast
// // // // // // // // // // // // // // //     💻 9:00 AM - Work / Study
// // // // // // // // // // // // // // //     🧘‍♀️ 6:00 PM - Exercise / Relax
// // // // // // // // // // // // // // //     🌙 10:00 PM - Sleep Well
// // // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // // // // //       temperature: 0.7,
// // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // //     const plan = response.choices[0].message.content;
// // // // // // // // // // // // // // //     res.json({ plan });
// // // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // // //     console.error("AI Plan Error:", error);
// // // // // // // // // // // // // // //     res.status(500).json({ message: "Failed to generate plan" });
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // export default router;


// // // // // // // // // // // // // // import express from "express";
// // // // // // // // // // // // // // import OpenAI from "openai";
// // // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // // // // // dotenv.config();
// // // // // // // // // // // // // // const router = express.Router();

// // // // // // // // // // // // // // // ✅ Initialize OpenAI client
// // // // // // // // // // // // // // const openai = new OpenAI({
// // // // // // // // // // // // // //   apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // ✅ Utility: safe text trim
// // // // // // // // // // // // // // const cleanInput = (text) => text?.trim().replace(/\s+/g, " ") || "";

// // // // // // // // // // // // // // // 🧠 Suggest & Categorize Tasks
// // // // // // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // // // //     const input = cleanInput(text);
// // // // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // //     Analyze the following text: "${input}".
// // // // // // // // // // // // // //     Identify possible tasks and return a valid JSON array.
// // // // // // // // // // // // // //     Each item should include:
// // // // // // // // // // // // // //     - "task": task name
// // // // // // // // // // // // // //     - "category": one of [Work, Study, Fitness, Personal, Other]
// // // // // // // // // // // // // //     - "priority": one of [High, Medium, Low]

// // // // // // // // // // // // // //     Example output:
// // // // // // // // // // // // // //     [
// // // // // // // // // // // // // //       {"task": "Complete project report", "category": "Work", "priority": "High"},
// // // // // // // // // // // // // //       {"task": "Go for a run", "category": "Fitness", "priority": "Medium"}
// // // // // // // // // // // // // //     ]
// // // // // // // // // // // // // //     IMPORTANT: Return ONLY JSON. No extra text.
// // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // // // //       temperature: 0.6,
// // // // // // // // // // // // // //       max_tokens: 400,
// // // // // // // // // // // // // //     });

// // // // // // // // // // // // // //     const resultText = response.choices?.[0]?.message?.content?.trim() || "";
// // // // // // // // // // // // // //     console.log("🧠 Raw AI Response (suggest):", resultText);

// // // // // // // // // // // // // //     let tasks = [];
// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       tasks = JSON.parse(resultText);
// // // // // // // // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not a list");
// // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // //       console.error("❌ AI JSON Parse Error:", err.message);
// // // // // // // // // // // // // //       return res.status(500).json({
// // // // // // // // // // // // // //         message: "AI returned invalid JSON",
// // // // // // // // // // // // // //         raw: resultText,
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     res.json({ tasks });
// // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // //     console.error("❌ AI Suggest Error:", error.response?.data || error.message);
// // // // // // // // // // // // // //     res.status(500).json({ message: "Failed to generate task suggestions" });
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // ✍️ Smart Notes / Plan My Day
// // // // // // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // // // //     const input = cleanInput(text);
// // // // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // // //     You are a smart productivity assistant.
// // // // // // // // // // // // // //     Based on the following user input: "${input}",
// // // // // // // // // // // // // //     create a detailed, structured, and motivational day plan.

// // // // // // // // // // // // // //     Use emojis, time slots, and concise activities.
// // // // // // // // // // // // // //     Example:
// // // // // // // // // // // // // //     🌅 7:00 AM — Wake up & Stretch
// // // // // // // // // // // // // //     ☕ 8:00 AM — Breakfast & Planning
// // // // // // // // // // // // // //     💻 9:00 AM — Focused Work / Study Session
// // // // // // // // // // // // // //     🍽️ 1:00 PM — Lunch Break
// // // // // // // // // // // // // //     🧘‍♀️ 6:00 PM — Gym / Relaxation
// // // // // // // // // // // // // //     🌙 10:00 PM — Reflect & Sleep

// // // // // // // // // // // // // //     Keep it neat and readable.
// // // // // // // // // // // // // //     `;

// // // // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // // // //       temperature: 0.7,
// // // // // // // // // // // // // //       max_tokens: 400,
// // // // // // // // // // // // // //     });

// // // // // // // // // // // // // //     const plan = response.choices?.[0]?.message?.content?.trim() || "";
// // // // // // // // // // // // // //     console.log("🧠 Raw AI Response (plan):", plan);

// // // // // // // // // // // // // //     if (!plan) {
// // // // // // // // // // // // // //       throw new Error("Empty AI response");
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     res.json({ plan });
// // // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // // //     console.error("❌ AI Plan Error:", error.response?.data || error.message);
// // // // // // // // // // // // // //     res.status(500).json({ message: "Failed to generate plan" });
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // export default router;


// // // // // // // // // // // // // import express from "express";
// // // // // // // // // // // // // import OpenAI from "openai";
// // // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // // // // dotenv.config();
// // // // // // // // // // // // // const router = express.Router();

// // // // // // // // // // // // // // ✅ Initialize OpenAI client
// // // // // // // // // // // // // const openai = new OpenAI({
// // // // // // // // // // // // //   apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // // // });

// // // // // // // // // // // // // // ✅ Utility: safely clean text input
// // // // // // // // // // // // // const cleanInput = (text) => text?.trim().replace(/\s+/g, " ") || "";

// // // // // // // // // // // // // // 🧠 Suggest & Categorize Tasks
// // // // // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // //     Analyze the following text: "${input}".
// // // // // // // // // // // // //     Identify possible tasks and return a **valid JSON array**.
// // // // // // // // // // // // //     Each item should include:
// // // // // // // // // // // // //     - "task": task name
// // // // // // // // // // // // //     - "category": one of [Work, Study, Fitness, Personal, Other]
// // // // // // // // // // // // //     - "priority": one of [High, Medium, Low]

// // // // // // // // // // // // //     Example output:
// // // // // // // // // // // // //     [
// // // // // // // // // // // // //       {"task": "Complete project report", "category": "Work", "priority": "High"},
// // // // // // // // // // // // //       {"task": "Go for a run", "category": "Fitness", "priority": "Medium"}
// // // // // // // // // // // // //     ]
// // // // // // // // // // // // //     IMPORTANT: Return ONLY pure JSON. No text, no explanations.
// // // // // // // // // // // // //     `;

// // // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // // //       temperature: 0.6,
// // // // // // // // // // // // //       max_tokens: 400,
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     const resultText = response?.choices?.[0]?.message?.content?.trim();
// // // // // // // // // // // // //     if (!resultText) {
// // // // // // // // // // // // //       console.error("❌ Empty response from OpenAI /suggest");
// // // // // // // // // // // // //       return res.status(500).json({ message: "AI returned empty response" });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     console.log("🧠 Raw AI Response (suggest):", resultText);

// // // // // // // // // // // // //     let tasks = [];
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       tasks = JSON.parse(resultText);
// // // // // // // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not an array");
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       console.error("❌ JSON Parse Error:", err.message);
// // // // // // // // // // // // //       return res.status(500).json({
// // // // // // // // // // // // //         message: "AI returned invalid JSON format",
// // // // // // // // // // // // //         raw: resultText,
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     res.status(200).json({ tasks });
// // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // //     console.error("❌ AI Suggest Error →", error.response?.data || error.message || error);
// // // // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // // // //       message: "Failed to generate task suggestions",
// // // // // // // // // // // // //       details: error.message,
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });

// // // // // // // // // // // // // // ✍️ Smart Notes / Plan My Day
// // // // // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // //     You are a smart productivity assistant.
// // // // // // // // // // // // //     Based on the following user input: "${input}",
// // // // // // // // // // // // //     create a **structured and motivational day plan** using emojis and time slots.

// // // // // // // // // // // // //     Example:
// // // // // // // // // // // // //     🌅 7:00 AM — Wake up & Stretch  
// // // // // // // // // // // // //     ☕ 8:00 AM — Breakfast & Planning  
// // // // // // // // // // // // //     💻 9:00 AM — Work / Study Session  
// // // // // // // // // // // // //     🍽️ 1:00 PM — Lunch Break  
// // // // // // // // // // // // //     🧘‍♀️ 6:00 PM — Gym / Relaxation  
// // // // // // // // // // // // //     🌙 10:00 PM — Reflect & Sleep  

// // // // // // // // // // // // //     Keep it neat, inspiring, and realistic for one full day.
// // // // // // // // // // // // //     `;

// // // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // // //       temperature: 0.7,
// // // // // // // // // // // // //       max_tokens: 500,
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     const plan = response?.choices?.[0]?.message?.content?.trim();
// // // // // // // // // // // // //     if (!plan) {
// // // // // // // // // // // // //       console.error("❌ Empty response from OpenAI /plan");
// // // // // // // // // // // // //       return res.status(500).json({ message: "AI returned empty response" });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     console.log("🧠 Raw AI Response (plan):", plan);
// // // // // // // // // // // // //     res.status(200).json({ plan });
// // // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // // //     console.error("❌ AI Plan Error →", error.response?.data || error.message || error);
// // // // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // // // //       message: "Failed to generate plan",
// // // // // // // // // // // // //       details: error.message,
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });

// // // // // // // // // // // // // export default router;


// // // // // // // // // // // // import express from "express";
// // // // // // // // // // // // import OpenAI from "openai";
// // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // // // dotenv.config();
// // // // // // // // // // // // const router = express.Router();

// // // // // // // // // // // // // ✅ Initialize OpenAI
// // // // // // // // // // // // const openai = new OpenAI({
// // // // // // // // // // // //   apiKey: process.env.OPENAI_API_KEY,
// // // // // // // // // // // // });

// // // // // // // // // // // // // ✅ Utility: sanitize input
// // // // // // // // // // // // const cleanInput = (text) => text?.trim().replace(/\s+/g, " ") || "";

// // // // // // // // // // // // // 🧠 Suggest & Categorize Tasks
// // // // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // Analyze this text: "${input}".
// // // // // // // // // // // // List possible tasks in pure JSON array format:
// // // // // // // // // // // // [
// // // // // // // // // // // //   {"task": "task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // // // // // // // ]
// // // // // // // // // // // // Return ONLY pure JSON.
// // // // // // // // // // // // `;

// // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // //       temperature: 0.6,
// // // // // // // // // // // //       max_tokens: 400,
// // // // // // // // // // // //     });

// // // // // // // // // // // //     const resultText = response?.choices?.[0]?.message?.content?.trim();
// // // // // // // // // // // //     if (!resultText) {
// // // // // // // // // // // //       return res.status(500).json({ message: "AI returned empty response" });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     console.log("🧠 Raw AI Response (suggest):", resultText);

// // // // // // // // // // // //     let tasks;
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       tasks = JSON.parse(resultText);
// // // // // // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not an array");
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       return res.status(500).json({
// // // // // // // // // // // //         message: "AI returned invalid JSON format",
// // // // // // // // // // // //         raw: resultText,
// // // // // // // // // // // //       });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     res.status(200).json({ tasks });
// // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // //     console.error("❌ AI Suggest Error →", error);
// // // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // // //       message: "Failed to generate task suggestions",
// // // // // // // // // // // //       details: error.message,
// // // // // // // // // // // //     });
// // // // // // // // // // // //   }
// // // // // // // // // // // // });

// // // // // // // // // // // // // ✍️ Smart Day Plan
// // // // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // You are a productivity assistant.
// // // // // // // // // // // // Using this input: "${input}",
// // // // // // // // // // // // create a structured motivational daily plan using emojis and time slots.
// // // // // // // // // // // // Keep it simple and clear for one full day.
// // // // // // // // // // // // `;

// // // // // // // // // // // //     const response = await openai.chat.completions.create({
// // // // // // // // // // // //       model: "gpt-4o-mini",
// // // // // // // // // // // //       messages: [{ role: "user", content: prompt }],
// // // // // // // // // // // //       temperature: 0.7,
// // // // // // // // // // // //       max_tokens: 500,
// // // // // // // // // // // //     });

// // // // // // // // // // // //     const plan = response?.choices?.[0]?.message?.content?.trim();
// // // // // // // // // // // //     if (!plan) {
// // // // // // // // // // // //       return res.status(500).json({ message: "AI returned empty response" });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     console.log("🧠 Raw AI Response (plan):", plan);
// // // // // // // // // // // //     res.status(200).json({ plan });
// // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // //     console.error("❌ AI Plan Error →", error);
// // // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // // //       message: "Failed to generate plan",
// // // // // // // // // // // //       details: error.message,
// // // // // // // // // // // //     });
// // // // // // // // // // // //   }
// // // // // // // // // // // // });

// // // // // // // // // // // // export default router;



// // // // // // // // // // // // import express from "express";
// // // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // // // dotenv.config();
// // // // // // // // // // // // const router = express.Router();

// // // // // // // // // // // // // ✅ Initialize Gemini
// // // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// // // // // // // // // // // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // // // // // // // // // // // // ✅ Utility: clean text
// // // // // // // // // // // // const cleanInput = (text) => text?.trim().replace(/\s+/g, " ") || "";

// // // // // // // // // // // // // 🧠 Suggest & Categorize Tasks
// // // // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // Analyze this text: "${input}".
// // // // // // // // // // // // List possible tasks in pure JSON array format:
// // // // // // // // // // // // [
// // // // // // // // // // // //   {"task": "task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // // // // // // // ]
// // // // // // // // // // // // Return ONLY pure JSON.
// // // // // // // // // // // // `;

// // // // // // // // // // // //     // 🧩 Gemini request
// // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // //     const responseText = result.response.text().trim();

// // // // // // // // // // // //     console.log("🧠 Raw Gemini Response (suggest):", responseText);

// // // // // // // // // // // //     let tasks;
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       tasks = JSON.parse(responseText);
// // // // // // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not an array");
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       return res.status(500).json({
// // // // // // // // // // // //         message: "AI returned invalid JSON format",
// // // // // // // // // // // //         raw: responseText,
// // // // // // // // // // // //       });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     res.status(200).json({ tasks });
// // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // //     console.error("❌ Gemini Suggest Error →", error);
// // // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // // //       message: "Failed to generate task suggestions",
// // // // // // // // // // // //       details: error.message,
// // // // // // // // // // // //     });
// // // // // // // // // // // //   }
// // // // // // // // // // // // });

// // // // // // // // // // // // // ✍️ Smart Day Plan
// // // // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // // //     if (!input) {
// // // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const prompt = `
// // // // // // // // // // // // You are a productivity assistant.
// // // // // // // // // // // // Using this input: "${input}",
// // // // // // // // // // // // create a structured motivational daily plan using emojis and time slots.
// // // // // // // // // // // // Keep it simple, energetic, and clear for one full day.
// // // // // // // // // // // // `;

// // // // // // // // // // // //     // 🧩 Gemini request
// // // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // // //     const plan = result.response.text().trim();

// // // // // // // // // // // //     console.log("🧠 Raw Gemini Response (plan):", plan);

// // // // // // // // // // // //     res.status(200).json({ plan });
// // // // // // // // // // // //   } catch (error) {
// // // // // // // // // // // //     console.error("❌ Gemini Plan Error →", error);
// // // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // // //       message: "Failed to generate plan",
// // // // // // // // // // // //       details: error.message,
// // // // // // // // // // // //     });
// // // // // // // // // // // //   }
// // // // // // // // // // // // });

// // // // // // // // // // // // export default router;


// // // // // // // // // // // import express from "express";
// // // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // // dotenv.config();
// // // // // // // // // // // const router = express.Router();

// // // // // // // // // // // // ✅ Initialize Gemini
// // // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// // // // // // // // // // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // // // // // // // // // // // ✅ Utility: sanitize input
// // // // // // // // // // // const cleanInput = (text) => text?.trim().replace(/\s+/g, " ") || "";

// // // // // // // // // // // /* ─────────────────────────────
// // // // // // // // // // //    🧠 ROUTE 1 — SUGGEST TASKS
// // // // // // // // // // // ───────────────────────────── */
// // // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // // //   try {
// // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // //     if (!input) {
// // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // //     }

// // // // // // // // // // //     const prompt = `
// // // // // // // // // // // Analyze this text: "${input}".
// // // // // // // // // // // List possible tasks in pure JSON array format like:
// // // // // // // // // // // [
// // // // // // // // // // //   {"task": "task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // // // // // // ]
// // // // // // // // // // // Return ONLY valid JSON — no explanation or extra text.
// // // // // // // // // // // `;

// // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // //     const responseText = result.response.text().trim();

// // // // // // // // // // //     console.log("🧠 Gemini Raw Response (suggest):", responseText);

// // // // // // // // // // //     let tasks;
// // // // // // // // // // //     try {
// // // // // // // // // // //       tasks = JSON.parse(responseText);
// // // // // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not an array");
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       return res.status(500).json({
// // // // // // // // // // //         message: "AI returned invalid JSON format",
// // // // // // // // // // //         raw: responseText,
// // // // // // // // // // //       });
// // // // // // // // // // //     }

// // // // // // // // // // //     res.status(200).json({ tasks });
// // // // // // // // // // //   } catch (error) {
// // // // // // // // // // //     console.error("❌ Gemini Suggest Error →", error);
// // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // //       message: "Failed to generate task suggestions",
// // // // // // // // // // //       details: error.message,
// // // // // // // // // // //     });
// // // // // // // // // // //   }
// // // // // // // // // // // });

// // // // // // // // // // // /* ─────────────────────────────
// // // // // // // // // // //    ✍️ ROUTE 2 — PLAN MY DAY
// // // // // // // // // // // ───────────────────────────── */
// // // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // // //   try {
// // // // // // // // // // //     const { text } = req.body;
// // // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // // //     if (!input) {
// // // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // // //     }

// // // // // // // // // // //     const prompt = `
// // // // // // // // // // // You are a friendly productivity assistant.
// // // // // // // // // // // Based on this request: "${input}",
// // // // // // // // // // // create a structured and motivational **daily plan** using emojis and time slots.
// // // // // // // // // // // Keep it realistic, well-formatted, and cover a full day (morning to night).
// // // // // // // // // // // Example format:

// // // // // // // // // // // 🌅 6:30 AM – Wake up & stretch  
// // // // // // // // // // // 🍳 7:00 AM – Breakfast & review goals  
// // // // // // // // // // // 💻 9:00 AM – Focus work/study session  
// // // // // // // // // // // 🏋️‍♂️ 6:00 PM – Workout  
// // // // // // // // // // // 🌙 10:30 PM – Sleep

// // // // // // // // // // // Respond with only the plan.
// // // // // // // // // // // `;

// // // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // // //     const plan = result.response.text().trim();

// // // // // // // // // // //     console.log("🧠 Gemini Raw Response (plan):", plan);

// // // // // // // // // // //     if (!plan) {
// // // // // // // // // // //       return res.status(500).json({ message: "AI returned empty response" });
// // // // // // // // // // //     }

// // // // // // // // // // //     res.status(200).json({ plan });
// // // // // // // // // // //   } catch (error) {
// // // // // // // // // // //     console.error("❌ Gemini Plan Error →", error);
// // // // // // // // // // //     res.status(500).json({
// // // // // // // // // // //       message: "Failed to generate plan",
// // // // // // // // // // //       details: error.message,
// // // // // // // // // // //     });
// // // // // // // // // // //   }
// // // // // // // // // // // });

// // // // // // // // // // // export default router;


// // // // // // // // // // import express from "express";
// // // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // // dotenv.config();
// // // // // // // // // // const router = express.Router();

// // // // // // // // // // /* ─────────────────────────────
// // // // // // // // // //    🌟 GEMINI SETUP
// // // // // // // // // // ───────────────────────────── */
// // // // // // // // // // if (!process.env.GEMINI_API_KEY) {
// // // // // // // // // //   console.error("❌ Missing GEMINI_API_KEY in .env file");
// // // // // // // // // // }
// // // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// // // // // // // // // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // // // // // // // // // // ✅ Utility: clean input safely
// // // // // // // // // // const cleanInput = (text) => (text ? text.trim().replace(/\s+/g, " ") : "");

// // // // // // // // // // /* ─────────────────────────────
// // // // // // // // // //    🧠 ROUTE 1 — SUGGEST TASKS
// // // // // // // // // // ───────────────────────────── */
// // // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // // //   try {
// // // // // // // // // //     const { text } = req.body;
// // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // //     if (!input) {
// // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // //     }

// // // // // // // // // //     const prompt = `
// // // // // // // // // // Analyze this user input: "${input}".
// // // // // // // // // // Extract actionable tasks from it and return them as **pure JSON** in the following structure:
// // // // // // // // // // [
// // // // // // // // // //   {"task": "Task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // // // // // ]
// // // // // // // // // // Do NOT include any explanation or text outside JSON. Return strictly valid JSON only.
// // // // // // // // // // `;

// // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // //     const responseText = result?.response?.text()?.trim();

// // // // // // // // // //     console.log("🧠 Gemini Raw Response (suggest):", responseText);

// // // // // // // // // //     let tasks;
// // // // // // // // // //     try {
// // // // // // // // // //       tasks = JSON.parse(responseText);
// // // // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not a valid JSON array");
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("⚠️ JSON Parse Error →", err.message);
// // // // // // // // // //       return res.status(500).json({
// // // // // // // // // //         message: "AI returned invalid JSON format",
// // // // // // // // // //         raw: responseText,
// // // // // // // // // //       });
// // // // // // // // // //     }

// // // // // // // // // //     return res.status(200).json({ tasks });
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error("❌ Gemini Suggest Error →", error);
// // // // // // // // // //     return res.status(500).json({
// // // // // // // // // //       message: "Failed to generate task suggestions",
// // // // // // // // // //       details: error.message,
// // // // // // // // // //     });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // /* ─────────────────────────────
// // // // // // // // // //    ✍️ ROUTE 2 — PLAN MY DAY
// // // // // // // // // // ───────────────────────────── */
// // // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // // //   try {
// // // // // // // // // //     const { text } = req.body;
// // // // // // // // // //     const input = cleanInput(text);

// // // // // // // // // //     if (!input) {
// // // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // // //     }

// // // // // // // // // //     const prompt = `
// // // // // // // // // // You are TaskIQ — a cheerful and disciplined productivity AI.
// // // // // // // // // // User said: "${input}"

// // // // // // // // // // Create a structured and motivating **daily schedule** (from morning to night) with time slots and emojis.
// // // // // // // // // // Make it neat, realistic, and formatted like this:

// // // // // // // // // // 🌅 6:30 AM – Wake up & stretch  
// // // // // // // // // // 🍳 7:00 AM – Breakfast & review goals  
// // // // // // // // // // 💻 9:00 AM – Work/study session  
// // // // // // // // // // 🏋️‍♂️ 6:00 PM – Workout  
// // // // // // // // // // 🌙 10:30 PM – Sleep  

// // // // // // // // // // Respond ONLY with the plan, no extra text or markdown.
// // // // // // // // // // `;

// // // // // // // // // //     const result = await model.generateContent(prompt);
// // // // // // // // // //     const plan = result?.response?.text()?.trim();

// // // // // // // // // //     console.log("🧠 Gemini Raw Response (plan):", plan);

// // // // // // // // // //     if (!plan || plan.length < 5) {
// // // // // // // // // //       return res.status(500).json({ message: "AI returned empty or invalid response" });
// // // // // // // // // //     }

// // // // // // // // // //     return res.status(200).json({ plan });
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error("❌ Gemini Plan Error →", error);
// // // // // // // // // //     return res.status(500).json({
// // // // // // // // // //       message: "Failed to generate plan",
// // // // // // // // // //       details: error.message,
// // // // // // // // // //     });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // /* ─────────────────────────────
// // // // // // // // // //    ✅ EXPORT ROUTER
// // // // // // // // // // ───────────────────────────── */
// // // // // // // // // // export default router;


// // // // // // // // // import express from "express";
// // // // // // // // // import dotenv from "dotenv";
// // // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // // dotenv.config();
// // // // // // // // // const router = express.Router();

// // // // // // // // // /* ─────────────────────────────
// // // // // // // // //    🌟 GEMINI SETUP
// // // // // // // // // ───────────────────────────── */
// // // // // // // // // if (!process.env.GEMINI_API_KEY) {
// // // // // // // // //   console.error("❌ Missing GEMINI_API_KEY in .env file");
// // // // // // // // // }

// // // // // // // // // // ✅ Use latest stable model name
// // // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// // // // // // // // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

// // // // // // // // // // ✅ Utility: clean input safely
// // // // // // // // // const cleanInput = (text) => (text ? text.trim().replace(/\s+/g, " ") : "");

// // // // // // // // // /* ─────────────────────────────
// // // // // // // // //    🧠 ROUTE 1 — SUGGEST TASKS
// // // // // // // // // ───────────────────────────── */
// // // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const { text } = req.body;
// // // // // // // // //     const input = cleanInput(text);

// // // // // // // // //     if (!input) {
// // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // //     }

// // // // // // // // //     const prompt = `
// // // // // // // // // Analyze this user input: "${input}".
// // // // // // // // // Extract actionable tasks from it and return them as **pure JSON** in the following structure:
// // // // // // // // // [
// // // // // // // // //   {"task": "Task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // // // // ]
// // // // // // // // // Do NOT include any explanation or text outside JSON. Return strictly valid JSON only.
// // // // // // // // // `;

// // // // // // // // //     const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
// // // // // // // // //     const responseText = result?.response?.text()?.trim();

// // // // // // // // //     console.log("🧠 Gemini Raw Response (suggest):", responseText);

// // // // // // // // //     let tasks;
// // // // // // // // //     try {
// // // // // // // // //       tasks = JSON.parse(responseText);
// // // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not a valid JSON array");
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error("⚠️ JSON Parse Error →", err.message);
// // // // // // // // //       return res.status(500).json({
// // // // // // // // //         message: "AI returned invalid JSON format",
// // // // // // // // //         raw: responseText,
// // // // // // // // //       });
// // // // // // // // //     }

// // // // // // // // //     return res.status(200).json({ tasks });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error("❌ Gemini Suggest Error →", error);
// // // // // // // // //     return res.status(500).json({
// // // // // // // // //       message: "Failed to generate task suggestions",
// // // // // // // // //       details: error.message,
// // // // // // // // //     });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // /* ─────────────────────────────
// // // // // // // // //    ✍️ ROUTE 2 — PLAN MY DAY
// // // // // // // // // ───────────────────────────── */
// // // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const { text } = req.body;
// // // // // // // // //     const input = cleanInput(text);

// // // // // // // // //     if (!input) {
// // // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // // //     }

// // // // // // // // //     const prompt = `
// // // // // // // // // You are TaskIQ — a cheerful and disciplined productivity AI.
// // // // // // // // // User said: "${input}"

// // // // // // // // // Create a structured and motivating **daily schedule** (from morning to night) with time slots and emojis.
// // // // // // // // // Make it neat, realistic, and formatted like this:

// // // // // // // // // 🌅 6:30 AM – Wake up & stretch  
// // // // // // // // // 🍳 7:00 AM – Breakfast & review goals  
// // // // // // // // // 💻 9:00 AM – Work/study session  
// // // // // // // // // 🏋️‍♂️ 6:00 PM – Workout  
// // // // // // // // // 🌙 10:30 PM – Sleep  

// // // // // // // // // Respond ONLY with the plan, no extra text or markdown.
// // // // // // // // // `;

// // // // // // // // //     const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
// // // // // // // // //     const plan = result?.response?.text()?.trim();

// // // // // // // // //     console.log("🧠 Gemini Raw Response (plan):", plan);

// // // // // // // // //     if (!plan || plan.length < 5) {
// // // // // // // // //       return res.status(500).json({ message: "AI returned empty or invalid response" });
// // // // // // // // //     }

// // // // // // // // //     return res.status(200).json({ plan });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error("❌ Gemini Plan Error →", error);
// // // // // // // // //     return res.status(500).json({
// // // // // // // // //       message: "Failed to generate plan",
// // // // // // // // //       details: error.message,
// // // // // // // // //     });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // /* ─────────────────────────────
// // // // // // // // //    ✅ EXPORT ROUTER
// // // // // // // // // ───────────────────────────── */
// // // // // // // // // export default router;

// // // // // // // // import express from "express";
// // // // // // // // import dotenv from "dotenv";
// // // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // // dotenv.config();
// // // // // // // // const router = express.Router();

// // // // // // // // /* ─────────────────────────────
// // // // // // // //    🌟 GEMINI SETUP (v1 endpoint)
// // // // // // // // ───────────────────────────── */
// // // // // // // // if (!process.env.GEMINI_API_KEY) {
// // // // // // // //   console.error("❌ Missing GEMINI_API_KEY in .env file");
// // // // // // // // }

// // // // // // // // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // // // // // // // // ✅ use v1-compatible model
// // // // // // // // const model = genAI.getGenerativeModel({
// // // // // // // //   model: "gemini-1.5-flash", // stable, available under v1
// // // // // // // // });

// // // // // // // // // ✅ Utility: clean input safely
// // // // // // // // const cleanInput = (text) => (text ? text.trim().replace(/\s+/g, " ") : "");

// // // // // // // // /* ─────────────────────────────
// // // // // // // //    🧠 ROUTE 1 — SUGGEST TASKS
// // // // // // // // ───────────────────────────── */
// // // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { text } = req.body;
// // // // // // // //     const input = cleanInput(text);

// // // // // // // //     if (!input) {
// // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // //     }

// // // // // // // //     const prompt = `
// // // // // // // // Analyze this text: "${input}".
// // // // // // // // Extract actionable tasks and return only valid JSON:
// // // // // // // // [
// // // // // // // //   {"task": "Task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // // // ]
// // // // // // // // Strictly output JSON only — no explanations.
// // // // // // // // `;

// // // // // // // //     const result = await model.generateContent({
// // // // // // // //       contents: [{ role: "user", parts: [{ text: prompt }] }],
// // // // // // // //     });

// // // // // // // //     const responseText = result.response.text().trim();
// // // // // // // //     console.log("🧠 Gemini Raw Response (suggest):", responseText);

// // // // // // // //     let tasks;
// // // // // // // //     try {
// // // // // // // //       tasks = JSON.parse(responseText);
// // // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not an array");
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("⚠️ JSON Parse Error →", err.message);
// // // // // // // //       return res.status(500).json({
// // // // // // // //         message: "AI returned invalid JSON format",
// // // // // // // //         raw: responseText,
// // // // // // // //       });
// // // // // // // //     }

// // // // // // // //     res.status(200).json({ tasks });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("❌ Gemini Suggest Error →", error);
// // // // // // // //     res.status(500).json({
// // // // // // // //       message: "Failed to generate task suggestions",
// // // // // // // //       details: error.message,
// // // // // // // //     });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // /* ─────────────────────────────
// // // // // // // //    ✍️ ROUTE 2 — PLAN MY DAY
// // // // // // // // ───────────────────────────── */
// // // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { text } = req.body;
// // // // // // // //     const input = cleanInput(text);

// // // // // // // //     if (!input) {
// // // // // // // //       return res.status(400).json({ message: "Text input is required" });
// // // // // // // //     }

// // // // // // // //     const prompt = `
// // // // // // // // You are TaskIQ — a cheerful productivity AI.
// // // // // // // // Based on: "${input}",
// // // // // // // // create a simple motivational **daily plan** with emojis and time slots.
// // // // // // // // Example:

// // // // // // // // 🌅 6:30 AM – Wake up & stretch  
// // // // // // // // 🍳 7:00 AM – Breakfast & review goals  
// // // // // // // // 💻 9:00 AM – Study/work session  
// // // // // // // // 🏋️‍♂️ 6:00 PM – Workout  
// // // // // // // // 🌙 10:30 PM – Sleep  

// // // // // // // // Respond ONLY with the plan (no explanations).
// // // // // // // // `;

// // // // // // // //     const result = await model.generateContent({
// // // // // // // //       contents: [{ role: "user", parts: [{ text: prompt }] }],
// // // // // // // //     });

// // // // // // // //     const plan = result.response.text().trim();
// // // // // // // //     console.log("🧠 Gemini Raw Response (plan):", plan);

// // // // // // // //     if (!plan || plan.length < 5) {
// // // // // // // //       return res.status(500).json({ message: "AI returned empty or invalid response" });
// // // // // // // //     }

// // // // // // // //     res.status(200).json({ plan });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("❌ Gemini Plan Error →", error);
// // // // // // // //     res.status(500).json({
// // // // // // // //       message: "Failed to generate plan",
// // // // // // // //       details: error.message,
// // // // // // // //     });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // /* ─────────────────────────────
// // // // // // // //    ✅ EXPORT ROUTER
// // // // // // // // ───────────────────────────── */
// // // // // // // // export default router;

// // // // // // // import express from "express";
// // // // // // // import dotenv from "dotenv";
// // // // // // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // dotenv.config();
// // // // // // // const router = express.Router();

// // // // // // // // ✅ Load API key
// // // // // // // const apiKey = process.env.GEMINI_API_KEY;
// // // // // // // if (!apiKey) {
// // // // // // //   console.error("❌ GEMINI_API_KEY missing in .env");
// // // // // // // }
// // // // // // // console.log("✅ Gemini API Key Loaded?", !!apiKey);

// // // // // // // // ✅ Initialize Gemini with the stable endpoint
// // // // // // // const genAI = new GoogleGenerativeAI(apiKey);

// // // // // // // // ✅ Try both models (auto-fallback)
// // // // // // // const getModel = async () => {
// // // // // // //   try {
// // // // // // //     return genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
// // // // // // //   } catch (err) {
// // // // // // //     console.warn("⚠️ Flash model unavailable, switching to Pro");
// // // // // // //     return genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ Helper
// // // // // // // const cleanInput = (text) => text?.trim().replace(/\s+/g, " ") || "";

// // // // // // // /* ──────────────── 🧠 SUGGEST TASKS ──────────────── */
// // // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { text } = req.body;
// // // // // // //     const input = cleanInput(text);
// // // // // // //     if (!input) return res.status(400).json({ message: "Text input is required" });

// // // // // // //     const prompt = `
// // // // // // // Analyze this text: "${input}".
// // // // // // // List possible tasks in JSON array format only:
// // // // // // // [
// // // // // // //   {"task": "task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // // ]
// // // // // // // Return ONLY valid JSON — no explanation or extra text.
// // // // // // // `;

// // // // // // //     const model = await getModel();
// // // // // // //     const result = await model.generateContent(prompt);
// // // // // // //     const responseText = result.response.text().trim();

// // // // // // //     console.log("🧠 Gemini Raw Response (suggest):", responseText);

// // // // // // //     let tasks;
// // // // // // //     try {
// // // // // // //       tasks = JSON.parse(responseText);
// // // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not array");
// // // // // // //     } catch (err) {
// // // // // // //       return res.status(500).json({
// // // // // // //         message: "AI returned invalid JSON format",
// // // // // // //         raw: responseText,
// // // // // // //       });
// // // // // // //     }

// // // // // // //     res.status(200).json({ tasks });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Gemini Suggest Error →", error);
// // // // // // //     res.status(500).json({
// // // // // // //       message: "Failed to generate task suggestions",
// // // // // // //       details: error.message,
// // // // // // //     });
// // // // // // //   }
// // // // // // // });

// // // // // // // /* ──────────────── ✍️ PLAN MY DAY ──────────────── */
// // // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { text } = req.body;
// // // // // // //     const input = cleanInput(text);
// // // // // // //     if (!input) return res.status(400).json({ message: "Text input is required" });

// // // // // // //     const prompt = `
// // // // // // // You are a friendly productivity assistant.
// // // // // // // Based on this request: "${input}",
// // // // // // // create a structured and motivational daily plan with emojis and time slots.
// // // // // // // Keep it realistic, from morning to night.
// // // // // // // Example:

// // // // // // // 🌅 6:30 AM – Wake up & stretch  
// // // // // // // 🍳 7:00 AM – Breakfast & review goals  
// // // // // // // 💻 9:00 AM – Work/study session  
// // // // // // // 🏋️‍♀️ 6:00 PM – Workout  
// // // // // // // 🌙 10:30 PM – Sleep

// // // // // // // Respond only with the plan.
// // // // // // // `;

// // // // // // //     const model = await getModel();
// // // // // // //     const result = await model.generateContent(prompt);
// // // // // // //     const plan = result.response.text().trim();

// // // // // // //     console.log("🧠 Gemini Raw Response (plan):", plan);

// // // // // // //     if (!plan) return res.status(500).json({ message: "AI returned empty response" });

// // // // // // //     res.status(200).json({ plan });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Gemini Plan Error →", error);
// // // // // // //     res.status(500).json({
// // // // // // //       message: "Failed to generate plan",
// // // // // // //       details: error.message,
// // // // // // //     });
// // // // // // //   }
// // // // // // // });

// // // // // // // export default router;



// // // // // // import express from "express";
// // // // // // import dotenv from "dotenv";
// // // // // // import fetch from "node-fetch";
// // // // // // import { protect } from "../middleware/auth.js";

// // // // // // dotenv.config();
// // // // // // const router = express.Router();

// // // // // // const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
// // // // // // const GEMINI_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent";

// // // // // // if (!GEMINI_API_KEY) {
// // // // // //   console.error("❌ Missing GEMINI_API_KEY in .env");
// // // // // // } else {
// // // // // //   console.log("✅ Gemini API Key Loaded?", true);
// // // // // // }

// // // // // // // helper
// // // // // // const cleanInput = (t) => (t ? t.trim().replace(/\s+/g, " ") : "");

// // // // // // // ─────────────── 🧠 /suggest ───────────────
// // // // // // router.post("/suggest", protect, async (req, res) => {
// // // // // //   try {
// // // // // //     const { text } = req.body;
// // // // // //     const input = cleanInput(text);
// // // // // //     if (!input) return res.status(400).json({ message: "Text input required" });

// // // // // //     const prompt = `
// // // // // // Analyze this text: "${input}".
// // // // // // List actionable tasks in JSON format only:
// // // // // // [
// // // // // //   {"task": "task name", "category": "Work/Study/Fitness/Personal/Other", "priority": "High/Medium/Low"}
// // // // // // ]
// // // // // // Return only JSON, no explanation.
// // // // // // `;

// // // // // //     const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
// // // // // //       method: "POST",
// // // // // //       headers: { "Content-Type": "application/json" },
// // // // // //       body: JSON.stringify({
// // // // // //         contents: [{ parts: [{ text: prompt }] }],
// // // // // //       }),
// // // // // //     });

// // // // // //     const data = await response.json();
// // // // // //     const output = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

// // // // // //     console.log("🧠 Gemini Raw Response (suggest):", output);

// // // // // //     let tasks;
// // // // // //     try {
// // // // // //       tasks = JSON.parse(output);
// // // // // //       if (!Array.isArray(tasks)) throw new Error("Response is not an array");
// // // // // //     } catch (err) {
// // // // // //       return res.status(500).json({
// // // // // //         message: "AI returned invalid JSON format",
// // // // // //         raw: output,
// // // // // //       });
// // // // // //     }

// // // // // //     res.status(200).json({ tasks });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Gemini Suggest Error →", error);
// // // // // //     res.status(500).json({
// // // // // //       message: "Failed to generate task suggestions",
// // // // // //       details: error.message,
// // // // // //     });
// // // // // //   }
// // // // // // });

// // // // // // // ─────────────── ✍️ /plan ───────────────
// // // // // // router.post("/plan", protect, async (req, res) => {
// // // // // //   try {
// // // // // //     const { text } = req.body;
// // // // // //     const input = cleanInput(text);
// // // // // //     if (!input) return res.status(400).json({ message: "Text input required" });

// // // // // //     const prompt = `
// // // // // // You are TaskIQ — a helpful productivity AI.
// // // // // // User said: "${input}"

// // // // // // Make a structured, realistic daily schedule with emojis and times like:

// // // // // // 🌅 6:30 AM – Wake up & stretch  
// // // // // // 🍳 7:00 AM – Breakfast & review goals  
// // // // // // 💻 9:00 AM – Work/study  
// // // // // // 🏋️‍♀️ 6:00 PM – Workout  
// // // // // // 🌙 10:30 PM – Sleep  

// // // // // // Return only the plan text.
// // // // // // `;

// // // // // //     const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
// // // // // //       method: "POST",
// // // // // //       headers: { "Content-Type": "application/json" },
// // // // // //       body: JSON.stringify({
// // // // // //         contents: [{ parts: [{ text: prompt }] }],
// // // // // //       }),
// // // // // //     });

// // // // // //     const data = await response.json();
// // // // // //     const plan = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

// // // // // //     console.log("🧠 Gemini Raw Response (plan):", plan);

// // // // // //     if (!plan) return res.status(500).json({ message: "Empty response from AI" });

// // // // // //     res.status(200).json({ plan });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Gemini Plan Error →", error);
// // // // // //     res.status(500).json({
// // // // // //       message: "Failed to generate plan",
// // // // // //       details: error.message,
// // // // // //     });
// // // // // //   }
// // // // // // });

// // // // // // export default router;


// // // // // import express from "express";
// // // // // import fetch from "node-fetch";

// // // // // const router = express.Router();

// // // // // // ✅ Generate task plan using Gemini API
// // // // // router.post("/plan", async (req, res) => {
// // // // //   try {
// // // // //     const { prompt } = req.body;
// // // // //     if (!prompt) return res.status(400).json({ error: "Prompt is required" });

// // // // //     const response = await fetch(
// // // // //       "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
// // // // //       {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           "x-goog-api-key": process.env.GEMINI_API_KEY,
// // // // //         },
// // // // //         body: JSON.stringify({
// // // // //           contents: [
// // // // //             {
// // // // //               parts: [{ text: prompt }],
// // // // //             },
// // // // //           ],
// // // // //         }),
// // // // //       }
// // // // //     );

// // // // //     const data = await response.json();

// // // // //     if (!response.ok) {
// // // // //       console.error("❌ Gemini API Error:", data);
// // // // //       return res.status(500).json({
// // // // //         error: "Gemini API request failed",
// // // // //         details: data.error?.message || "Unknown error",
// // // // //       });
// // // // //     }

// // // // //     // ✅ Extract text from the response properly
// // // // //     const planText =
// // // // //       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
// // // // //       "No plan generated by Gemini.";

// // // // //     console.log("🧠 Gemini Plan:", planText);

// // // // //     res.json({ plan: planText });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Server Error:", error);
// // // // //     res.status(500).json({ error: "Server error", details: error.message });
// // // // //   }
// // // // // });

// // // // // // ✅ Suggest tasks (same structure)
// // // // // router.post("/suggest", async (req, res) => {
// // // // //   try {
// // // // //     const { prompt } = req.body;
// // // // //     if (!prompt) return res.status(400).json({ error: "Prompt is required" });

// // // // //     const response = await fetch(
// // // // //       "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
// // // // //       {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           "x-goog-api-key": process.env.GEMINI_API_KEY,
// // // // //         },
// // // // //         body: JSON.stringify({
// // // // //           contents: [
// // // // //             {
// // // // //               parts: [{ text: prompt }],
// // // // //             },
// // // // //           ],
// // // // //         }),
// // // // //       }
// // // // //     );

// // // // //     const data = await response.json();

// // // // //     if (!response.ok) {
// // // // //       console.error("❌ Gemini API Error:", data);
// // // // //       return res.status(500).json({
// // // // //         error: "Gemini API request failed",
// // // // //         details: data.error?.message || "Unknown error",
// // // // //       });
// // // // //     }

// // // // //     const suggestText =
// // // // //       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
// // // // //       "No suggestions generated by Gemini.";

// // // // //     console.log("🧠 Gemini Suggestion:", suggestText);

// // // // //     res.json({ suggestion: suggestText });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Server Error:", error);
// // // // //     res.status(500).json({ error: "Server error", details: error.message });
// // // // //   }
// // // // // });

// // // // // export default router;


// // // // import express from "express";
// // // // import fetch from "node-fetch";

// // // // const router = express.Router();

// // // // // ✅ Base Gemini API URL (updated to v1)
// // // // const GEMINI_API_URL =
// // // //   "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent";

// // // // // ✅ Generate Task Plan using Gemini API
// // // // router.post("/plan", async (req, res) => {
// // // //   try {
// // // //     const { prompt } = req.body;
// // // //     if (!prompt)
// // // //       return res.status(400).json({ error: "Prompt is required" });

// // // //     const response = await fetch(GEMINI_API_URL, {
// // // //       method: "POST",
// // // //       headers: {
// // // //         "Content-Type": "application/json",
// // // //         "x-goog-api-key": process.env.GEMINI_API_KEY,
// // // //       },
// // // //       body: JSON.stringify({
// // // //         contents: [
// // // //           {
// // // //             parts: [{ text: prompt }],
// // // //           },
// // // //         ],
// // // //       }),
// // // //     });

// // // //     const data = await response.json();

// // // //     if (!response.ok) {
// // // //       console.error("❌ Gemini API Error:", data);
// // // //       return res.status(response.status).json({
// // // //         error: "Gemini API request failed",
// // // //         details: data.error?.message || "Unknown Gemini API error",
// // // //       });
// // // //     }

// // // //     // ✅ Extract text from the response safely
// // // //     const planText =
// // // //       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
// // // //       "⚠️ No plan generated by Gemini.";

// // // //     console.log("🧠 Gemini Plan Generated:", planText);
// // // //     res.json({ plan: planText });
// // // //   } catch (error) {
// // // //     console.error("❌ Server Error:", error);
// // // //     res.status(500).json({
// // // //       error: "Server error",
// // // //       details: error.message,
// // // //     });
// // // //   }
// // // // });

// // // // // ✅ Suggest Tasks using Gemini API
// // // // router.post("/suggest", async (req, res) => {
// // // //   try {
// // // //     const { prompt } = req.body;
// // // //     if (!prompt)
// // // //       return res.status(400).json({ error: "Prompt is required" });

// // // //     const response = await fetch(GEMINI_API_URL, {
// // // //       method: "POST",
// // // //       headers: {
// // // //         "Content-Type": "application/json",
// // // //         "x-goog-api-key": process.env.GEMINI_API_KEY,
// // // //       },
// // // //       body: JSON.stringify({
// // // //         contents: [
// // // //           {
// // // //             parts: [{ text: prompt }],
// // // //           },
// // // //         ],
// // // //       }),
// // // //     });

// // // //     const data = await response.json();

// // // //     if (!response.ok) {
// // // //       console.error("❌ Gemini API Error:", data);
// // // //       return res.status(response.status).json({
// // // //         error: "Gemini API request failed",
// // // //         details: data.error?.message || "Unknown Gemini API error",
// // // //       });
// // // //     }

// // // //     const suggestText =
// // // //       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
// // // //       "⚠️ No suggestions generated by Gemini.";

// // // //     console.log("🧠 Gemini Suggestion Generated:", suggestText);
// // // //     res.json({ suggestion: suggestText });
// // // //   } catch (error) {
// // // //     console.error("❌ Server Error:", error);
// // // //     res.status(500).json({
// // // //       error: "Server error",
// // // //       details: error.message,
// // // //     });
// // // //   }
// // // // });

// // // // export default router;


// // // import express from "express";
// // // import fetch from "node-fetch";

// // // const router = express.Router();

// // // // ✅ Correct Gemini API URL (v1beta + proper model)
// // // const GEMINI_API_URL =
// // //   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// // // // 🧠 Helper function to call Gemini API
// // // async function callGeminiAPI(prompt) {
// // //   const response = await fetch(GEMINI_API_URL, {
// // //     method: "POST",
// // //     headers: {
// // //       "Content-Type": "application/json",
// // //       "x-goog-api-key": process.env.GEMINI_API_KEY,
// // //     },
// // //     body: JSON.stringify({
// // //       contents: [
// // //         {
// // //           parts: [{ text: prompt }],
// // //         },
// // //       ],
// // //     }),
// // //   });

// // //   const data = await response.json();
// // //   if (!response.ok) {
// // //     console.error("❌ Gemini API Error:", data);
// // //     throw new Error(data.error?.message || "Gemini API request failed");
// // //   }

// // //   return (
// // //     data?.candidates?.[0]?.content?.parts?.[0]?.text ||
// // //     "⚠️ No content generated by Gemini."
// // //   );
// // // }

// // // // ✅ Route 1: Generate Task Plan
// // // router.post("/plan", async (req, res) => {
// // //   try {
// // //     const { prompt } = req.body;
// // //     if (!prompt) {
// // //       return res.status(400).json({ error: "Prompt is required" });
// // //     }

// // //     const planText = await callGeminiAPI(prompt);
// // //     console.log("🧠 Gemini Plan Generated:", planText);
// // //     res.json({ plan: planText });
// // //   } catch (error) {
// // //     console.error("❌ Server Error (plan):", error.message);
// // //     res.status(500).json({
// // //       error: "Server error",
// // //       details: error.message,
// // //     });
// // //   }
// // // });

// // // // ✅ Route 2: Suggest Tasks
// // // router.post("/suggest", async (req, res) => {
// // //   try {
// // //     const { prompt } = req.body;
// // //     if (!prompt) {
// // //       return res.status(400).json({ error: "Prompt is required" });
// // //     }

// // //     const suggestText = await callGeminiAPI(prompt);
// // //     console.log("🧠 Gemini Suggestion Generated:", suggestText);
// // //     res.json({ suggestion: suggestText });
// // //   } catch (error) {
// // //     console.error("❌ Server Error (suggest):", error.message);
// // //     res.status(500).json({
// // //       error: "Server error",
// // //       details: error.message,
// // //     });
// // //   }
// // // });

// // // export default router;



// // import express from "express";
// // import fetch from "node-fetch";

// // const router = express.Router();

// // // ✅ Correct Gemini API Endpoint (v1beta + valid model)
// // const GEMINI_API_URL =
// //   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// // // 🧠 Helper: Call Gemini API
// // async function callGeminiAPI(prompt) {
// //   try {
// //     const response = await fetch(GEMINI_API_URL, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         "x-goog-api-key": process.env.GEMINI_API_KEY,
// //       },
// //       body: JSON.stringify({
// //         contents: [
// //           {
// //             parts: [{ text: prompt }],
// //           },
// //         ],
// //       }),
// //     });

// //     const data = await response.json();

// //     // Handle Gemini API errors
// //     if (!response.ok) {
// //       console.error("❌ Gemini API Error:", data);
// //       throw new Error(data.error?.message || "Gemini API request failed");
// //     }

// //     // Extract text safely
// //     return (
// //       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
// //       "⚠️ No response generated by Gemini."
// //     );
// //   } catch (error) {
// //     console.error("❌ Gemini Fetch Error:", error.message);
// //     throw new Error(error.message);
// //   }
// // }

// // // ✅ Route 1: Generate Task Plan
// // router.post("/plan", async (req, res) => {
// //   try {
// //     const { prompt } = req.body;

// //     if (!prompt) {
// //       return res.status(400).json({ error: "Prompt is required" });
// //     }

// //     const planText = await callGeminiAPI(prompt);
// //     console.log("🧠 Gemini Plan Generated:", planText);

// //     res.json({ plan: planText });
// //   } catch (error) {
// //     console.error("❌ Server Error (/plan):", error.message);
// //     res.status(500).json({
// //       error: "Server error",
// //       details: error.message,
// //     });
// //   }
// // });

// // // ✅ Route 2: Suggest Tasks
// // router.post("/suggest", async (req, res) => {
// //   try {
// //     const { prompt } = req.body;

// //     if (!prompt) {
// //       return res.status(400).json({ error: "Prompt is required" });
// //     }

// //     const suggestionText = await callGeminiAPI(prompt);
// //     console.log("🧠 Gemini Suggestion Generated:", suggestionText);

// //     res.json({ suggestion: suggestionText });
// //   } catch (error) {
// //     console.error("❌ Server Error (/suggest):", error.message);
// //     res.status(500).json({
// //       error: "Server error",
// //       details: error.message,
// //     });
// //   }
// // });

// // export default router;

// import express from "express";
// import fetch from "node-fetch";

// const router = express.Router();

// // ✅ Use a currently documented model name
// const GEMINI_API_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

// async function callGeminiAPI(prompt) {
//   const response = await fetch(GEMINI_API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "x-goog-api-key": process.env.GEMINI_API_KEY,
//     },
//     body: JSON.stringify({
//       contents: [
//         {
//           parts: [{ text: prompt }],
//         },
//       ],
//     }),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     console.error("❌ Gemini API Error:", data);
//     throw new Error(data.error?.message || "Gemini API request failed");
//   }

//   return (
//     data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//     "⚠️ No response generated by Gemini."
//   );
// }

// router.post("/plan", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const planText = await callGeminiAPI(prompt);
//     console.log("🧠 Gemini Plan Generated:", planText);
//     res.json({ plan: planText });
//   } catch (error) {
//     console.error("❌ Server Error (/plan):", error.message);
//     res.status(500).json({
//       error: "Server error",
//       details: error.message,
//     });
//   }
// });

// router.post("/suggest", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) {
//       return res.status(400).json({ error: "Prompt is required" });
//     }

//     const suggestionText = await callGeminiAPI(prompt);
//     console.log("🧠 Gemini Suggestion Generated:", suggestionText);
//     res.json({ suggestion: suggestionText });
//   } catch (error) {
//     console.error("❌ Server Error (/suggest):", error.message);
//     res.status(500).json({
//       error: "Server error",
//       details: error.message,
//     });
//   }
// });

// export default router;

import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

async function callGeminiAPI(prompt) {
  const response = await fetch(GEMINI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("❌ Gemini API Error:", data);
    throw new Error(data.error?.message || "Gemini API request failed");
  }

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

// ✅ Suggest Tasks
router.post("/suggest", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const suggestionPrompt = `
    Analyze this text: "${prompt}".
    Suggest 5-8 tasks in JSON format, each with:
    - "task"
    - "category": [Work, Study, Fitness, Personal, Other]
    - "priority": [High, Medium, Low]
    Example:
    [{"task":"Complete report","category":"Work","priority":"High"}]
    `;

    const text = await callGeminiAPI(suggestionPrompt);
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = [{ task: "⚠️ Could not parse response", raw: text }];
    }

    res.json({ tasks: parsed });
  } catch (err) {
    console.error("❌ Suggest Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Plan My Day
router.post("/plan", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const planPrompt = `
    You are a productivity assistant. Create a structured, time-based plan for this:
    "${prompt}"
    Format with emojis and time slots.
    Example:
    🌅 7:00 AM - Morning Jog
    ☕ 8:00 AM - Breakfast
    💻 9:00 AM - Work Session
    🍽 1:00 PM - Lunch Break
    `;

    const planText = await callGeminiAPI(planPrompt);
    res.json({ plan: planText });
  } catch (err) {
    console.error("❌ Plan Error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;


