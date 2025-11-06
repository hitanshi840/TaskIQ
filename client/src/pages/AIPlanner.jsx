// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import { Sparkles, Brain, ClipboardList } from "lucide-react";
// // // // // // // // // // import api from "../api/axios";
// // // // // // // // // // import toast from "react-hot-toast";

// // // // // // // // // // export default function AIPlanner() {
// // // // // // // // // //   const [text, setText] = useState("");
// // // // // // // // // //   const [aiResult, setAiResult] = useState(null);
// // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // //   const [mode, setMode] = useState("plan"); // "plan" or "suggest"

// // // // // // // // // //   const handleAIRequest = async () => {
// // // // // // // // // //     if (!text.trim()) return toast.error("Please enter something for AI to process");

// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     try {
// // // // // // // // // //       const endpoint = mode === "plan" ? "/ai/plan" : "/ai/suggest";
// // // // // // // // // //       const res = await api.post(endpoint, { text });
// // // // // // // // // //       setAiResult(res.data);
// // // // // // // // // //       toast.success("AI generated results!");
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //       toast.error("Failed to fetch AI response");
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center">
// // // // // // // // // //       <motion.h1
// // // // // // // // // //         className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400"
// // // // // // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //         transition={{ duration: 0.6 }}
// // // // // // // // // //       >
// // // // // // // // // //         🧠 TaskIQ AI Assistant
// // // // // // // // // //       </motion.h1>

// // // // // // // // // //       {/* Input Box */}
// // // // // // // // // //       <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 w-full max-w-2xl border border-gray-200 dark:border-gray-700">
// // // // // // // // // //         <textarea
// // // // // // // // // //           className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
// // // // // // // // // //           rows={4}
// // // // // // // // // //           placeholder='Try typing "Plan my day" or "Sort these tasks: gym, report, groceries"'
// // // // // // // // // //           value={text}
// // // // // // // // // //           onChange={(e) => setText(e.target.value)}
// // // // // // // // // //         />

// // // // // // // // // //         {/* Mode Buttons */}
// // // // // // // // // //         <div className="flex justify-between mt-3">
// // // // // // // // // //           <div className="flex gap-2">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setMode("plan")}
// // // // // // // // // //               className={`px-4 py-2 rounded-lg ${mode === "plan"
// // // // // // // // // //                   ? "bg-indigo-600 text-white"
// // // // // // // // // //                   : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
// // // // // // // // // //                 }`}
// // // // // // // // // //             >
// // // // // // // // // //               <Brain className="inline-block w-4 h-4 mr-1" />
// // // // // // // // // //               Plan My Day
// // // // // // // // // //             </button>

// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setMode("suggest")}
// // // // // // // // // //               className={`px-4 py-2 rounded-lg ${mode === "suggest"
// // // // // // // // // //                   ? "bg-indigo-600 text-white"
// // // // // // // // // //                   : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
// // // // // // // // // //                 }`}
// // // // // // // // // //             >
// // // // // // // // // //               <ClipboardList className="inline-block w-4 h-4 mr-1" />
// // // // // // // // // //               Task Suggest
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>

// // // // // // // // // //           <button
// // // // // // // // // //             onClick={handleAIRequest}
// // // // // // // // // //             disabled={loading}
// // // // // // // // // //             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
// // // // // // // // // //           >
// // // // // // // // // //             {loading ? "Thinking..." : "Generate"}
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* AI Output */}
// // // // // // // // // //       {aiResult && (
// // // // // // // // // //         <motion.div
// // // // // // // // // //           className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-2xl mt-6 border border-gray-200 dark:border-gray-700"
// // // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // // //           animate={{ opacity: 1 }}
// // // // // // // // // //           transition={{ duration: 0.5 }}
// // // // // // // // // //         >
// // // // // // // // // //           <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
// // // // // // // // // //             {mode === "plan" ? "🗓️ Your AI Day Plan" : "✅ Suggested Tasks"}
// // // // // // // // // //           </h2>

// // // // // // // // // //           {mode === "plan" ? (
// // // // // // // // // //             <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">{aiResult.plan}</pre>
// // // // // // // // // //           ) : (
// // // // // // // // // //             <ul className="space-y-2">
// // // // // // // // // //               {aiResult.tasks?.map((task, i) => (
// // // // // // // // // //                 <li
// // // // // // // // // //                   key={i}
// // // // // // // // // //                   className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex justify-between items-center"
// // // // // // // // // //                 >
// // // // // // // // // //                   <span>
// // // // // // // // // //                     <strong>{task.task}</strong> — {task.category} ({task.priority})
// // // // // // // // // //                   </span>
// // // // // // // // // //                   <Sparkles className="w-4 h-4 text-indigo-500" />
// // // // // // // // // //                 </li>
// // // // // // // // // //               ))}
// // // // // // // // // //             </ul>
// // // // // // // // // //           )}
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // import { useState } from "react";
// // // // // // // // // import axios from "axios";
// // // // // // // // // import { Loader2, Send } from "lucide-react";

// // // // // // // // // function AIPlanner() {
// // // // // // // // //   const [prompt, setPrompt] = useState("");
// // // // // // // // //   const [aiResponse, setAiResponse] = useState("");
// // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // //   const handleGenerate = async () => {
// // // // // // // // //     if (!prompt.trim()) return alert("Please enter something!");
// // // // // // // // //     setLoading(true);
// // // // // // // // //     setAiResponse("");

// // // // // // // // //     try {
// // // // // // // // //       const { data } = await axios.post(
// // // // // // // // //         `${import.meta.env.VITE_API_URL}/api/ai/plan`,
// // // // // // // // //         { prompt },
// // // // // // // // //         {
// // // // // // // // //           headers: {
// // // // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // //           },
// // // // // // // // //         }
// // // // // // // // //       );

// // // // // // // // //       setAiResponse(data.response || "No response generated.");
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("AI Error:", error);
// // // // // // // // //       setAiResponse("⚠️ Something went wrong. Please try again.");
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col items-center justify-start min-h-[70vh] space-y-6">
// // // // // // // // //       {/* Header */}
// // // // // // // // //       <div className="text-center">
// // // // // // // // //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// // // // // // // // //           🧠 TaskIQ AI Assistant
// // // // // // // // //         </h1>
// // // // // // // // //         <p className="text-gray-500 dark:text-gray-400">
// // // // // // // // //           Type what you need help with — e.g., “Plan my day”, “Organize my study schedule”, or “Prioritize my tasks”.
// // // // // // // // //         </p>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Input Box */}
// // // // // // // // //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           value={prompt}
// // // // // // // // //           onChange={(e) => setPrompt(e.target.value)}
// // // // // // // // //           placeholder="💬 Describe your day or task..."
// // // // // // // // //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// // // // // // // // //         />
// // // // // // // // //         <button
// // // // // // // // //           onClick={handleGenerate}
// // // // // // // // //           disabled={loading}
// // // // // // // // //           className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-3 flex items-center gap-2 transition-all duration-300"
// // // // // // // // //         >
// // // // // // // // //           {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
// // // // // // // // //           {loading ? "Thinking..." : "Generate"}
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* AI Output */}
// // // // // // // // //       <div
// // // // // // // // //         className={`w-full max-w-2xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// // // // // // // // //           aiResponse
// // // // // // // // //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// // // // // // // // //             : "text-gray-400 italic"
// // // // // // // // //         }`}
// // // // // // // // //       >
// // // // // // // // //         {aiResponse || "🤖 Your AI-generated plan will appear here..."}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default AIPlanner;

// // // // // // // // import { useState } from "react";
// // // // // // // // import axios from "axios";
// // // // // // // // import { Loader2, Send, Brain, ClipboardList, Sparkles } from "lucide-react";

// // // // // // // // function AIPlanner() {
// // // // // // // //   const [prompt, setPrompt] = useState("");
// // // // // // // //   const [aiResponse, setAiResponse] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [mode, setMode] = useState(""); // "plan" or "suggest"

// // // // // // // //   const handleGenerate = async (type) => {
// // // // // // // //     if (!prompt.trim()) return alert("Please enter something!");
// // // // // // // //     setLoading(true);
// // // // // // // //     setAiResponse(null);
// // // // // // // //     setMode(type);

// // // // // // // //     try {
// // // // // // // //       const endpoint =
// // // // // // // //         type === "suggest"
// // // // // // // //           ? `${import.meta.env.VITE_API_URL}/api/ai/suggest`
// // // // // // // //           : `${import.meta.env.VITE_API_URL}/api/ai/plan`;

// // // // // // // //       const { data } = await axios.post(
// // // // // // // //         endpoint,
// // // // // // // //         { text: prompt },
// // // // // // // //         {
// // // // // // // //           headers: {
// // // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //           },
// // // // // // // //         }
// // // // // // // //       );

// // // // // // // //       setAiResponse(data);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("AI Error:", error);
// // // // // // // //       setAiResponse({ error: "⚠️ Something went wrong. Please try again." });
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4">
// // // // // // // //       {/* Header */}
// // // // // // // //       <div className="text-center">
// // // // // // // //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// // // // // // // //           🧠 TaskIQ AI Assistant
// // // // // // // //         </h1>
// // // // // // // //         <p className="text-gray-500 dark:text-gray-400">
// // // // // // // //           Type what you need help with — e.g. “Plan my day”, “Organize my study
// // // // // // // //           schedule”, or “Suggest my weekly tasks”.
// // // // // // // //         </p>
// // // // // // // //       </div>

// // // // // // // //       {/* Input Box */}
// // // // // // // //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           value={prompt}
// // // // // // // //           onChange={(e) => setPrompt(e.target.value)}
// // // // // // // //           placeholder="💬 Describe your day or task..."
// // // // // // // //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       {/* Buttons */}
// // // // // // // //       <div className="flex gap-4">
// // // // // // // //         <button
// // // // // // // //           onClick={() => handleGenerate("suggest")}
// // // // // // // //           disabled={loading}
// // // // // // // //           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition-all duration-300"
// // // // // // // //         >
// // // // // // // //           {loading && mode === "suggest" ? (
// // // // // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // // // // //           ) : (
// // // // // // // //             <Brain className="w-5 h-5" />
// // // // // // // //           )}
// // // // // // // //           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
// // // // // // // //         </button>

// // // // // // // //         <button
// // // // // // // //           onClick={() => handleGenerate("plan")}
// // // // // // // //           disabled={loading}
// // // // // // // //           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-all duration-300"
// // // // // // // //         >
// // // // // // // //           {loading && mode === "plan" ? (
// // // // // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // // // // //           ) : (
// // // // // // // //             <Sparkles className="w-5 h-5" />
// // // // // // // //           )}
// // // // // // // //           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* AI Output */}
// // // // // // // //       <div
// // // // // // // //         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// // // // // // // //           aiResponse
// // // // // // // //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// // // // // // // //             : "text-gray-400 italic"
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

// // // // // // // //         {aiResponse?.error && (
// // // // // // // //           <p className="text-red-500">{aiResponse.error}</p>
// // // // // // // //         )}

// // // // // // // //         {/* If AI returns a list of tasks */}
// // // // // // // //         {aiResponse?.tasks && (
// // // // // // // //           <div>
// // // // // // // //             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
// // // // // // // //               <ClipboardList className="w-5 h-5" /> Suggested Tasks
// // // // // // // //             </h2>
// // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // // // //               {aiResponse.tasks.map((t, i) => (
// // // // // // // //                 <div
// // // // // // // //                   key={i}
// // // // // // // //                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
// // // // // // // //                 >
// // // // // // // //                   <p className="font-semibold">{t.task}</p>
// // // // // // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // // // // // //                     🏷 {t.category} | ⚡ {t.priority}
// // // // // // // //                   </p>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* If AI returns a plan */}
// // // // // // // //         {aiResponse?.plan && (
// // // // // // // //           <div>
// // // // // // // //             <h2 className="text-xl font-bold text-green-600 mb-3">
// // // // // // // //               ✨ Your Smart Day Plan
// // // // // // // //             </h2>
// // // // // // // //             <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-100">
// // // // // // // //               {aiResponse.plan}
// // // // // // // //             </pre>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default AIPlanner;

// // // // // // // import { useState } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import {
// // // // // // //   Loader2,
// // // // // // //   Send,
// // // // // // //   Brain,
// // // // // // //   ClipboardList,
// // // // // // //   Sparkles,
// // // // // // //   Save,
// // // // // // // } from "lucide-react";

// // // // // // // function AIPlanner() {
// // // // // // //   const [prompt, setPrompt] = useState("");
// // // // // // //   const [aiResponse, setAiResponse] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [mode, setMode] = useState(""); // "plan" or "suggest"
// // // // // // //   const [saving, setSaving] = useState(false);

// // // // // // //   // 🧠 Generate Plan or Suggest Tasks
// // // // // // //   const handleGenerate = async (type) => {
// // // // // // //     if (!prompt.trim()) return alert("Please enter something!");
// // // // // // //     setLoading(true);
// // // // // // //     setAiResponse(null);
// // // // // // //     setMode(type);

// // // // // // //     try {
// // // // // // //       const endpoint =
// // // // // // //         type === "suggest"
// // // // // // //           ? `${import.meta.env.VITE_API_URL}/api/ai/suggest`
// // // // // // //           : `${import.meta.env.VITE_API_URL}/api/ai/plan`;

// // // // // // //       const { data } = await axios.post(
// // // // // // //         endpoint,
// // // // // // //         { text: prompt },
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );

// // // // // // //       setAiResponse(data);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("AI Error:", error);
// // // // // // //       setAiResponse({ error: "⚠️ Something went wrong. Please try again." });
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // 💾 Save AI Tasks to User's Task List
// // // // // // //   const handleSaveTasks = async () => {
// // // // // // //     if (!aiResponse?.tasks?.length)
// // // // // // //       return alert("No AI-generated tasks to save!");

// // // // // // //     setSaving(true);
// // // // // // //     try {
// // // // // // //       await axios.post(
// // // // // // //         `${import.meta.env.VITE_API_URL}/api/tasks/ai-save`,
// // // // // // //         { tasks: aiResponse.tasks },
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );
// // // // // // //       alert("✅ All AI tasks saved to your list successfully!");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Save Error:", error);
// // // // // // //       alert("⚠️ Failed to save tasks. Please try again.");
// // // // // // //     } finally {
// // // // // // //       setSaving(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
// // // // // // //       {/* 🧩 Header */}
// // // // // // //       <div className="text-center">
// // // // // // //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// // // // // // //           🧠 TaskIQ AI Assistant
// // // // // // //         </h1>
// // // // // // //         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
// // // // // // //           Type what you need help with — e.g. “Plan my day”, “Organize my study
// // // // // // //           schedule”, or “Suggest my weekly tasks”.
// // // // // // //         </p>
// // // // // // //       </div>

// // // // // // //       {/* 💬 Input Box */}
// // // // // // //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           value={prompt}
// // // // // // //           onChange={(e) => setPrompt(e.target.value)}
// // // // // // //           placeholder="💬 Describe your day or task..."
// // // // // // //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       {/* ⚙️ Buttons */}
// // // // // // //       <div className="flex flex-wrap justify-center gap-4">
// // // // // // //         <button
// // // // // // //           onClick={() => handleGenerate("suggest")}
// // // // // // //           disabled={loading}
// // // // // // //           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
// // // // // // //         >
// // // // // // //           {loading && mode === "suggest" ? (
// // // // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // // // //           ) : (
// // // // // // //             <Brain className="w-5 h-5" />
// // // // // // //           )}
// // // // // // //           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
// // // // // // //         </button>

// // // // // // //         <button
// // // // // // //           onClick={() => handleGenerate("plan")}
// // // // // // //           disabled={loading}
// // // // // // //           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
// // // // // // //         >
// // // // // // //           {loading && mode === "plan" ? (
// // // // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // // // //           ) : (
// // // // // // //             <Sparkles className="w-5 h-5" />
// // // // // // //           )}
// // // // // // //           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* 📋 AI Output */}
// // // // // // //       <div
// // // // // // //         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// // // // // // //           aiResponse
// // // // // // //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// // // // // // //             : "text-gray-400 italic"
// // // // // // //         }`}
// // // // // // //       >
// // // // // // //         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

// // // // // // //         {aiResponse?.error && (
// // // // // // //           <p className="text-red-500 text-center font-semibold">
// // // // // // //             {aiResponse.error}
// // // // // // //           </p>
// // // // // // //         )}

// // // // // // //         {/* ✅ If AI returns a list of tasks */}
// // // // // // //         {aiResponse?.tasks && (
// // // // // // //           <div>
// // // // // // //             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
// // // // // // //               <ClipboardList className="w-5 h-5" /> Suggested Tasks
// // // // // // //             </h2>
// // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // // //               {aiResponse.tasks.map((t, i) => (
// // // // // // //                 <div
// // // // // // //                   key={i}
// // // // // // //                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-[1.02] transition-transform"
// // // // // // //                 >
// // // // // // //                   <p className="font-semibold">{t.task}</p>
// // // // // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // // // // //                     🏷 {t.category} | ⚡ {t.priority}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             {/* 💾 Save Button */}
// // // // // // //             <button
// // // // // // //               onClick={handleSaveTasks}
// // // // // // //               disabled={saving}
// // // // // // //               className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition-all duration-300"
// // // // // // //             >
// // // // // // //               {saving ? (
// // // // // // //                 <Loader2 className="animate-spin w-5 h-5" />
// // // // // // //               ) : (
// // // // // // //                 <Save className="w-5 h-5" />
// // // // // // //               )}
// // // // // // //               {saving ? "Saving..." : "Save All to My Tasks"}
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* 🪄 If AI returns a plan */}
// // // // // // //         {aiResponse?.plan && (
// // // // // // //           <div>
// // // // // // //             <h2 className="text-xl font-bold text-green-600 mb-3">
// // // // // // //               ✨ Your Smart Day Plan
// // // // // // //             </h2>
// // // // // // //             <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-100 leading-relaxed">
// // // // // // //               {aiResponse.plan}
// // // // // // //             </pre>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default AIPlanner;


// // // // // // import { useState } from "react";
// // // // // // import axios from "axios";
// // // // // // import {
// // // // // //   Loader2,
// // // // // //   Brain,
// // // // // //   ClipboardList,
// // // // // //   Sparkles,
// // // // // //   Save,
// // // // // //   CheckCircle2,
// // // // // //   AlertTriangle,
// // // // // // } from "lucide-react";

// // // // // // function AIPlanner() {
// // // // // //   const [prompt, setPrompt] = useState("");
// // // // // //   const [aiResponse, setAiResponse] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [mode, setMode] = useState(""); // "plan" or "suggest"
// // // // // //   const [saving, setSaving] = useState(false);
// // // // // //   const [message, setMessage] = useState({ type: "", text: "" });

// // // // // //   // 🧠 Generate AI Suggestion or Plan
// // // // // //   const handleGenerate = async (type) => {
// // // // // //     if (!prompt.trim()) {
// // // // // //       setMessage({ type: "error", text: "Please enter something first!" });
// // // // // //       return;
// // // // // //     }

// // // // // //     setLoading(true);
// // // // // //     setAiResponse(null);
// // // // // //     setMode(type);
// // // // // //     setMessage({ type: "", text: "" });

// // // // // //     try {
// // // // // //       const endpoint =
// // // // // //         type === "suggest"
// // // // // //           ? `${import.meta.env.VITE_API_URL}/api/ai/suggest`
// // // // // //           : `${import.meta.env.VITE_API_URL}/api/ai/plan`;

// // // // // //       const { data } = await axios.post(
// // // // // //         endpoint,
// // // // // //         { text: prompt },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       setAiResponse(data);
// // // // // //     } catch (error) {
// // // // // //       console.error("AI Error:", error);
// // // // // //       setMessage({
// // // // // //         type: "error",
// // // // // //         text: "⚠️ Something went wrong while generating. Please try again.",
// // // // // //       });
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // 💾 Save AI Tasks to Database
// // // // // //   const handleSaveTasks = async () => {
// // // // // //     if (!aiResponse?.tasks?.length) {
// // // // // //       setMessage({ type: "error", text: "No AI-generated tasks to save!" });
// // // // // //       return;
// // // // // //     }

// // // // // //     setSaving(true);
// // // // // //     setMessage({ type: "", text: "" });

// // // // // //     try {
// // // // // //       await axios.post(
// // // // // //         `${import.meta.env.VITE_API_URL}/api/tasks/ai-save`,
// // // // // //         { tasks: aiResponse.tasks },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       setMessage({
// // // // // //         type: "success",
// // // // // //         text: "✅ AI tasks saved successfully to your list!",
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       console.error("Save Error:", error);
// // // // // //       setMessage({
// // // // // //         type: "error",
// // // // // //         text: "❌ Failed to save tasks. Please try again.",
// // // // // //       });
// // // // // //     } finally {
// // // // // //       setSaving(false);
// // // // // //       setTimeout(() => setMessage({ type: "", text: "" }), 4000);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
// // // // // //       {/* 🧩 Header */}
// // // // // //       <div className="text-center">
// // // // // //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// // // // // //           🧠 TaskIQ AI Assistant
// // // // // //         </h1>
// // // // // //         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
// // // // // //           Type what you need help with — e.g. “Plan my day”, “Organize my study
// // // // // //           schedule”, or “Suggest my weekly tasks”.
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* 💬 Input Box */}
// // // // // //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           value={prompt}
// // // // // //           onChange={(e) => setPrompt(e.target.value)}
// // // // // //           placeholder="💬 Describe your day or task..."
// // // // // //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* ⚙️ Action Buttons */}
// // // // // //       <div className="flex flex-wrap justify-center gap-4">
// // // // // //         <button
// // // // // //           onClick={() => handleGenerate("suggest")}
// // // // // //           disabled={loading}
// // // // // //           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
// // // // // //         >
// // // // // //           {loading && mode === "suggest" ? (
// // // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // // //           ) : (
// // // // // //             <Brain className="w-5 h-5" />
// // // // // //           )}
// // // // // //           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
// // // // // //         </button>

// // // // // //         <button
// // // // // //           onClick={() => handleGenerate("plan")}
// // // // // //           disabled={loading}
// // // // // //           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
// // // // // //         >
// // // // // //           {loading && mode === "plan" ? (
// // // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // // //           ) : (
// // // // // //             <Sparkles className="w-5 h-5" />
// // // // // //           )}
// // // // // //           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* 💬 Message Toast */}
// // // // // //       {message.text && (
// // // // // //         <div
// // // // // //           className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-md transition-all duration-300 ${
// // // // // //             message.type === "success"
// // // // // //               ? "bg-green-100 text-green-700 border border-green-300"
// // // // // //               : "bg-red-100 text-red-700 border border-red-300"
// // // // // //           }`}
// // // // // //         >
// // // // // //           {message.type === "success" ? (
// // // // // //             <CheckCircle2 className="w-4 h-4" />
// // // // // //           ) : (
// // // // // //             <AlertTriangle className="w-4 h-4" />
// // // // // //           )}
// // // // // //           {message.text}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* 📋 AI Output */}
// // // // // //       <div
// // // // // //         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// // // // // //           aiResponse
// // // // // //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// // // // // //             : "text-gray-400 italic"
// // // // // //         }`}
// // // // // //       >
// // // // // //         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

// // // // // //         {aiResponse?.error && (
// // // // // //           <p className="text-red-500 text-center font-semibold">
// // // // // //             {aiResponse.error}
// // // // // //           </p>
// // // // // //         )}

// // // // // //         {/* ✅ AI Task List */}
// // // // // //         {aiResponse?.tasks && (
// // // // // //           <div>
// // // // // //             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
// // // // // //               <ClipboardList className="w-5 h-5" /> Suggested Tasks
// // // // // //             </h2>
// // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // //               {aiResponse.tasks.map((t, i) => (
// // // // // //                 <div
// // // // // //                   key={i}
// // // // // //                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-[1.02] transition-transform"
// // // // // //                 >
// // // // // //                   <p className="font-semibold">{t.task}</p>
// // // // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // // // //                     🏷 {t.category || "General"} | ⚡ {t.priority || "Normal"}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* 💾 Save Button */}
// // // // // //             <button
// // // // // //               onClick={handleSaveTasks}
// // // // // //               disabled={saving}
// // // // // //               className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition-all duration-300 shadow-md"
// // // // // //             >
// // // // // //               {saving ? (
// // // // // //                 <Loader2 className="animate-spin w-5 h-5" />
// // // // // //               ) : (
// // // // // //                 <Save className="w-5 h-5" />
// // // // // //               )}
// // // // // //               {saving ? "Saving..." : "Save All to My Tasks"}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* 🪄 AI Day Plan */}
// // // // // //         {aiResponse?.plan && (
// // // // // //           <div>
// // // // // //             <h2 className="text-xl font-bold text-green-600 mb-3">
// // // // // //               ✨ Your Smart Day Plan
// // // // // //             </h2>
// // // // // //             <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-100 leading-relaxed">
// // // // // //               {aiResponse.plan}
// // // // // //             </pre>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default AIPlanner;

// // // // // import { useState } from "react";
// // // // // import axios from "axios";
// // // // // import {
// // // // //   Loader2,
// // // // //   Brain,
// // // // //   ClipboardList,
// // // // //   Sparkles,
// // // // //   Save,
// // // // //   CheckCircle2,
// // // // //   AlertTriangle,
// // // // // } from "lucide-react";

// // // // // function AIPlanner() {
// // // // //   const [prompt, setPrompt] = useState("");
// // // // //   const [aiResponse, setAiResponse] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [mode, setMode] = useState("");
// // // // //   const [saving, setSaving] = useState(false);
// // // // //   const [message, setMessage] = useState({ type: "", text: "" });

// // // // //   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// // // // //   // 🧠 Generate AI Suggestion or Plan
// // // // //   const handleGenerate = async (type) => {
// // // // //     if (!prompt.trim()) {
// // // // //       setMessage({ type: "error", text: "Please enter something first!" });
// // // // //       return;
// // // // //     }

// // // // //     setLoading(true);
// // // // //     setAiResponse(null);
// // // // //     setMode(type);
// // // // //     setMessage({ type: "", text: "" });

// // // // //     try {
// // // // //       const endpoint =
// // // // //         type === "suggest"
// // // // //           ? `${API_URL}/api/ai/suggest`
// // // // //           : `${API_URL}/api/ai/plan`;

// // // // //       const token = localStorage.getItem("token");
// // // // //       if (!token) {
// // // // //         setMessage({ type: "error", text: "Please log in first!" });
// // // // //         setLoading(false);
// // // // //         return;
// // // // //       }

// // // // //       const { data } = await axios.post(
// // // // //         endpoint,
// // // // //         { text: prompt },
// // // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // // //       );

// // // // //       setAiResponse(data);
// // // // //     } catch (error) {
// // // // //       console.error("AI Error:", error);
// // // // //       setMessage({
// // // // //         type: "error",
// // // // //         text: "⚠️ Something went wrong while generating. Try again.",
// // // // //       });
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // 💾 Save AI Tasks
// // // // //   const handleSaveTasks = async () => {
// // // // //     if (!aiResponse?.tasks?.length) {
// // // // //       setMessage({ type: "error", text: "No AI-generated tasks to save!" });
// // // // //       return;
// // // // //     }

// // // // //     setSaving(true);
// // // // //     setMessage({ type: "", text: "" });

// // // // //     try {
// // // // //       const token = localStorage.getItem("token");
// // // // //       await axios.post(
// // // // //         `${API_URL}/api/tasks/ai-save`,
// // // // //         { tasks: aiResponse.tasks },
// // // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // // //       );

// // // // //       setMessage({
// // // // //         type: "success",
// // // // //         text: "✅ AI tasks saved successfully!",
// // // // //       });
// // // // //     } catch (error) {
// // // // //       console.error("Save Error:", error);
// // // // //       setMessage({
// // // // //         type: "error",
// // // // //         text: "❌ Failed to save tasks. Please try again.",
// // // // //       });
// // // // //     } finally {
// // // // //       setSaving(false);
// // // // //       setTimeout(() => setMessage({ type: "", text: "" }), 4000);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
// // // // //       {/* 🧩 Header */}
// // // // //       <div className="text-center">
// // // // //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// // // // //           🧠 TaskIQ AI Assistant
// // // // //         </h1>
// // // // //         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
// // // // //           Type what you need help with — e.g. “Plan my day” or “Suggest my tasks”.
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* 💬 Input */}
// // // // //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
// // // // //         <input
// // // // //           type="text"
// // // // //           value={prompt}
// // // // //           onChange={(e) => setPrompt(e.target.value)}
// // // // //           placeholder="💬 Describe your day or task..."
// // // // //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// // // // //         />
// // // // //       </div>

// // // // //       {/* ⚙️ Buttons */}
// // // // //       <div className="flex flex-wrap justify-center gap-4">
// // // // //         <button
// // // // //           onClick={() => handleGenerate("suggest")}
// // // // //           disabled={loading}
// // // // //           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md"
// // // // //         >
// // // // //           {loading && mode === "suggest" ? (
// // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // //           ) : (
// // // // //             <Brain className="w-5 h-5" />
// // // // //           )}
// // // // //           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
// // // // //         </button>

// // // // //         <button
// // // // //           onClick={() => handleGenerate("plan")}
// // // // //           disabled={loading}
// // // // //           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md"
// // // // //         >
// // // // //           {loading && mode === "plan" ? (
// // // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // // //           ) : (
// // // // //             <Sparkles className="w-5 h-5" />
// // // // //           )}
// // // // //           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* 🔔 Toast */}
// // // // //       {message.text && (
// // // // //         <div
// // // // //           className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-md ${
// // // // //             message.type === "success"
// // // // //               ? "bg-green-100 text-green-700 border border-green-300"
// // // // //               : "bg-red-100 text-red-700 border border-red-300"
// // // // //           }`}
// // // // //         >
// // // // //           {message.type === "success" ? (
// // // // //             <CheckCircle2 className="w-4 h-4" />
// // // // //           ) : (
// // // // //             <AlertTriangle className="w-4 h-4" />
// // // // //           )}
// // // // //           {message.text}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* 📋 AI Output */}
// // // // //       <div
// // // // //         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// // // // //           aiResponse
// // // // //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// // // // //             : "text-gray-400 italic"
// // // // //         }`}
// // // // //       >
// // // // //         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

// // // // //         {aiResponse?.tasks && (
// // // // //           <div>
// // // // //             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
// // // // //               <ClipboardList className="w-5 h-5" /> Suggested Tasks
// // // // //             </h2>
// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // //               {aiResponse.tasks.map((t, i) => (
// // // // //                 <div
// // // // //                   key={i}
// // // // //                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
// // // // //                 >
// // // // //                   <p className="font-semibold">{t.task}</p>
// // // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // // //                     🏷 {t.category || "General"} | ⚡ {t.priority || "Normal"}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             <button
// // // // //               onClick={handleSaveTasks}
// // // // //               disabled={saving}
// // // // //               className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md"
// // // // //             >
// // // // //               {saving ? (
// // // // //                 <Loader2 className="animate-spin w-5 h-5" />
// // // // //               ) : (
// // // // //                 <Save className="w-5 h-5" />
// // // // //               )}
// // // // //               {saving ? "Saving..." : "Save All to My Tasks"}
// // // // //             </button>
// // // // //           </div>
// // // // //         )}

// // // // //         {aiResponse?.plan && (
// // // // //           <div>
// // // // //             <h2 className="text-xl font-bold text-green-600 mb-3">
// // // // //               ✨ Your Smart Day Plan
// // // // //             </h2>
// // // // //             <pre className="whitespace-pre-wrap leading-relaxed">
// // // // //               {aiResponse.plan}
// // // // //             </pre>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default AIPlanner;

// // // // import { useState } from "react";
// // // // import axios from "axios";
// // // // import {
// // // //   Loader2,
// // // //   Brain,
// // // //   ClipboardList,
// // // //   Sparkles,
// // // //   Save,
// // // //   CheckCircle2,
// // // //   AlertTriangle,
// // // // } from "lucide-react";

// // // // function AIPlanner() {
// // // //   const [prompt, setPrompt] = useState("");
// // // //   const [aiResponse, setAiResponse] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [mode, setMode] = useState("");
// // // //   const [saving, setSaving] = useState(false);
// // // //   const [message, setMessage] = useState({ type: "", text: "" });

// // // //   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// // // //   // 🧠 Generate AI Suggestion or Plan
// // // //   const handleGenerate = async (type) => {
// // // //     if (!prompt.trim()) {
// // // //       setMessage({ type: "error", text: "Please enter something first!" });
// // // //       return;
// // // //     }

// // // //     const token = localStorage.getItem("token");
// // // //     if (!token) {
// // // //       setMessage({ type: "error", text: "Please log in first!" });
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     setAiResponse(null);
// // // //     setMode(type);
// // // //     setMessage({ type: "", text: "" });

// // // //     try {
// // // //       const endpoint =
// // // //         type === "suggest"
// // // //           ? `${API_URL}/api/ai/suggest`
// // // //           : `${API_URL}/api/ai/plan`;

// // // //       console.log("🔑 Sending token:", token.slice(0, 10) + "...");

// // // //       const { data } = await axios.post(
// // // //         endpoint,
// // // //         { text: prompt },
// // // //         {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       setAiResponse(data);
// // // //     } catch (error) {
// // // //       console.error("AI Error:", error);
// // // //       setMessage({
// // // //         type: "error",
// // // //         text:
// // // //           error.response?.data?.message ||
// // // //           "⚠️ Something went wrong while generating. Try again.",
// // // //       });
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // 💾 Save AI Tasks
// // // //   const handleSaveTasks = async () => {
// // // //     if (!aiResponse?.tasks?.length) {
// // // //       setMessage({ type: "error", text: "No AI-generated tasks to save!" });
// // // //       return;
// // // //     }

// // // //     setSaving(true);
// // // //     setMessage({ type: "", text: "" });

// // // //     try {
// // // //       const token = localStorage.getItem("token");
// // // //       await axios.post(
// // // //         `${API_URL}/api/tasks/ai-save`,
// // // //         { tasks: aiResponse.tasks },
// // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // //       );

// // // //       setMessage({
// // // //         type: "success",
// // // //         text: "✅ AI tasks saved successfully!",
// // // //       });
// // // //     } catch (error) {
// // // //       console.error("Save Error:", error);
// // // //       setMessage({
// // // //         type: "error",
// // // //         text: "❌ Failed to save tasks. Please try again.",
// // // //       });
// // // //     } finally {
// // // //       setSaving(false);
// // // //       setTimeout(() => setMessage({ type: "", text: "" }), 4000);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
// // // //       <div className="text-center">
// // // //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// // // //           🧠 TaskIQ AI Assistant
// // // //         </h1>
// // // //         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
// // // //           Type what you need help with — e.g. “Plan my day” or “Suggest my tasks”.
// // // //         </p>
// // // //       </div>

// // // //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
// // // //         <input
// // // //           type="text"
// // // //           value={prompt}
// // // //           onChange={(e) => setPrompt(e.target.value)}
// // // //           placeholder="💬 Describe your day or task..."
// // // //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// // // //         />
// // // //       </div>

// // // //       <div className="flex flex-wrap justify-center gap-4">
// // // //         <button
// // // //           onClick={() => handleGenerate("suggest")}
// // // //           disabled={loading}
// // // //           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md"
// // // //         >
// // // //           {loading && mode === "suggest" ? (
// // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // //           ) : (
// // // //             <Brain className="w-5 h-5" />
// // // //           )}
// // // //           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
// // // //         </button>

// // // //         <button
// // // //           onClick={() => handleGenerate("plan")}
// // // //           disabled={loading}
// // // //           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md"
// // // //         >
// // // //           {loading && mode === "plan" ? (
// // // //             <Loader2 className="animate-spin w-5 h-5" />
// // // //           ) : (
// // // //             <Sparkles className="w-5 h-5" />
// // // //           )}
// // // //           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
// // // //         </button>
// // // //       </div>

// // // //       {message.text && (
// // // //         <div
// // // //           className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-md ${
// // // //             message.type === "success"
// // // //               ? "bg-green-100 text-green-700 border border-green-300"
// // // //               : "bg-red-100 text-red-700 border border-red-300"
// // // //           }`}
// // // //         >
// // // //           {message.type === "success" ? (
// // // //             <CheckCircle2 className="w-4 h-4" />
// // // //           ) : (
// // // //             <AlertTriangle className="w-4 h-4" />
// // // //           )}
// // // //           {message.text}
// // // //         </div>
// // // //       )}

// // // //       <div
// // // //         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// // // //           aiResponse
// // // //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// // // //             : "text-gray-400 italic"
// // // //         }`}
// // // //       >
// // // //         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

// // // //         {aiResponse?.tasks && (
// // // //           <div>
// // // //             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
// // // //               <ClipboardList className="w-5 h-5" /> Suggested Tasks
// // // //             </h2>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //               {aiResponse.tasks.map((t, i) => (
// // // //                 <div
// // // //                   key={i}
// // // //                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
// // // //                 >
// // // //                   <p className="font-semibold">{t.task}</p>
// // // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // // //                     🏷 {t.category || "General"} | ⚡ {t.priority || "Normal"}
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             <button
// // // //               onClick={handleSaveTasks}
// // // //               disabled={saving}
// // // //               className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md"
// // // //             >
// // // //               {saving ? (
// // // //                 <Loader2 className="animate-spin w-5 h-5" />
// // // //               ) : (
// // // //                 <Save className="w-5 h-5" />
// // // //               )}
// // // //               {saving ? "Saving..." : "Save All to My Tasks"}
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //         {aiResponse?.plan && (
// // // //           <div>
// // // //             <h2 className="text-xl font-bold text-green-600 mb-3">
// // // //               ✨ Your Smart Day Plan
// // // //             </h2>
// // // //             <pre className="whitespace-pre-wrap leading-relaxed">
// // // //               {aiResponse.plan}
// // // //             </pre>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AIPlanner;


// // // import { useState } from "react";
// // // import axios from "axios";
// // // import {
// // //   Loader2,
// // //   Brain,
// // //   ClipboardList,
// // //   Sparkles,
// // //   Save,
// // //   CheckCircle2,
// // //   AlertTriangle,
// // // } from "lucide-react";

// // // function AIPlanner() {
// // //   const [prompt, setPrompt] = useState("");
// // //   const [aiResponse, setAiResponse] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [mode, setMode] = useState("");
// // //   const [saving, setSaving] = useState(false);
// // //   const [message, setMessage] = useState({ type: "", text: "" });

// // //   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// // //   // 🧠 Generate AI Suggestion or Plan
// // //   const handleGenerate = async (type) => {
// // //     if (!prompt.trim()) {
// // //       setMessage({ type: "error", text: "Please enter something first!" });
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     setAiResponse(null);
// // //     setMode(type);
// // //     setMessage({ type: "", text: "" });

// // //     try {
// // //       const endpoint =
// // //         type === "suggest"
// // //           ? `${API_URL}/api/ai/suggest`
// // //           : `${API_URL}/api/ai/plan`;

// // //       // ✅ Get token from stored user object
// // //       const storedUser = JSON.parse(localStorage.getItem("user"));
// // //       const token = storedUser?.token;

// // //       if (!token) {
// // //         setMessage({ type: "error", text: "Please log in first!" });
// // //         setLoading(false);
// // //         return;
// // //       }

// // //       const { data } = await axios.post(
// // //         endpoint,
// // //         { text: prompt },
// // //         {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         }
// // //       );

// // //       setAiResponse(data);
// // //     } catch (error) {
// // //       console.error("AI Error:", error);
// // //       setMessage({
// // //         type: "error",
// // //         text: "⚠️ Something went wrong while generating. Try again.",
// // //       });
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // 💾 Save AI Tasks
// // //   const handleSaveTasks = async () => {
// // //     if (!aiResponse?.tasks?.length) {
// // //       setMessage({ type: "error", text: "No AI-generated tasks to save!" });
// // //       return;
// // //     }

// // //     setSaving(true);
// // //     setMessage({ type: "", text: "" });

// // //     try {
// // //       const storedUser = JSON.parse(localStorage.getItem("user"));
// // //       const token = storedUser?.token;

// // //       if (!token) {
// // //         setMessage({ type: "error", text: "Please log in first!" });
// // //         setSaving(false);
// // //         return;
// // //       }

// // //       await axios.post(
// // //         `${API_URL}/api/tasks/ai-save`,
// // //         { tasks: aiResponse.tasks },
// // //         {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         }
// // //       );

// // //       setMessage({
// // //         type: "success",
// // //         text: "✅ AI tasks saved successfully!",
// // //       });
// // //     } catch (error) {
// // //       console.error("Save Error:", error);
// // //       setMessage({
// // //         type: "error",
// // //         text: "❌ Failed to save tasks. Please try again.",
// // //       });
// // //     } finally {
// // //       setSaving(false);
// // //       setTimeout(() => setMessage({ type: "", text: "" }), 4000);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
// // //       {/* 🧩 Header */}
// // //       <div className="text-center">
// // //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// // //           🧠 TaskIQ AI Assistant
// // //         </h1>
// // //         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
// // //           Type what you need help with — e.g. “Plan my day” or “Suggest my tasks”.
// // //         </p>
// // //       </div>

// // //       {/* 💬 Input */}
// // //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
// // //         <input
// // //           type="text"
// // //           value={prompt}
// // //           onChange={(e) => setPrompt(e.target.value)}
// // //           placeholder="💬 Describe your day or task..."
// // //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// // //         />
// // //       </div>

// // //       {/* ⚙️ Buttons */}
// // //       <div className="flex flex-wrap justify-center gap-4">
// // //         <button
// // //           onClick={() => handleGenerate("suggest")}
// // //           disabled={loading}
// // //           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md"
// // //         >
// // //           {loading && mode === "suggest" ? (
// // //             <Loader2 className="animate-spin w-5 h-5" />
// // //           ) : (
// // //             <Brain className="w-5 h-5" />
// // //           )}
// // //           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
// // //         </button>

// // //         <button
// // //           onClick={() => handleGenerate("plan")}
// // //           disabled={loading}
// // //           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md"
// // //         >
// // //           {loading && mode === "plan" ? (
// // //             <Loader2 className="animate-spin w-5 h-5" />
// // //           ) : (
// // //             <Sparkles className="w-5 h-5" />
// // //           )}
// // //           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
// // //         </button>
// // //       </div>

// // //       {/* 🔔 Toast */}
// // //       {message.text && (
// // //         <div
// // //           className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-md ${
// // //             message.type === "success"
// // //               ? "bg-green-100 text-green-700 border border-green-300"
// // //               : "bg-red-100 text-red-700 border border-red-300"
// // //           }`}
// // //         >
// // //           {message.type === "success" ? (
// // //             <CheckCircle2 className="w-4 h-4" />
// // //           ) : (
// // //             <AlertTriangle className="w-4 h-4" />
// // //           )}
// // //           {message.text}
// // //         </div>
// // //       )}

// // //       {/* 📋 AI Output */}
// // //       <div
// // //         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// // //           aiResponse
// // //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// // //             : "text-gray-400 italic"
// // //         }`}
// // //       >
// // //         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

// // //         {aiResponse?.tasks && (
// // //           <div>
// // //             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
// // //               <ClipboardList className="w-5 h-5" /> Suggested Tasks
// // //             </h2>
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //               {aiResponse.tasks.map((t, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
// // //                 >
// // //                   <p className="font-semibold">{t.task}</p>
// // //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// // //                     🏷 {t.category || "General"} | ⚡ {t.priority || "Normal"}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <button
// // //               onClick={handleSaveTasks}
// // //               disabled={saving}
// // //               className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md"
// // //             >
// // //               {saving ? (
// // //                 <Loader2 className="animate-spin w-5 h-5" />
// // //               ) : (
// // //                 <Save className="w-5 h-5" />
// // //               )}
// // //               {saving ? "Saving..." : "Save All to My Tasks"}
// // //             </button>
// // //           </div>
// // //         )}

// // //         {aiResponse?.plan && (
// // //           <div>
// // //             <h2 className="text-xl font-bold text-green-600 mb-3">
// // //               ✨ Your Smart Day Plan
// // //             </h2>
// // //             <pre className="whitespace-pre-wrap leading-relaxed">
// // //               {aiResponse.plan}
// // //             </pre>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default AIPlanner;


// // import { useState } from "react";
// // import axios from "axios";
// // import {
// //   Loader2,
// //   Brain,
// //   ClipboardList,
// //   Sparkles,
// //   Save,
// //   CheckCircle2,
// //   AlertTriangle,
// // } from "lucide-react";

// // function AIPlanner() {
// //   const [prompt, setPrompt] = useState("");
// //   const [aiResponse, setAiResponse] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [mode, setMode] = useState("");
// //   const [saving, setSaving] = useState(false);
// //   const [message, setMessage] = useState({ type: "", text: "" });

// //   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// //   // 🧠 Generate AI Suggestion or Plan
// //   const handleGenerate = async (type) => {
// //     if (!prompt.trim()) {
// //       setMessage({ type: "error", text: "Please enter something first!" });
// //       return;
// //     }

// //     setLoading(true);
// //     setAiResponse(null);
// //     setMode(type);
// //     setMessage({ type: "", text: "" });

// //     try {
// //       const endpoint =
// //         type === "suggest"
// //           ? `${API_URL}/api/ai/suggest`
// //           : `${API_URL}/api/ai/plan`;

// //       // ✅ Get token from stored user object
// //       const storedUser = JSON.parse(localStorage.getItem("user"));
// //       const token = storedUser?.token;

// //       if (!token) {
// //         setMessage({ type: "error", text: "Please log in first!" });
// //         setLoading(false);
// //         return;
// //       }

// //       const { data } = await axios.post(
// //         endpoint,
// //         { text: prompt },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );

// //       setAiResponse(data);
// //     } catch (error) {
// //       console.error("AI Error:", error);
// //       setMessage({
// //         type: "error",
// //         text: "⚠️ Something went wrong while generating. Try again.",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // 💾 Save AI Tasks
// //   const handleSaveTasks = async () => {
// //     if (!aiResponse?.tasks?.length) {
// //       setMessage({ type: "error", text: "No AI-generated tasks to save!" });
// //       return;
// //     }

// //     setSaving(true);
// //     setMessage({ type: "", text: "" });

// //     try {
// //       const storedUser = JSON.parse(localStorage.getItem("user"));
// //       const token = storedUser?.token;

// //       if (!token) {
// //         setMessage({ type: "error", text: "Please log in first!" });
// //         setSaving(false);
// //         return;
// //       }

// //       await axios.post(
// //         `${API_URL}/api/tasks/ai-save`,
// //         { tasks: aiResponse.tasks },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );

// //       setMessage({
// //         type: "success",
// //         text: "✅ AI tasks saved successfully!",
// //       });
// //     } catch (error) {
// //       console.error("Save Error:", error);
// //       setMessage({
// //         type: "error",
// //         text: "❌ Failed to save tasks. Please try again.",
// //       });
// //     } finally {
// //       setSaving(false);
// //       setTimeout(() => setMessage({ type: "", text: "" }), 4000);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
// //       {/* 🧩 Header */}
// //       <div className="text-center">
// //         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
// //           🧠 TaskIQ AI Assistant
// //         </h1>
// //         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
// //           Type what you need help with — e.g. “Plan my day” or “Suggest my tasks”.
// //         </p>
// //       </div>

// //       {/* 💬 Input */}
// //       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
// //         <input
// //           type="text"
// //           value={prompt}
// //           onChange={(e) => setPrompt(e.target.value)}
// //           placeholder="💬 Describe your day or task..."
// //           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
// //         />
// //       </div>

// //       {/* ⚙️ Buttons */}
// //       <div className="flex flex-wrap justify-center gap-4">
// //         <button
// //           onClick={() => handleGenerate("suggest")}
// //           disabled={loading}
// //           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md"
// //         >
// //           {loading && mode === "suggest" ? (
// //             <Loader2 className="animate-spin w-5 h-5" />
// //           ) : (
// //             <Brain className="w-5 h-5" />
// //           )}
// //           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
// //         </button>

// //         <button
// //           onClick={() => handleGenerate("plan")}
// //           disabled={loading}
// //           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md"
// //         >
// //           {loading && mode === "plan" ? (
// //             <Loader2 className="animate-spin w-5 h-5" />
// //           ) : (
// //             <Sparkles className="w-5 h-5" />
// //           )}
// //           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
// //         </button>
// //       </div>

// //       {/* 🔔 Toast */}
// //       {message.text && (
// //         <div
// //           className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-md ${
// //             message.type === "success"
// //               ? "bg-green-100 text-green-700 border border-green-300"
// //               : "bg-red-100 text-red-700 border border-red-300"
// //           }`}
// //         >
// //           {message.type === "success" ? (
// //             <CheckCircle2 className="w-4 h-4" />
// //           ) : (
// //             <AlertTriangle className="w-4 h-4" />
// //           )}
// //           {message.text}
// //         </div>
// //       )}

// //       {/* 📋 AI Output */}
// //       <div
// //         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
// //           aiResponse
// //             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
// //             : "text-gray-400 italic"
// //         }`}
// //       >
// //         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

// //         {aiResponse?.tasks && (
// //           <div>
// //             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
// //               <ClipboardList className="w-5 h-5" /> Suggested Tasks
// //             </h2>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               {aiResponse.tasks.map((t, i) => (
// //                 <div
// //                   key={i}
// //                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
// //                 >
// //                   <p className="font-semibold">{t.task}</p>
// //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// //                     🏷 {t.category || "General"} | ⚡ {t.priority || "Normal"}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             <button
// //               onClick={handleSaveTasks}
// //               disabled={saving}
// //               className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md"
// //             >
// //               {saving ? (
// //                 <Loader2 className="animate-spin w-5 h-5" />
// //               ) : (
// //                 <Save className="w-5 h-5" />
// //               )}
// //               {saving ? "Saving..." : "Save All to My Tasks"}
// //             </button>
// //           </div>
// //         )}

// //         {aiResponse?.plan && (
// //           <div>
// //             <h2 className="text-xl font-bold text-green-600 mb-3">
// //               ✨ Your Smart Day Plan
// //             </h2>
// //             <pre className="whitespace-pre-wrap leading-relaxed">
// //               {aiResponse.plan}
// //             </pre>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default AIPlanner;


// import { useState } from "react";
// import axios from "axios";
// import {
//   Loader2,
//   Brain,
//   ClipboardList,
//   Sparkles,
//   Save,
//   CheckCircle2,
//   AlertTriangle,
// } from "lucide-react";

// function AIPlanner() {
//   const [prompt, setPrompt] = useState("");
//   const [aiResponse, setAiResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [mode, setMode] = useState("");
//   const [saving, setSaving] = useState(false);
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // 🧠 Generate AI Suggestion or Plan
//   const handleGenerate = async (type) => {
//     if (!prompt.trim()) {
//       setMessage({ type: "error", text: "Please enter something first!" });
//       return;
//     }

//     setLoading(true);
//     setAiResponse(null);
//     setMode(type);
//     setMessage({ type: "", text: "" });

//     try {
//       const endpoint =
//         type === "suggest"
//           ? `${API_URL}/api/ai/suggest`
//           : `${API_URL}/api/ai/plan`;

//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       const token = storedUser?.token;
//       if (!token) throw new Error("Login required");

//       const { data } = await axios.post(
//         endpoint,
//         { text: prompt },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setAiResponse(data);
//     } catch (error) {
//       console.error("AI Error:", error);
//       setMessage({
//         type: "error",
//         text:
//           error.message === "Login required"
//             ? "Please log in first!"
//             : "⚠️ Something went wrong while generating. Try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 💾 Save AI Tasks
//   const handleSaveTasks = async () => {
//     if (!aiResponse?.tasks?.length) {
//       setMessage({ type: "error", text: "No AI-generated tasks to save!" });
//       return;
//     }

//     setSaving(true);
//     try {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       const token = storedUser?.token;
//       if (!token) throw new Error("Login required");

//       await axios.post(
//         `${API_URL}/api/tasks/ai-save`,
//         { tasks: aiResponse.tasks },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setMessage({ type: "success", text: "✅ AI tasks saved successfully!" });
//     } catch (error) {
//       console.error("Save Error:", error);
//       setMessage({
//         type: "error",
//         text: "❌ Failed to save tasks. Please try again.",
//       });
//     } finally {
//       setSaving(false);
//       setTimeout(() => setMessage({ type: "", text: "" }), 4000);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-indigo-500 mb-2">
//           🧠 TaskIQ AI Assistant
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
//           Type what you need help with — e.g. “Plan my day” or “Suggest my tasks”.
//         </p>
//       </div>

//       <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
//         <input
//           type="text"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="💬 Describe your day or task..."
//           className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
//         />
//       </div>

//       <div className="flex flex-wrap justify-center gap-4">
//         <button
//           onClick={() => handleGenerate("suggest")}
//           disabled={loading}
//           className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md disabled:opacity-60"
//         >
//           {loading && mode === "suggest" ? (
//             <Loader2 className="animate-spin w-5 h-5" />
//           ) : (
//             <Brain className="w-5 h-5" />
//           )}
//           {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
//         </button>

//         <button
//           onClick={() => handleGenerate("plan")}
//           disabled={loading}
//           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md disabled:opacity-60"
//         >
//           {loading && mode === "plan" ? (
//             <Loader2 className="animate-spin w-5 h-5" />
//           ) : (
//             <Sparkles className="w-5 h-5" />
//           )}
//           {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
//         </button>
//       </div>

//       {message.text && (
//         <div
//           className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-md ${
//             message.type === "success"
//               ? "bg-green-100 text-green-700 border border-green-300"
//               : "bg-red-100 text-red-700 border border-red-300"
//           }`}
//         >
//           {message.type === "success" ? (
//             <CheckCircle2 className="w-4 h-4" />
//           ) : (
//             <AlertTriangle className="w-4 h-4" />
//           )}
//           {message.text}
//         </div>
//       )}

//       <div
//         className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
//           aiResponse
//             ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
//             : "text-gray-400 italic"
//         }`}
//       >
//         {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

//         {aiResponse?.tasks && (
//           <div>
//             <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
//               <ClipboardList className="w-5 h-5" /> Suggested Tasks
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {aiResponse.tasks.map((t, i) => (
//                 <div
//                   key={i}
//                   className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
//                 >
//                   <p className="font-semibold">{t.task}</p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     🏷 {t.category || "General"} | ⚡ {t.priority || "Normal"}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={handleSaveTasks}
//               disabled={saving}
//               className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md disabled:opacity-60"
//             >
//               {saving ? (
//                 <Loader2 className="animate-spin w-5 h-5" />
//               ) : (
//                 <Save className="w-5 h-5" />
//               )}
//               {saving ? "Saving..." : "Save All to My Tasks"}
//             </button>
//           </div>
//         )}

//         {aiResponse?.plan && (
//           <div>
//             <h2 className="text-xl font-bold text-green-600 mb-3">
//               ✨ Your Smart Day Plan
//             </h2>
//             <pre className="whitespace-pre-wrap leading-relaxed">
//               {aiResponse.plan}
//             </pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AIPlanner;


import { useState } from "react";
import axios from "axios";
import {
  Loader2,
  Brain,
  ClipboardList,
  Sparkles,
  Save,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function AIPlanner() {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // 🧠 Generate AI Suggestion or Plan
  const handleGenerate = async (type) => {
    if (!prompt.trim()) {
      setMessage({ type: "error", text: "Please enter something first!" });
      return;
    }

    setLoading(true);
    setAiResponse(null);
    setMode(type);
    setMessage({ type: "", text: "" });

    try {
      const endpoint =
        type === "suggest"
          ? `${API_URL}/api/ai/suggest`
          : `${API_URL}/api/ai/plan`;

      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;
      if (!token) throw new Error("Login required");

      const { data } = await axios.post(
        endpoint,
        { prompt }, // ✅ FIXED: match backend
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setAiResponse(data);
    } catch (error) {
      console.error("AI Error:", error);
      setMessage({
        type: "error",
        text:
          error.message === "Login required"
            ? "Please log in first!"
            : "⚠️ Something went wrong while generating. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // 💾 Save AI Tasks
  const handleSaveTasks = async () => {
    if (!aiResponse?.tasks?.length) {
      setMessage({ type: "error", text: "No AI-generated tasks to save!" });
      return;
    }

    setSaving(true);
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;
      if (!token) throw new Error("Login required");

      await axios.post(
        `${API_URL}/api/tasks/ai-save`,
        { tasks: aiResponse.tasks },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage({ type: "success", text: "✅ AI tasks saved successfully!" });
    } catch (error) {
      console.error("Save Error:", error);
      setMessage({
        type: "error",
        text: "❌ Failed to save tasks. Please try again.",
      });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage({ type: "", text: "" }), 4000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-[80vh] space-y-6 px-4 transition-all duration-700">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-indigo-500 mb-2">
          🧠 TaskIQ AI Assistant
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Type what you need help with — e.g. “Plan my day” or “Suggest my tasks”.
        </p>
      </div>

      <div className="flex items-center w-full max-w-2xl bg-white/70 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="💬 Describe your day or task..."
          className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => handleGenerate("suggest")}
          disabled={loading}
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md disabled:opacity-60"
        >
          {loading && mode === "suggest" ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            <Brain className="w-5 h-5" />
          )}
          {loading && mode === "suggest" ? "Analyzing..." : "Suggest Tasks"}
        </button>

        <button
          onClick={() => handleGenerate("plan")}
          disabled={loading}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md disabled:opacity-60"
        >
          {loading && mode === "plan" ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
          {loading && mode === "plan" ? "Thinking..." : "Generate Plan"}
        </button>
      </div>

      {message.text && (
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium shadow-md ${
            message.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <AlertTriangle className="w-4 h-4" />
          )}
          {message.text}
        </div>
      )}

      <div
        className={`w-full max-w-3xl mt-6 p-6 rounded-2xl shadow-md border transition-all duration-500 whitespace-pre-wrap leading-relaxed ${
          aiResponse
            ? "bg-white/80 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
            : "text-gray-400 italic"
        }`}
      >
        {!aiResponse && "🤖 Your AI-generated tasks or plan will appear here..."}

        {aiResponse?.tasks && (
          <div>
            <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 mb-3">
              <ClipboardList className="w-5 h-5" /> Suggested Tasks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiResponse.tasks.map((t, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <p className="font-semibold">{t.task}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    🏷 {t.category || "General"} | ⚡ {t.priority || "Normal"}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveTasks}
              disabled={saving}
              className="mt-6 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md disabled:opacity-60"
            >
              {saving ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              {saving ? "Saving..." : "Save All to My Tasks"}
            </button>
          </div>
        )}

        {aiResponse?.plan && (
          <div>
            <h2 className="text-xl font-bold text-green-600 mb-3">
              ✨ Your Smart Day Plan
            </h2>
            <pre className="whitespace-pre-wrap leading-relaxed">
              {aiResponse.plan}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIPlanner;
