// // // // // import express from "express";
// // // // // import bcrypt from "bcryptjs";
// // // // // import jwt from "jsonwebtoken";
// // // // // import User from "../models/User.js";
// // // // // const router = express.Router();

// // // // // // ✅ Register User
// // // // // router.post("/register", async (req, res) => {
// // // // //   try {
// // // // //     const { name, email, password } = req.body;

// // // // //     if (!name || !email || !password) {
// // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // //     }

// // // // //     const existingUser = await User.findOne({ email });
// // // // //     if (existingUser) {
// // // // //       return res.status(400).json({ message: "Email already exists" });
// // // // //     }

// // // // //     const hashedPassword = await bcrypt.hash(password, 10);
// // // // //     const newUser = await User.create({
// // // // //       name,
// // // // //       email,
// // // // //       password: hashedPassword,
// // // // //     });

// // // // //     res.status(201).json({
// // // // //       message: "User registered successfully",
// // // // //       user: { id: newUser._id, name: newUser.name, email: newUser.email },
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("Registration Error:", error);
// // // // //     res.status(500).json({ message: "Registration failed" });
// // // // //   }
// // // // // });

// // // // // // ✅ Login User
// // // // // router.post("/login", async (req, res) => {
// // // // //   try {
// // // // //     const { email, password } = req.body;

// // // // //     const user = await User.findOne({ email });
// // // // //     if (!user) return res.status(400).json({ message: "Invalid credentials" });

// // // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // // //     if (!isMatch)
// // // // //       return res.status(400).json({ message: "Invalid credentials" });

// // // // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // // // //       expiresIn: "1h",
// // // // //     });

// // // // //     res.status(200).json({
// // // // //       message: "Login successful",
// // // // //       token,
// // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("Login Error:", error);
// // // // //     res.status(500).json({ message: "Login failed" });
// // // // //   }
// // // // // });

// // // // // export default router;

// // // // import express from "express";
// // // // import bcrypt from "bcryptjs";
// // // // import jwt from "jsonwebtoken";
// // // // import User from "../models/User.js";

// // // // const router = express.Router();

// // // // // 🔹 Helper to create JWT token
// // // // const generateToken = (id) => {
// // // //   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
// // // // };

// // // // // ✅ Register User
// // // // router.post("/register", async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;

// // // //     if (!name || !email || !password) {
// // // //       return res.status(400).json({ message: "All fields are required" });
// // // //     }

// // // //     const existingUser = await User.findOne({ email });
// // // //     if (existingUser) {
// // // //       return res.status(400).json({ message: "Email already exists" });
// // // //     }

// // // //     const hashedPassword = await bcrypt.hash(password, 10);
// // // //     const newUser = await User.create({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //     });

// // // //     const token = generateToken(newUser._id);

// // // //     res.status(201).json({
// // // //       message: "User registered successfully",
// // // //       user: {
// // // //         _id: newUser._id,
// // // //         name: newUser.name,
// // // //         email: newUser.email,
// // // //         token,
// // // //       },
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("Registration Error:", error);
// // // //     res.status(500).json({ message: "Registration failed" });
// // // //   }
// // // // });

// // // // // ✅ Login User
// // // // router.post("/login", async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;

// // // //     const user = await User.findOne({ email });
// // // //     if (!user) return res.status(400).json({ message: "Invalid credentials" });

// // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // //     if (!isMatch)
// // // //       return res.status(400).json({ message: "Invalid credentials" });

// // // //     const token = generateToken(user._id);

// // // //     res.status(200).json({
// // // //       message: "Login successful",
// // // //       user: {
// // // //         _id: user._id,
// // // //         name: user.name,
// // // //         email: user.email,
// // // //         token,
// // // //       },
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("Login Error:", error);
// // // //     res.status(500).json({ message: "Login failed" });
// // // //   }
// // // // });

// // // // export default router;

// // // import express from "express";
// // // import bcrypt from "bcryptjs";
// // // import jwt from "jsonwebtoken";
// // // import User from "../models/User.js";

// // // const router = express.Router();

// // // const generateToken = (id) => {
// // //   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
// // // };

// // // // ✅ Register User
// // // router.post("/register", async (req, res) => {
// // //   try {
// // //     const { name, email, password } = req.body;

// // //     if (!name || !email || !password)
// // //       return res.status(400).json({ message: "All fields are required" });

// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser)
// // //       return res.status(400).json({ message: "Email already exists" });

// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     const newUser = await User.create({ name, email, password: hashedPassword });

// // //     const token = generateToken(newUser._id);

// // //     res.status(201).json({
// // //       message: "User registered successfully",
// // //       token,
// // //       user: {
// // //         id: newUser._id,
// // //         name: newUser.name,
// // //         email: newUser.email,
// // //       },
// // //     });
// // //   } catch (error) {
// // //     console.error("Registration Error:", error);
// // //     res.status(500).json({ message: "Registration failed" });
// // //   }
// // // });

// // // // ✅ Login User
// // // router.post("/login", async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;

// // //     const user = await User.findOne({ email });
// // //     if (!user)
// // //       return res.status(400).json({ message: "Invalid credentials" });

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch)
// // //       return res.status(400).json({ message: "Invalid credentials" });

// // //     const token = generateToken(user._id);

// // //     res.status(200).json({
// // //       message: "Login successful",
// // //       token,
// // //       user: {
// // //         id: user._id,
// // //         name: user.name,
// // //         email: user.email,
// // //       },
// // //     });
// // //   } catch (error) {
// // //     console.error("Login Error:", error);
// // //     res.status(500).json({ message: "Login failed" });
// // //   }
// // // });

// // // export default router;

// // import express from "express";
// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// // import User from "../models/User.js";

// // const router = express.Router();

// // // 🔹 Helper to create JWT token
// // const generateToken = (id) => {
// //   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
// // };

// // // ✅ Register User
// // router.post("/register", async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     if (!name || !email || !password) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "Email already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     console.log("🔐 Register Debug → Plain:", password, "| Hashed:", hashedPassword);

// //     const newUser = await User.create({
// //       name,
// //       email,
// //       password: hashedPassword,
// //     });

// //     const token = generateToken(newUser._id);

// //     res.status(201).json({
// //       message: "User registered successfully",
// //       user: {
// //         _id: newUser._id,
// //         name: newUser.name,
// //         email: newUser.email,
// //         token,
// //       },
// //     });
// //   } catch (error) {
// //     console.error("❌ Registration Error:", error);
// //     res.status(500).json({ message: "Registration failed" });
// //   }
// // });

// // // ✅ Login User (with DEBUG)
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     console.log("\n📥 Login Attempt:", email, password);

// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       console.log("⚠️ No user found for email:", email);
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     console.log("✅ User found →", user.email);
// //     console.log("🔐 Stored hash →", user.password);

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     console.log("🔍 bcrypt.compare result →", isMatch);

// //     if (!isMatch) {
// //       console.log("❌ Password mismatch for user:", email);
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     const token = generateToken(user._id);
// //     console.log("🎫 Token generated →", token);

// //     res.status(200).json({
// //       message: "Login successful",
// //       user: {
// //         _id: user._id,
// //         name: user.name,
// //         email: user.email,
// //         token,
// //       },
// //     });
// //   } catch (error) {
// //     console.error("🔥 Login Error:", error);
// //     res.status(500).json({ message: "Login failed" });
// //   }
// // });

// // export default router;

// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const router = express.Router();

// // 🔹 Helper to create JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
// };

// // ✅ Register User
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log("🔐 Register Debug → Plain:", password, "| Hashed:", hashedPassword);

//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     const token = generateToken(newUser._id);

//     res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         _id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         token,
//       },
//     });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     res.status(500).json({ message: "Registration failed" });
//   }
// });

// // ✅ Login User (with DEBUG)
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("\n📥 Login Attempt:", email, password);

//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("⚠️ No user found for email:", email);
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     console.log("✅ User found →", user.email);
//     console.log("🔐 Stored hash →", user.password);

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("🔍 bcrypt.compare result →", isMatch);

//     if (!isMatch) {
//       console.log("❌ Password mismatch for user:", email);
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = generateToken(user._id);
//     console.log("🎫 Token generated →", token);

//     res.status(200).json({
//       message: "Login successful",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         token,
//       },
//     });
//   } catch (error) {
//     console.error("🔥 Login Error:", error);
//     res.status(500).json({ message: "Login failed" });
//   }
// });

// export default router;

// import express from "express";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const router = express.Router();

// // 🔹 Helper to create JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
// };

// // ✅ Register User (NO MANUAL HASHING)
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     // ✅ Let Mongoose pre('save') handle hashing
//     const newUser = await User.create({ name, email, password });

//     const token = generateToken(newUser._id);

//     console.log("✅ User registered:", newUser.email);

//     res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         _id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         token,
//       },
//     });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     res.status(500).json({ message: "Registration failed" });
//   }
// });

// // ✅ Login User (with clean debugging)
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("\n📥 Login Attempt:", email, password);

//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("⚠️ No user found for email:", email);
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     console.log("✅ User found →", user.email);
//     console.log("🔐 Stored hash →", user.password);

//     // ✅ Use model's matchPassword method (auto bcrypt compare)
//     const isMatch = await user.matchPassword(password);
//     console.log("🔍 Password match result →", isMatch);

//     if (!isMatch) {
//       console.log("❌ Password mismatch for user:", email);
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = generateToken(user._id);
//     console.log("🎫 Token generated →", token);

//     res.status(200).json({
//       message: "Login successful",
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         token,
//       },
//     });
//   } catch (error) {
//     console.error("🔥 Login Error:", error);
//     res.status(500).json({ message: "Login failed" });
//   }
// });

// export default router;

import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// 🔹 Helper to create JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// ✅ Register User (NO MANUAL HASHING)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // ✅ Let Mongoose pre('save') handle hashing
    const newUser = await User.create({ name, email, password });

    const token = generateToken(newUser._id);

    console.log("✅ User registered:", newUser.email);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token,
      },
    });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

// ✅ Login User (with clean debugging)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("\n📥 Login Attempt:", email, password);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("⚠️ No user found for email:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("✅ User found →", user.email);
    console.log("🔐 Stored hash →", user.password);

    // ✅ Use model's matchPassword method (auto bcrypt compare)
    const isMatch = await user.matchPassword(password);
    console.log("🔍 Password match result →", isMatch);

    if (!isMatch) {
      console.log("❌ Password mismatch for user:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    console.log("🎫 Token generated →", token);

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    console.error("🔥 Login Error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

// ✅ Verify Token Route for Auto-Login
router.get("/verify", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.log("⚠️ No token provided");
      return res.json({ valid: false });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded) {
      console.log("✅ Token valid for user:", decoded.id);
      return res.json({ valid: true });
    } else {
      console.log("❌ Invalid token");
      return res.json({ valid: false });
    }
  } catch (err) {
    console.error("❌ Token verification error:", err.message);
    return res.json({ valid: false });
  }
});

export default router;
