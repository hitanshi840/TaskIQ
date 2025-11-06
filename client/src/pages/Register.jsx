// // // // function Register() {
// // // //     return <h1 className="text-3xl font-bold text-center mt-10">Register Page</h1>;
// // // //   }
// // // //   export default Register;
  
// // // import { useState } from "react";
// // // import { useNavigate, Link } from "react-router-dom";
// // // import api from "../utils/api";

// // // function Register() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleRegister = async (e) => {
// // //     e.preventDefault();
// // //     setError("");

// // //     try {
// // //       await api.post("/users/register", { name, email, password });
// // //       navigate("/");
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || "Registration failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // //       <div className="bg-white p-8 rounded-2xl shadow-md w-96">
// // //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
// // //           Register for TaskIQ
// // //         </h2>
// // //         {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
// // //         <form onSubmit={handleRegister}>
// // //           <input
// // //             type="text"
// // //             placeholder="Name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             className="w-full p-2 border rounded mb-3"
// // //             required
// // //           />
// // //           <input
// // //             type="email"
// // //             placeholder="Email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             className="w-full p-2 border rounded mb-3"
// // //             required
// // //           />
// // //           <input
// // //             type="password"
// // //             placeholder="Password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="w-full p-2 border rounded mb-3"
// // //             required
// // //           />
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
// // //           >
// // //             Register
// // //           </button>
// // //         </form>
// // //         <p className="text-center text-sm mt-3">
// // //           Already have an account?{" "}
// // //           <Link to="/" className="text-green-600 hover:underline">
// // //             Login
// // //           </Link>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Register;
// // // import toast from "react-hot-toast";
// // // import { useState } from "react";
// // // import api from "../api/axios";
// // // import { useNavigate } from "react-router-dom";

// // // toast.success("Registration successful!");
// // // toast.error("Registration failed!");

// // // function Register() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");

// // //     try {
// // //       const res = await api.post("/auth/register", { name, email, password });
// // //       localStorage.setItem("user", JSON.stringify(res.data.user));
// // //       navigate("/dashboard");
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || "Registration failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center h-screen bg-gray-100">
// // //       <form
// // //         onSubmit={handleSubmit}
// // //         className="bg-white p-8 rounded-2xl shadow-md w-80"
// // //       >
// // //         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
// // //           Register
// // //         </h2>

// // //         {error && (
// // //           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
// // //         )}

// // //         <input
// // //           type="text"
// // //           placeholder="Name"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           className="w-full p-2 mb-3 border rounded-md"
// // //           required
// // //         />

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
// // //           Register
// // //         </button>

// // //         <p
// // //           onClick={() => navigate("/login")}
// // //           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
// // //         >
// // //           Already have an account? Login
// // //         </p>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Register;

// // import { useState } from "react";
// // import api from "../api/axios";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";

// // function Register() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const res = await api.post("/auth/register", { name, email, password });
// //       localStorage.setItem("user", JSON.stringify(res.data.user));

// //       toast.success("Registration successful! 🎉");
// //       navigate("/dashboard");
// //     } catch (err) {
// //       const msg = err.response?.data?.message || "Registration failed";
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
// //           Register
// //         </h2>

// //         {error && (
// //           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
// //         )}

// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           className="w-full p-2 mb-3 border rounded-md"
// //           required
// //         />

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
// //           Register
// //         </button>

// //         <p
// //           onClick={() => navigate("/login")}
// //           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
// //         >
// //           Already have an account? Login
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Register;

// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await api.post("/auth/register", { name, email, password });

//       // ✅ Save full response (token + user)
//       localStorage.setItem("user", JSON.stringify(res.data));

//       toast.success("Registration successful! 🎉");
//       console.log("User registered:", res.data);
//       navigate("/dashboard");
//     } catch (err) {
//       const msg = err.response?.data?.message || "Registration failed";
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
//           Register
//         </h2>

//         {error && (
//           <p className="text-red-500 text-sm text-center mb-4">{error}</p>
//         )}

//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 mb-3 border rounded-md"
//           required
//         />

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
//           Register
//         </button>

//         <p
//           onClick={() => navigate("/login")}
//           className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
//         >
//           Already have an account? Login
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Register;
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/register", { name, email, password });

      // ✅ Save token + user (flat)
      const userData = {
        token: res.data.token,
        ...res.data.user,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Registration successful! 🎉");
      navigate("/dashboard");
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      toast.error(msg);
      setError(msg);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-3 border rounded-md"
          required
        />

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
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-sm mt-3 text-center text-blue-500 cursor-pointer"
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}

export default Register;
