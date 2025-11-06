// // // // // // // // // // // import { Outlet } from "react-router-dom";
// // // // // // // // // // // import Navbar from "./Navbar";

// // // // // // // // // // // function Layout() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
// // // // // // // // // // //       <Navbar />
// // // // // // // // // // //       <main className="pt-6 px-4">
// // // // // // // // // // //         <Outlet />
// // // // // // // // // // //       </main>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default Layout;
// // // // // // // // // // import { Outlet } from "react-router-dom";
// // // // // // // // // // import Sidebar from "./Sidebar";

// // // // // // // // // // function Layout() {
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
// // // // // // // // // //       <Sidebar />
// // // // // // // // // //       <main className="flex-1 p-8 overflow-y-auto">
// // // // // // // // // //         <Outlet />
// // // // // // // // // //       </main>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default Layout;

// // // // // // // // // import { Outlet } from "react-router-dom";
// // // // // // // // // import Sidebar from "./Sidebar";

// // // // // // // // // function Layout() {
// // // // // // // // //   return (
// // // // // // // // //     <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
// // // // // // // // //       <Sidebar />
// // // // // // // // //       <main className="flex-1 ml-64 p-10">
// // // // // // // // //         <div className="bg-white/80 rounded-3xl shadow-lg p-8 backdrop-blur-sm border border-blue-100 min-h-[80vh]">
// // // // // // // // //           <Outlet />
// // // // // // // // //         </div>
// // // // // // // // //       </main>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default Layout;

// // // // // // // // import { Outlet } from "react-router-dom";
// // // // // // // // import Sidebar from "./Sidebar";

// // // // // // // // function Layout() {
// // // // // // // //   return (
// // // // // // // //     <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
// // // // // // // //       <Sidebar />
// // // // // // // //       <main className="flex-1 md:ml-64 p-6 md:p-10 mt-16 md:mt-0">
// // // // // // // //         <div className="bg-white/80 rounded-3xl shadow-lg p-6 md:p-10 backdrop-blur-sm border border-blue-100 min-h-[80vh]">
// // // // // // // //           <Outlet />
// // // // // // // //         </div>
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Layout;

// // // // // // // // import { Outlet } from "react-router-dom";
// // // // // // // // import Sidebar from "./Sidebar";

// // // // // // // // function Layout() {
// // // // // // // //   return (
// // // // // // // //     <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
// // // // // // // //       <Sidebar />
// // // // // // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-300">
// // // // // // // //         <div className="bg-white/80 rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 backdrop-blur-sm border border-blue-100 min-h-[80vh]">
// // // // // // // //           <Outlet />
// // // // // // // //         </div>
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Layout;

// // // // // // // import { Outlet } from "react-router-dom";
// // // // // // // import Sidebar from "./Sidebar";

// // // // // // // function Layout() {
// // // // // // //   return (
// // // // // // //     <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
// // // // // // //       {/* 🌈 Sidebar */}
// // // // // // //       <Sidebar />

// // // // // // //       {/* 📄 Main Content */}
// // // // // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-500">
// // // // // // //         <div className="bg-white/80 dark:bg-gray-800/70 rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 backdrop-blur-md border border-blue-100 dark:border-gray-700 min-h-[80vh] transition-all duration-500">
// // // // // // //           <Outlet />
// // // // // // //         </div>
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Layout;

// // // // // // import { Outlet } from "react-router-dom";
// // // // // // import Sidebar from "./Sidebar";

// // // // // // function Layout() {
// // // // // //   return (
// // // // // //     <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
// // // // // //       {/* Sidebar */}
// // // // // //       <Sidebar />

// // // // // //       {/* Main content area */}
// // // // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-500">
// // // // // //         <div className="rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 backdrop-blur-xl border border-blue-100 dark:border-gray-700 min-h-[80vh] 
// // // // // //                         bg-white/70 dark:bg-gray-900/60 text-gray-800 dark:text-gray-100 transition-all duration-500">
// // // // // //           <Outlet />
// // // // // //         </div>
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Layout;

// // // // // import { Outlet } from "react-router-dom";
// // // // // import Sidebar from "./Sidebar";

// // // // // function Layout() {
// // // // //   return (
// // // // //     <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
// // // // //       {/* Sidebar */}
// // // // //       <Sidebar />

// // // // //       {/* Main content area */}
// // // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-500">
// // // // //         <div className="rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 backdrop-blur-xl border border-blue-100 dark:border-gray-700 min-h-[80vh]
// // // // //                         bg-white/70 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 transition-colors duration-500">
// // // // //           <Outlet />
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Layout;

// // // // import { Outlet } from "react-router-dom";
// // // // import Sidebar from "./Sidebar";

// // // // function Layout() {
// // // //   return (
// // // //     <div className="flex min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
// // // //       <Sidebar />
// // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-500">
// // // //         <div className="rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 backdrop-blur-xl border border-blue-100 dark:border-gray-700 min-h-[80vh]
// // // //                         bg-white/70 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 transition-colors duration-500">
// // // //           <Outlet />
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Layout;

// // // // import { Outlet } from "react-router-dom";
// // // // import Sidebar from "./Sidebar";

// // // // function Layout() {
// // // //   return (
// // // //     <div className="flex min-h-screen transition-colors duration-500 bg-gradient-to-br from-teal-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
// // // //       <Sidebar />
// // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-500">
// // // //         <div className="rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 backdrop-blur-xl border border-blue-100 dark:border-gray-700 min-h-[80vh]
// // // //                         bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 transition-colors duration-500">
// // // //           <Outlet />
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Layout;

// // // // import { Outlet } from "react-router-dom";
// // // // import Sidebar from "./Sidebar";
// // // // import { useState, useEffect } from "react";

// // // // function Layout() {
// // // //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

// // // //   // ✅ Apply the theme globally to <html> and save to localStorage
// // // //   useEffect(() => {
// // // //     document.documentElement.classList.toggle("dark", theme === "dark");
// // // //     localStorage.setItem("theme", theme);
// // // //   }, [theme]);

// // // //   return (
// // // //     <div
// // // //       className={`flex min-h-screen transition-colors duration-700 ease-in-out ${
// // // //         theme === "dark"
// // // //           ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
// // // //           : "bg-gradient-to-br from-teal-50 via-white to-blue-100"
// // // //       }`}
// // // //     >
// // // //       {/* Pass theme control to Sidebar */}
// // // //       <Sidebar theme={theme} setTheme={setTheme} />

// // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-700">
// // // //         <div
// // // //           className={`rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 backdrop-blur-xl border min-h-[80vh] transition-all duration-700 ${
// // // //             theme === "dark"
// // // //               ? "bg-gray-800/80 border-gray-700 text-gray-100"
// // // //               : "bg-white/80 border-blue-100 text-gray-800"
// // // //           }`}
// // // //         >
// // // //           <Outlet />
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Layout;

// // // // import { Outlet } from "react-router-dom";
// // // // import Sidebar from "./Sidebar";
// // // // import { useState, useEffect } from "react";

// // // // function Layout() {
// // // //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

// // // //   // ✅ Apply dark mode to <html> globally
// // // //   useEffect(() => {
// // // //     if (theme === "dark") {
// // // //       document.documentElement.classList.add("dark");
// // // //     } else {
// // // //       document.documentElement.classList.remove("dark");
// // // //     }
// // // //     localStorage.setItem("theme", theme);
// // // //   }, [theme]);

// // // //   return (
// // // //     <div
// // // //       className={`flex min-h-screen transition-colors duration-700 ease-in-out ${
// // // //         theme === "dark"
// // // //           ? "bg-gray-950 text-gray-100"
// // // //           : "bg-gradient-to-br from-teal-50 via-white to-blue-100 text-gray-900"
// // // //       }`}
// // // //     >
// // // //       <Sidebar theme={theme} setTheme={setTheme} />

// // // //       {/* MAIN SECTION */}
// // // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-700">
// // // //         <div
// // // //           className={`rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 border min-h-[80vh] transition-all duration-700 
// // // //             ${theme === "dark"
// // // //               ? "bg-gray-900/90 border-gray-700 text-gray-100"
// // // //               : "bg-white/80 border-blue-100 text-gray-800"} 
// // // //           `}
// // // //         >
// // // //           <Outlet />
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Layout;


// // // import { Outlet } from "react-router-dom";
// // // import Sidebar from "./Sidebar";
// // // import { useState, useEffect } from "react";

// // // function Layout() {
// // //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

// // //   // ✅ Apply dark mode to <html> globally
// // //   useEffect(() => {
// // //     if (theme === "dark") {
// // //       document.documentElement.classList.add("dark");
// // //     } else {
// // //       document.documentElement.classList.remove("dark");
// // //     }
// // //     localStorage.setItem("theme", theme);
// // //   }, [theme]);

// // //   return (
// // //     <div
// // //       className={`flex min-h-screen transition-colors duration-700 ease-in-out ${
// // //         theme === "dark"
// // //           // Outer container is solid dark for the base layer
// // //           ? "bg-gray-950 text-gray-100" 
// // //           : "bg-gradient-to-br from-teal-50 via-white to-blue-100 text-gray-900"
// // //       }`}
// // //     >
// // //       <Sidebar theme={theme} setTheme={setTheme} />

// // //       {/* MAIN SECTION */}
// // //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-700">
// // //         <div
// // //           // 💡 FINAL FIX: Using SOLID backgrounds (removed /90 and /80) 
// // //           // to force the dark mode color to fully cover the content box.
// // //           className={`rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 border min-h-[80vh] transition-all duration-700 
// // //             ${theme === "dark"
// // //               ? "**bg-gray-900** border-gray-700 text-gray-100" 
// // //               : "**bg-white** border-blue-100 text-gray-800"} 
// // //           `}
// // //         >
// // //           <Outlet />
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // export default Layout;

// // import { Outlet } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // import { useState, useEffect } from "react";

// // function Layout() {
// //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

// //   // ✅ Apply dark mode to <html> globally
// //   useEffect(() => {
// //     if (theme === "dark") {
// //       document.documentElement.classList.add("dark");
// //     } else {
// //       document.documentElement.classList.remove("dark");
// //     }
// //     localStorage.setItem("theme", theme);
// //   }, [theme]);

// //   return (
// //     <div
// //       className={`flex min-h-screen transition-colors duration-700 ease-in-out ${
// //         theme === "dark"
// //           ? "bg-gray-950 text-gray-100"
// //           : "bg-gradient-to-br from-teal-50 via-white to-blue-100 text-gray-900"
// //       }`}
// //     >
// //       <Sidebar theme={theme} setTheme={setTheme} />

// //       {/* MAIN SECTION */}
// //       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-700">
// //         <div
// //           className={`rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 border min-h-[80vh] transition-all duration-700 
// //             ${theme === "dark"
// //               ? "bg-gray-900/90 border-gray-700 text-gray-100"
// //               : "bg-white/80 border-blue-100 text-gray-800"} 
// //           `}
// //         >
// //           <Outlet />
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// // export default Layout;

// import { Outlet, Link, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { useState, useEffect } from "react";

// function Layout() {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const location = useLocation();

//   // ✅ Apply dark mode globally
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <div
//       className={`flex min-h-screen transition-colors duration-700 ease-in-out ${
//         theme === "dark"
//           ? "bg-gray-950 text-gray-100"
//           : "bg-gradient-to-br from-teal-50 via-white to-blue-100 text-gray-900"
//       }`}
//     >
//       {/* 🧭 Sidebar */}
//       <Sidebar theme={theme} setTheme={setTheme}>
//         <nav className="flex flex-col space-y-3 mt-10">
//           <Link
//             to="/dashboard"
//             className={`hover:text-indigo-500 transition-colors ${
//               location.pathname === "/dashboard"
//                 ? "font-semibold text-indigo-500"
//                 : ""
//             }`}
//           >
//             Dashboard
//           </Link>

//           <Link
//             to="/profile"
//             className={`hover:text-indigo-500 transition-colors ${
//               location.pathname === "/profile"
//                 ? "font-semibold text-indigo-500"
//                 : ""
//             }`}
//           >
//             Profile
//           </Link>

//           {/* 🧠 AI Assistant Link */}
//           <Link
//             to="/ai"
//             className={`hover:text-indigo-500 transition-colors ${
//               location.pathname === "/ai" ? "font-semibold text-indigo-500" : ""
//             }`}
//           >
//             AI Assistant
//           </Link>
//         </nav>
//       </Sidebar>

//       {/* 🏠 Main Section */}
//       <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-700">
//         <div
//           className={`rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 border min-h-[80vh] transition-all duration-700 
//             ${
//               theme === "dark"
//                 ? "bg-gray-900/90 border-gray-700 text-gray-100"
//                 : "bg-white/80 border-blue-100 text-gray-800"
//             } 
//           `}
//         >
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Layout;


import { Outlet, Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

function Layout() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  // ✅ Apply dark mode globally
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`flex min-h-screen transition-colors duration-700 ease-in-out ${
        theme === "dark"
          ? "bg-gray-950 text-gray-100"
          : "bg-gradient-to-br from-teal-50 via-white to-blue-100 text-gray-900"
      }`}
    >
      {/* 🧭 Sidebar */}
      <Sidebar theme={theme} setTheme={setTheme}>
        <nav className="flex flex-col space-y-3 mt-10">
          {[
            { path: "/dashboard", label: "Dashboard" },
            { path: "/profile", label: "Profile" },
            { path: "/ai", label: "AI Assistant" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-indigo-500 transition-colors ${
                location.pathname === path
                  ? "font-semibold text-indigo-500"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </Sidebar>

      {/* 🏠 Main Section */}
      <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 mt-16 md:mt-0 transition-all duration-700">
        <div
          className={`rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 border min-h-[80vh] transition-all duration-700 
            ${
              theme === "dark"
                ? "bg-gray-900/90 border-gray-700 text-gray-100"
                : "bg-white/80 border-blue-100 text-gray-800"
            } 
          `}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
