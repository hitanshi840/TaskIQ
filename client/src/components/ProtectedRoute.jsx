// // import { Navigate } from "react-router-dom";

// // export default function ProtectedRoute({ children }) {
// //   const user = localStorage.getItem("user"); // temporary mock auth

// //   if (!user) {
// //     return <Navigate to="/login" replace />;
// //   }

// //   return children;
// // }

// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// const ProtectedRoute = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setIsAuth(false);
//         return;
//       }

//       try {
//         // ✅ Verify token with backend
//         const res = await axios.get("http://localhost:5000/api/auth/verify", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (res.data.valid) {
//           setIsAuth(true);
//         } else {
//           setIsAuth(false);
//           localStorage.removeItem("token");
//         }
//       } catch (err) {
//         console.error("Token verification failed:", err.message);
//         setIsAuth(false);
//         localStorage.removeItem("token");
//       }
//     };

//     checkAuth();
//   }, []);

//   if (isAuth === null) return <div>Loading...</div>;
//   return isAuth ? children : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api/axios";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.token) {
        setIsAuth(false);
        return;
      }

      try {
        const res = await api.get("/auth/verify", {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        if (res.data.valid) {
          setIsAuth(true);
        } else {
          localStorage.removeItem("user");
          setIsAuth(false);
        }
      } catch (err) {
        console.error("❌ Token verification failed:", err.message);
        localStorage.removeItem("user");
        setIsAuth(false);
      }
    };

    verifyUser();
  }, []);

  if (isAuth === null) return <div>Loading...</div>;
  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
