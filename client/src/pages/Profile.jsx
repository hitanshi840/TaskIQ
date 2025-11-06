// // // // // // // // // // src/pages/Profile.jsx
// // // // // // // // // import React from "react";
// // // // // // // // // import {
// // // // // // // // //   PieChart,
// // // // // // // // //   Pie,
// // // // // // // // //   Cell,
// // // // // // // // //   BarChart,
// // // // // // // // //   Bar,
// // // // // // // // //   XAxis,
// // // // // // // // //   YAxis,
// // // // // // // // //   Tooltip,
// // // // // // // // //   ResponsiveContainer,
// // // // // // // // //   Legend,
// // // // // // // // // } from "recharts";

// // // // // // // // // const taskData = [
// // // // // // // // //   { name: "Completed", value: 45 },
// // // // // // // // //   { name: "Pending", value: 25 },
// // // // // // // // //   { name: "In Progress", value: 30 },
// // // // // // // // // ];

// // // // // // // // // const COLORS = ["#4ade80", "#f87171", "#60a5fa"]; // green, red, blue

// // // // // // // // // const barData = [
// // // // // // // // //   { day: "Mon", tasks: 5 },
// // // // // // // // //   { day: "Tue", tasks: 8 },
// // // // // // // // //   { day: "Wed", tasks: 6 },
// // // // // // // // //   { day: "Thu", tasks: 9 },
// // // // // // // // //   { day: "Fri", tasks: 4 },
// // // // // // // // //   { day: "Sat", tasks: 7 },
// // // // // // // // //   { day: "Sun", tasks: 3 },
// // // // // // // // // ];

// // // // // // // // // const Profile = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // // // // //       {/* Header */}
// // // // // // // // //       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 mb-6">
// // // // // // // // //         <h1 className="text-3xl font-semibold text-gray-800 mb-2">
// // // // // // // // //           👋 Welcome Back, User!
// // // // // // // // //         </h1>
// // // // // // // // //         <p className="text-gray-500">
// // // // // // // // //           Here’s an overview of your task performance and weekly progress.
// // // // // // // // //         </p>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Charts Section */}
// // // // // // // // //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // // //         {/* Pie Chart - Task Status */}
// // // // // // // // //         <div className="bg-white shadow-lg rounded-2xl p-6">
// // // // // // // // //           <h2 className="text-xl font-semibold mb-4 text-gray-700">
// // // // // // // // //             Task Completion Status
// // // // // // // // //           </h2>
// // // // // // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // // // // // //             <PieChart>
// // // // // // // // //               <Pie
// // // // // // // // //                 data={taskData}
// // // // // // // // //                 cx="50%"
// // // // // // // // //                 cy="50%"
// // // // // // // // //                 outerRadius={100}
// // // // // // // // //                 dataKey="value"
// // // // // // // // //                 label
// // // // // // // // //               >
// // // // // // // // //                 {taskData.map((entry, index) => (
// // // // // // // // //                   <Cell key={`cell-${index}`} fill={COLORS[index]} />
// // // // // // // // //                 ))}
// // // // // // // // //               </Pie>
// // // // // // // // //               <Tooltip />
// // // // // // // // //               <Legend />
// // // // // // // // //             </PieChart>
// // // // // // // // //           </ResponsiveContainer>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Bar Chart - Weekly Productivity */}
// // // // // // // // //         <div className="bg-white shadow-lg rounded-2xl p-6">
// // // // // // // // //           <h2 className="text-xl font-semibold mb-4 text-gray-700">
// // // // // // // // //             Weekly Productivity
// // // // // // // // //           </h2>
// // // // // // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // // // // // //             <BarChart data={barData}>
// // // // // // // // //               <XAxis dataKey="day" />
// // // // // // // // //               <YAxis />
// // // // // // // // //               <Tooltip />
// // // // // // // // //               <Legend />
// // // // // // // // //               <Bar dataKey="tasks" fill="#60a5fa" radius={[8, 8, 0, 0]} />
// // // // // // // // //             </BarChart>
// // // // // // // // //           </ResponsiveContainer>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Profile;

// // // // // // // // // src/pages/Profile.jsx
// // // // // // // // import {
// // // // // // // //     LineChart,
// // // // // // // //     Line,
// // // // // // // //     PieChart,
// // // // // // // //     Pie,
// // // // // // // //     Cell,
// // // // // // // //     XAxis,
// // // // // // // //     YAxis,
// // // // // // // //     Tooltip,
// // // // // // // //     Legend,
// // // // // // // //   } from "recharts";
// // // // // // // //   import ChartCard from "../components/ChartCard";
  
// // // // // // // //   const dataLine = [
// // // // // // // //     { day: "Mon", completed: 5, pending: 3 },
// // // // // // // //     { day: "Tue", completed: 7, pending: 2 },
// // // // // // // //     { day: "Wed", completed: 4, pending: 5 },
// // // // // // // //     { day: "Thu", completed: 6, pending: 3 },
// // // // // // // //     { day: "Fri", completed: 8, pending: 1 },
// // // // // // // //   ];
  
// // // // // // // //   const pieData = [
// // // // // // // //     { name: "Completed", value: 30 },
// // // // // // // //     { name: "Pending", value: 10 },
// // // // // // // //   ];
  
// // // // // // // //   const COLORS = ["#22c55e", "#f87171"];
  
// // // // // // // //   export default function Profile() {
// // // // // // // //     return (
// // // // // // // //       <div className="min-h-screen bg-gray-50 p-6">
// // // // // // // //         <h1 className="text-2xl font-bold mb-6 text-gray-800">
// // // // // // // //           📊 Productivity Analytics
// // // // // // // //         </h1>
  
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // //           <ChartCard title="Weekly Task Trend">
// // // // // // // //             <LineChart data={dataLine}>
// // // // // // // //               <XAxis dataKey="day" />
// // // // // // // //               <YAxis />
// // // // // // // //               <Tooltip />
// // // // // // // //               <Legend />
// // // // // // // //               <Line
// // // // // // // //                 type="monotone"
// // // // // // // //                 dataKey="completed"
// // // // // // // //                 stroke="#22c55e"
// // // // // // // //                 strokeWidth={2}
// // // // // // // //               />
// // // // // // // //               <Line
// // // // // // // //                 type="monotone"
// // // // // // // //                 dataKey="pending"
// // // // // // // //                 stroke="#f87171"
// // // // // // // //                 strokeWidth={2}
// // // // // // // //               />
// // // // // // // //             </LineChart>
// // // // // // // //           </ChartCard>
  
// // // // // // // //           <ChartCard title="Task Distribution">
// // // // // // // //             <PieChart>
// // // // // // // //               <Pie
// // // // // // // //                 data={pieData}
// // // // // // // //                 dataKey="value"
// // // // // // // //                 nameKey="name"
// // // // // // // //                 outerRadius={100}
// // // // // // // //                 label
// // // // // // // //               >
// // // // // // // //                 {pieData.map((entry, index) => (
// // // // // // // //                   <Cell
// // // // // // // //                     key={`cell-${index}`}
// // // // // // // //                     fill={COLORS[index % COLORS.length]}
// // // // // // // //                   />
// // // // // // // //                 ))}
// // // // // // // //               </Pie>
// // // // // // // //               <Tooltip />
// // // // // // // //               <Legend />
// // // // // // // //             </PieChart>
// // // // // // // //           </ChartCard>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }
  


// // // // // // // // src/pages/Profile.jsx
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import {
// // // // // // // //   LineChart,
// // // // // // // //   Line,
// // // // // // // //   PieChart,
// // // // // // // //   Pie,
// // // // // // // //   Cell,
// // // // // // // //   XAxis,
// // // // // // // //   YAxis,
// // // // // // // //   Tooltip,
// // // // // // // //   Legend,
// // // // // // // // } from "recharts";
// // // // // // // // import ChartCard from "../components/ChartCard";
// // // // // // // // import api from "../api/axios";
// // // // // // // // import toast from "react-hot-toast";

// // // // // // // // const COLORS = ["#22c55e", "#f87171", "#facc15"];

// // // // // // // // export default function Profile() {
// // // // // // // //   const [tasks, setTasks] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   // 🔹 Fetch tasks from backend
// // // // // // // //   const fetchTasks = async () => {
// // // // // // // //     try {
// // // // // // // //       const res = await api.get("/tasks");
// // // // // // // //       setTasks(res.data);
// // // // // // // //     } catch (error) {
// // // // // // // //       toast.error("Failed to load tasks for analytics");
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchTasks();
// // // // // // // //   }, []);

// // // // // // // //   // 🔹 Calculate analytics data
// // // // // // // //   const total = tasks.length;
// // // // // // // //   const completed = tasks.filter((t) => t.status === "completed").length;
// // // // // // // //   const pending = tasks.filter((t) => t.status === "pending").length;
// // // // // // // //   const inProgress = tasks.filter((t) => t.status === "in-progress").length;

// // // // // // // //   // 🔹 Pie chart data (Task Distribution)
// // // // // // // //   const pieData = [
// // // // // // // //     { name: "Completed", value: completed },
// // // // // // // //     { name: "In Progress", value: inProgress },
// // // // // // // //     { name: "Pending", value: pending },
// // // // // // // //   ];

// // // // // // // //   // 🔹 Line chart data (Daily Trend)
// // // // // // // //   // This assumes tasks have a `createdAt` field in ISO format
// // // // // // // //   const groupedByDay = tasks.reduce((acc, task) => {
// // // // // // // //     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
// // // // // // // //       weekday: "short",
// // // // // // // //     });
// // // // // // // //     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
// // // // // // // //     acc[day][task.status] += 1;
// // // // // // // //     return acc;
// // // // // // // //   }, {});

// // // // // // // //   const lineData = Object.values(groupedByDay);

  
// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // // // //       <h1 className="text-2xl font-bold mb-6 text-gray-800">
// // // // // // // //         📊 Productivity Analytics
// // // // // // // //       </h1>

// // // // // // // //       {loading ? (
// // // // // // // //         <p className="text-center text-gray-500">Loading analytics...</p>
// // // // // // // //       ) : total === 0 ? (
// // // // // // // //         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
// // // // // // // //       ) : (
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // //           <ChartCard title="Weekly Task Trend">
// // // // // // // //             <LineChart data={lineData}>
// // // // // // // //               <XAxis dataKey="day" />
// // // // // // // //               <YAxis />
// // // // // // // //               <Tooltip />
// // // // // // // //               <Legend />
// // // // // // // //               <Line
// // // // // // // //                 type="monotone"
// // // // // // // //                 dataKey="completed"
// // // // // // // //                 stroke="#22c55e"
// // // // // // // //                 strokeWidth={2}
// // // // // // // //               />
// // // // // // // //               <Line
// // // // // // // //                 type="monotone"
// // // // // // // //                 dataKey="in-progress"
// // // // // // // //                 stroke="#facc15"
// // // // // // // //                 strokeWidth={2}
// // // // // // // //               />
// // // // // // // //               <Line
// // // // // // // //                 type="monotone"
// // // // // // // //                 dataKey="pending"
// // // // // // // //                 stroke="#f87171"
// // // // // // // //                 strokeWidth={2}
// // // // // // // //               />
// // // // // // // //             </LineChart>
// // // // // // // //           </ChartCard>

// // // // // // // //           <ChartCard title="Task Distribution">
// // // // // // // //             <PieChart>
// // // // // // // //               <Pie
// // // // // // // //                 data={pieData}
// // // // // // // //                 dataKey="value"
// // // // // // // //                 nameKey="name"
// // // // // // // //                 outerRadius={100}
// // // // // // // //                 label
// // // // // // // //               >
// // // // // // // //                 {pieData.map((entry, index) => (
// // // // // // // //                   <Cell
// // // // // // // //                     key={`cell-${index}`}
// // // // // // // //                     fill={COLORS[index % COLORS.length]}
// // // // // // // //                   />
// // // // // // // //                 ))}
// // // // // // // //               </Pie>
// // // // // // // //               <Tooltip />
// // // // // // // //               <Legend />
// // // // // // // //             </PieChart>
// // // // // // // //           </ChartCard>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import {
// // // // // // //   LineChart,
// // // // // // //   Line,
// // // // // // //   PieChart,
// // // // // // //   Pie,
// // // // // // //   Cell,
// // // // // // //   XAxis,
// // // // // // //   YAxis,
// // // // // // //   Tooltip,
// // // // // // //   Legend,
// // // // // // // } from "recharts";
// // // // // // // import ChartCard from "../components/ChartCard";
// // // // // // // import api from "../api/axios";
// // // // // // // import toast from "react-hot-toast";

// // // // // // // const COLORS = ["#22c55e", "#f87171", "#facc15"];

// // // // // // // export default function Profile() {
// // // // // // //   const [tasks, setTasks] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   // 🔹 Fetch tasks from backend
// // // // // // //   const fetchTasks = async () => {
// // // // // // //     try {
// // // // // // //       const res = await api.get("/tasks");
// // // // // // //       setTasks(res.data);
// // // // // // //     } catch (error) {
// // // // // // //       toast.error("Failed to load tasks for analytics");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     fetchTasks();
// // // // // // //   }, []);

// // // // // // //   // 🔹 Calculate analytics data
// // // // // // //   const total = tasks.length;
// // // // // // //   const completed = tasks.filter((t) => t.status === "completed").length;
// // // // // // //   const pending = tasks.filter((t) => t.status === "pending").length;
// // // // // // //   const inProgress = tasks.filter((t) => t.status === "in-progress").length;

// // // // // // //   // 🔹 Compute Stats Summary
// // // // // // //   const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

// // // // // // //   // 🔹 Pie chart data (Task Distribution)
// // // // // // //   const pieData = [
// // // // // // //     { name: "Completed", value: completed },
// // // // // // //     { name: "In Progress", value: inProgress },
// // // // // // //     { name: "Pending", value: pending },
// // // // // // //   ];

// // // // // // //   // 🔹 Line chart data (Daily Trend)
// // // // // // //   const groupedByDay = tasks.reduce((acc, task) => {
// // // // // // //     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
// // // // // // //       weekday: "short",
// // // // // // //     });
// // // // // // //     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
// // // // // // //     acc[day][task.status] += 1;
// // // // // // //     return acc;
// // // // // // //   }, {});

// // // // // // //   const lineData = Object.values(groupedByDay);

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // // //       <h1 className="text-2xl font-bold mb-6 text-gray-800">
// // // // // // //         📊 Productivity Analytics
// // // // // // //       </h1>

// // // // // // //       {loading ? (
// // // // // // //         <p className="text-center text-gray-500">Loading analytics...</p>
// // // // // // //       ) : total === 0 ? (
// // // // // // //         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
// // // // // // //       ) : (
// // // // // // //         <>
// // // // // // //           {/* 📈 Stats Summary Section */}
// // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
// // // // // // //             {/* Total Tasks */}
// // // // // // //             <div className="bg-white shadow-md rounded-2xl p-5 text-center">
// // // // // // //               <p className="text-gray-500 text-sm">Total Tasks</p>
// // // // // // //               <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
// // // // // // //             </div>

// // // // // // //             {/* Completion Rate */}
// // // // // // //             <div className="bg-white shadow-md rounded-2xl p-5 text-center">
// // // // // // //               <p className="text-gray-500 text-sm">Completion Rate</p>
// // // // // // //               <h2 className="text-2xl font-bold text-green-500">
// // // // // // //                 {completionRate}%
// // // // // // //               </h2>
// // // // // // //             </div>

// // // // // // //             {/* Average Progress Bar */}
// // // // // // //             <div className="bg-white shadow-md rounded-2xl p-5">
// // // // // // //               <p className="text-gray-500 text-sm text-center mb-2">
// // // // // // //                 Average Progress
// // // // // // //               </p>
// // // // // // //               <div className="w-full bg-gray-200 rounded-full h-3">
// // // // // // //                 <div
// // // // // // //                   className="bg-blue-500 h-3 rounded-full transition-all duration-500"
// // // // // // //                   style={{ width: `${completionRate}%` }}
// // // // // // //                 ></div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* 📉 Charts Section */}
// // // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // //             <ChartCard title="Weekly Task Trend">
// // // // // // //               <LineChart data={lineData}>
// // // // // // //                 <XAxis dataKey="day" />
// // // // // // //                 <YAxis />
// // // // // // //                 <Tooltip />
// // // // // // //                 <Legend />
// // // // // // //                 <Line
// // // // // // //                   type="monotone"
// // // // // // //                   dataKey="completed"
// // // // // // //                   stroke="#22c55e"
// // // // // // //                   strokeWidth={2}
// // // // // // //                 />
// // // // // // //                 <Line
// // // // // // //                   type="monotone"
// // // // // // //                   dataKey="in-progress"
// // // // // // //                   stroke="#facc15"
// // // // // // //                   strokeWidth={2}
// // // // // // //                 />
// // // // // // //                 <Line
// // // // // // //                   type="monotone"
// // // // // // //                   dataKey="pending"
// // // // // // //                   stroke="#f87171"
// // // // // // //                   strokeWidth={2}
// // // // // // //                 />
// // // // // // //               </LineChart>
// // // // // // //             </ChartCard>

// // // // // // //             <ChartCard title="Task Distribution">
// // // // // // //               <PieChart>
// // // // // // //                 <Pie
// // // // // // //                   data={pieData}
// // // // // // //                   dataKey="value"
// // // // // // //                   nameKey="name"
// // // // // // //                   outerRadius={100}
// // // // // // //                   label
// // // // // // //                 >
// // // // // // //                   {pieData.map((entry, index) => (
// // // // // // //                     <Cell
// // // // // // //                       key={`cell-${index}`}
// // // // // // //                       fill={COLORS[index % COLORS.length]}
// // // // // // //                     />
// // // // // // //                   ))}
// // // // // // //                 </Pie>
// // // // // // //                 <Tooltip />
// // // // // // //                 <Legend />
// // // // // // //               </PieChart>
// // // // // // //             </ChartCard>
// // // // // // //           </div>
// // // // // // //         </>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import { useEffect, useState } from "react";
// // // // // // import {
// // // // // //   LineChart,
// // // // // //   Line,
// // // // // //   PieChart,
// // // // // //   Pie,
// // // // // //   Cell,
// // // // // //   XAxis,
// // // // // //   YAxis,
// // // // // //   Tooltip,
// // // // // //   Legend,
// // // // // // } from "recharts";
// // // // // // import { ClipboardList, CheckCircle, BarChart2 } from "lucide-react";
// // // // // // import ChartCard from "../components/ChartCard";
// // // // // // import api from "../api/axios";
// // // // // // import toast from "react-hot-toast";

// // // // // // const COLORS = ["#22c55e", "#f87171", "#facc15"];

// // // // // // export default function Profile() {
// // // // // //   const [tasks, setTasks] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // 🔹 Fetch tasks from backend
// // // // // //   const fetchTasks = async () => {
// // // // // //     try {
// // // // // //       const res = await api.get("/tasks");
// // // // // //       setTasks(res.data);
// // // // // //     } catch (error) {
// // // // // //       toast.error("Failed to load tasks for analytics");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchTasks();
// // // // // //   }, []);

// // // // // //   // 🔹 Calculate analytics data
// // // // // //   const total = tasks.length;
// // // // // //   const completed = tasks.filter((t) => t.status === "completed").length;
// // // // // //   const pending = tasks.filter((t) => t.status === "pending").length;
// // // // // //   const inProgress = tasks.filter((t) => t.status === "in-progress").length;

// // // // // //   // 🔹 Compute Stats Summary
// // // // // //   const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

// // // // // //   // 🔹 Pie chart data
// // // // // //   const pieData = [
// // // // // //     { name: "Completed", value: completed },
// // // // // //     { name: "In Progress", value: inProgress },
// // // // // //     { name: "Pending", value: pending },
// // // // // //   ];

// // // // // //   // 🔹 Line chart data
// // // // // //   const groupedByDay = tasks.reduce((acc, task) => {
// // // // // //     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
// // // // // //       weekday: "short",
// // // // // //     });
// // // // // //     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
// // // // // //     acc[day][task.status] += 1;
// // // // // //     return acc;
// // // // // //   }, {});

// // // // // //   const lineData = Object.values(groupedByDay);

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // //       <h1 className="text-2xl font-bold mb-6 text-gray-800">
// // // // // //         📊 Productivity Analytics
// // // // // //       </h1>

// // // // // //       {loading ? (
// // // // // //         <p className="text-center text-gray-500">Loading analytics...</p>
// // // // // //       ) : total === 0 ? (
// // // // // //         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
// // // // // //       ) : (
// // // // // //         <>
// // // // // //           {/* 🌟 Stats Summary Section with Icons */}
// // // // // //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
// // // // // //             {/* Total Tasks */}
// // // // // //             <div className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between">
// // // // // //               <div>
// // // // // //                 <p className="text-gray-500 text-sm">Total Tasks</p>
// // // // // //                 <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
// // // // // //               </div>
// // // // // //               <ClipboardList className="w-10 h-10 text-indigo-500" />
// // // // // //             </div>

// // // // // //             {/* Completion Rate */}
// // // // // //             <div className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between">
// // // // // //               <div>
// // // // // //                 <p className="text-gray-500 text-sm">Completion Rate</p>
// // // // // //                 <h2 className="text-2xl font-bold text-green-500">
// // // // // //                   {completionRate}%
// // // // // //                 </h2>
// // // // // //               </div>
// // // // // //               <CheckCircle className="w-10 h-10 text-green-500" />
// // // // // //             </div>

// // // // // //             {/* Average Progress */}
// // // // // //             <div className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between">
// // // // // //               <div className="w-full">
// // // // // //                 <p className="text-gray-500 text-sm text-center mb-2">
// // // // // //                   Average Progress
// // // // // //                 </p>
// // // // // //                 <div className="w-full bg-gray-200 rounded-full h-3">
// // // // // //                   <div
// // // // // //                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
// // // // // //                     style={{ width: `${completionRate}%` }}
// // // // // //                   ></div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <BarChart2 className="w-10 h-10 text-blue-500 ml-4" />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* 📉 Charts Section */}
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //             <ChartCard title="Weekly Task Trend">
// // // // // //               <LineChart data={lineData}>
// // // // // //                 <XAxis dataKey="day" />
// // // // // //                 <YAxis />
// // // // // //                 <Tooltip />
// // // // // //                 <Legend />
// // // // // //                 <Line
// // // // // //                   type="monotone"
// // // // // //                   dataKey="completed"
// // // // // //                   stroke="#22c55e"
// // // // // //                   strokeWidth={2}
// // // // // //                 />
// // // // // //                 <Line
// // // // // //                   type="monotone"
// // // // // //                   dataKey="in-progress"
// // // // // //                   stroke="#facc15"
// // // // // //                   strokeWidth={2}
// // // // // //                 />
// // // // // //                 <Line
// // // // // //                   type="monotone"
// // // // // //                   dataKey="pending"
// // // // // //                   stroke="#f87171"
// // // // // //                   strokeWidth={2}
// // // // // //                 />
// // // // // //               </LineChart>
// // // // // //             </ChartCard>

// // // // // //             <ChartCard title="Task Distribution">
// // // // // //               <PieChart>
// // // // // //                 <Pie
// // // // // //                   data={pieData}
// // // // // //                   dataKey="value"
// // // // // //                   nameKey="name"
// // // // // //                   outerRadius={100}
// // // // // //                   label
// // // // // //                 >
// // // // // //                   {pieData.map((entry, index) => (
// // // // // //                     <Cell
// // // // // //                       key={`cell-${index}`}
// // // // // //                       fill={COLORS[index % COLORS.length]}
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                 </Pie>
// // // // // //                 <Tooltip />
// // // // // //                 <Legend />
// // // // // //               </PieChart>
// // // // // //             </ChartCard>
// // // // // //           </div>
// // // // // //         </>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // import { useEffect, useState } from "react";
// // // // // // import {
// // // // // //   LineChart,
// // // // // //   Line,
// // // // // //   PieChart,
// // // // // //   Pie,
// // // // // //   Cell,
// // // // // //   XAxis,
// // // // // //   YAxis,
// // // // // //   Tooltip,
// // // // // //   Legend,
// // // // // // } from "recharts";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { ClipboardList, CheckCircle, BarChart2 } from "lucide-react";
// // // // // // import ChartCard from "../components/ChartCard";
// // // // // // import api from "../api/axios";
// // // // // // import toast from "react-hot-toast";

// // // // // // const COLORS = ["#22c55e", "#f87171", "#facc15"];

// // // // // // export default function Profile() {
// // // // // //   const [tasks, setTasks] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // 🔹 Fetch tasks
// // // // // //   const fetchTasks = async () => {
// // // // // //     try {
// // // // // //       const res = await api.get("/tasks");
// // // // // //       setTasks(res.data);
// // // // // //     } catch {
// // // // // //       toast.error("Failed to load tasks for analytics");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchTasks();
// // // // // //   }, []);

// // // // // //   // 🔹 Stats
// // // // // //   const total = tasks.length;
// // // // // //   const completed = tasks.filter((t) => t.status === "completed").length;
// // // // // //   const pending = tasks.filter((t) => t.status === "pending").length;
// // // // // //   const inProgress = tasks.filter((t) => t.status === "in-progress").length;
// // // // // //   const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

// // // // // //   // 🔹 Pie chart data
// // // // // //   const pieData = [
// // // // // //     { name: "Completed", value: completed },
// // // // // //     { name: "In Progress", value: inProgress },
// // // // // //     { name: "Pending", value: pending },
// // // // // //   ];

// // // // // //   // 🔹 Line chart data
// // // // // //   const groupedByDay = tasks.reduce((acc, task) => {
// // // // // //     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
// // // // // //       weekday: "short",
// // // // // //     });
// // // // // //     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
// // // // // //     acc[day][task.status] += 1;
// // // // // //     return acc;
// // // // // //   }, {});
// // // // // //   const lineData = Object.values(groupedByDay);

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 p-6">
// // // // // //       <motion.h1
// // // // // //         className="text-3xl font-bold mb-6 text-gray-800 text-center"
// // // // // //         initial={{ opacity: 0, y: -20 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ duration: 0.6 }}
// // // // // //       >
// // // // // //         📊 Productivity Analytics
// // // // // //       </motion.h1>

// // // // // //       {loading ? (
// // // // // //         <p className="text-center text-gray-500">Loading analytics...</p>
// // // // // //       ) : total === 0 ? (
// // // // // //         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
// // // // // //       ) : (
// // // // // //         <>
// // // // // //           {/* 🌟 Stats Summary */}
// // // // // //           <motion.div
// // // // // //             className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
// // // // // //             initial="hidden"
// // // // // //             animate="visible"
// // // // // //             variants={{
// // // // // //               hidden: { opacity: 0, y: 30 },
// // // // // //               visible: {
// // // // // //                 opacity: 1,
// // // // // //                 y: 0,
// // // // // //                 transition: { staggerChildren: 0.2, duration: 0.8 },
// // // // // //               },
// // // // // //             }}
// // // // // //           >
// // // // // //             {/* Total Tasks */}
// // // // // //             <motion.div
// // // // // //               className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // // // // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // // // // //             >
// // // // // //               <div>
// // // // // //                 <p className="text-gray-500 text-sm">Total Tasks</p>
// // // // // //                 <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
// // // // // //               </div>
// // // // // //               <ClipboardList className="w-10 h-10 text-indigo-500" />
// // // // // //             </motion.div>

// // // // // //             {/* Completion Rate */}
// // // // // //             <motion.div
// // // // // //               className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // // // // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // // // // //             >
// // // // // //               <div>
// // // // // //                 <p className="text-gray-500 text-sm">Completion Rate</p>
// // // // // //                 <h2 className="text-2xl font-bold text-green-500">{completionRate}%</h2>
// // // // // //               </div>
// // // // // //               <CheckCircle className="w-10 h-10 text-green-500" />
// // // // // //             </motion.div>

// // // // // //             {/* Average Progress */}
// // // // // //             <motion.div
// // // // // //               className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // // // // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // // // // //             >
// // // // // //               <div className="w-full">
// // // // // //                 <p className="text-gray-500 text-sm text-center mb-2">Average Progress</p>
// // // // // //                 <div className="w-full bg-gray-200 rounded-full h-3">
// // // // // //                   <div
// // // // // //                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
// // // // // //                     style={{ width: `${completionRate}%` }}
// // // // // //                   ></div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <BarChart2 className="w-10 h-10 text-blue-500 ml-4" />
// // // // // //             </motion.div>
// // // // // //           </motion.div>

// // // // // //           {/* 📉 Charts Section */}
// // // // // //           <motion.div
// // // // // //             className="grid grid-cols-1 md:grid-cols-2 gap-6"
// // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //           >
// // // // // //             <ChartCard title="Weekly Task Trend">
// // // // // //               <LineChart data={lineData}>
// // // // // //                 <XAxis dataKey="day" />
// // // // // //                 <YAxis />
// // // // // //                 <Tooltip />
// // // // // //                 <Legend />
// // // // // //                 <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} />
// // // // // //                 <Line type="monotone" dataKey="in-progress" stroke="#facc15" strokeWidth={2} />
// // // // // //                 <Line type="monotone" dataKey="pending" stroke="#f87171" strokeWidth={2} />
// // // // // //               </LineChart>
// // // // // //             </ChartCard>

// // // // // //             <ChartCard title="Task Distribution">
// // // // // //               <PieChart>
// // // // // //                 <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
// // // // // //                   {pieData.map((entry, index) => (
// // // // // //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // // // //                   ))}
// // // // // //                 </Pie>
// // // // // //                 <Tooltip />
// // // // // //                 <Legend />
// // // // // //               </PieChart>
// // // // // //             </ChartCard>
// // // // // //           </motion.div>
// // // // // //         </>
        
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   LineChart,
// // // //   Line,
// // // //   PieChart,
// // // //   Pie,
// // // //   Cell,
// // // //   XAxis,
// // // //   YAxis,
// // // //   Tooltip,
// // // //   Legend,
// // // // } from "recharts";
// // // // import { motion } from "framer-motion";
// // // // import { ClipboardList, CheckCircle, BarChart2, User, Mail, Edit3 } from "lucide-react";
// // // // import ChartCard from "../components/ChartCard";
// // // // import api from "../api/axios";
// // // // import toast from "react-hot-toast";

// // // // const COLORS = ["#22c55e", "#f87171", "#facc15"];

// // // // export default function Profile() {
// // // //   const [tasks, setTasks] = useState([]);
// // // //   const [user, setUser] = useState({ name: "", email: "" });
// // // //   const [editing, setEditing] = useState(false);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // 🔹 Fetch tasks
// // // //   const fetchTasks = async () => {
// // // //     try {
// // // //       const res = await api.get("/tasks");
// // // //       setTasks(res.data);
// // // //     } catch {
// // // //       toast.error("Failed to load tasks for analytics");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // 🔹 Fetch user data
// // // //   const fetchUser = async () => {
// // // //     try {
// // // //       const res = await api.get("/user/profile");
// // // //       setUser(res.data);
// // // //     } catch {
// // // //       toast.error("Failed to load user profile");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchTasks();
// // // //     fetchUser();
// // // //   }, []);

// // // //   // 🔹 Stats
// // // //   const total = tasks.length;
// // // //   const completed = tasks.filter((t) => t.status === "completed").length;
// // // //   const pending = tasks.filter((t) => t.status === "pending").length;
// // // //   const inProgress = tasks.filter((t) => t.status === "in-progress").length;
// // // //   const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

// // // //   // 🔹 Chart data
// // // //   const pieData = [
// // // //     { name: "Completed", value: completed },
// // // //     { name: "In Progress", value: inProgress },
// // // //     { name: "Pending", value: pending },
// // // //   ];

// // // //   const groupedByDay = tasks.reduce((acc, task) => {
// // // //     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
// // // //       weekday: "short",
// // // //     });
// // // //     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
// // // //     acc[day][task.status] += 1;
// // // //     return acc;
// // // //   }, {});
// // // //   const lineData = Object.values(groupedByDay);

// // // //   // 🔹 Handle Profile Update
// // // //   const handleUpdate = async () => {
// // // //     try {
// // // //       await api.put("/user/profile", user);
// // // //       toast.success("Profile updated successfully!");
// // // //       setEditing(false);
// // // //     } catch {
// // // //       toast.error("Failed to update profile");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-500">
// // // //       <motion.h1
// // // //         className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
// // // //         initial={{ opacity: 0, y: -20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //       >
// // // //         👤 Profile & Productivity Analytics
// // // //       </motion.h1>

// // // //       {/* 🔹 Profile Section */}
// // // //       <motion.div
// // // //         className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-10 max-w-3xl mx-auto backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 border border-gray-200 dark:border-gray-700"
// // // //         initial={{ opacity: 0, y: 30 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.8 }}
// // // //       >
// // // //         <div className="flex items-center gap-4 mb-4">
// // // //           <User className="w-12 h-12 text-indigo-500" />
// // // //           <div>
// // // //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
// // // //               {user.name || "Your Name"}
// // // //             </h2>
// // // //             <p className="text-gray-500 dark:text-gray-400">{user.email || "your@email.com"}</p>
// // // //           </div>
// // // //         </div>

// // // //         {editing ? (
// // // //           <div className="space-y-4 mt-4">
// // // //             <div>
// // // //               <label className="text-gray-600 dark:text-gray-300 text-sm">Name</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={user.name}
// // // //                 onChange={(e) => setUser({ ...user, name: e.target.value })}
// // // //                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// // // //               />
// // // //             </div>

// // // //             <div>
// // // //               <label className="text-gray-600 dark:text-gray-300 text-sm">Email</label>
// // // //               <input
// // // //                 type="email"
// // // //                 value={user.email}
// // // //                 onChange={(e) => setUser({ ...user, email: e.target.value })}
// // // //                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// // // //               />
// // // //             </div>

// // // //             <button
// // // //               onClick={handleUpdate}
// // // //               className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg mt-2 transition"
// // // //             >
// // // //               Save Changes
// // // //             </button>
// // // //           </div>
// // // //         ) : (
// // // //           <button
// // // //             onClick={() => setEditing(true)}
// // // //             className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mt-4 transition"
// // // //           >
// // // //             <Edit3 className="w-5 h-5" /> Edit Profile
// // // //           </button>
// // // //         )}
// // // //       </motion.div>

// // // //       {/* 🔹 Analytics Section */}
// // // //       {loading ? (
// // // //         <p className="text-center text-gray-500">Loading analytics...</p>
// // // //       ) : total === 0 ? (
// // // //         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
// // // //       ) : (
// // // //         <>
// // // //           {/* 🌟 Stats Summary */}
// // // //           <motion.div
// // // //             className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             variants={{
// // // //               hidden: { opacity: 0, y: 30 },
// // // //               visible: {
// // // //                 opacity: 1,
// // // //                 y: 0,
// // // //                 transition: { staggerChildren: 0.2, duration: 0.8 },
// // // //               },
// // // //             }}
// // // //           >
// // // //             {/* Total Tasks */}
// // // //             <motion.div
// // // //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // // //             >
// // // //               <div>
// // // //                 <p className="text-gray-500 dark:text-gray-400 text-sm">Total Tasks</p>
// // // //                 <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
// // // //               </div>
// // // //               <ClipboardList className="w-10 h-10 text-indigo-500" />
// // // //             </motion.div>

// // // //             {/* Completion Rate */}
// // // //             <motion.div
// // // //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // // //             >
// // // //               <div>
// // // //                 <p className="text-gray-500 dark:text-gray-400 text-sm">Completion Rate</p>
// // // //                 <h2 className="text-2xl font-bold text-green-500">{completionRate}%</h2>
// // // //               </div>
// // // //               <CheckCircle className="w-10 h-10 text-green-500" />
// // // //             </motion.div>

// // // //             {/* Average Progress */}
// // // //             <motion.div
// // // //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // // //             >
// // // //               <div className="w-full">
// // // //                 <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-2">Average Progress</p>
// // // //                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
// // // //                   <div
// // // //                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
// // // //                     style={{ width: `${completionRate}%` }}
// // // //                   ></div>
// // // //                 </div>
// // // //               </div>
// // // //               <BarChart2 className="w-10 h-10 text-blue-500 ml-4" />
// // // //             </motion.div>
// // // //           </motion.div>

// // // //           {/* 📉 Charts Section */}
// // // //           <motion.div
// // // //             className="grid grid-cols-1 md:grid-cols-2 gap-6"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //           >
// // // //             <ChartCard title="Weekly Task Trend">
// // // //               <LineChart data={lineData}>
// // // //                 <XAxis dataKey="day" />
// // // //                 <YAxis />
// // // //                 <Tooltip />
// // // //                 <Legend />
// // // //                 <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} />
// // // //                 <Line type="monotone" dataKey="in-progress" stroke="#facc15" strokeWidth={2} />
// // // //                 <Line type="monotone" dataKey="pending" stroke="#f87171" strokeWidth={2} />
// // // //               </LineChart>
// // // //             </ChartCard>

// // // //             <ChartCard title="Task Distribution">
// // // //               <PieChart>
// // // //                 <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
// // // //                   {pieData.map((entry, index) => (
// // // //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // //                   ))}
// // // //                 </Pie>
// // // //                 <Tooltip />
// // // //                 <Legend />
// // // //               </PieChart>
// // // //             </ChartCard>
// // // //           </motion.div>
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // // import { useState, useEffect } from "react";
// // // // // import axios from "axios";

// // // // // const Profile = () => {
// // // // //   const [user, setUser] = useState({ name: "", email: "" });
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [message, setMessage] = useState("");

// // // // //   const token = localStorage.getItem("token");

// // // // //   // ✅ Fetch user data
// // // // //   useEffect(() => {
// // // // //     const fetchProfile = async () => {
// // // // //       try {
// // // // //         const res = await axios.get("http://localhost:5000/api/users/profile", {
// // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // //         });
// // // // //         setUser(res.data);
// // // // //         setLoading(false);
// // // // //       } catch (error) {
// // // // //         console.error("❌ Error fetching profile:", error);
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };
// // // // //     fetchProfile();
// // // // //   }, [token]);

// // // // //   // ✅ Handle input change
// // // // //   const handleChange = (e) => {
// // // // //     setUser({ ...user, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   // ✅ Update profile
// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       const res = await axios.put(
// // // // //         "http://localhost:5000/api/users/profile",
// // // // //         { name: user.name, email: user.email },
// // // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // // //       );
// // // // //       setMessage("Profile updated successfully!");
// // // // //       setUser(res.data);
// // // // //     } catch (error) {
// // // // //       console.error("❌ Error updating profile:", error);
// // // // //       setMessage("Failed to update profile");
// // // // //     }
// // // // //   };

// // // // //   if (loading) return <p>Loading...</p>;

// // // // //   return (
// // // // //     <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300">
// // // // //       <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
// // // // //         My Profile
// // // // //       </h2>
// // // // //       <div className="space-y-4">
// // // // //         <div>
// // // // //           <label className="block text-gray-600 dark:text-gray-300 mb-1">Name</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             name="name"
// // // // //             value={user.name}
// // // // //             onChange={handleChange}
// // // // //             className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
// // // // //           />
// // // // //         </div>

// // // // //         <div>
// // // // //           <label className="block text-gray-600 dark:text-gray-300 mb-1">Email</label>
// // // // //           <input
// // // // //             type="email"
// // // // //             name="email"
// // // // //             value={user.email}
// // // // //             onChange={handleChange}
// // // // //             className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
// // // // //           />
// // // // //         </div>

// // // // //         <button
// // // // //           onClick={handleSave}
// // // // //           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-all"
// // // // //         >
// // // // //           Save Changes
// // // // //         </button>

// // // // //         {message && (
// // // // //           <p className="text-center text-sm text-green-500 mt-2">{message}</p>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Profile;

// // // import { useEffect, useState } from "react";
// // // import {
// // //   LineChart,
// // //   Line,
// // //   PieChart,
// // //   Pie,
// // //   Cell,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   Legend,
// // // } from "recharts";
// // // import { motion } from "framer-motion";
// // // import { ClipboardList, CheckCircle, BarChart2, User, Edit3 } from "lucide-react";
// // // import ChartCard from "../components/ChartCard";
// // // import api from "../api/axios";
// // // import toast from "react-hot-toast";

// // // const COLORS = ["#22c55e", "#f87171", "#facc15"];

// // // export default function Profile() {
// // //   const [tasks, setTasks] = useState([]);
// // //   const [user, setUser] = useState({ name: "", email: "" });
// // //   const [editing, setEditing] = useState(false);
// // //   const [loading, setLoading] = useState(true);

// // //   // 🔹 Fetch tasks
// // //   const fetchTasks = async () => {
// // //     try {
// // //       const res = await api.get("/tasks");
// // //       setTasks(res.data);
// // //     } catch {
// // //       toast.error("Failed to load tasks for analytics");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // 🔹 Fetch user data (fixed endpoint)
// // //   const fetchUser = async () => {
// // //     try {
// // //       const res = await api.get("/users/profile");
// // //       setUser(res.data);
// // //     } catch {
// // //       toast.error("Failed to load user profile");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchTasks();
// // //     fetchUser();
// // //   }, []);

// // //   // 🔹 Handle Profile Update (fixed endpoint)
// // //   const handleUpdate = async () => {
// // //     try {
// // //       await api.put("/users/profile", user);
// // //       toast.success("Profile updated successfully!");
// // //       setEditing(false);
// // //     } catch {
// // //       toast.error("Failed to update profile");
// // //     }
// // //   };

// // //   // 🔹 Stats
// // //   const total = tasks.length;
// // //   const completed = tasks.filter((t) => t.status === "completed").length;
// // //   const pending = tasks.filter((t) => t.status === "pending").length;
// // //   const inProgress = tasks.filter((t) => t.status === "in-progress").length;
// // //   const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

// // //   // 🔹 Chart data
// // //   const pieData = [
// // //     { name: "Completed", value: completed },
// // //     { name: "In Progress", value: inProgress },
// // //     { name: "Pending", value: pending },
// // //   ];

// // //   const groupedByDay = tasks.reduce((acc, task) => {
// // //     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
// // //       weekday: "short",
// // //     });
// // //     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
// // //     acc[day][task.status] += 1;
// // //     return acc;
// // //   }, {});
// // //   const lineData = Object.values(groupedByDay);

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-500">
// // //       <motion.h1
// // //         className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //       >
// // //         👤 Profile & Productivity Analytics
// // //       </motion.h1>

// // //       {/* 🔹 Profile Section */}
// // //       <motion.div
// // //         className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-10 max-w-3xl mx-auto backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 border border-gray-200 dark:border-gray-700"
// // //         initial={{ opacity: 0, y: 30 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.8 }}
// // //       >
// // //         <div className="flex items-center gap-4 mb-4">
// // //           <User className="w-12 h-12 text-indigo-500" />
// // //           <div>
// // //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
// // //               {user.name || "Your Name"}
// // //             </h2>
// // //             <p className="text-gray-500 dark:text-gray-400">{user.email || "your@email.com"}</p>
// // //           </div>
// // //         </div>

// // //         {editing ? (
// // //           <div className="space-y-4 mt-4">
// // //             <div>
// // //               <label className="text-gray-600 dark:text-gray-300 text-sm">Name</label>
// // //               <input
// // //                 type="text"
// // //                 value={user.name}
// // //                 onChange={(e) => setUser({ ...user, name: e.target.value })}
// // //                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// // //               />
// // //             </div>

// // //             <div>
// // //               <label className="text-gray-600 dark:text-gray-300 text-sm">Email</label>
// // //               <input
// // //                 type="email"
// // //                 value={user.email}
// // //                 onChange={(e) => setUser({ ...user, email: e.target.value })}
// // //                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// // //               />
// // //             </div>

// // //             <button
// // //               onClick={handleUpdate}
// // //               className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg mt-2 transition"
// // //             >
// // //               Save Changes
// // //             </button>
// // //           </div>
// // //         ) : (
// // //           <button
// // //             onClick={() => setEditing(true)}
// // //             className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mt-4 transition"
// // //           >
// // //             <Edit3 className="w-5 h-5" /> Edit Profile
// // //           </button>
// // //         )}
// // //       </motion.div>

// // //       {/* 🔹 Analytics Section */}
// // //       {loading ? (
// // //         <p className="text-center text-gray-500">Loading analytics...</p>
// // //       ) : total === 0 ? (
// // //         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
// // //       ) : (
// // //         <>
// // //           {/* 🌟 Stats Summary */}
// // //           <motion.div
// // //             className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
// // //             initial="hidden"
// // //             animate="visible"
// // //             variants={{
// // //               hidden: { opacity: 0, y: 30 },
// // //               visible: {
// // //                 opacity: 1,
// // //                 y: 0,
// // //                 transition: { staggerChildren: 0.2, duration: 0.8 },
// // //               },
// // //             }}
// // //           >
// // //             {/* Total Tasks */}
// // //             <motion.div
// // //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // //             >
// // //               <div>
// // //                 <p className="text-gray-500 dark:text-gray-400 text-sm">Total Tasks</p>
// // //                 <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
// // //               </div>
// // //               <ClipboardList className="w-10 h-10 text-indigo-500" />
// // //             </motion.div>

// // //             {/* Completion Rate */}
// // //             <motion.div
// // //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // //             >
// // //               <div>
// // //                 <p className="text-gray-500 dark:text-gray-400 text-sm">Completion Rate</p>
// // //                 <h2 className="text-2xl font-bold text-green-500">{completionRate}%</h2>
// // //               </div>
// // //               <CheckCircle className="w-10 h-10 text-green-500" />
// // //             </motion.div>

// // //             {/* Average Progress */}
// // //             <motion.div
// // //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// // //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// // //             >
// // //               <div className="w-full">
// // //                 <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-2">Average Progress</p>
// // //                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
// // //                   <div
// // //                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
// // //                     style={{ width: `${completionRate}%` }}
// // //                   ></div>
// // //                 </div>
// // //               </div>
// // //               <BarChart2 className="w-10 h-10 text-blue-500 ml-4" />
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* 📉 Charts Section */}
// // //           <motion.div
// // //             className="grid grid-cols-1 md:grid-cols-2 gap-6"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //           >
// // //             <ChartCard title="Weekly Task Trend">
// // //               <LineChart data={lineData}>
// // //                 <XAxis dataKey="day" />
// // //                 <YAxis />
// // //                 <Tooltip />
// // //                 <Legend />
// // //                 <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} />
// // //                 <Line type="monotone" dataKey="in-progress" stroke="#facc15" strokeWidth={2} />
// // //                 <Line type="monotone" dataKey="pending" stroke="#f87171" strokeWidth={2} />
// // //               </LineChart>
// // //             </ChartCard>

// // //             <ChartCard title="Task Distribution">
// // //               <PieChart>
// // //                 <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
// // //                   {pieData.map((entry, index) => (
// // //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //                   ))}
// // //                 </Pie>
// // //                 <Tooltip />
// // //                 <Legend />
// // //               </PieChart>
// // //             </ChartCard>
// // //           </motion.div>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import {
// //   LineChart,
// //   Line,
// //   PieChart,
// //   Pie,
// //   Cell,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   Legend,
// // } from "recharts";
// // import { motion } from "framer-motion";
// // import { ClipboardList, CheckCircle, BarChart2, User, Edit3, Lock } from "lucide-react";
// // import ChartCard from "../components/ChartCard";
// // import api from "../api/axios";
// // import toast from "react-hot-toast";

// // const COLORS = ["#22c55e", "#f87171", "#facc15"];

// // export default function Profile() {
// //   const [tasks, setTasks] = useState([]);
// //   const [user, setUser] = useState({ name: "", email: "" });
// //   const [editing, setEditing] = useState(false);
// //   const [changingPassword, setChangingPassword] = useState(false);
// //   const [passwords, setPasswords] = useState({ oldPassword: "", newPassword: "" });
// //   const [loading, setLoading] = useState(true);

// //   // 🔹 Fetch tasks
// //   const fetchTasks = async () => {
// //     try {
// //       const res = await api.get("/tasks");
// //       setTasks(res.data);
// //     } catch {
// //       toast.error("Failed to load tasks for analytics");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // 🔹 Fetch user data
// //   const fetchUser = async () => {
// //     try {
// //       const res = await api.get("/users/profile");
// //       setUser(res.data);
// //     } catch {
// //       toast.error("Failed to load user profile");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //     fetchUser();
// //   }, []);

// //   // 🔹 Update profile
// //   const handleUpdate = async () => {
// //     try {
// //       await api.put("/users/profile", user);
// //       toast.success("Profile updated successfully!");
// //       setEditing(false);
// //     } catch {
// //       toast.error("Failed to update profile");
// //     }
// //   };

// //   // 🔹 Change password
// //   const handlePasswordChange = async () => {
// //     try {
// //       if (!passwords.oldPassword || !passwords.newPassword) {
// //         toast.error("Please fill in both password fields");
// //         return;
// //       }
// //       await api.put("/users/change-password", passwords);
// //       toast.success("Password changed successfully!");
// //       setPasswords({ oldPassword: "", newPassword: "" });
// //       setChangingPassword(false);
// //     } catch {
// //       toast.error("Failed to change password");
// //     }
// //   };

// //   // 🔹 Task stats
// //   const total = tasks.length;
// //   const completed = tasks.filter((t) => t.status === "completed").length;
// //   const pending = tasks.filter((t) => t.status === "pending").length;
// //   const inProgress = tasks.filter((t) => t.status === "in-progress").length;
// //   const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

// //   const pieData = [
// //     { name: "Completed", value: completed },
// //     { name: "In Progress", value: inProgress },
// //     { name: "Pending", value: pending },
// //   ];

// //   const groupedByDay = tasks.reduce((acc, task) => {
// //     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
// //       weekday: "short",
// //     });
// //     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
// //     acc[day][task.status] += 1;
// //     return acc;
// //   }, {});
// //   const lineData = Object.values(groupedByDay);

// //   return (
// //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-500">
// //       <motion.h1
// //         className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //       >
// //         👤 Profile & Productivity Analytics
// //       </motion.h1>

// //       {/* 🔹 Profile Section */}
// //       <motion.div
// //         className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-10 max-w-3xl mx-auto backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 border border-gray-200 dark:border-gray-700"
// //         initial={{ opacity: 0, y: 30 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         <div className="flex items-center gap-4 mb-4">
// //           <User className="w-12 h-12 text-indigo-500" />
// //           <div>
// //             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
// //               {user.name || "Your Name"}
// //             </h2>
// //             <p className="text-gray-500 dark:text-gray-400">{user.email || "your@email.com"}</p>
// //           </div>
// //         </div>

// //         {/* 🔹 Profile Edit Section */}
// //         {editing ? (
// //           <div className="space-y-4 mt-4">
// //             <input
// //               type="text"
// //               value={user.name}
// //               onChange={(e) => setUser({ ...user, name: e.target.value })}
// //               className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// //               placeholder="Name"
// //             />
// //             <input
// //               type="email"
// //               value={user.email}
// //               onChange={(e) => setUser({ ...user, email: e.target.value })}
// //               className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// //               placeholder="Email"
// //             />
// //             <button
// //               onClick={handleUpdate}
// //               className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg mt-2 transition"
// //             >
// //               Save Changes
// //             </button>
// //           </div>
// //         ) : changingPassword ? (
// //           <div className="space-y-4 mt-4">
// //             <div>
// //               <label className="text-gray-600 dark:text-gray-300 text-sm">Old Password</label>
// //               <input
// //                 type="password"
// //                 value={passwords.oldPassword}
// //                 onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
// //                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //             </div>
// //             <div>
// //               <label className="text-gray-600 dark:text-gray-300 text-sm">New Password</label>
// //               <input
// //                 type="password"
// //                 value={passwords.newPassword}
// //                 onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
// //                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //             </div>
// //             <button
// //               onClick={handlePasswordChange}
// //               className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
// //             >
// //               Update Password
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="flex flex-col sm:flex-row gap-3 mt-4">
// //             <button
// //               onClick={() => setEditing(true)}
// //               className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition"
// //             >
// //               <Edit3 className="w-5 h-5" /> Edit Profile
// //             </button>
// //             <button
// //               onClick={() => setChangingPassword(true)}
// //               className="flex items-center gap-2 text-rose-600 hover:text-rose-800 transition"
// //             >
// //               <Lock className="w-5 h-5" /> Change Password
// //             </button>
// //           </div>
// //         )}
// //       </motion.div>

// //       {/* 🔹 Analytics Section */}
// //       {loading ? (
// //         <p className="text-center text-gray-500">Loading analytics...</p>
// //       ) : total === 0 ? (
// //         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
// //       ) : (
// //         <>
// //           <motion.div
// //             className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
// //             initial="hidden"
// //             animate="visible"
// //             variants={{
// //               hidden: { opacity: 0, y: 30 },
// //               visible: {
// //                 opacity: 1,
// //                 y: 0,
// //                 transition: { staggerChildren: 0.2, duration: 0.8 },
// //               },
// //             }}
// //           >
// //             <motion.div
// //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// //             >
// //               <div>
// //                 <p className="text-gray-500 dark:text-gray-400 text-sm">Total Tasks</p>
// //                 <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
// //               </div>
// //               <ClipboardList className="w-10 h-10 text-indigo-500" />
// //             </motion.div>

// //             <motion.div
// //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// //             >
// //               <div>
// //                 <p className="text-gray-500 dark:text-gray-400 text-sm">Completion Rate</p>
// //                 <h2 className="text-2xl font-bold text-green-500">{completionRate}%</h2>
// //               </div>
// //               <CheckCircle className="w-10 h-10 text-green-500" />
// //             </motion.div>

// //             <motion.div
// //               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
// //               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
// //             >
// //               <div className="w-full">
// //                 <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-2">Average Progress</p>
// //                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
// //                   <div
// //                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
// //                     style={{ width: `${completionRate}%` }}
// //                   ></div>
// //                 </div>
// //               </div>
// //               <BarChart2 className="w-10 h-10 text-blue-500 ml-4" />
// //             </motion.div>
// //           </motion.div>

// //           {/* 📊 Charts */}
// //           <motion.div
// //             className="grid grid-cols-1 md:grid-cols-2 gap-6"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <ChartCard title="Weekly Task Trend">
// //               <LineChart data={lineData}>
// //                 <XAxis dataKey="day" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} />
// //                 <Line type="monotone" dataKey="in-progress" stroke="#facc15" strokeWidth={2} />
// //                 <Line type="monotone" dataKey="pending" stroke="#f87171" strokeWidth={2} />
// //               </LineChart>
// //             </ChartCard>

// //             <ChartCard title="Task Distribution">
// //               <PieChart>
// //                 <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
// //                   {pieData.map((entry, index) => (
// //                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                   ))}
// //                 </Pie>
// //                 <Tooltip />
// //                 <Legend />
// //               </PieChart>
// //             </ChartCard>
// //           </motion.div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { motion } from "framer-motion";
// import {
//   ClipboardList,
//   CheckCircle,
//   BarChart2,
//   User,
//   Edit3,
//   Lock,
//   UploadCloud,
// } from "lucide-react";
// import ChartCard from "../components/ChartCard";
// import api from "../api/axios";
// import toast from "react-hot-toast";

// const COLORS = ["#22c55e", "#f87171", "#facc15"];

// export default function Profile() {
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState({ name: "", email: "", profilePic: "" });
//   const [editing, setEditing] = useState(false);
//   const [changingPassword, setChangingPassword] = useState(false);
//   const [passwords, setPasswords] = useState({ oldPassword: "", newPassword: "" });
//   const [loading, setLoading] = useState(true);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // 🔹 Fetch tasks
//   const fetchTasks = async () => {
//     try {
//       const res = await api.get("/tasks");
//       setTasks(res.data);
//     } catch {
//       toast.error("Failed to load tasks for analytics");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Fetch user data
//   const fetchUser = async () => {
//     try {
//       const res = await api.get("/users/profile");
//       setUser(res.data);
//     } catch {
//       toast.error("Failed to load user profile");
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//     fetchUser();
//   }, []);

//   // 🔹 Update profile
//   const handleUpdate = async () => {
//     try {
//       await api.put("/users/profile", user);
//       toast.success("Profile updated successfully!");
//       setEditing(false);
//       fetchUser();
//     } catch {
//       toast.error("Failed to update profile");
//     }
//   };

//   // 🔹 Change password
//   const handlePasswordChange = async () => {
//     try {
//       if (!passwords.oldPassword || !passwords.newPassword) {
//         toast.error("Please fill in both password fields");
//         return;
//       }
//       await api.put("/users/profile/password", passwords);
//       toast.success("Password changed successfully!");
//       setPasswords({ oldPassword: "", newPassword: "" });
//       setChangingPassword(false);
//     } catch {
//       toast.error("Failed to change password");
//     }
//   };

//   // 🔹 Upload profile picture
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setImagePreview(URL.createObjectURL(file));
//     setUploading(true);

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const res = await api.post("/users/profile/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       toast.success("Profile picture updated!");
//       setUser((prev) => ({ ...prev, profilePic: res.data.profilePic }));
//     } catch (err) {
//       toast.error("Failed to upload image");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // 🔹 Task stats
//   const total = tasks.length;
//   const completed = tasks.filter((t) => t.status === "completed").length;
//   const pending = tasks.filter((t) => t.status === "pending").length;
//   const inProgress = tasks.filter((t) => t.status === "in-progress").length;
//   const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

//   const pieData = [
//     { name: "Completed", value: completed },
//     { name: "In Progress", value: inProgress },
//     { name: "Pending", value: pending },
//   ];

//   const groupedByDay = tasks.reduce((acc, task) => {
//     const day = new Date(task.createdAt).toLocaleDateString("en-US", {
//       weekday: "short",
//     });
//     if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
//     acc[day][task.status] += 1;
//     return acc;
//   }, {});
//   const lineData = Object.values(groupedByDay);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-500">
//       <motion.h1
//         className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         👤 Profile & Productivity Analytics
//       </motion.h1>

//       {/* 🔹 Profile Section */}
//       <motion.div
//         className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-10 max-w-3xl mx-auto backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 border border-gray-200 dark:border-gray-700"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
//           <div className="relative">
//             <img
//               src={
//                 imagePreview ||
//                 (user.profilePic
//                   ? `http://localhost:5000${user.profilePic}`
//                   : "https://via.placeholder.com/100")
//               }
//               alt="Profile"
//               className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
//             />
//             <label
//               htmlFor="upload"
//               className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-md transition"
//               title="Upload new picture"
//             >
//               <UploadCloud className="w-4 h-4" />
//               <input
//                 id="upload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//             </label>
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
//               {user.name || "Your Name"}
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               {user.email || "your@email.com"}
//             </p>
//             {uploading && (
//               <p className="text-sm text-indigo-400 mt-1 animate-pulse">
//                 Uploading...
//               </p>
//             )}
//           </div>
//         </div>

//         {/* 🔹 Profile Edit Section */}
//         {editing ? (
//           <div className="space-y-4 mt-4">
//             <input
//               type="text"
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//               className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Email"
//             />
//             <button
//               onClick={handleUpdate}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg mt-2 transition"
//             >
//               Save Changes
//             </button>
//           </div>
//         ) : changingPassword ? (
//           <div className="space-y-4 mt-4">
//             <div>
//               <label className="text-gray-600 dark:text-gray-300 text-sm">
//                 Old Password
//               </label>
//               <input
//                 type="password"
//                 value={passwords.oldPassword}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, oldPassword: e.target.value })
//                 }
//                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="text-gray-600 dark:text-gray-300 text-sm">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 value={passwords.newPassword}
//                 onChange={(e) =>
//                   setPasswords({ ...passwords, newPassword: e.target.value })
//                 }
//                 className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//             <button
//               onClick={handlePasswordChange}
//               className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
//             >
//               Update Password
//             </button>
//           </div>
//         ) : (
//           <div className="flex flex-col sm:flex-row gap-3 mt-4">
//             <button
//               onClick={() => setEditing(true)}
//               className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition"
//             >
//               <Edit3 className="w-5 h-5" /> Edit Profile
//             </button>
//             <button
//               onClick={() => setChangingPassword(true)}
//               className="flex items-center gap-2 text-rose-600 hover:text-rose-800 transition"
//             >
//               <Lock className="w-5 h-5" /> Change Password
//             </button>
//           </div>
//         )}
//       </motion.div>

//       {/* 🔹 Analytics Section */}
//       {loading ? (
//         <p className="text-center text-gray-500">Loading analytics...</p>
//       ) : total === 0 ? (
//         <p className="text-center text-gray-400 italic">No tasks found yet.</p>
//       ) : (
//         <>
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { staggerChildren: 0.2, duration: 0.8 },
//               },
//             }}
//           >
//             <motion.div
//               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
//               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
//             >
//               <div>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Total Tasks</p>
//                 <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
//               </div>
//               <ClipboardList className="w-10 h-10 text-indigo-500" />
//             </motion.div>

//             <motion.div
//               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
//               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
//             >
//               <div>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm">Completion Rate</p>
//                 <h2 className="text-2xl font-bold text-green-500">{completionRate}%</h2>
//               </div>
//               <CheckCircle className="w-10 h-10 text-green-500" />
//             </motion.div>

//             <motion.div
//               className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition"
//               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
//             >
//               <div className="w-full">
//                 <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-2">
//                   Average Progress
//                 </p>
//                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
//                   <div
//                     className="bg-blue-500 h-3 rounded-full transition-all duration-500"
//                     style={{ width: `${completionRate}%` }}
//                   ></div>
//                 </div>
//               </div>
//               <BarChart2 className="w-10 h-10 text-blue-500 ml-4" />
//             </motion.div>
//           </motion.div>

//           {/* 📊 Charts */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <ChartCard title="Weekly Task Trend">
//               <LineChart data={lineData}>
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} />
//                 <Line type="monotone" dataKey="in-progress" stroke="#facc15" strokeWidth={2} />
//                 <Line type="monotone" dataKey="pending" stroke="#f87171" strokeWidth={2} />
//               </LineChart>
//             </ChartCard>

//             <ChartCard title="Task Distribution">
//               <PieChart>
//                 <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ChartCard>
//           </motion.div>
//         </>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import {
  ClipboardList,
  CheckCircle,
  BarChart2,
  User,
  Edit3,
  Lock,
  UploadCloud,
  Trash2,
} from "lucide-react";
import ChartCard from "../components/ChartCard";
import api from "../api/axios";
import toast from "react-hot-toast";

const COLORS = ["#22c55e", "#f87171", "#facc15"];

export default function Profile() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", profilePic: "" });
  const [editing, setEditing] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [passwords, setPasswords] = useState({ oldPassword: "", newPassword: "" });
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const defaultAvatar = "https://via.placeholder.com/100";

  // 🔹 Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch {
      toast.error("Failed to load tasks for analytics");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch user data
  const fetchUser = async () => {
    try {
      const res = await api.get("/users/profile");
      setUser(res.data);
    } catch {
      toast.error("Failed to load user profile");
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchUser();
  }, []);

  // 🔹 Update profile
  const handleUpdate = async () => {
    try {
      await api.put("/users/profile", user);
      toast.success("Profile updated successfully!");
      setEditing(false);
      fetchUser();
    } catch {
      toast.error("Failed to update profile");
    }
  };

  // 🔹 Change password
  const handlePasswordChange = async () => {
    try {
      if (!passwords.oldPassword || !passwords.newPassword) {
        toast.error("Please fill in both password fields");
        return;
      }
      await api.put("/users/profile/password", passwords);
      toast.success("Password changed successfully!");
      setPasswords({ oldPassword: "", newPassword: "" });
      setChangingPassword(false);
    } catch {
      toast.error("Failed to change password");
    }
  };

  // 🔹 Upload profile picture
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await api.post("/users/profile/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Profile picture updated!");
      setUser((prev) => ({ ...prev, profilePic: res.data.profilePic }));
    } catch {
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  // 🔹 Remove profile picture
  const handleRemoveImage = async () => {
    try {
      await api.delete("/users/profile/remove-image");
      toast.success("Profile picture removed!");
      setUser((prev) => ({ ...prev, profilePic: "" }));
      setImagePreview(null);
    } catch {
      toast.error("Failed to remove image");
    }
  };

  // 🔹 Task stats
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.filter((t) => t.status === "pending").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;
  const completionRate = total > 0 ? ((completed / total) * 100).toFixed(1) : 0;

  const pieData = [
    { name: "Completed", value: completed },
    { name: "In Progress", value: inProgress },
    { name: "Pending", value: pending },
  ];

  const groupedByDay = tasks.reduce((acc, task) => {
    const day = new Date(task.createdAt).toLocaleDateString("en-US", {
      weekday: "short",
    });
    if (!acc[day]) acc[day] = { day, completed: 0, pending: 0, "in-progress": 0 };
    acc[day][task.status] += 1;
    return acc;
  }, {});
  const lineData = Object.values(groupedByDay);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-500">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👤 Profile & Productivity Analytics
      </motion.h1>

      {/* 🔹 Profile Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-10 max-w-3xl mx-auto backdrop-blur-md bg-opacity-80 dark:bg-opacity-60 border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <div className="relative group">
            <img
              src={
                imagePreview ||
                (user.profilePic
                  ? `http://localhost:5000${user.profilePic}`
                  : defaultAvatar)
              }
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
            />
            <div className="absolute bottom-0 right-0 flex gap-2 opacity-0 group-hover:opacity-100 transition">
              {/* Upload Button */}
              <label
                htmlFor="upload"
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-md transition"
                title="Upload new picture"
              >
                <UploadCloud className="w-4 h-4" />
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* Remove Button */}
              {user.profilePic && (
                <button
                  onClick={handleRemoveImage}
                  className="bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-full shadow-md transition"
                  title="Remove profile picture"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {user.name || "Your Name"}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {user.email || "your@email.com"}
            </p>
            {uploading && (
              <p className="text-sm text-indigo-400 mt-1 animate-pulse">
                Uploading...
              </p>
            )}
          </div>
        </div>

        {/* 🔹 Profile Edit Section */}
        {editing ? (
          <div className="space-y-4 mt-4">
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Name"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
            <button
              onClick={handleUpdate}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg mt-2 transition"
            >
              Save Changes
            </button>
          </div>
        ) : changingPassword ? (
          <div className="space-y-4 mt-4">
            <div>
              <label className="text-gray-600 dark:text-gray-300 text-sm">
                Old Password
              </label>
              <input
                type="password"
                value={passwords.oldPassword}
                onChange={(e) =>
                  setPasswords({ ...passwords, oldPassword: e.target.value })
                }
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-gray-600 dark:text-gray-300 text-sm">
                New Password
              </label>
              <input
                type="password"
                value={passwords.newPassword}
                onChange={(e) =>
                  setPasswords({ ...passwords, newPassword: e.target.value })
                }
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={handlePasswordChange}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
            >
              Update Password
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition"
            >
              <Edit3 className="w-5 h-5" /> Edit Profile
            </button>
            <button
              onClick={() => setChangingPassword(true)}
              className="flex items-center gap-2 text-rose-600 hover:text-rose-800 transition"
            >
              <Lock className="w-5 h-5" /> Change Password
            </button>
          </div>
        )}
      </motion.div>

      {/* 🔹 Analytics Section */}
      {loading ? (
        <p className="text-center text-gray-500">Loading analytics...</p>
      ) : total === 0 ? (
        <p className="text-center text-gray-400 italic">No tasks found yet.</p>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.8 },
              },
            }}
          >
            <ChartCard title="Total Tasks">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-indigo-600">{total}</h2>
                <ClipboardList className="w-10 h-10 text-indigo-500" />
              </div>
            </ChartCard>

            <ChartCard title="Completion Rate">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-green-500">
                  {completionRate}%
                </h2>
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </ChartCard>

            <ChartCard title="Average Progress">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
              <BarChart2 className="w-10 h-10 text-blue-500 ml-auto mt-2" />
            </ChartCard>
          </motion.div>

          {/* 📊 Charts */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ChartCard title="Weekly Task Trend">
              <LineChart data={lineData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#22c55e" strokeWidth={2} />
                <Line type="monotone" dataKey="in-progress" stroke="#facc15" strokeWidth={2} />
                <Line type="monotone" dataKey="pending" stroke="#f87171" strokeWidth={2} />
              </LineChart>
            </ChartCard>

            <ChartCard title="Task Distribution">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ChartCard>
          </motion.div>
        </>
      )}
    </div>
  );
}
