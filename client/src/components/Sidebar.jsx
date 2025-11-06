// // // // // // // import { NavLink } from "react-router-dom";
// // // // // // // import {
// // // // // // //   LayoutDashboard,
// // // // // // //   BarChart2,
// // // // // // //   LogOut,
// // // // // // // } from "lucide-react";

// // // // // // // export default function Sidebar() {
// // // // // // //   const navItems = [
// // // // // // //     { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
// // // // // // //     { name: "Analytics", path: "/profile", icon: BarChart2 },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="h-screen w-64 bg-gradient-to-b from-indigo-500 to-purple-600 text-white flex flex-col justify-between shadow-2xl">
// // // // // // //       <div>
// // // // // // //         {/* Logo Section */}
// // // // // // //         <div className="p-6 text-2xl font-bold tracking-wide border-b border-white/20">
// // // // // // //           Task<span className="text-yellow-300">IQ</span>
// // // // // // //         </div>

// // // // // // //         {/* Navigation Links */}
// // // // // // //         <nav className="mt-6 flex flex-col gap-2 px-4">
// // // // // // //           {navItems.map((item) => {
// // // // // // //             const Icon = item.icon;
// // // // // // //             return (
// // // // // // //               <NavLink
// // // // // // //                 key={item.name}
// // // // // // //                 to={item.path}
// // // // // // //                 className={({ isActive }) =>
// // // // // // //                   `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 
// // // // // // //                   ${
// // // // // // //                     isActive
// // // // // // //                       ? "bg-white/20 shadow-md"
// // // // // // //                       : "hover:bg-white/10 hover:shadow-lg hover:shadow-purple-400/20"
// // // // // // //                   }`
// // // // // // //                 }
// // // // // // //               >
// // // // // // //                 <Icon size={20} />
// // // // // // //                 <span className="font-medium">{item.name}</span>
// // // // // // //               </NavLink>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </nav>
// // // // // // //       </div>

// // // // // // //       {/* Logout Section */}
// // // // // // //       <div className="p-4 border-t border-white/20">
// // // // // // //         <button
// // // // // // //           onClick={() => {
// // // // // // //             localStorage.removeItem("token");
// // // // // // //             window.location.href = "/login";
// // // // // // //           }}
// // // // // // //           className="flex items-center gap-3 px-4 py-2 w-full text-left rounded-xl hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30"
// // // // // // //         >
// // // // // // //           <LogOut size={20} />
// // // // // // //           <span>Logout</span>
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // import { LayoutDashboard, BarChart2, LogOut } from "lucide-react";

// // // // // // export default function Sidebar() {
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem("user");
// // // // // //     navigate("/login");
// // // // // //   };

// // // // // //   const linkStyle =
// // // // // //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-white/70 hover:shadow-md";

// // // // // //   const activeStyle =
// // // // // //     "bg-white/90 shadow-md text-blue-600 font-semibold border border-blue-100";

// // // // // //   return (
// // // // // //     <aside className="w-64 h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 border-r border-blue-100 shadow-lg backdrop-blur-md p-6 flex flex-col justify-between fixed">
// // // // // //       <div>
// // // // // //         <h1 className="text-2xl font-extrabold text-blue-700 mb-10 tracking-wide">
// // // // // //           TaskIQ 
// // // // // //         </h1>
// // // // // //         <nav className="flex flex-col gap-3">
// // // // // //           <NavLink
// // // // // //             to="/dashboard"
// // // // // //             className={({ isActive }) =>
// // // // // //               `${linkStyle} ${isActive ? activeStyle : ""}`
// // // // // //             }
// // // // // //           >
// // // // // //             <LayoutDashboard size={20} />
// // // // // //             Dashboard
// // // // // //           </NavLink>

// // // // // //           <NavLink
// // // // // //             to="/profile"
// // // // // //             className={({ isActive }) =>
// // // // // //               `${linkStyle} ${isActive ? activeStyle : ""}`
// // // // // //             }
// // // // // //           >
// // // // // //             <BarChart2 size={20} />
// // // // // //             Analytics
// // // // // //           </NavLink>
// // // // // //         </nav>
// // // // // //       </div>

// // // // // //       <button
// // // // // //         onClick={handleLogout}
// // // // // //         className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/70 hover:bg-red-50 px-4 py-2 rounded-lg shadow-sm"
// // // // // //       >
// // // // // //         <LogOut size={18} />
// // // // // //         Logout
// // // // // //       </button>
// // // // // //     </aside>
// // // // // //   );
// // // // // // }

// // // // // import { useState } from "react";
// // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // import { LayoutDashboard, BarChart2, LogOut, Menu, X } from "lucide-react";

// // // // // export default function Sidebar() {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("user");
// // // // //     navigate("/login");
// // // // //   };

// // // // //   const linkStyle =
// // // // //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-white/70 hover:shadow-md";
// // // // //   const activeStyle =
// // // // //     "bg-white/90 shadow-md text-blue-600 font-semibold border border-blue-100";

// // // // //   return (
// // // // //     <>
// // // // //       {/* 🧭 Mobile Header */}
// // // // //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-teal-100 via-white to-blue-100 shadow-md p-4 flex justify-between items-center">
// // // // //         <h1 className="text-xl font-bold text-blue-700">TaskIQ ✨</h1>
// // // // //         <button
// // // // //           onClick={() => setIsOpen(!isOpen)}
// // // // //           className="text-blue-700 hover:text-blue-900 transition"
// // // // //         >
// // // // //           {isOpen ? <X size={24} /> : <Menu size={24} />}
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* 🧊 Sidebar */}
// // // // //       <aside
// // // // //         className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-teal-50 via-white to-blue-50 border-r border-blue-100 shadow-lg backdrop-blur-md p-6 flex flex-col justify-between z-30 transition-transform duration-300 ${
// // // // //           isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
// // // // //         }`}
// // // // //       >
// // // // //         <div>
// // // // //           <h1 className="hidden md:block text-2xl font-extrabold text-blue-700 mb-10 tracking-wide">
// // // // //             TaskIQ ✨
// // // // //           </h1>
// // // // //           <nav className="flex flex-col gap-3">
// // // // //             <NavLink
// // // // //               to="/dashboard"
// // // // //               onClick={() => setIsOpen(false)}
// // // // //               className={({ isActive }) =>
// // // // //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// // // // //               }
// // // // //             >
// // // // //               <LayoutDashboard size={20} />
// // // // //               Dashboard
// // // // //             </NavLink>

// // // // //             <NavLink
// // // // //               to="/profile"
// // // // //               onClick={() => setIsOpen(false)}
// // // // //               className={({ isActive }) =>
// // // // //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// // // // //               }
// // // // //             >
// // // // //               <BarChart2 size={20} />
// // // // //               Analytics
// // // // //             </NavLink>
// // // // //           </nav>
// // // // //         </div>

// // // // //         <button
// // // // //           onClick={handleLogout}
// // // // //           className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/70 hover:bg-red-50 px-4 py-2 rounded-lg shadow-sm"
// // // // //         >
// // // // //           <LogOut size={18} />
// // // // //           Logout
// // // // //         </button>
// // // // //       </aside>

// // // // //       {/* 🕊️ Overlay when sidebar is open (mobile only) */}
// // // // //       {isOpen && (
// // // // //         <div
// // // // //           onClick={() => setIsOpen(false)}
// // // // //           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
// // // // //         ></div>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }

// // // // import { useState } from "react";
// // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // import { LayoutDashboard, BarChart2, LogOut, Menu, X } from "lucide-react";

// // // // export default function Sidebar() {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("user");
// // // //     navigate("/login");
// // // //   };

// // // //   const linkStyle =
// // // //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-white/80 hover:shadow-md";
// // // //   const activeStyle =
// // // //     "bg-white/90 shadow-md text-blue-600 font-semibold border border-blue-100";

// // // //   return (
// // // //     <>
// // // //       {/* 🌈 Top bar for mobile */}
// // // //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-teal-100 via-white to-blue-100 shadow-md p-4 flex justify-between items-center">
// // // //         <h1 className="text-xl font-bold text-blue-700 tracking-wide">
// // // //           TaskIQ ✨
// // // //         </h1>
// // // //         <button
// // // //           onClick={() => setIsOpen(!isOpen)}
// // // //           className="text-blue-700 hover:text-blue-900 transition"
// // // //         >
// // // //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// // // //         </button>
// // // //       </div>

// // // //       {/* 🧭 Sidebar */}
// // // //       <aside
// // // //         className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-teal-50 via-white to-blue-50 border-r border-blue-100 shadow-lg p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// // // //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
// // // //       `}
// // // //       >
// // // //         {/* Sidebar Content */}
// // // //         <div>
// // // //           <h1 className="hidden md:block text-2xl font-extrabold text-blue-700 mb-10">
// // // //             TaskIQ ✨
// // // //           </h1>

// // // //           <nav className="flex flex-col gap-3">
// // // //             <NavLink
// // // //               to="/dashboard"
// // // //               onClick={() => setIsOpen(false)}
// // // //               className={({ isActive }) =>
// // // //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// // // //               }
// // // //             >
// // // //               <LayoutDashboard size={20} />
// // // //               Dashboard
// // // //             </NavLink>

// // // //             <NavLink
// // // //               to="/profile"
// // // //               onClick={() => setIsOpen(false)}
// // // //               className={({ isActive }) =>
// // // //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// // // //               }
// // // //             >
// // // //               <BarChart2 size={20} />
// // // //               Analytics
// // // //             </NavLink>
// // // //           </nav>
// // // //         </div>

// // // //         <button
// // // //           onClick={handleLogout}
// // // //           className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/70 hover:bg-red-50 px-4 py-2 rounded-lg shadow-sm"
// // // //         >
// // // //           <LogOut size={18} />
// // // //           Logout
// // // //         </button>
// // // //       </aside>

// // // //       {/* 🕊️ Overlay when sidebar is open (mobile only) */}
// // // //       {isOpen && (
// // // //         <div
// // // //           onClick={() => setIsOpen(false)}
// // // //           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
// // // //         ></div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }

// // // import { useState } from "react";
// // // import { NavLink, useNavigate } from "react-router-dom";
// // // import { LayoutDashboard, BarChart2, LogOut, Menu, X } from "lucide-react";

// // // export default function Sidebar() {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("user");
// // //     navigate("/login");
// // //   };

// // //   const linkStyle =
// // //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-white/50 hover:shadow-lg hover:backdrop-blur-md";
// // //   const activeStyle =
// // //     "bg-white/60 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 font-semibold border border-blue-200 backdrop-blur-lg";

// // //   return (
// // //     <>
// // //       {/* 🌈 Top bar for mobile */}
// // //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-100 via-white to-teal-100 shadow-md p-4 flex justify-between items-center backdrop-blur-md bg-opacity-60">
// // //         <h1 className="text-xl font-bold text-blue-700 tracking-wide drop-shadow-sm">
// // //           TaskIQ ✨
// // //         </h1>
// // //         <button
// // //           onClick={() => setIsOpen(!isOpen)}
// // //           className="text-blue-700 hover:text-blue-900 transition"
// // //         >
// // //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// // //         </button>
// // //       </div>

// // //       {/* 🧭 Glassy Sidebar */}
// // //       <aside
// // //         className={`fixed top-0 left-0 h-full w-64 bg-white/40 backdrop-blur-xl border-r border-white/50 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// // //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
// // //       `}
// // //       >
// // //         {/* Sidebar Content */}
// // //         <div>
// // //           <h1 className="hidden md:block text-2xl font-extrabold text-blue-700 mb-10 drop-shadow-sm">
// // //             TaskIQ ✨
// // //           </h1>

// // //           <nav className="flex flex-col gap-3">
// // //             <NavLink
// // //               to="/dashboard"
// // //               onClick={() => setIsOpen(false)}
// // //               className={({ isActive }) =>
// // //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// // //               }
// // //             >
// // //               <LayoutDashboard size={20} />
// // //               Dashboard
// // //             </NavLink>

// // //             <NavLink
// // //               to="/profile"
// // //               onClick={() => setIsOpen(false)}
// // //               className={({ isActive }) =>
// // //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// // //               }
// // //             >
// // //               <BarChart2 size={20} />
// // //               Analytics
// // //             </NavLink>
// // //           </nav>
// // //         </div>

// // //         <button
// // //           onClick={handleLogout}
// // //           className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/50 hover:bg-red-50 px-4 py-2 rounded-lg shadow-md backdrop-blur-md border border-red-100"
// // //         >
// // //           <LogOut size={18} />
// // //           Logout
// // //         </button>
// // //       </aside>

// // //       {/* 🕊️ Overlay for mobile */}
// // //       {isOpen && (
// // //         <div
// // //           onClick={() => setIsOpen(false)}
// // //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
// // //         ></div>
// // //       )}
// // //     </>
// // //   );
// // // }


// // import { useState, useEffect } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   BarChart2,
// //   LogOut,
// //   Menu,
// //   X,
// //   User,
// // } from "lucide-react";

// // export default function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

// //   // 🔹 Load user data from localStorage
// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     setUser(storedUser);
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   const linkStyle =
// //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-white/50 hover:shadow-lg hover:backdrop-blur-md";
// //   const activeStyle =
// //     "bg-white/60 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 font-semibold border border-blue-200 backdrop-blur-lg";

// //   return (
// //     <>
// //       {/* 🌈 Top bar for mobile */}
// //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-100 via-white to-teal-100 shadow-md p-4 flex justify-between items-center backdrop-blur-md bg-opacity-60">
// //         <h1 className="text-xl font-bold text-blue-700 tracking-wide drop-shadow-sm">
// //           TaskIQ ✨
// //         </h1>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-blue-700 hover:text-blue-900 transition"
// //         >
// //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* 🧭 Glassy Sidebar */}
// //       <aside
// //         className={`fixed top-0 left-0 h-full w-64 bg-white/40 backdrop-blur-xl border-r border-white/50 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
// //       `}
// //       >
// //         <div>
// //           {/* 👤 User Info Section */}
// //           <div className="flex flex-col items-center text-center mb-10">
// //             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center shadow-lg">
// //               <User size={40} className="text-white" />
// //             </div>
// //             <h2 className="mt-3 text-lg font-semibold text-blue-800">
// //               Hey, {user?.name || "Hitanshi"} 👋
// //             </h2>
// //             <p className="text-sm text-gray-500">Welcome back!</p>
// //           </div>

// //           {/* Navigation Links */}
// //           <nav className="flex flex-col gap-3">
// //             <NavLink
// //               to="/dashboard"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <LayoutDashboard size={20} />
// //               Dashboard
// //             </NavLink>

// //             <NavLink
// //               to="/profile"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <BarChart2 size={20} />
// //               Analytics
// //             </NavLink>
// //           </nav>
// //         </div>

// //         {/* Logout Button */}
// //         <button
// //           onClick={handleLogout}
// //           className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/50 hover:bg-red-50 px-4 py-2 rounded-lg shadow-md backdrop-blur-md border border-red-100"
// //         >
// //           <LogOut size={18} />
// //           Logout
// //         </button>
// //       </aside>

// //       {/* 🕊️ Overlay for mobile */}
// //       {isOpen && (
// //         <div
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
// //         ></div>
// //       )}
// //     </>
// //   );
// // }

// // import { useState, useEffect } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   BarChart2,
// //   LogOut,
// //   Menu,
// //   X,
// //   User,
// //   Sun,
// //   Moon,
// // } from "lucide-react";

// // export default function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
// //   const navigate = useNavigate();

// //   // 🌗 Apply theme to <html> tag
// //   useEffect(() => {
// //     document.documentElement.classList.toggle("dark", theme === "dark");
// //     localStorage.setItem("theme", theme);
// //   }, [theme]);

// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     setUser(storedUser);
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   const toggleTheme = () =>
// //     setTheme((prev) => (prev === "light" ? "dark" : "light"));

// //   const linkStyle =
// //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-lg hover:backdrop-blur-md";
// //   const activeStyle =
// //     "bg-white/60 dark:bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-gray-700 backdrop-blur-lg";

// //   return (
// //     <>
// //       {/* 🌈 Top bar for mobile */}
// //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-100 via-white to-teal-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md p-4 flex justify-between items-center backdrop-blur-md bg-opacity-60 transition-all duration-500">
// //         <h1 className="text-xl font-bold text-blue-700 dark:text-blue-200 tracking-wide drop-shadow-sm">
// //           TaskIQ ✨
// //         </h1>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-blue-700 dark:text-blue-200 hover:text-blue-900 transition"
// //         >
// //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* 🧭 Glassy Sidebar */}
// //       <aside
// //         className={`fixed top-0 left-0 h-full w-64 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-r border-white/50 dark:border-gray-800 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
// //       `}
// //       >
// //         <div>
// //           {/* 👤 User Info Section */}
// //           <div className="flex flex-col items-center text-center mb-10">
// //             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center shadow-lg">
// //               <User size={40} className="text-white" />
// //             </div>
// //             <h2 className="mt-3 text-lg font-semibold text-blue-800 dark:text-blue-200">
// //               Hey, {user?.name || "Hitanshi"} 👋
// //             </h2>
// //             <p className="text-sm text-gray-500 dark:text-gray-400">
// //               Welcome back!
// //             </p>
// //           </div>

// //           {/* Navigation Links */}
// //           <nav className="flex flex-col gap-3">
// //             <NavLink
// //               to="/dashboard"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <LayoutDashboard size={20} />
// //               Dashboard
// //             </NavLink>

// //             <NavLink
// //               to="/profile"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <BarChart2 size={20} />
// //               Analytics
// //             </NavLink>
// //           </nav>
// //         </div>

// //         {/* 🌗 Footer (Theme + Logout) */}
// //         <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700 mt-8">
// //           {/* Theme Toggle */}
// //           <button
// //             onClick={toggleTheme}
// //             className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 border border-blue-100 dark:border-gray-700 rounded-lg shadow-sm text-gray-700 dark:text-gray-200 hover:shadow-md transition-all duration-500"
// //           >
// //             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
// //             <span className="text-sm">
// //               {theme === "light" ? "Dark Mode" : "Light Mode"}
// //             </span>
// //           </button>

// //           {/* Logout Button */}
// //           <button
// //             onClick={handleLogout}
// //             className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 hover:bg-red-50 dark:hover:bg-red-900/30 px-3 py-2 rounded-lg shadow-md border border-red-100 dark:border-red-800"
// //           >
// //             <LogOut size={18} />
// //           </button>
// //         </div>
// //       </aside>

// //       {/* 🕊️ Overlay for mobile */}
// //       {isOpen && (
// //         <div
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-all duration-500"
// //         ></div>
// //       )}
// //     </>
// //   );
// // }

// // import { useState, useEffect } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   BarChart2,
// //   LogOut,
// //   Menu,
// //   X,
// //   User,
// //   Sun,
// //   Moon,
// // } from "lucide-react";

// // export default function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const [theme, setTheme] = useState("light");
// //   const navigate = useNavigate();

// //   // 🔹 Load theme & user from localStorage
// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     setUser(storedUser);

// //     const savedTheme = localStorage.getItem("theme") || "light";
// //     setTheme(savedTheme);
// //     document.documentElement.classList.toggle("dark", savedTheme === "dark");
// //   }, []);

// //   const handleThemeToggle = () => {
// //     const newTheme = theme === "light" ? "dark" : "light";
// //     setTheme(newTheme);
// //     localStorage.setItem("theme", newTheme);
// //     document.documentElement.classList.toggle("dark", newTheme === "dark");
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   const linkStyle =
// //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700 hover:shadow-lg";
// //   const activeStyle =
// //     "bg-white/60 dark:bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-gray-700";

// //   return (
// //     <>
// //       {/* 🌈 Top bar for mobile */}
// //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-100 via-white to-teal-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md p-4 flex justify-between items-center backdrop-blur-md bg-opacity-60">
// //         <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300 tracking-wide">
// //           TaskIQ ✨
// //         </h1>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-white transition"
// //         >
// //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* 🧭 Sidebar */}
// //       <aside
// //         className={`fixed top-0 left-0 h-full w-64 bg-white/40 dark:bg-gray-900/70 backdrop-blur-xl border-r border-white/50 dark:border-gray-700 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
// //       `}
// //       >
// //         <div>
// //           {/* 👤 User Info */}
// //           <div className="flex flex-col items-center text-center mb-10">
// //             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center shadow-lg">
// //               <User size={40} className="text-white" />
// //             </div>
// //             <h2 className="mt-3 text-lg font-semibold text-blue-800 dark:text-blue-300">
// //               Hey, {user?.name || "Hitanshi"} 👋
// //             </h2>
// //             <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back!</p>
// //           </div>

// //           {/* 🔗 Nav Links */}
// //           <nav className="flex flex-col gap-3">
// //             <NavLink
// //               to="/dashboard"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <LayoutDashboard size={20} />
// //               Dashboard
// //             </NavLink>

// //             <NavLink
// //               to="/profile"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <BarChart2 size={20} />
// //               Analytics
// //             </NavLink>
// //           </nav>
// //         </div>

// //         {/* 🌗 Theme Toggle + Logout */}
// //         <div className="flex flex-col gap-3">
// //           <button
// //             onClick={handleThemeToggle}
// //             className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
// //           >
// //             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
// //             {theme === "light" ? "Dark Mode" : "Light Mode"}
// //           </button>

// //           <button
// //             onClick={handleLogout}
// //             className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 px-4 py-2 rounded-lg shadow-md backdrop-blur-md border border-red-100 dark:border-red-800"
// //           >
// //             <LogOut size={18} />
// //             Logout
// //           </button>
// //         </div>
// //       </aside>

// //       {/* Overlay for mobile */}
// //       {isOpen && (
// //         <div
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
// //         ></div>
// //       )}
// //     </>
// //   );
// // }

// // import { useState, useEffect } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   BarChart2,
// //   LogOut,
// //   Menu,
// //   X,
// //   User,
// //   Sun,
// //   Moon,
// // } from "lucide-react";

// // export default function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const [theme, setTheme] = useState("light");
// //   const navigate = useNavigate();

// //   // 🔹 Load user and theme on mount
// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     setUser(storedUser);

// //     const savedTheme = localStorage.getItem("theme") || "light";
// //     setTheme(savedTheme);

// //     // ✅ Apply theme to <html> globally
// //     document.documentElement.classList.toggle("dark", savedTheme === "dark");
// //   }, []);

// //   // 🔄 Theme toggle
// //   const handleThemeToggle = () => {
// //     const newTheme = theme === "light" ? "dark" : "light";
// //     setTheme(newTheme);
// //     localStorage.setItem("theme", newTheme);
// //     document.documentElement.classList.toggle("dark", newTheme === "dark");
// //   };

// //   // 🚪 Logout handler
// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   // 🌈 Link styles
// //   const linkStyle =
// //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700 hover:shadow-lg";
// //   const activeStyle =
// //     "bg-white/60 dark:bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-gray-700";

// //   return (
// //     <>
// //       {/* 🌈 Mobile Topbar */}
// //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-100 via-white to-teal-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md p-4 flex justify-between items-center backdrop-blur-md bg-opacity-60">
// //         <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300 tracking-wide">
// //           TaskIQ ✨
// //         </h1>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-white transition"
// //         >
// //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* 🧭 Glassy Sidebar */}
// //       <aside
// //         className={`fixed top-0 left-0 h-full w-64 bg-white/40 dark:bg-gray-900/70 backdrop-blur-xl border-r border-white/50 dark:border-gray-700 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// //       >
// //         <div>
// //           {/* 👤 User Info */}
// //           <div className="flex flex-col items-center text-center mb-10">
// //             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center shadow-lg">
// //               <User size={40} className="text-white" />
// //             </div>
// //             <h2 className="mt-3 text-lg font-semibold text-blue-800 dark:text-blue-300">
// //               Hey, {user?.name || "Hitanshi"} 👋
// //             </h2>
// //             <p className="text-sm text-gray-500 dark:text-gray-400">
// //               Welcome back!
// //             </p>
// //           </div>

// //           {/* 🔗 Nav Links */}
// //           <nav className="flex flex-col gap-3">
// //             <NavLink
// //               to="/dashboard"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <LayoutDashboard size={20} />
// //               Dashboard
// //             </NavLink>

// //             <NavLink
// //               to="/profile"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <BarChart2 size={20} />
// //               Analytics
// //             </NavLink>
// //           </nav>
// //         </div>

// //         {/* 🌗 Theme Toggle + Logout */}
// //         <div className="flex flex-col gap-3">
// //           <button
// //             onClick={handleThemeToggle}
// //             className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
// //           >
// //             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
// //             {theme === "light" ? "Dark Mode" : "Light Mode"}
// //           </button>

// //           <button
// //             onClick={handleLogout}
// //             className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 px-4 py-2 rounded-lg shadow-md backdrop-blur-md border border-red-100 dark:border-red-800"
// //           >
// //             <LogOut size={18} />
// //             Logout
// //           </button>
// //         </div>
// //       </aside>

// //       {/* 🕊️ Overlay for Mobile */}
// //       {isOpen && (
// //         <div
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
// //         ></div>
// //       )}
// //     </>
// //   );
// // }

// // import { useState, useEffect } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   BarChart2,
// //   LogOut,
// //   Menu,
// //   X,
// //   User,
// //   Sun,
// //   Moon,
// // } from "lucide-react";

// // export default function Sidebar({ theme, setTheme }) {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

// //   // 🔹 Load user data on mount
// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     setUser(storedUser);
// //   }, []);

// //   // 🔄 Toggle theme (sends update to Layout)
// //   const handleThemeToggle = () => {
// //     const newTheme = theme === "light" ? "dark" : "light";
// //     setTheme(newTheme);
// //   };

// //   // 🚪 Logout
// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   // 🎨 Link styles
// //   const linkStyle =
// //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700 hover:shadow-lg";
// //   const activeStyle =
// //     "bg-white/60 dark:bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-gray-700";

// //   return (
// //     <>
// //       {/* 🌈 Mobile Header */}
// //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-100 via-white to-teal-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md p-4 flex justify-between items-center backdrop-blur-md bg-opacity-60">
// //         <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300 tracking-wide">
// //           TaskIQ ✨
// //         </h1>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-white transition"
// //         >
// //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* 🧭 Sidebar */}
// //       <aside
// //         className={`fixed top-0 left-0 h-full w-64 bg-white/40 dark:bg-gray-900/70 backdrop-blur-xl border-r border-white/50 dark:border-gray-700 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// //       >
// //         <div>
// //           {/* 👤 User Info */}
// //           <div className="flex flex-col items-center text-center mb-10">
// //             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center shadow-lg">
// //               <User size={40} className="text-white" />
// //             </div>
// //             <h2 className="mt-3 text-lg font-semibold text-blue-800 dark:text-blue-300">
// //               Hey, {user?.name || "Hitanshi"} 👋
// //             </h2>
// //             <p className="text-sm text-gray-500 dark:text-gray-400">
// //               Welcome back!
// //             </p>
// //           </div>

// //           {/* 🔗 Navigation */}
// //           <nav className="flex flex-col gap-3">
// //             <NavLink
// //               to="/dashboard"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <LayoutDashboard size={20} />
// //               Dashboard
// //             </NavLink>

// //             <NavLink
// //               to="/profile"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <BarChart2 size={20} />
// //               Analytics
// //             </NavLink>
// //           </nav>
// //         </div>

// //         {/* 🌗 Theme + Logout */}
// //         <div className="flex flex-col gap-3">
// //           <button
// //             onClick={handleThemeToggle}
// //             className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
// //           >
// //             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
// //             {theme === "light" ? "Dark Mode" : "Light Mode"}
// //           </button>

// //           <button
// //             onClick={handleLogout}
// //             className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 px-4 py-2 rounded-lg shadow-md backdrop-blur-md border border-red-100 dark:border-red-800"
// //           >
// //             <LogOut size={18} />
// //             Logout
// //           </button>
// //         </div>
// //       </aside>

// //       {/* Overlay for mobile */}
// //       {isOpen && (
// //         <div
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
// //         ></div>
// //       )}
// //     </>
// //   );
// // }

// // import { useState, useEffect } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   BarChart2,
// //   LogOut,
// //   Menu,
// //   X,
// //   User,
// //   Sun,
// //   Moon,
// // } from "lucide-react";

// // export default function Sidebar({ theme, setTheme }) {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

// //   // 🔹 Load user data on mount
// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     setUser(storedUser);
// //   }, []);

// //   // 🔄 Toggle theme (syncs with Layout)
// //   const handleThemeToggle = () => {
// //     const newTheme = theme === "light" ? "dark" : "light";
// //     setTheme(newTheme);
// //   };

// //   // 🚪 Logout
// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   // 🎨 Styles
// //   const linkStyle =
// //     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700 hover:shadow-lg";
// //   const activeStyle =
// //     "bg-white/60 dark:bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-gray-700";

// //   return (
// //     <>
// //       {/* 🌈 Mobile Header */}
// //       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-100 via-white to-teal-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md p-4 flex justify-between items-center backdrop-blur-md bg-opacity-60">
// //         <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300 tracking-wide">
// //           TaskIQ ✨
// //         </h1>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-white transition"
// //         >
// //           {isOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* 🧭 Sidebar */}
// //       <aside
// //         className={`fixed top-0 left-0 h-full w-64 bg-white/40 dark:bg-gray-900/70 backdrop-blur-xl border-r border-white/50 dark:border-gray-700 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
// //         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
// //       >
// //         <div>
// //           {/* 👤 User Info */}
// //           <div className="flex flex-col items-center text-center mb-10">
// //             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center shadow-lg">
// //               <User size={40} className="text-white" />
// //             </div>
// //             <h2 className="mt-3 text-lg font-semibold text-blue-800 dark:text-blue-300">
// //               Hey, {user?.name || "Hitanshi"} 👋
// //             </h2>
// //             <p className="text-sm text-gray-500 dark:text-gray-400">
// //               Welcome back!
// //             </p>
// //           </div>

// //           {/* 🔗 Navigation */}
// //           <nav className="flex flex-col gap-3">
// //             <NavLink
// //               to="/dashboard"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <LayoutDashboard size={20} />
// //               Dashboard
// //             </NavLink>

// //             <NavLink
// //               to="/profile"
// //               onClick={() => setIsOpen(false)}
// //               className={({ isActive }) =>
// //                 `${linkStyle} ${isActive ? activeStyle : ""}`
// //               }
// //             >
// //               <BarChart2 size={20} />
// //               Analytics
// //             </NavLink>
// //           </nav>
// //         </div>

// //         {/* 🌗 Theme + Logout */}
// //         <div className="flex flex-col gap-3">
// //           <button
// //             onClick={handleThemeToggle}
// //             className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
// //           >
// //             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
// //             {theme === "light" ? "Dark Mode" : "Light Mode"}
// //           </button>

// //           <button
// //             onClick={handleLogout}
// //             className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white/50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 px-4 py-2 rounded-lg shadow-md backdrop-blur-md border border-red-100 dark:border-red-800"
// //           >
// //             <LogOut size={18} />
// //             Logout
// //           </button>
// //         </div>
// //       </aside>

// //       {/* Overlay for mobile */}
// //       {isOpen && (
// //         <div
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
// //         ></div>
// //       )}
// //     </>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   BarChart2,
//   LogOut,
//   Menu,
//   X,
//   User,
//   Sun,
//   Moon,
// } from "lucide-react";

// export default function Sidebar({ theme, setTheme }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // 🔹 Load user data on mount
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(storedUser);
//   }, []);

//   // 🔄 Toggle theme (syncs with Layout)
//   const handleThemeToggle = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//   };

//   // 🚪 Logout
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   // 🎨 Styles - Adjusted link styles to be more solid/less translucent on hover
//   const linkStyle =
//     "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg";
//   const activeStyle =
//     "bg-gray-100 dark:bg-gray-800 shadow-[0_0_15px_rgba(56,189,248,0.5)] text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-gray-700";

//   return (
//     <>
//       {/* 🌈 Mobile Header - Use solid backgrounds and removed backdrop-blur */}
//       <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center transition-colors duration-300">
//         <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300 tracking-wide">
//           TaskIQ ✨
//         </h1>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-white transition"
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* 🧭 Sidebar - Use SOLID backgrounds, removed backdrop-blur */}
//       <aside
//         className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
//         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         <div>
//           {/* 👤 User Info */}
//           <div className="flex flex-col items-center text-center mb-10">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center shadow-lg">
//               <User size={40} className="text-white" />
//             </div>
//             <h2 className="mt-3 text-lg font-semibold text-blue-800 dark:text-blue-300">
//               Hey, {user?.name || "Hitanshi"} 👋
//             </h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               Welcome back!
//             </p>
//           </div>

//           {/* 🔗 Navigation */}
//           <nav className="flex flex-col gap-3">
//             <NavLink
//               to="/dashboard"
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `${linkStyle} ${isActive ? activeStyle : ""}`
//               }
//             >
//               <LayoutDashboard size={20} />
//               Dashboard
//             </NavLink>

//             <NavLink
//               to="/profile"
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `${linkStyle} ${isActive ? activeStyle : ""}`
//               }
//             >
//               <BarChart2 size={20} />
//               Analytics
//             </NavLink>
//           </nav>
//         </div>

//         {/* 🌗 Theme + Logout */}
//         <div className="flex flex-col gap-3">
//           <button
//             onClick={handleThemeToggle}
//             className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
//           >
//             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//             {theme === "light" ? "Dark Mode" : "Light Mode"}
//           </button>

//           <button
//             onClick={handleLogout}
//             // Use solid backgrounds, removed backdrop-blur
//             className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 px-4 py-2 rounded-lg shadow-md border border-red-100 dark:border-red-800"
//           >
//             <LogOut size={18} />
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
//         ></div>
//       )}
//     </>
//   );
// }


import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Brain,
} from "lucide-react";

export default function Sidebar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 🔹 Load user data on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // 🔄 Toggle theme
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  // 🎨 Link styles
  const linkStyle =
    "flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg";
  const activeStyle =
    "bg-indigo-500 text-white shadow-lg font-semibold border border-indigo-400";

  return (
    <>
      {/* 🌈 Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center transition-colors duration-300">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-wide">
          TaskIQ ✨
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-white transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🧭 Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-2xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div>
          {/* 👤 User Info */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center shadow-lg">
              <User size={40} className="text-white" />
            </div>
            <h2 className="mt-3 text-lg font-semibold text-indigo-700 dark:text-indigo-300">
              Hey, {user?.name || "Hitanshi"} 👋
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome back!
            </p>
          </div>

          {/* 🔗 Navigation */}
          <nav className="flex flex-col gap-3">
            <NavLink
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>

            <NavLink
              to="/profile"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }
            >
              <User size={20} />
              Profile
            </NavLink>

            {/* 🧠 AI Assistant */}
            <NavLink
              to="/ai"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkStyle} ${
                  isActive
                    ? "bg-green-500 text-white shadow-lg font-semibold border border-green-400"
                    : "hover:bg-green-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <Brain size={20} />
              AI Assistant
            </NavLink>
          </nav>
        </div>

        {/* 🌗 Theme + Logout */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleThemeToggle}
            className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 justify-center text-red-500 hover:text-red-600 transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 px-4 py-2 rounded-lg shadow-md border border-red-100 dark:border-red-800"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}
    </>
  );
}
