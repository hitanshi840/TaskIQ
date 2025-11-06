// // // import jwt from "jsonwebtoken";
// // // import User from "../models/User.js";

// // // const protect = async (req, res, next) => {
// // //   let token;

// // //   // Check if token is sent in headers
// // //   if (
// // //     req.headers.authorization &&
// // //     req.headers.authorization.startsWith("Bearer")
// // //   ) {
// // //     try {
// // //       token = req.headers.authorization.split(" ")[1];

// // //       // Verify token
// // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);

// // //       // Find user by decoded id
// // //       req.user = await User.findById(decoded.id).select("-password");

// // //       next();
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(401).json({ message: "Not authorized, token failed" });
// // //     }
// // //   }

// // //   if (!token) {
// // //     res.status(401).json({ message: "Not authorized, no token" });
// // //   }
// // // };

// // // export default protect;

// // import jwt from "jsonwebtoken";
// // import User from "../models/User.js";

// // export const protect = async (req, res, next) => {
// //   let token;

// //   // Check for token in header
// //   if (
// //     req.headers.authorization &&
// //     req.headers.authorization.startsWith("Bearer")
// //   ) {
// //     try {
// //       token = req.headers.authorization.split(" ")[1];

// //       // Verify token
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //       // Find user by ID (without password)
// //       req.user = await User.findById(decoded.id).select("-password");

// //       next();
// //     } catch (error) {
// //       console.error("Auth error:", error);
// //       return res.status(401).json({ message: "Not authorized, token failed" });
// //     }
// //   }

// //   if (!token) {
// //     return res.status(401).json({ message: "Not authorized, no token" });
// //   }
// // };

// import jwt from "jsonwebtoken";
// import User from "../models/User.js";


// export const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id).select("-password");
//       next();
//     } catch (error) {
//       console.error("Auth error:", error);
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }
// };


import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    // ✅ Check if token is in Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // ✅ Optional: check if token is sent via cookie (for future compatibility)
    else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    // 🚨 If no token found
    if (!token) {
      console.log("❌ No token found in request headers");
      return res.status(401).json({ message: "Login first to continue" });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) {
      console.log("❌ Invalid token structure");
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // ✅ Attach user to request
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      console.log("❌ No user found for decoded token ID");
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Token and user valid
    console.log(`✅ Token valid for user: ${req.user._id}`);
    next();
  } catch (error) {
    console.error("❌ Auth error:", error.message);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token, please login again" });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Session expired, please login again" });
    } else {
      return res.status(500).json({ message: "Authentication failed, try again later" });
    }
  }
};
