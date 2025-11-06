
// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import api from "../api/axios";
// // // // // // // import toast from "react-hot-toast";

// // // // // // // function Dashboard() {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const [tasks, setTasks] = useState([]);
// // // // // // //   const [title, setTitle] = useState("");
// // // // // // //   const [description, setDescription] = useState("");
// // // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [editingTask, setEditingTask] = useState(null);
// // // // // // //   const [editTitle, setEditTitle] = useState("");
// // // // // // //   const [editDescription, setEditDescription] = useState("");

// // // // // // //   // 🔹 Fetch tasks
// // // // // // //   const fetchTasks = async () => {
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const res = await api.get("/tasks");
// // // // // // //       setTasks(res.data);
// // // // // // //     } catch {
// // // // // // //       toast.error("Failed to load tasks");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     fetchTasks();
// // // // // // //   }, []);

// // // // // // //   // 🔹 Add new task
// // // // // // //   const handleAddTask = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (!title.trim()) return toast.error("Task title required");
// // // // // // //     try {
// // // // // // //       await api.post("/tasks", { title, description });
// // // // // // //       setTitle("");
// // // // // // //       setDescription("");
// // // // // // //       toast.success("Task added!");
// // // // // // //       fetchTasks();
// // // // // // //     } catch {
// // // // // // //       toast.error("Error creating task");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // 🔹 Update status
// // // // // // //   const handleStatusChange = async (id, newStatus) => {
// // // // // // //     if (!window.confirm(`Change status to "${newStatus}"?`)) return;
// // // // // // //     try {
// // // // // // //       await api.put(`/tasks/${id}`, { status: newStatus });
// // // // // // //       toast.success("Status updated");
// // // // // // //       fetchTasks();
// // // // // // //     } catch {
// // // // // // //       toast.error("Failed to update status");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // 🔹 Edit task
// // // // // // //   const handleEdit = (task) => {
// // // // // // //     setEditingTask(task._id);
// // // // // // //     setEditTitle(task.title);
// // // // // // //     setEditDescription(task.description);
// // // // // // //   };

// // // // // // //   // 🔹 Save edited task
// // // // // // //   const handleSaveEdit = async (id) => {
// // // // // // //     if (!editTitle.trim()) return toast.error("Title required");
// // // // // // //     try {
// // // // // // //       await api.put(`/tasks/${id}`, {
// // // // // // //         title: editTitle,
// // // // // // //         description: editDescription,
// // // // // // //       });
// // // // // // //       toast.success("Task updated");
// // // // // // //       setEditingTask(null);
// // // // // // //       fetchTasks();
// // // // // // //     } catch {
// // // // // // //       toast.error("Error updating task");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCancelEdit = () => setEditingTask(null);

// // // // // // //   // 🔹 Delete
// // // // // // //   const handleDelete = async (id) => {
// // // // // // //     if (!window.confirm("Delete this task?")) return;
// // // // // // //     try {
// // // // // // //       await api.delete(`/tasks/${id}`);
// // // // // // //       toast.success("Task deleted");
// // // // // // //       fetchTasks();
// // // // // // //     } catch {
// // // // // // //       toast.error("Error deleting task");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // 🔹 Logout
// // // // // // //   const handleLogout = () => {
// // // // // // //     localStorage.removeItem("user");
// // // // // // //     navigate("/login");
// // // // // // //   };

// // // // // // //   // 🔹 Filter tasks
// // // // // // //   const filteredTasks =
// // // // // // //     statusFilter === "all"
// // // // // // //       ? tasks
// // // // // // //       : tasks.filter((t) => t.status === statusFilter);

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-4">
// // // // // // //       <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-blue-100">
// // // // // // //         {/* Header */}
// // // // // // //         <div className="flex justify-between items-center mb-8">
// // // // // // //           <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
// // // // // // //             TaskIQ Dashboard 🚀
// // // // // // //           </h1>
// // // // // // //           <button
// // // // // // //             onClick={handleLogout}
// // // // // // //             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
// // // // // // //           >
// // // // // // //             Logout
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {/* Task Form */}
// // // // // // //         <form
// // // // // // //           onSubmit={handleAddTask}
// // // // // // //           className="mb-6 bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-inner"
// // // // // // //         >
// // // // // // //           <h2 className="text-lg font-semibold text-blue-700 mb-3">
// // // // // // //             ✏️ Add a new Task
// // // // // // //           </h2>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             placeholder="Task title"
// // // // // // //             value={title}
// // // // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // // // //           />
// // // // // // //           <textarea
// // // // // // //             placeholder="Description (optional)"
// // // // // // //             value={description}
// // // // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // // // //           ></textarea>
// // // // // // //           <button
// // // // // // //             type="submit"
// // // // // // //             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
// // // // // // //           >
// // // // // // //             ➕ Add Task
// // // // // // //           </button>
// // // // // // //         </form>

// // // // // // //         {/* Filters */}
// // // // // // //         <div className="flex gap-3 mb-6">
// // // // // // //           {["all", "pending", "in-progress", "completed"].map((status) => (
// // // // // // //             <button
// // // // // // //               key={status}
// // // // // // //               onClick={() => setStatusFilter(status)}
// // // // // // //               className={`px-4 py-1.5 rounded-full text-sm font-medium shadow-sm transition ${
// // // // // // //                 statusFilter === status
// // // // // // //                   ? "bg-blue-600 text-white"
// // // // // // //                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // // //             </button>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* Task List */}
// // // // // // //         {loading ? (
// // // // // // //           <p className="text-center text-gray-500">Loading tasks...</p>
// // // // // // //         ) : filteredTasks.length === 0 ? (
// // // // // // //           <p className="text-gray-500 text-center italic">No tasks yet.</p>
// // // // // // //         ) : (
// // // // // // //           <ul className="space-y-4">
// // // // // // //             {filteredTasks.map((task) => (
// // // // // // //               <li
// // // // // // //                 key={task._id}
// // // // // // //                 className={`p-4 rounded-xl border-l-4 shadow-md transition transform hover:scale-[1.01] ${
// // // // // // //                   task.status === "completed"
// // // // // // //                     ? "border-green-500 bg-green-50"
// // // // // // //                     : task.status === "in-progress"
// // // // // // //                     ? "border-yellow-500 bg-yellow-50"
// // // // // // //                     : "border-gray-400 bg-gray-50"
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 {editingTask === task._id ? (
// // // // // // //                   <div className="mb-3">
// // // // // // //                     <input
// // // // // // //                       type="text"
// // // // // // //                       value={editTitle}
// // // // // // //                       onChange={(e) => setEditTitle(e.target.value)}
// // // // // // //                       className="w-full border rounded-md p-1 mb-2"
// // // // // // //                     />
// // // // // // //                     <textarea
// // // // // // //                       value={editDescription}
// // // // // // //                       onChange={(e) => setEditDescription(e.target.value)}
// // // // // // //                       className="w-full border rounded-md p-1"
// // // // // // //                     />
// // // // // // //                   </div>
// // // // // // //                 ) : (
// // // // // // //                   <div>
// // // // // // //                     <h3 className="font-semibold text-gray-900 text-lg">
// // // // // // //                       {task.title}
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-sm text-gray-600">{task.description}</p>
// // // // // // //                     <p className="text-xs text-gray-400 mt-1">
// // // // // // //                       Status:{" "}
// // // // // // //                       <span className="font-medium capitalize text-gray-700">
// // // // // // //                         {task.status}
// // // // // // //                       </span>
// // // // // // //                     </p>
// // // // // // //                   </div>
// // // // // // //                 )}

// // // // // // //                 <div className="flex gap-2 mt-3 justify-end">
// // // // // // //                   {editingTask === task._id ? (
// // // // // // //                     <>
// // // // // // //                       <button
// // // // // // //                         onClick={() => handleSaveEdit(task._id)}
// // // // // // //                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
// // // // // // //                       >
// // // // // // //                         💾 Save
// // // // // // //                       </button>
// // // // // // //                       <button
// // // // // // //                         onClick={handleCancelEdit}
// // // // // // //                         className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
// // // // // // //                       >
// // // // // // //                         ❌ Cancel
// // // // // // //                       </button>
// // // // // // //                     </>
// // // // // // //                   ) : (
// // // // // // //                     <>
// // // // // // //                       <select
// // // // // // //                         value={task.status}
// // // // // // //                         onChange={(e) =>
// // // // // // //                           handleStatusChange(task._id, e.target.value)
// // // // // // //                         }
// // // // // // //                         className="border rounded-md p-1 text-sm"
// // // // // // //                       >
// // // // // // //                         <option value="pending">Pending</option>
// // // // // // //                         <option value="in-progress">In Progress</option>
// // // // // // //                         <option value="completed">Completed</option>
// // // // // // //                       </select>
// // // // // // //                       <button
// // // // // // //                         onClick={() => handleEdit(task)}
// // // // // // //                         className="text-blue-600 hover:text-blue-800 text-sm"
// // // // // // //                       >
// // // // // // //                         ✏️ Edit
// // // // // // //                       </button>
// // // // // // //                       <button
// // // // // // //                         onClick={() => handleDelete(task._id)}
// // // // // // //                         className="text-red-500 hover:text-red-700 text-sm"
// // // // // // //                       >
// // // // // // //                         🗑 Delete
// // // // // // //                       </button>
// // // // // // //                     </>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Dashboard;

// // // // // // import { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import api from "../api/axios";
// // // // // // import toast from "react-hot-toast";

// // // // // // function Dashboard() {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [tasks, setTasks] = useState([]);
// // // // // //   const [title, setTitle] = useState("");
// // // // // //   const [description, setDescription] = useState("");
// // // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [editingTask, setEditingTask] = useState(null);
// // // // // //   const [editTitle, setEditTitle] = useState("");
// // // // // //   const [editDescription, setEditDescription] = useState("");

// // // // // //   // 🔹 Fetch tasks
// // // // // //   const fetchTasks = async () => {
// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const res = await api.get("/tasks");
// // // // // //       setTasks(res.data);
// // // // // //     } catch {
// // // // // //       toast.error("Failed to load tasks");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchTasks();
// // // // // //   }, []);

// // // // // //   // 🔹 Add new task
// // // // // //   const handleAddTask = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!title.trim()) return toast.error("Task title required");
// // // // // //     try {
// // // // // //       await api.post("/tasks", { title, description });
// // // // // //       setTitle("");
// // // // // //       setDescription("");
// // // // // //       toast.success("Task added!");
// // // // // //       fetchTasks();
// // // // // //     } catch {
// // // // // //       toast.error("Error creating task");
// // // // // //     }
// // // // // //   };

// // // // // //   // 🔹 Update status
// // // // // //   const handleStatusChange = async (id, newStatus) => {
// // // // // //     try {
// // // // // //       await api.put(`/tasks/${id}`, { status: newStatus });
// // // // // //       toast.success("Status updated");
// // // // // //       fetchTasks();
// // // // // //     } catch {
// // // // // //       toast.error("Failed to update status");
// // // // // //     }
// // // // // //   };

// // // // // //   // 🔹 Edit & save
// // // // // //   const handleEdit = (task) => {
// // // // // //     setEditingTask(task._id);
// // // // // //     setEditTitle(task.title);
// // // // // //     setEditDescription(task.description);
// // // // // //   };

// // // // // //   const handleSaveEdit = async (id) => {
// // // // // //     if (!editTitle.trim()) return toast.error("Title required");
// // // // // //     try {
// // // // // //       await api.put(`/tasks/${id}`, {
// // // // // //         title: editTitle,
// // // // // //         description: editDescription,
// // // // // //       });
// // // // // //       toast.success("Task updated");
// // // // // //       setEditingTask(null);
// // // // // //       fetchTasks();
// // // // // //     } catch {
// // // // // //       toast.error("Error updating task");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCancelEdit = () => setEditingTask(null);

// // // // // //   // 🔹 Delete
// // // // // //   const handleDelete = async (id) => {
// // // // // //     if (!window.confirm("Delete this task?")) return;
// // // // // //     try {
// // // // // //       await api.delete(`/tasks/${id}`);
// // // // // //       toast.success("Task deleted");
// // // // // //       fetchTasks();
// // // // // //     } catch {
// // // // // //       toast.error("Error deleting task");
// // // // // //     }
// // // // // //   };

// // // // // //   // 🔹 Logout
// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem("user");
// // // // // //     navigate("/login");
// // // // // //   };

// // // // // //   // 🔹 Filter tasks
// // // // // //   const filteredTasks =
// // // // // //     statusFilter === "all"
// // // // // //       ? tasks
// // // // // //       : tasks.filter((t) => t.status === statusFilter);

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-4">
// // // // // //       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
// // // // // //         {/* Header */}
// // // // // //         <div className="flex justify-between items-center mb-10">
// // // // // //           <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
// // // // // //             TaskIQ Dashboard 🚀
// // // // // //           </h1>
// // // // // //           <button
// // // // // //             onClick={handleLogout}
// // // // // //             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
// // // // // //           >
// // // // // //             Logout
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* Add Task Form */}
// // // // // //         <form
// // // // // //           onSubmit={handleAddTask}
// // // // // //           className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner"
// // // // // //         >
// // // // // //           <h2 className="text-lg font-semibold text-blue-700 mb-3">
// // // // // //             ✏️ Add a New Task
// // // // // //           </h2>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Task title"
// // // // // //             value={title}
// // // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // // //           />
// // // // // //           <textarea
// // // // // //             placeholder="Description (optional)"
// // // // // //             value={description}
// // // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // // //           ></textarea>
// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
// // // // // //           >
// // // // // //             ➕ Add Task
// // // // // //           </button>
// // // // // //         </form>

// // // // // //         {/* Status Filters */}
// // // // // //         <div className="flex justify-center gap-3 mb-6">
// // // // // //           {["all", "pending", "in-progress", "completed"].map((status) => (
// // // // // //             <button
// // // // // //               key={status}
// // // // // //               onClick={() => setStatusFilter(status)}
// // // // // //               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// // // // // //                 statusFilter === status
// // // // // //                   ? "bg-blue-600 text-white shadow-md"
// // // // // //                   : "bg-gray-200 text-gray-700 hover:bg-blue-100"
// // // // // //               }`}
// // // // // //             >
// // // // // //               {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // // //             </button>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Task List */}
// // // // // //         {loading ? (
// // // // // //           <p className="text-center text-gray-500 animate-pulse">
// // // // // //             Loading tasks...
// // // // // //           </p>
// // // // // //         ) : filteredTasks.length === 0 ? (
// // // // // //           <p className="text-center text-gray-500 italic">No tasks yet.</p>
// // // // // //         ) : (
// // // // // //           <ul className="space-y-4">
// // // // // //             {filteredTasks.map((task) => (
// // // // // //               <li
// // // // // //                 key={task._id}
// // // // // //                 className={`p-5 rounded-xl border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
// // // // // //                   task.status === "completed"
// // // // // //                     ? "border-green-500 bg-green-50"
// // // // // //                     : task.status === "in-progress"
// // // // // //                     ? "border-yellow-500 bg-yellow-50"
// // // // // //                     : "border-gray-400 bg-gray-50"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {editingTask === task._id ? (
// // // // // //                   <div className="mb-3">
// // // // // //                     <input
// // // // // //                       type="text"
// // // // // //                       value={editTitle}
// // // // // //                       onChange={(e) => setEditTitle(e.target.value)}
// // // // // //                       className="w-full border rounded-md p-2 mb-2"
// // // // // //                     />
// // // // // //                     <textarea
// // // // // //                       value={editDescription}
// // // // // //                       onChange={(e) => setEditDescription(e.target.value)}
// // // // // //                       className="w-full border rounded-md p-2"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 ) : (
// // // // // //                   <>
// // // // // //                     <h3 className="font-bold text-lg text-gray-900">
// // // // // //                       {task.title}
// // // // // //                     </h3>
// // // // // //                     {task.description && (
// // // // // //                       <p className="text-sm text-gray-600 mt-1">
// // // // // //                         {task.description}
// // // // // //                       </p>
// // // // // //                     )}
// // // // // //                     <p className="text-xs text-gray-400 mt-2">
// // // // // //                       Status:{" "}
// // // // // //                       <span className="font-medium capitalize text-gray-700">
// // // // // //                         {task.status}
// // // // // //                       </span>
// // // // // //                     </p>
// // // // // //                   </>
// // // // // //                 )}

// // // // // //                 <div className="flex gap-2 mt-3 justify-end">
// // // // // //                   {editingTask === task._id ? (
// // // // // //                     <>
// // // // // //                       <button
// // // // // //                         onClick={() => handleSaveEdit(task._id)}
// // // // // //                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
// // // // // //                       >
// // // // // //                         💾 Save
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={handleCancelEdit}
// // // // // //                         className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
// // // // // //                       >
// // // // // //                         ❌ Cancel
// // // // // //                       </button>
// // // // // //                     </>
// // // // // //                   ) : (
// // // // // //                     <>
// // // // // //                       <select
// // // // // //                         value={task.status}
// // // // // //                         onChange={(e) =>
// // // // // //                           handleStatusChange(task._id, e.target.value)
// // // // // //                         }
// // // // // //                         className="border rounded-md p-1 text-sm"
// // // // // //                       >
// // // // // //                         <option value="pending">Pending</option>
// // // // // //                         <option value="in-progress">In Progress</option>
// // // // // //                         <option value="completed">Completed</option>
// // // // // //                       </select>
// // // // // //                       <button
// // // // // //                         onClick={() => handleEdit(task)}
// // // // // //                         className="text-blue-600 hover:text-blue-800 text-sm"
// // // // // //                       >
// // // // // //                         ✏️ Edit
// // // // // //                       </button>
// // // // // //                       <button
// // // // // //                         onClick={() => handleDelete(task._id)}
// // // // // //                         className="text-red-500 hover:text-red-700 text-sm"
// // // // // //                       >
// // // // // //                         🗑 Delete
// // // // // //                       </button>
// // // // // //                     </>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Dashboard;

// // // // // import { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import api from "../api/axios";
// // // // // import toast from "react-hot-toast";

// // // // // function Dashboard() {
// // // // //   const navigate = useNavigate();
// // // // //   const [tasks, setTasks] = useState([]);
// // // // //   const [title, setTitle] = useState("");
// // // // //   const [description, setDescription] = useState("");
// // // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [editingTask, setEditingTask] = useState(null);
// // // // //   const [editTitle, setEditTitle] = useState("");
// // // // //   const [editDescription, setEditDescription] = useState("");

// // // // //   // ✅ Fetch tasks
// // // // //   const fetchTasks = async () => {
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const res = await api.get("/tasks");
// // // // //       setTasks(res.data);
// // // // //     } catch {
// // // // //       toast.error("Failed to load tasks");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchTasks();
// // // // //   }, []);

// // // // //   // ✅ Add new task
// // // // //   const handleAddTask = async (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!title.trim()) return toast.error("Task title required");
// // // // //     try {
// // // // //       await api.post("/tasks", { title, description });
// // // // //       setTitle("");
// // // // //       setDescription("");
// // // // //       toast.success("Task added!");
// // // // //       fetchTasks();
// // // // //     } catch {
// // // // //       toast.error("Error creating task");
// // // // //     }
// // // // //   };

// // // // //   // ✅ Update task status
// // // // //   const handleStatusChange = async (id, newStatus) => {
// // // // //     try {
// // // // //       await api.put(`/tasks/${id}`, { status: newStatus });
// // // // //       toast.success("Status updated");
// // // // //       fetchTasks();
// // // // //     } catch {
// // // // //       toast.error("Failed to update status");
// // // // //     }
// // // // //   };

// // // // //   // ✅ Edit & save
// // // // //   const handleEdit = (task) => {
// // // // //     setEditingTask(task._id);
// // // // //     setEditTitle(task.title);
// // // // //     setEditDescription(task.description);
// // // // //   };

// // // // //   const handleSaveEdit = async (id) => {
// // // // //     if (!editTitle.trim()) return toast.error("Title required");
// // // // //     try {
// // // // //       await api.put(`/tasks/${id}`, {
// // // // //         title: editTitle,
// // // // //         description: editDescription,
// // // // //       });
// // // // //       toast.success("Task updated");
// // // // //       setEditingTask(null);
// // // // //       fetchTasks();
// // // // //     } catch {
// // // // //       toast.error("Error updating task");
// // // // //     }
// // // // //   };

// // // // //   const handleCancelEdit = () => setEditingTask(null);

// // // // //   // ✅ Delete task
// // // // //   const handleDelete = async (id) => {
// // // // //     if (!window.confirm("Delete this task?")) return;
// // // // //     try {
// // // // //       await api.delete(`/tasks/${id}`);
// // // // //       toast.success("Task deleted");
// // // // //       fetchTasks();
// // // // //     } catch {
// // // // //       toast.error("Error deleting task");
// // // // //     }
// // // // //   };

// // // // //   // ✅ Logout (fixed)
// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("user");
// // // // //     navigate("/login");
// // // // //   };

// // // // //   // ✅ Filter tasks
// // // // //   const filteredTasks =
// // // // //     statusFilter === "all"
// // // // //       ? tasks
// // // // //       : tasks.filter((t) => t.status === statusFilter);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-4">
// // // // //       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
// // // // //         {/* Header */}
// // // // //         <div className="flex justify-between items-center mb-10">
// // // // //           <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
// // // // //             TaskIQ Dashboard 🚀
// // // // //           </h1>
// // // // //           <button
// // // // //             onClick={handleLogout}
// // // // //             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
// // // // //           >
// // // // //             Logout
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Add Task Form */}
// // // // //         <form
// // // // //           onSubmit={handleAddTask}
// // // // //           className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner"
// // // // //         >
// // // // //           <h2 className="text-lg font-semibold text-blue-700 mb-3">
// // // // //             ✏️ Add a New Task
// // // // //           </h2>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Task title"
// // // // //             value={title}
// // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // //           />
// // // // //           <textarea
// // // // //             placeholder="Description (optional)"
// // // // //             value={description}
// // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // // //           ></textarea>
// // // // //           <button
// // // // //             type="submit"
// // // // //             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
// // // // //           >
// // // // //             ➕ Add Task
// // // // //           </button>
// // // // //         </form>

// // // // //         {/* Status Filters */}
// // // // //         <div className="flex justify-center gap-3 mb-6">
// // // // //           {["all", "pending", "in-progress", "completed"].map((status) => (
// // // // //             <button
// // // // //               key={status}
// // // // //               onClick={() => setStatusFilter(status)}
// // // // //               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// // // // //                 statusFilter === status
// // // // //                   ? "bg-blue-600 text-white shadow-md"
// // // // //                   : "bg-gray-200 text-gray-700 hover:bg-blue-100"
// // // // //               }`}
// // // // //             >
// // // // //               {status.charAt(0).toUpperCase() + status.slice(1)}
// // // // //             </button>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Task List */}
// // // // //         {loading ? (
// // // // //           <p className="text-center text-gray-500 animate-pulse">
// // // // //             Loading tasks...
// // // // //           </p>
// // // // //         ) : filteredTasks.length === 0 ? (
// // // // //           <p className="text-center text-gray-500 italic">No tasks yet.</p>
// // // // //         ) : (
// // // // //           <ul className="space-y-4">
// // // // //             {filteredTasks.map((task) => (
// // // // //               <li
// // // // //                 key={task._id}
// // // // //                 className={`p-5 rounded-xl border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
// // // // //                   task.status === "completed"
// // // // //                     ? "border-green-500 bg-green-50"
// // // // //                     : task.status === "in-progress"
// // // // //                     ? "border-yellow-500 bg-yellow-50"
// // // // //                     : "border-gray-400 bg-gray-50"
// // // // //                 }`}
// // // // //               >
// // // // //                 {editingTask === task._id ? (
// // // // //                   <div className="mb-3">
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       value={editTitle}
// // // // //                       onChange={(e) => setEditTitle(e.target.value)}
// // // // //                       className="w-full border rounded-md p-2 mb-2"
// // // // //                     />
// // // // //                     <textarea
// // // // //                       value={editDescription}
// // // // //                       onChange={(e) => setEditDescription(e.target.value)}
// // // // //                       className="w-full border rounded-md p-2"
// // // // //                     />
// // // // //                   </div>
// // // // //                 ) : (
// // // // //                   <>
// // // // //                     <h3 className="font-bold text-lg text-gray-900">
// // // // //                       {task.title}
// // // // //                     </h3>
// // // // //                     {task.description && (
// // // // //                       <p className="text-sm text-gray-600 mt-1">
// // // // //                         {task.description}
// // // // //                       </p>
// // // // //                     )}
// // // // //                     <p className="text-xs text-gray-400 mt-2">
// // // // //                       Status:{" "}
// // // // //                       <span className="font-medium capitalize text-gray-700">
// // // // //                         {task.status}
// // // // //                       </span>
// // // // //                     </p>
// // // // //                   </>
// // // // //                 )}

// // // // //                 <div className="flex gap-2 mt-3 justify-end">
// // // // //                   {editingTask === task._id ? (
// // // // //                     <>
// // // // //                       <button
// // // // //                         onClick={() => handleSaveEdit(task._id)}
// // // // //                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
// // // // //                       >
// // // // //                         💾 Save
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={handleCancelEdit}
// // // // //                         className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
// // // // //                       >
// // // // //                         ❌ Cancel
// // // // //                       </button>
// // // // //                     </>
// // // // //                   ) : (
// // // // //                     <>
// // // // //                       <select
// // // // //                         value={task.status}
// // // // //                         onChange={(e) =>
// // // // //                           handleStatusChange(task._id, e.target.value)
// // // // //                         }
// // // // //                         className="border rounded-md p-1 text-sm"
// // // // //                       >
// // // // //                         <option value="pending">Pending</option>
// // // // //                         <option value="in-progress">In Progress</option>
// // // // //                         <option value="completed">Completed</option>
// // // // //                       </select>
// // // // //                       <button
// // // // //                         onClick={() => handleEdit(task)}
// // // // //                         className="text-blue-600 hover:text-blue-800 text-sm"
// // // // //                       >
// // // // //                         ✏️ Edit
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={() => handleDelete(task._id)}
// // // // //                         className="text-red-500 hover:text-red-700 text-sm"
// // // // //                       >
// // // // //                         🗑 Delete
// // // // //                       </button>
// // // // //                     </>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Dashboard;


// // // // import { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import api from "../api/axios";
// // // // import toast from "react-hot-toast";

// // // // function Dashboard() {
// // // //   const navigate = useNavigate();
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [title, setTitle] = useState("");
// // // //   const [description, setDescription] = useState("");
// // // //   const [statusFilter, setStatusFilter] = useState("all");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [editingTask, setEditingTask] = useState(null);
// // // //   const [editTitle, setEditTitle] = useState("");
// // // //   const [editDescription, setEditDescription] = useState("");

// // // //   // ✅ Fetch tasks
// // // //   const fetchTasks = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const res = await api.get("/tasks");
// // // //       setTasks(res.data);
// // // //     } catch {
// // // //       toast.error("Failed to load tasks");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchTasks();
// // // //   }, []);

// // // //   // ✅ Add new task
// // // //   const handleAddTask = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!title.trim()) return toast.error("Task title required");
// // // //     try {
// // // //       await api.post("/tasks", { title, description });
// // // //       setTitle("");
// // // //       setDescription("");
// // // //       toast.success("Task added!");
// // // //       fetchTasks();
// // // //     } catch {
// // // //       toast.error("Error creating task");
// // // //     }
// // // //   };

// // // //   // ✅ Update task status
// // // //   const handleStatusChange = async (id, newStatus) => {
// // // //     try {
// // // //       await api.put(`/tasks/${id}`, { status: newStatus });
// // // //       toast.success("Status updated");
// // // //       fetchTasks();
// // // //     } catch {
// // // //       toast.error("Failed to update status");
// // // //     }
// // // //   };

// // // //   // ✅ Edit & save
// // // //   const handleEdit = (task) => {
// // // //     setEditingTask(task._id);
// // // //     setEditTitle(task.title);
// // // //     setEditDescription(task.description);
// // // //   };

// // // //   const handleSaveEdit = async (id) => {
// // // //     if (!editTitle.trim()) return toast.error("Title required");
// // // //     try {
// // // //       await api.put(`/tasks/${id}`, {
// // // //         title: editTitle,
// // // //         description: editDescription,
// // // //       });
// // // //       toast.success("Task updated");
// // // //       setEditingTask(null);
// // // //       fetchTasks();
// // // //     } catch {
// // // //       toast.error("Error updating task");
// // // //     }
// // // //   };

// // // //   const handleCancelEdit = () => setEditingTask(null);

// // // //   // ✅ Delete task
// // // //   const handleDelete = async (id) => {
// // // //     if (!window.confirm("Delete this task?")) return;
// // // //     try {
// // // //       await api.delete(`/tasks/${id}`);
// // // //       toast.success("Task deleted");
// // // //       fetchTasks();
// // // //     } catch {
// // // //       toast.error("Error deleting task");
// // // //     }
// // // //   };

// // // //   // ✅ Logout
// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("user");
// // // //     navigate("/login");
// // // //   };

// // // //   // ✅ Filter tasks
// // // //   const filteredTasks =
// // // //     statusFilter === "all"
// // // //       ? tasks
// // // //       : tasks.filter((t) => t.status === statusFilter);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-4">
// // // //       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
// // // //         {/* Header */}
// // // //         <div className="flex justify-between items-center mb-10">
// // // //           <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
// // // //             TaskIQ Dashboard 🚀
// // // //           </h1>
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
// // // //           >
// // // //             Logout
// // // //           </button>
// // // //         </div>

// // // //         {/* Add Task Form */}
// // // //         <form
// // // //           onSubmit={handleAddTask}
// // // //           className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner"
// // // //         >
// // // //           <h2 className="text-lg font-semibold text-blue-700 mb-3">
// // // //             ✏️ Add a New Task
// // // //           </h2>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Task title"
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // //           />
// // // //           <textarea
// // // //             placeholder="Description (optional)"
// // // //             value={description}
// // // //             onChange={(e) => setDescription(e.target.value)}
// // // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // //           ></textarea>
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
// // // //           >
// // // //             ➕ Add Task
// // // //           </button>
// // // //         </form>

// // // //         {/* Status Filters */}
// // // //         <div className="flex justify-center gap-3 mb-6">
// // // //           {["all", "pending", "in-progress", "completed"].map((status) => (
// // // //             <button
// // // //               key={status}
// // // //               onClick={() => setStatusFilter(status)}
// // // //               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// // // //                 statusFilter === status
// // // //                   ? "bg-blue-600 text-white shadow-md"
// // // //                   : "bg-gray-200 text-gray-700 hover:bg-blue-100"
// // // //               }`}
// // // //             >
// // // //               {status.charAt(0).toUpperCase() + status.slice(1)}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Task List */}
// // // //         {loading ? (
// // // //           <p className="text-center text-gray-500 animate-pulse">
// // // //             Loading tasks...
// // // //           </p>
// // // //         ) : filteredTasks.length === 0 ? (
// // // //           <p className="text-center text-gray-500 italic">No tasks yet.</p>
// // // //         ) : (
// // // //           <ul className="space-y-4">
// // // //             {filteredTasks.map((task) => (
// // // //               <li
// // // //                 key={task._id}
// // // //                 className={`p-5 rounded-xl border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
// // // //                   task.status === "completed"
// // // //                     ? "border-green-500 bg-green-50"
// // // //                     : task.status === "in-progress"
// // // //                     ? "border-yellow-500 bg-yellow-50"
// // // //                     : "border-gray-400 bg-gray-50"
// // // //                 }`}
// // // //               >
// // // //                 {editingTask === task._id ? (
// // // //                   <div className="mb-3">
// // // //                     <input
// // // //                       type="text"
// // // //                       value={editTitle}
// // // //                       onChange={(e) => setEditTitle(e.target.value)}
// // // //                       className="w-full border rounded-md p-2 mb-2"
// // // //                     />
// // // //                     <textarea
// // // //                       value={editDescription}
// // // //                       onChange={(e) => setEditDescription(e.target.value)}
// // // //                       className="w-full border rounded-md p-2"
// // // //                     />
// // // //                   </div>
// // // //                 ) : (
// // // //                   <>
// // // //                     <div className="flex justify-between items-start">
// // // //                       <h3 className="font-bold text-lg text-gray-900">
// // // //                         {task.title}
// // // //                       </h3>

// // // //                       {/* 🧠 Source Tag */}
// // // //                       <span
// // // //                         className={`text-xs font-semibold px-2 py-1 rounded-full shadow-sm ${
// // // //                           task.source === "AI"
// // // //                             ? "bg-purple-100 text-purple-700 border border-purple-300"
// // // //                             : "bg-blue-100 text-blue-700 border border-blue-300"
// // // //                         }`}
// // // //                       >
// // // //                         {task.source === "AI" ? "🧠 AI" : "✍️ Manual"}
// // // //                       </span>
// // // //                     </div>

// // // //                     {task.description && (
// // // //                       <p className="text-sm text-gray-600 mt-1">
// // // //                         {task.description}
// // // //                       </p>
// // // //                     )}

// // // //                     <p className="text-xs text-gray-400 mt-2">
// // // //                       Status:{" "}
// // // //                       <span className="font-medium capitalize text-gray-700">
// // // //                         {task.status}
// // // //                       </span>
// // // //                     </p>
// // // //                   </>
// // // //                 )}

// // // //                 <div className="flex gap-2 mt-3 justify-end">
// // // //                   {editingTask === task._id ? (
// // // //                     <>
// // // //                       <button
// // // //                         onClick={() => handleSaveEdit(task._id)}
// // // //                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
// // // //                       >
// // // //                         💾 Save
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={handleCancelEdit}
// // // //                         className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
// // // //                       >
// // // //                         ❌ Cancel
// // // //                       </button>
// // // //                     </>
// // // //                   ) : (
// // // //                     <>
// // // //                       <select
// // // //                         value={task.status}
// // // //                         onChange={(e) =>
// // // //                           handleStatusChange(task._id, e.target.value)
// // // //                         }
// // // //                         className="border rounded-md p-1 text-sm"
// // // //                       >
// // // //                         <option value="pending">Pending</option>
// // // //                         <option value="in-progress">In Progress</option>
// // // //                         <option value="completed">Completed</option>
// // // //                       </select>
// // // //                       <button
// // // //                         onClick={() => handleEdit(task)}
// // // //                         className="text-blue-600 hover:text-blue-800 text-sm"
// // // //                       >
// // // //                         ✏️ Edit
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={() => handleDelete(task._id)}
// // // //                         className="text-red-500 hover:text-red-700 text-sm"
// // // //                       >
// // // //                         🗑 Delete
// // // //                       </button>
// // // //                     </>
// // // //                   )}
// // // //                 </div>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Dashboard;


// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import api from "../api/axios";
// // // import toast from "react-hot-toast";

// // // function Dashboard() {
// // //   const navigate = useNavigate();
// // //   const [tasks, setTasks] = useState([]);
// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [statusFilter, setStatusFilter] = useState("all");
// // //   const [loading, setLoading] = useState(false);
// // //   const [editingTask, setEditingTask] = useState(null);
// // //   const [editTitle, setEditTitle] = useState("");
// // //   const [editDescription, setEditDescription] = useState("");
// // //   const [aiLoading, setAiLoading] = useState(false); // 🧠 Added for AI progress

// // //   // ✅ Fetch tasks from server
// // //   const fetchTasks = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const res = await api.get("/tasks");
// // //       setTasks(res.data);
// // //     } catch {
// // //       toast.error("Failed to load tasks");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, []);

// // //   // ✅ Add new task manually
// // //   const handleAddTask = async (e) => {
// // //     e.preventDefault();
// // //     if (!title.trim()) return toast.error("Task title required");
// // //     try {
// // //       await api.post("/tasks", { title, description, source: "Manual" });
// // //       setTitle("");
// // //       setDescription("");
// // //       toast.success("Task added!");
// // //       fetchTasks();
// // //     } catch {
// // //       toast.error("Error creating task");
// // //     }
// // //   };

// // //   // ✅ Trigger Gemini AI “Plan My Day”
// // //   const handleAIPlan = async () => {
// // //     setAiLoading(true);
// // //     try {
// // //       const res = await api.post("/ai/plan", { text: "Plan my day" });
// // //       toast.success("AI generated your daily plan 🧠");

// // //       // Save AI plan as a single task entry
// // //       await api.post("/tasks", {
// // //         title: "AI-Generated Day Plan",
// // //         description: res.data.plan,
// // //         source: "AI",
// // //       });

// // //       fetchTasks();
// // //     } catch (err) {
// // //       console.error("AI plan error →", err);
// // //       toast.error(
// // //         err.response?.data?.message || "AI failed to generate plan. Try again."
// // //       );
// // //     } finally {
// // //       setAiLoading(false);
// // //     }
// // //   };

// // //   // ✅ Update task status
// // //   const handleStatusChange = async (id, newStatus) => {
// // //     try {
// // //       await api.put(`/tasks/${id}`, { status: newStatus });
// // //       toast.success("Status updated");
// // //       fetchTasks();
// // //     } catch {
// // //       toast.error("Failed to update status");
// // //     }
// // //   };

// // //   // ✅ Edit & save changes
// // //   const handleEdit = (task) => {
// // //     setEditingTask(task._id);
// // //     setEditTitle(task.title);
// // //     setEditDescription(task.description);
// // //   };

// // //   const handleSaveEdit = async (id) => {
// // //     if (!editTitle.trim()) return toast.error("Title required");
// // //     try {
// // //       await api.put(`/tasks/${id}`, {
// // //         title: editTitle,
// // //         description: editDescription,
// // //       });
// // //       toast.success("Task updated");
// // //       setEditingTask(null);
// // //       fetchTasks();
// // //     } catch {
// // //       toast.error("Error updating task");
// // //     }
// // //   };

// // //   const handleCancelEdit = () => setEditingTask(null);

// // //   // ✅ Delete a task
// // //   const handleDelete = async (id) => {
// // //     if (!window.confirm("Delete this task?")) return;
// // //     try {
// // //       await api.delete(`/tasks/${id}`);
// // //       toast.success("Task deleted");
// // //       fetchTasks();
// // //     } catch {
// // //       toast.error("Error deleting task");
// // //     }
// // //   };

// // //   // ✅ Logout user
// // //   const handleLogout = () => {
// // //     localStorage.removeItem("user");
// // //     navigate("/login");
// // //   };

// // //   // ✅ Filter tasks by status
// // //   const filteredTasks =
// // //     statusFilter === "all"
// // //       ? tasks
// // //       : tasks.filter((t) => t.status === statusFilter);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-4">
// // //       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
// // //         {/* Header */}
// // //         <div className="flex justify-between items-center mb-10">
// // //           <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
// // //             TaskIQ Dashboard 🚀
// // //           </h1>
// // //           <div className="flex gap-3">
// // //             <button
// // //               onClick={handleAIPlan}
// // //               disabled={aiLoading}
// // //               className={`${
// // //                 aiLoading
// // //                   ? "bg-purple-300 cursor-not-allowed"
// // //                   : "bg-purple-600 hover:bg-purple-700"
// // //               } text-white px-4 py-2 rounded-lg shadow-md transition`}
// // //             >
// // //               {aiLoading ? "Thinking 🤔..." : "🧠 Plan My Day"}
// // //             </button>

// // //             <button
// // //               onClick={handleLogout}
// // //               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
// // //             >
// // //               Logout
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Add Task Form */}
// // //         <form
// // //           onSubmit={handleAddTask}
// // //           className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner"
// // //         >
// // //           <h2 className="text-lg font-semibold text-blue-700 mb-3">
// // //             ✏️ Add a New Task
// // //           </h2>
// // //           <input
// // //             type="text"
// // //             placeholder="Task title"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //           />
// // //           <textarea
// // //             placeholder="Description (optional)"
// // //             value={description}
// // //             onChange={(e) => setDescription(e.target.value)}
// // //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //           ></textarea>
// // //           <button
// // //             type="submit"
// // //             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
// // //           >
// // //             ➕ Add Task
// // //           </button>
// // //         </form>

// // //         {/* Status Filters */}
// // //         <div className="flex justify-center gap-3 mb-6">
// // //           {["all", "pending", "in-progress", "completed"].map((status) => (
// // //             <button
// // //               key={status}
// // //               onClick={() => setStatusFilter(status)}
// // //               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// // //                 statusFilter === status
// // //                   ? "bg-blue-600 text-white shadow-md"
// // //                   : "bg-gray-200 text-gray-700 hover:bg-blue-100"
// // //               }`}
// // //             >
// // //               {status.charAt(0).toUpperCase() + status.slice(1)}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Task List */}
// // //         {loading ? (
// // //           <p className="text-center text-gray-500 animate-pulse">
// // //             Loading tasks...
// // //           </p>
// // //         ) : filteredTasks.length === 0 ? (
// // //           <p className="text-center text-gray-500 italic">No tasks yet.</p>
// // //         ) : (
// // //           <ul className="space-y-4">
// // //             {filteredTasks.map((task) => (
// // //               <li
// // //                 key={task._id}
// // //                 className={`p-5 rounded-xl border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
// // //                   task.status === "completed"
// // //                     ? "border-green-500 bg-green-50"
// // //                     : task.status === "in-progress"
// // //                     ? "border-yellow-500 bg-yellow-50"
// // //                     : "border-gray-400 bg-gray-50"
// // //                 }`}
// // //               >
// // //                 {editingTask === task._id ? (
// // //                   <div className="mb-3">
// // //                     <input
// // //                       type="text"
// // //                       value={editTitle}
// // //                       onChange={(e) => setEditTitle(e.target.value)}
// // //                       className="w-full border rounded-md p-2 mb-2"
// // //                     />
// // //                     <textarea
// // //                       value={editDescription}
// // //                       onChange={(e) => setEditDescription(e.target.value)}
// // //                       className="w-full border rounded-md p-2"
// // //                     />
// // //                   </div>
// // //                 ) : (
// // //                   <>
// // //                     <div className="flex justify-between items-start">
// // //                       <h3 className="font-bold text-lg text-gray-900">
// // //                         {task.title}
// // //                       </h3>
// // //                       <span
// // //                         className={`text-xs font-semibold px-2 py-1 rounded-full shadow-sm ${
// // //                           task.source === "AI"
// // //                             ? "bg-purple-100 text-purple-700 border border-purple-300"
// // //                             : "bg-blue-100 text-blue-700 border border-blue-300"
// // //                         }`}
// // //                       >
// // //                         {task.source === "AI" ? "🧠 AI" : "✍️ Manual"}
// // //                       </span>
// // //                     </div>
// // //                     {task.description && (
// // //                       <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
// // //                         {task.description}
// // //                       </p>
// // //                     )}
// // //                     <p className="text-xs text-gray-400 mt-2">
// // //                       Status:{" "}
// // //                       <span className="font-medium capitalize text-gray-700">
// // //                         {task.status}
// // //                       </span>
// // //                     </p>
// // //                   </>
// // //                 )}

// // //                 <div className="flex gap-2 mt-3 justify-end">
// // //                   {editingTask === task._id ? (
// // //                     <>
// // //                       <button
// // //                         onClick={() => handleSaveEdit(task._id)}
// // //                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
// // //                       >
// // //                         💾 Save
// // //                       </button>
// // //                       <button
// // //                         onClick={handleCancelEdit}
// // //                         className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
// // //                       >
// // //                         ❌ Cancel
// // //                       </button>
// // //                     </>
// // //                   ) : (
// // //                     <>
// // //                       <select
// // //                         value={task.status}
// // //                         onChange={(e) =>
// // //                           handleStatusChange(task._id, e.target.value)
// // //                         }
// // //                         className="border rounded-md p-1 text-sm"
// // //                       >
// // //                         <option value="pending">Pending</option>
// // //                         <option value="in-progress">In Progress</option>
// // //                         <option value="completed">Completed</option>
// // //                       </select>
// // //                       <button
// // //                         onClick={() => handleEdit(task)}
// // //                         className="text-blue-600 hover:text-blue-800 text-sm"
// // //                       >
// // //                         ✏️ Edit
// // //                       </button>
// // //                       <button
// // //                         onClick={() => handleDelete(task._id)}
// // //                         className="text-red-500 hover:text-red-700 text-sm"
// // //                       >
// // //                         🗑 Delete
// // //                       </button>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;


// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import api from "../api/axios";
// // import toast from "react-hot-toast";

// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const [tasks, setTasks] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [reminderTime, setReminderTime] = useState("");
// //   const [statusFilter, setStatusFilter] = useState("all");
// //   const [loading, setLoading] = useState(false);
// //   const [editingTask, setEditingTask] = useState(null);
// //   const [editTitle, setEditTitle] = useState("");
// //   const [editDescription, setEditDescription] = useState("");
// //   const [aiLoading, setAiLoading] = useState(false);

// //   // ✅ Fetch tasks from server
// //   const fetchTasks = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await api.get("/tasks");
// //       setTasks(res.data);
// //     } catch {
// //       toast.error("Failed to load tasks");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   // ✅ Add new task manually
// //   const handleAddTask = async (e) => {
// //     e.preventDefault();
// //     if (!title.trim()) return toast.error("Task title required");
// //     try {
// //       await api.post("/tasks", {
// //         title,
// //         description,
// //         reminderTime: reminderTime ? new Date(reminderTime) : null,
// //         source: "Manual",
// //       });
// //       setTitle("");
// //       setDescription("");
// //       setReminderTime("");
// //       toast.success("Task added!");
// //       fetchTasks();
// //     } catch {
// //       toast.error("Error creating task");
// //     }
// //   };

// //   // ✅ Trigger Gemini AI “Plan My Day”
// //   const handleAIPlan = async () => {
// //     setAiLoading(true);
// //     try {
// //       const res = await api.post("/ai/plan", { text: "Plan my day" });
// //       toast.success("AI generated your daily plan 🧠");

// //       await api.post("/tasks", {
// //         title: "AI-Generated Day Plan",
// //         description: res.data.plan,
// //         source: "AI",
// //       });

// //       fetchTasks();
// //     } catch (err) {
// //       console.error("AI plan error →", err);
// //       toast.error(
// //         err.response?.data?.message || "AI failed to generate plan. Try again."
// //       );
// //     } finally {
// //       setAiLoading(false);
// //     }
// //   };

// //   // ✅ Update task status
// //   const handleStatusChange = async (id, newStatus) => {
// //     try {
// //       await api.put(`/tasks/${id}`, { status: newStatus });
// //       toast.success("Status updated");
// //       fetchTasks();
// //     } catch {
// //       toast.error("Failed to update status");
// //     }
// //   };

// //   // ✅ Edit & save changes
// //   const handleEdit = (task) => {
// //     setEditingTask(task._id);
// //     setEditTitle(task.title);
// //     setEditDescription(task.description);
// //   };

// //   const handleSaveEdit = async (id) => {
// //     if (!editTitle.trim()) return toast.error("Title required");
// //     try {
// //       await api.put(`/tasks/${id}`, {
// //         title: editTitle,
// //         description: editDescription,
// //       });
// //       toast.success("Task updated");
// //       setEditingTask(null);
// //       fetchTasks();
// //     } catch {
// //       toast.error("Error updating task");
// //     }
// //   };

// //   const handleCancelEdit = () => setEditingTask(null);

// //   // ✅ Delete a task
// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Delete this task?")) return;
// //     try {
// //       await api.delete(`/tasks/${id}`);
// //       toast.success("Task deleted");
// //       fetchTasks();
// //     } catch {
// //       toast.error("Error deleting task");
// //     }
// //   };

// //   // ✅ Set reminder for a specific task
// //   const handleSetReminder = async (id) => {
// //     const time = prompt("Enter reminder time (YYYY-MM-DD HH:mm):");
// //     if (!time) return;
// //     try {
// //       const reminderTime = new Date(time);
// //       await api.put(`/tasks/${id}/reminder`, { reminderTime });
// //       toast.success("Reminder set successfully!");
// //       fetchTasks();
// //     } catch (err) {
// //       toast.error("Failed to set reminder");
// //     }
// //   };

// //   // ✅ Logout user
// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   // ✅ Filter tasks by status
// //   const filteredTasks =
// //     statusFilter === "all"
// //       ? tasks
// //       : tasks.filter((t) => t.status === statusFilter);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-4">
// //       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-10">
// //           <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
// //             TaskIQ Dashboard 🚀
// //           </h1>
// //           <div className="flex gap-3">
// //             <button
// //               onClick={handleAIPlan}
// //               disabled={aiLoading}
// //               className={`${
// //                 aiLoading
// //                   ? "bg-purple-300 cursor-not-allowed"
// //                   : "bg-purple-600 hover:bg-purple-700"
// //               } text-white px-4 py-2 rounded-lg shadow-md transition`}
// //             >
// //               {aiLoading ? "Thinking 🤔..." : "🧠 Plan My Day"}
// //             </button>

// //             <button
// //               onClick={handleLogout}
// //               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         </div>

// //         {/* Add Task Form */}
// //         <form
// //           onSubmit={handleAddTask}
// //           className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner"
// //         >
// //           <h2 className="text-lg font-semibold text-blue-700 mb-3">
// //             ✏️ Add a New Task
// //           </h2>
// //           <input
// //             type="text"
// //             placeholder="Task title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //           <textarea
// //             placeholder="Description (optional)"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           ></textarea>

// //           {/* New Reminder input */}
// //           <label className="block text-sm text-gray-600 mb-1 font-medium">
// //             ⏰ Reminder Time (optional)
// //           </label>
// //           <input
// //             type="datetime-local"
// //             value={reminderTime}
// //             onChange={(e) => setReminderTime(e.target.value)}
// //             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />

// //           <button
// //             type="submit"
// //             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
// //           >
// //             ➕ Add Task
// //           </button>
// //         </form>

// //         {/* Status Filters */}
// //         <div className="flex justify-center gap-3 mb-6">
// //           {["all", "pending", "in-progress", "completed"].map((status) => (
// //             <button
// //               key={status}
// //               onClick={() => setStatusFilter(status)}
// //               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// //                 statusFilter === status
// //                   ? "bg-blue-600 text-white shadow-md"
// //                   : "bg-gray-200 text-gray-700 hover:bg-blue-100"
// //               }`}
// //             >
// //               {status.charAt(0).toUpperCase() + status.slice(1)}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Task List */}
// //         {loading ? (
// //           <p className="text-center text-gray-500 animate-pulse">
// //             Loading tasks...
// //           </p>
// //         ) : filteredTasks.length === 0 ? (
// //           <p className="text-center text-gray-500 italic">No tasks yet.</p>
// //         ) : (
// //           <ul className="space-y-4">
// //             {filteredTasks.map((task) => (
// //               <li
// //                 key={task._id}
// //                 className={`p-5 rounded-xl border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
// //                   task.status === "completed"
// //                     ? "border-green-500 bg-green-50"
// //                     : task.status === "in-progress"
// //                     ? "border-yellow-500 bg-yellow-50"
// //                     : "border-gray-400 bg-gray-50"
// //                 }`}
// //               >
// //                 {editingTask === task._id ? (
// //                   <div className="mb-3">
// //                     <input
// //                       type="text"
// //                       value={editTitle}
// //                       onChange={(e) => setEditTitle(e.target.value)}
// //                       className="w-full border rounded-md p-2 mb-2"
// //                     />
// //                     <textarea
// //                       value={editDescription}
// //                       onChange={(e) => setEditDescription(e.target.value)}
// //                       className="w-full border rounded-md p-2"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <>
// //                     <div className="flex justify-between items-start">
// //                       <h3 className="font-bold text-lg text-gray-900">
// //                         {task.title}
// //                       </h3>
// //                       <span
// //                         className={`text-xs font-semibold px-2 py-1 rounded-full shadow-sm ${
// //                           task.source === "AI"
// //                             ? "bg-purple-100 text-purple-700 border border-purple-300"
// //                             : "bg-blue-100 text-blue-700 border border-blue-300"
// //                         }`}
// //                       >
// //                         {task.source === "AI" ? "🧠 AI" : "✍️ Manual"}
// //                       </span>
// //                     </div>
// //                     {task.description && (
// //                       <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
// //                         {task.description}
// //                       </p>
// //                     )}
// //                     {/* Reminder Info */}
// //                     {task.reminderTime && (
// //                       <p className="text-xs text-gray-500 mt-1">
// //                         ⏰ Reminder set for:{" "}
// //                         <span className="font-medium text-gray-700">
// //                           {new Date(task.reminderTime).toLocaleString()}
// //                         </span>
// //                       </p>
// //                     )}
// //                     <p className="text-xs text-gray-400 mt-2">
// //                       Status:{" "}
// //                       <span className="font-medium capitalize text-gray-700">
// //                         {task.status}
// //                       </span>
// //                     </p>
// //                   </>
// //                 )}

// //                 <div className="flex gap-2 mt-3 justify-end flex-wrap">
// //                   {editingTask === task._id ? (
// //                     <>
// //                       <button
// //                         onClick={() => handleSaveEdit(task._id)}
// //                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
// //                       >
// //                         💾 Save
// //                       </button>
// //                       <button
// //                         onClick={handleCancelEdit}
// //                         className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
// //                       >
// //                         ❌ Cancel
// //                       </button>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <select
// //                         value={task.status}
// //                         onChange={(e) =>
// //                           handleStatusChange(task._id, e.target.value)
// //                         }
// //                         className="border rounded-md p-1 text-sm"
// //                       >
// //                         <option value="pending">Pending</option>
// //                         <option value="in-progress">In Progress</option>
// //                         <option value="completed">Completed</option>
// //                       </select>
// //                       <button
// //                         onClick={() => handleEdit(task)}
// //                         className="text-blue-600 hover:text-blue-800 text-sm"
// //                       >
// //                         ✏️ Edit
// //                       </button>
// //                       <button
// //                         onClick={() => handleSetReminder(task._id)}
// //                         className="text-orange-500 hover:text-orange-700 text-sm"
// //                       >
// //                         ⏰ Set Reminder
// //                       </button>
// //                       <button
// //                         onClick={() => handleDelete(task._id)}
// //                         className="text-red-500 hover:text-red-700 text-sm"
// //                       >
// //                         🗑 Delete
// //                       </button>
// //                     </>
// //                   )}
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import toast from "react-hot-toast";

// function Dashboard() {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [reminderTime, setReminderTime] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [loading, setLoading] = useState(false);
//   const [editingTask, setEditingTask] = useState(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");
//   const [aiLoading, setAiLoading] = useState(false);

//   // ✅ Fetch tasks from server
//   const fetchTasks = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/tasks");
//       setTasks(res.data);
//     } catch {
//       toast.error("Failed to load tasks");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   // ✅ 🔔 Check reminders periodically (every 1 min)
//   useEffect(() => {
//     const checkReminders = async () => {
//       try {
//         const res = await api.get("/tasks/check-reminders");
//         if (res.data?.reminders?.length > 0) {
//           res.data.reminders.forEach((task) => {
//             toast.success(`🔔 Reminder: ${task.title} is due now!`);
//           });
//         }
//       } catch (err) {
//         console.error("Reminder check failed:", err);
//       }
//     };

//     checkReminders();
//     const interval = setInterval(checkReminders, 60000); // check every minute
//     return () => clearInterval(interval);
//   }, []);

//   // ✅ Add new task manually
//   const handleAddTask = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) return toast.error("Task title required");
//     try {
//       await api.post("/tasks", {
//         title,
//         description,
//         reminderTime: reminderTime ? new Date(reminderTime) : null,
//         source: "Manual",
//       });
//       setTitle("");
//       setDescription("");
//       setReminderTime("");
//       toast.success("Task added!");
//       fetchTasks();
//     } catch {
//       toast.error("Error creating task");
//     }
//   };

//   // ✅ Trigger Gemini AI “Plan My Day”
//   const handleAIPlan = async () => {
//     setAiLoading(true);
//     try {
//       const res = await api.post("/ai/plan", { text: "Plan my day" });
//       toast.success("AI generated your daily plan 🧠");

//       await api.post("/tasks", {
//         title: "AI-Generated Day Plan",
//         description: res.data.plan,
//         source: "AI",
//       });

//       fetchTasks();
//     } catch (err) {
//       console.error("AI plan error →", err);
//       toast.error(
//         err.response?.data?.message || "AI failed to generate plan. Try again."
//       );
//     } finally {
//       setAiLoading(false);
//     }
//   };

//   // ✅ Update task status
//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await api.put(`/tasks/${id}`, { status: newStatus });
//       toast.success("Status updated");
//       fetchTasks();
//     } catch {
//       toast.error("Failed to update status");
//     }
//   };

//   // ✅ Edit & save changes
//   const handleEdit = (task) => {
//     setEditingTask(task._id);
//     setEditTitle(task.title);
//     setEditDescription(task.description);
//   };

//   const handleSaveEdit = async (id) => {
//     if (!editTitle.trim()) return toast.error("Title required");
//     try {
//       await api.put(`/tasks/${id}`, {
//         title: editTitle,
//         description: editDescription,
//       });
//       toast.success("Task updated");
//       setEditingTask(null);
//       fetchTasks();
//     } catch {
//       toast.error("Error updating task");
//     }
//   };

//   const handleCancelEdit = () => setEditingTask(null);

//   // ✅ Delete a task
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this task?")) return;
//     try {
//       await api.delete(`/tasks/${id}`);
//       toast.success("Task deleted");
//       fetchTasks();
//     } catch {
//       toast.error("Error deleting task");
//     }
//   };

//   // ✅ Set reminder for a specific task
//   const handleSetReminder = async (id) => {
//     const time = prompt("Enter reminder time (YYYY-MM-DD HH:mm):");
//     if (!time) return;
//     try {
//       const reminderTime = new Date(time);
//       await api.put(`/tasks/${id}/reminder`, { reminderTime });
//       toast.success("Reminder set successfully!");
//       fetchTasks();
//     } catch (err) {
//       toast.error("Failed to set reminder");
//     }
//   };

//   // ✅ Logout user
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   // ✅ Filter tasks by status
//   const filteredTasks =
//     statusFilter === "all"
//       ? tasks
//       : tasks.filter((t) => t.status === statusFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
//             TaskIQ Dashboard 🚀
//           </h1>
//           <div className="flex gap-3">
//             <button
//               onClick={handleAIPlan}
//               disabled={aiLoading}
//               className={`${
//                 aiLoading
//                   ? "bg-purple-300 cursor-not-allowed"
//                   : "bg-purple-600 hover:bg-purple-700"
//               } text-white px-4 py-2 rounded-lg shadow-md transition`}
//             >
//               {aiLoading ? "Thinking 🤔..." : "🧠 Plan My Day"}
//             </button>

//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* Add Task Form */}
//         <form
//           onSubmit={handleAddTask}
//           className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner"
//         >
//           <h2 className="text-lg font-semibold text-blue-700 mb-3">
//             ✏️ Add a New Task
//           </h2>
//           <input
//             type="text"
//             placeholder="Task title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             placeholder="Description (optional)"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>

//           <label className="block text-sm text-gray-600 mb-1 font-medium">
//             ⏰ Reminder Time (optional)
//           </label>
//           <input
//             type="datetime-local"
//             value={reminderTime}
//             onChange={(e) => setReminderTime(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
//           >
//             ➕ Add Task
//           </button>
//         </form>

//         {/* Status Filters */}
//         <div className="flex justify-center gap-3 mb-6">
//           {["all", "pending", "in-progress", "completed"].map((status) => (
//             <button
//               key={status}
//               onClick={() => setStatusFilter(status)}
//               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 statusFilter === status
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-gray-200 text-gray-700 hover:bg-blue-100"
//               }`}
//             >
//               {status.charAt(0).toUpperCase() + status.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Task List */}
//         {loading ? (
//           <p className="text-center text-gray-500 animate-pulse">
//             Loading tasks...
//           </p>
//         ) : filteredTasks.length === 0 ? (
//           <p className="text-center text-gray-500 italic">No tasks yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {filteredTasks.map((task) => (
//               <li
//                 key={task._id}
//                 className={`p-5 rounded-xl border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
//                   task.status === "completed"
//                     ? "border-green-500 bg-green-50"
//                     : task.status === "in-progress"
//                     ? "border-yellow-500 bg-yellow-50"
//                     : "border-gray-400 bg-gray-50"
//                 }`}
//               >
//                 {editingTask === task._id ? (
//                   <div className="mb-3">
//                     <input
//                       type="text"
//                       value={editTitle}
//                       onChange={(e) => setEditTitle(e.target.value)}
//                       className="w-full border rounded-md p-2 mb-2"
//                     />
//                     <textarea
//                       value={editDescription}
//                       onChange={(e) => setEditDescription(e.target.value)}
//                       className="w-full border rounded-md p-2"
//                     />
//                   </div>
//                 ) : (
//                   <>
//                     <div className="flex justify-between items-start">
//                       <h3 className="font-bold text-lg text-gray-900">
//                         {task.title}
//                       </h3>
//                       <span
//                         className={`text-xs font-semibold px-2 py-1 rounded-full shadow-sm ${
//                           task.source === "AI"
//                             ? "bg-purple-100 text-purple-700 border border-purple-300"
//                             : "bg-blue-100 text-blue-700 border border-blue-300"
//                         }`}
//                       >
//                         {task.source === "AI" ? "🧠 AI" : "✍️ Manual"}
//                       </span>
//                     </div>
//                     {task.description && (
//                       <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
//                         {task.description}
//                       </p>
//                     )}
//                     {task.reminderTime && (
//                       <p className="text-xs text-gray-500 mt-1">
//                         ⏰ Reminder set for:{" "}
//                         <span className="font-medium text-gray-700">
//                           {new Date(task.reminderTime).toLocaleString()}
//                         </span>
//                       </p>
//                     )}
//                     <p className="text-xs text-gray-400 mt-2">
//                       Status:{" "}
//                       <span className="font-medium capitalize text-gray-700">
//                         {task.status}
//                       </span>
//                     </p>
//                   </>
//                 )}

//                 <div className="flex gap-2 mt-3 justify-end flex-wrap">
//                   {editingTask === task._id ? (
//                     <>
//                       <button
//                         onClick={() => handleSaveEdit(task._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
//                       >
//                         💾 Save
//                       </button>
//                       <button
//                         onClick={handleCancelEdit}
//                         className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
//                       >
//                         ❌ Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <select
//                         value={task.status}
//                         onChange={(e) =>
//                           handleStatusChange(task._id, e.target.value)
//                         }
//                         className="border rounded-md p-1 text-sm"
//                       >
//                         <option value="pending">Pending</option>
//                         <option value="in-progress">In Progress</option>
//                         <option value="completed">Completed</option>
//                       </select>
//                       <button
//                         onClick={() => handleEdit(task)}
//                         className="text-blue-600 hover:text-blue-800 text-sm"
//                       >
//                         ✏️ Edit
//                       </button>
//                       <button
//                         onClick={() => handleSetReminder(task._id)}
//                         className="text-orange-500 hover:text-orange-700 text-sm"
//                       >
//                         ⏰ Set Reminder
//                       </button>
//                       <button
//                         onClick={() => handleDelete(task._id)}
//                         className="text-red-500 hover:text-red-700 text-sm"
//                       >
//                         🗑 Delete
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// client/src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  // ✅ Fetch all tasks
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ✅ 🔔 Check reminders periodically (every 1 min)
  useEffect(() => {
    const checkReminders = async () => {
      try {
        const res = await api.get("/tasks/check-reminders");
        if (res.data?.reminders?.length > 0) {
          res.data.reminders.forEach((task) => {
            toast.success(`⏰ Reminder: "${task.title}" is due now!`);
            const audio = new Audio("/sounds/reminder-due.mp3");
            audio.play().catch(() => console.log("🔇 Notification sound blocked"));
          });
        }
      } catch (err) {
        console.error("Reminder check failed:", err);
      }
    };

    checkReminders();
    const interval = setInterval(checkReminders, 60000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Add new task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return toast.error("Task title required");
    try {
      await api.post("/tasks", {
        title,
        description,
        reminderTime: reminderTime ? new Date(reminderTime) : null,
        source: "Manual",
      });
      setTitle("");
      setDescription("");
      setReminderTime("");
      toast.success("Task added!");
      fetchTasks();
    } catch {
      toast.error("Error creating task");
    }
  };

  // ✅ AI plan
  const handleAIPlan = async () => {
    setAiLoading(true);
    try {
      const res = await api.post("/ai/plan", { text: "Plan my day" });
      toast.success("AI generated your daily plan 🧠");

      await api.post("/tasks", {
        title: "AI-Generated Day Plan",
        description: res.data.plan,
        source: "AI",
      });

      fetchTasks();
    } catch (err) {
      console.error("AI plan error →", err);
      toast.error(
        err.response?.data?.message || "AI failed to generate plan. Try again."
      );
    } finally {
      setAiLoading(false);
    }
  };

  // ✅ Update status
  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/tasks/${id}`, { status: newStatus });
      toast.success("Status updated");
      fetchTasks();
    } catch {
      toast.error("Failed to update status");
    }
  };

  // ✅ Edit task
  const handleEdit = (task) => {
    setEditingTask(task._id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const handleSaveEdit = async (id) => {
    if (!editTitle.trim()) return toast.error("Title required");
    try {
      await api.put(`/tasks/${id}`, {
        title: editTitle,
        description: editDescription,
      });
      toast.success("Task updated");
      setEditingTask(null);
      fetchTasks();
    } catch {
      toast.error("Error updating task");
    }
  };

  const handleCancelEdit = () => setEditingTask(null);

  // ✅ Delete task
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      toast.success("Task deleted");
      fetchTasks();
    } catch {
      toast.error("Error deleting task");
    }
  };

  // ✅ Set reminder (toast + sound)
  const handleSetReminder = async (id) => {
    const time = prompt("Enter reminder time (YYYY-MM-DD HH:mm):");
    if (!time) return;
    try {
      const reminderTime = new Date(time);
      await api.put(`/tasks/${id}/reminder`, { reminderTime });
      toast.success("⏰ Reminder set successfully!");
      const audio = new Audio("/sounds/reminder-set.mp3");
      audio.play().catch(() => console.log("🔇 Reminder sound blocked"));
      fetchTasks();
    } catch (err) {
      toast.error("Failed to set reminder");
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ✅ Filter tasks
  const filteredTasks =
    statusFilter === "all"
      ? tasks
      : tasks.filter((t) => t.status === statusFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-blue-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
            TaskIQ Dashboard 🚀
          </h1>
          <div className="flex gap-3">
            <button
              onClick={handleAIPlan}
              disabled={aiLoading}
              className={`${
                aiLoading
                  ? "bg-purple-300 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              } text-white px-4 py-2 rounded-lg shadow-md transition`}
            >
              {aiLoading ? "Thinking 🤔..." : "🧠 Plan My Day"}
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Add Task Form */}
        <form
          onSubmit={handleAddTask}
          className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-5 shadow-inner"
        >
          <h2 className="text-lg font-semibold text-blue-700 mb-3">
            ✏️ Add a New Task
          </h2>
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <label className="block text-sm text-gray-600 mb-1 font-medium">
            ⏰ Reminder Time (optional)
          </label>
          <input
            type="datetime-local"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
          >
            ➕ Add Task
          </button>
        </form>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-6">
          {["all", "pending", "in-progress", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                statusFilter === status
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Tasks */}
        {loading ? (
          <p className="text-center text-gray-500 animate-pulse">
            Loading tasks...
          </p>
        ) : filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500 italic">No tasks yet.</p>
        ) : (
          <ul className="space-y-4">
            {filteredTasks.map((task) => (
              <li
                key={task._id}
                className={`p-5 rounded-xl border-l-4 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
                  task.status === "completed"
                    ? "border-green-500 bg-green-50"
                    : task.status === "in-progress"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-400 bg-gray-50"
                }`}
              >
                {editingTask === task._id ? (
                  <div className="mb-3">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full border rounded-md p-2 mb-2"
                    />
                    <textarea
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-gray-900">
                        {task.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full shadow-sm ${
                          task.source === "AI"
                            ? "bg-purple-100 text-purple-700 border border-purple-300"
                            : "bg-blue-100 text-blue-700 border border-blue-300"
                        }`}
                      >
                        {task.source === "AI" ? "🧠 AI" : "✍️ Manual"}
                      </span>
                    </div>
                    {task.description && (
                      <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                        {task.description}
                      </p>
                    )}
                    {task.reminderTime && (
                      <p className="text-xs text-gray-500 mt-1">
                        ⏰ Reminder set for:{" "}
                        <span className="font-medium text-gray-700">
                          {new Date(task.reminderTime).toLocaleString()}
                        </span>
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      Status:{" "}
                      <span className="font-medium capitalize text-gray-700">
                        {task.status}
                      </span>
                    </p>
                  </>
                )}

                <div className="flex gap-2 mt-3 justify-end flex-wrap">
                  {editingTask === task._id ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(task._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-sm shadow"
                      >
                        💾 Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400 text-sm shadow"
                      >
                        ❌ Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <select
                        value={task.status}
                        onChange={(e) =>
                          handleStatusChange(task._id, e.target.value)
                        }
                        className="border rounded-md p-1 text-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button
                        onClick={() => handleEdit(task)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleSetReminder(task._id)}
                        className="text-orange-500 hover:text-orange-700 text-sm"
                      >
                        ⏰ Set Reminder
                      </button>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        🗑 Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
