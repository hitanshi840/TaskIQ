// // // // // // import axios from "axios";

// // // // // // const api = axios.create({
// // // // // //   baseURL: "http://localhost:5000/api", // your backend base URL
// // // // // // });

// // // // // // export default api;

// // // // // import axios from "axios";

// // // // // const api = axios.create({
// // // // //   baseURL: "http://localhost:5000/api", // adjust port if your backend runs elsewhere
// // // // // });

// // // // // // 🔹 Attach token (from localStorage) automatically to every request
// // // // // api.interceptors.request.use((config) => {
// // // // //   const user = JSON.parse(localStorage.getItem("user"));
// // // // //   if (user?.token) {
// // // // //     config.headers.Authorization = `Bearer ${user.token}`;
// // // // //   }
// // // // //   return config;
// // // // // });

// // // // // export default api;

// // // // // import axios from "axios";

// // // // // const api = axios.create({
// // // // //   baseURL: "http://localhost:5000/api",
// // // // // });

// // // // // // ✅ Automatically attach token if user is logged in
// // // // // api.interceptors.request.use((config) => {
// // // // //   const user = localStorage.getItem("user");
// // // // //   if (user) {
// // // // //     const token = JSON.parse(user).token;
// // // // //     if (token) config.headers.Authorization = `Bearer ${token}`;
// // // // //   }
// // // // //   return config;
// // // // // });

// // // // // export default api;

// // // // // src/api/axios.js
// // // // import axios from "axios";
// // // // import toast from "react-hot-toast";

// // // // // ✅ Create base Axios instance
// // // // const api = axios.create({
// // // //   baseURL: "http://localhost:5000/api", // Change to your deployed backend URL later
// // // //   headers: {
// // // //     "Content-Type": "application/json",
// // // //   },
// // // // });

// // // // // ✅ Attach token from localStorage for every request
// // // // api.interceptors.request.use(
// // // //   (config) => {
// // // //     const user = localStorage.getItem("user");
// // // //     if (user) {
// // // //       const token = JSON.parse(user)?.token;
// // // //       if (token) config.headers.Authorization = `Bearer ${token}`;
// // // //     }
// // // //     return config;
// // // //   },
// // // //   (error) => Promise.reject(error)
// // // // );

// // // // // ✅ Global error handling (useful for expired tokens or 401s)
// // // // api.interceptors.response.use(
// // // //   (response) => response,
// // // //   (error) => {
// // // //     if (error.response?.status === 401) {
// // // //       toast.error("Session expired. Please log in again.");
// // // //       localStorage.removeItem("user");
// // // //       window.location.href = "/login"; // redirect to login if unauthorized
// // // //     } else if (error.response?.data?.message) {
// // // //       toast.error(error.response.data.message);
// // // //     } else {
// // // //       toast.error("Something went wrong. Try again!");
// // // //     }
// // // //     return Promise.reject(error);
// // // //   }
// // // // );

// // // // export default api;

// // // import axios from "axios";
// // // import toast from "react-hot-toast";

// // // // ✅ Create base Axios instance
// // // const api = axios.create({
// // //   baseURL: "http://localhost:5000/api", // Change for production
// // //   headers: {
// // //     "Content-Type": "application/json",
// // //   },
// // // });

// // // // ✅ Automatically attach JWT token from localStorage
// // // api.interceptors.request.use(
// // //   (config) => {
// // //     const user = JSON.parse(localStorage.getItem("user"));
// // //     if (user?.token) {
// // //       config.headers.Authorization = `Bearer ${user.token}`;
// // //     }
// // //     return config;
// // //   },
// // //   (error) => Promise.reject(error)
// // // );

// // // // ✅ Handle errors globally
// // // api.interceptors.response.use(
// // //   (response) => response,
// // //   (error) => {
// // //     if (error.response?.status === 401) {
// // //       toast.error("Session expired. Please log in again.");
// // //       localStorage.removeItem("user");
// // //       window.location.href = "/login";
// // //     } else if (error.response?.data?.message) {
// // //       toast.error(error.response.data.message);
// // //     } else {
// // //       toast.error("Something went wrong. Try again!");
// // //     }
// // //     return Promise.reject(error);
// // //   }
// // // );

// // // export default api;


// // import axios from "axios";
// // import toast from "react-hot-toast";

// // // ✅ Create base Axios instance
// // const api = axios.create({
// //   baseURL: "http://localhost:5000/api", // change this in production
// //   headers: { "Content-Type": "application/json" },
// // });

// // // ✅ Attach token to every request (even after page reload)
// // api.interceptors.request.use(
// //   (config) => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       const { token } = JSON.parse(storedUser);
// //       if (token) {
// //         config.headers.Authorization = `Bearer ${token}`;
// //       }
// //     }
// //     return config;
// //   },
// //   (error) => Promise.reject(error)
// // );

// // // ✅ Global error handler
// // api.interceptors.response.use(
// //   (response) => response,
// //   (error) => {
// //     const status = error.response?.status;
// //     const message = error.response?.data?.message;

// //     if (status === 401) {
// //       toast.error("Session expired. Please log in again.");
// //       localStorage.removeItem("user");
// //       setTimeout(() => {
// //         window.location.href = "/login";
// //       }, 1000);
// //     } else if (message) {
// //       toast.error(message);
// //     } else {
// //       toast.error("Something went wrong. Try again!");
// //     }

// //     return Promise.reject(error);
// //   }
// // );

// // export default api;


// import axios from "axios";
// import toast from "react-hot-toast";

// // ✅ Create base Axios instance
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
//   headers: { "Content-Type": "application/json" },
// });

// // ✅ Attach token to every request (even after reload)
// api.interceptors.request.use(
//   (config) => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const { token } = JSON.parse(storedUser);
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ✅ Global error handler
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const status = error.response?.status;
//     const message = error.response?.data?.message;

//     if (status === 401) {
//       toast.error("Session expired. Please log in again.");
//       localStorage.removeItem("user");
//       setTimeout(() => {
//         if (window.location.pathname !== "/login") {
//           window.location.href = "/login";
//         }
//       }, 1000);
//     } else if (message) {
//       toast.error(message);
//     } else {
//       toast.error("Something went wrong. Try again!");
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;


import axios from "axios";
import toast from "react-hot-toast";

// ✅ Create base Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// ✅ Attach token to every request (even after reload)
api.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { token } = JSON.parse(storedUser);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Global error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === 401) {
      toast.error("Session expired. Please log in again.");
      localStorage.removeItem("user");
      setTimeout(() => {
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }, 1000);
    } else if (message) {
      toast.error(message);
    } else {
      toast.error("Something went wrong. Try again!");
    }

    return Promise.reject(error);
  }
);

export default api;
