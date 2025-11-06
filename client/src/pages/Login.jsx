// // // // // // function Login() {
// // // // // //     return <h1 className="text-3xl font-bold text-center mt-10">Login Page</h1>;
// // // // // //   }
// // // // // //   export default Login;
  
// // // // // import { useState } from "react";
// // // // // import { useNavigate, Link } from "react-router-dom";
// // // // // import api from "../utils/api";

// // // // // function Login() {
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [error, setError] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogin = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setError("");

// // // // //     try {
// // // // //       const res = await api.post("/users/login", { email, password });
// // // // //       localStorage.setItem("token", res.data.token);
// // // // //       navigate("/dashboard");
// // // // //     } catch (err) {
// // // // //       setError(err.response?.data?.message || "Login failed");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // // //       <div className="bg-white p-8 rounded-2xl shadow-md w-96">
// // // // //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
// // // // //           TaskIQ Login
// // // // //         </h2>
// // // // //         {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
// // // // //         <form onSubmit={handleLogin}>
// // // // //           <input
// // // // //             type="email"
// // // // //             placeholder="Email"
// // // // //             value={email}
// // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // //             className="w-full p-2 border rounded mb-3"
// // // // //             required
// // // // //           />
// // // // //           <input
// // // // //             type="password"
// // // // //             placeholder="Password"
// // // // //             value={password}
// // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // //             className="w-full p-2 border rounded mb-3"
// // // // //             required
// // // // //           />
// // // // //           <button
// // // // //             type="submit"
// // // // //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
// // // // //           >
// // // // //             Login
// // // // //           </button>
// // // // //         </form>
// // // // //         <p className="text-center text-sm mt-3">
// // // // //           Don’t have an account?{" "}
// // // // //           <Link to="/register" className="text-blue-600 hover:underline">
// // // // //             Register
// // // // //           </Link>
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Login;


// // // // // import { useState } from "react";
// // // // // import api from "../api/axios";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // function Login() {
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [error, setError] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setError("");

// // // // //     try {
// // // // //       const res = await api.post("/auth/login", { email, password });
// // // // //       localStorage.setItem("user", JSON.stringify(res.data.user));
// // // // //       navigate("/dashboard");
// // // // //     } catch (err) {
// // // // //       setError(err.response?.data?.message || "Login failed");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex items-center justify-center h-screen bg-gray-100">
// // // // //       <form
// // // // //         onSubmit={handleSubmit}
// // // // //         className="bg-white p-8 rounded-2xl shadow-md w-80"
// // // // //       >
// // // // //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
// // // // //           Login
// // // // //         </h2>

// // // // //         {error && (
// // // // //           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
// // // // //         )}

// // // // //         <input
// // // // //           type="email"
// // // // //           placeholder="Email"
// // // // //           value={email}
// // // // //           onChange={(e) => setEmail(e.target.value)}
// // // // //           className="w-full p-2 mb-3 border rounded-md"
// // // // //           required
// // // // //         />

// // // // //         <input
// // // // //           type="password"
// // // // //           placeholder="Password"
// // // // //           value={password}
// // // // //           onChange={(e) => setPassword(e.target.value)}
// // // // //           className="w-full p-2 mb-5 border rounded-md"
// // // // //           required
// // // // //         />

// // // // //         <button
// // // // //           type="submit"
// // // // //           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// // // // //         >
// // // // //           Login
// // // // //         </button>

// // // // //         <p
// // // // //           onClick={() => navigate("/register")}
// // // // //           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
// // // // //         >
// // // // //           Don’t have an account? Register
// // // // //         </p>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Login;

// // // // import { useState } from "react";
// // // // import api from "../api/axios";
// // // // import { useNavigate } from "react-router-dom";
// // // // import toast from "react-hot-toast";

// // // // function Login() {
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");

// // // //     try {
// // // //       const res = await api.post("/auth/login", { email, password });
// // // //       localStorage.setItem("user", JSON.stringify(res.data.user));

// // // //       toast.success("Login successful! 🚀");
// // // //       navigate("/dashboard");
// // // //     } catch (err) {
// // // //       const msg = err.response?.data?.message || "Login failed";
// // // //       toast.error(msg);
// // // //       setError(msg);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex items-center justify-center h-screen bg-gray-100">
// // // //       <form
// // // //         onSubmit={handleSubmit}
// // // //         className="bg-white p-8 rounded-2xl shadow-md w-80"
// // // //       >
// // // //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
// // // //           Login
// // // //         </h2>

// // // //         {error && (
// // // //           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
// // // //         )}

// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           className="w-full p-2 mb-3 border rounded-md"
// // // //           required
// // // //         />

// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           className="w-full p-2 mb-5 border rounded-md"
// // // //           required
// // // //         />

// // // //         <button
// // // //           type="submit"
// // // //           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// // // //         >
// // // //           Login
// // // //         </button>

// // // //         <p
// // // //           onClick={() => navigate("/register")}
// // // //           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
// // // //         >
// // // //           Don’t have an account? Register
// // // //         </p>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;


// // // import { useState } from "react";
// // // import api from "../api/axios";
// // // import { useNavigate } from "react-router-dom";
// // // import toast from "react-hot-toast";

// // // function Login() {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");

// // //     try {
// // //       const res = await api.post("/auth/login", { email, password });

// // //       // ✅ Save entire response (token + user)
// // //       localStorage.setItem("user", JSON.stringify(res.data));

// // //       toast.success("Login successful! 🚀");
// // //       console.log("User logged in:", res.data);
// // //       navigate("/dashboard");
// // //     } catch (err) {
// // //       const msg = err.response?.data?.message || "Login failed";
// // //       toast.error(msg);
// // //       setError(msg);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center h-screen bg-gray-100">
// // //       <form
// // //         onSubmit={handleSubmit}
// // //         className="bg-white p-8 rounded-2xl shadow-md w-80"
// // //       >
// // //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
// // //           Login
// // //         </h2>

// // //         {error && (
// // //           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
// // //         )}

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           className="w-full p-2 mb-3 border rounded-md"
// // //           required
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           className="w-full p-2 mb-5 border rounded-md"
// // //           required
// // //         />

// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// // //         >
// // //           Login
// // //         </button>

// // //         <p
// // //           onClick={() => navigate("/register")}
// // //           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
// // //         >
// // //           Don’t have an account? Register
// // //         </p>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // import { useState } from "react";
// // import api from "../api/axios";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const res = await api.post("/auth/login", { email, password });

// //       // ✅ Save token and user in flat structure
// //       const userData = {
// //         token: res.data.token,
// //         ...res.data.user,
// //       };
// //       localStorage.setItem("user", JSON.stringify(userData));

// //       toast.success("Login successful! 🚀");
// //       navigate("/dashboard");
// //     } catch (err) {
// //       const msg = err.response?.data?.message || "Login failed";
// //       toast.error(msg);
// //       setError(msg);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white p-8 rounded-2xl shadow-md w-80"
// //       >
// //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
// //           Login
// //         </h2>

// //         {error && (
// //           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
// //         )}

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="w-full p-2 mb-3 border rounded-md"
// //           required
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="w-full p-2 mb-5 border rounded-md"
// //           required
// //         />

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// //         >
// //           Login
// //         </button>

// //         <p
// //           onClick={() => navigate("/register")}
// //           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
// //         >
// //           Don’t have an account? Register
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;

// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await api.post("/auth/login", { email, password });

//       // ✅ Ensure token is included
//       const userData = res.data.user;
//       if (userData?.token) {
//         localStorage.setItem("user", JSON.stringify(userData));
//         toast.success("Login successful! 🚀");
//         navigate("/dashboard");
//       } else {
//         throw new Error("Token missing in response");
//       }
//     } catch (err) {
//       const msg = err.response?.data?.message || "Login failed";
//       toast.error(msg);
//       setError(msg);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Login
//         </h2>

//         {error && (
//           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-3 border rounded-md"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-5 border rounded-md"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//         >
//           Login
//         </button>

//         <p
//           onClick={() => navigate("/register")}
//           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
//         >
//           Don’t have an account? Register
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });

      const userData = res.data.user;

      // ✅ Check token existence
      if (!userData?.token) {
        throw new Error("Token missing in response from server");
      }

      // ✅ Save token & user info in localStorage
      localStorage.setItem("user", JSON.stringify(userData));

      // ✅ Immediately apply token to axios defaults
      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

      toast.success("Login successful! 🚀");
      navigate("/dashboard");
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed. Please try again.";
      console.error("❌ Login error:", err);
      setError(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-5 border rounded-md"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        <p
          onClick={() => navigate("/register")}
          className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
        >
          Don’t have an account? Register
        </p>
      </form>
    </div>
  );
}

export default Login;
