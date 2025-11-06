// // // // // // // // import User from "../models/User.js";
// // // // // // // // import bcrypt from "bcryptjs";
// // // // // // // // import jwt from "jsonwebtoken";

// // // // // // // // // Generate JWT Token
// // // // // // // // const generateToken = (id) => {
// // // // // // // //   return jwt.sign({ id }, process.env.JWT_SECRET, {
// // // // // // // //     expiresIn: "7d",
// // // // // // // //   });
// // // // // // // // };

// // // // // // // // // @desc Register new user
// // // // // // // // // @route POST /api/users/register
// // // // // // // // export const registerUser = async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { name, email, password } = req.body;

// // // // // // // //     // Check for missing fields
// // // // // // // //     if (!name || !email || !password) {
// // // // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // // // //     }

// // // // // // // //     // Check if user already exists
// // // // // // // //     const userExists = await User.findOne({ email });
// // // // // // // //     if (userExists) {
// // // // // // // //       return res.status(400).json({ message: "User already exists" });
// // // // // // // //     }

// // // // // // // //     // Hash password
// // // // // // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // // // // // //     // Create user
// // // // // // // //     const user = await User.create({
// // // // // // // //       name,
// // // // // // // //       email,
// // // // // // // //       password: hashedPassword,
// // // // // // // //     });

// // // // // // // //     res.status(201).json({
// // // // // // // //       _id: user._id,
// // // // // // // //       name: user.name,
// // // // // // // //       email: user.email,
// // // // // // // //       token: generateToken(user._id),
// // // // // // // //     });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error(error);
// // // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // // @desc Login user
// // // // // // // // // @route POST /api/users/login
// // // // // // // // export const loginUser = async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { email, password } = req.body;

// // // // // // // //     // Check user
// // // // // // // //     const user = await User.findOne({ email });

// // // // // // // //     if (user && (await bcrypt.compare(password, user.password))) {
// // // // // // // //       res.json({
// // // // // // // //         _id: user._id,
// // // // // // // //         name: user.name,
// // // // // // // //         email: user.email,
// // // // // // // //         token: generateToken(user._id),
// // // // // // // //       });
// // // // // // // //     } else {
// // // // // // // //       res.status(401).json({ message: "Invalid email or password" });
// // // // // // // //     }
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error(error);
// // // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // // //   }
// // // // // // // // };


// // // // // // // // import bcrypt from "bcryptjs";
// // // // // // // // import jwt from "jsonwebtoken";
// // // // // // // // import User from "../models/User.js";
// // // // // // // // import dotenv from "dotenv";

// // // // // // // // dotenv.config();

// // // // // // // // // User Registration
// // // // // // // // export const registerUser = async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { name, email, password } = req.body;

// // // // // // // //     // check if user already exists
// // // // // // // //     const existingUser = await User.findOne({ email });
// // // // // // // //     if (existingUser) {
// // // // // // // //       return res.status(400).json({ message: "User already exists" });
// // // // // // // //     }

// // // // // // // //     // hash password
// // // // // // // //     const hashedPassword = await bcrypt.hash(password, 10);

// // // // // // // //     // create user
// // // // // // // //     const user = await User.create({ name, email, password: hashedPassword });

// // // // // // // //     res.status(201).json({
// // // // // // // //       message: "User registered successfully",
// // // // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // // // //     });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error(error);
// // // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // // User Login
// // // // // // // // export const loginUser = async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { email, password } = req.body;

// // // // // // // //     // find user
// // // // // // // //     const user = await User.findOne({ email });
// // // // // // // //     if (!user) return res.status(400).json({ message: "Invalid credentials" });

// // // // // // // //     // compare password
// // // // // // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // // // // // //     if (!isMatch)
// // // // // // // //       return res.status(400).json({ message: "Invalid credentials" });

// // // // // // // //     // generate token
// // // // // // // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // // // // // // //       expiresIn: "1d",
// // // // // // // //     });

// // // // // // // //     res.status(200).json({
// // // // // // // //       message: "Login successful",
// // // // // // // //       token,
// // // // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // // // //     });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error(error);
// // // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // // //   }
// // // // // // // // };

// // // // // // // import bcrypt from "bcryptjs";
// // // // // // // import jwt from "jsonwebtoken";
// // // // // // // import User from "../models/User.js";
// // // // // // // import dotenv from "dotenv";

// // // // // // // dotenv.config();


// // // // // // // // ✅ User Registration
// // // // // // // export const registerUser = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { name, email, password } = req.body;

// // // // // // //     if (!name || !email || !password) {
// // // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // // //     }

// // // // // // //     const existingUser = await User.findOne({ email });
// // // // // // //     if (existingUser) {
// // // // // // //       return res.status(400).json({ message: "User already exists" });
// // // // // // //     }

// // // // // // //     // ❌ REMOVE manual bcrypt hashing — let pre('save') handle it
// // // // // // //     const user = await User.create({ name, email, password });

// // // // // // //     return res.status(201).json({
// // // // // // //       message: "User registered successfully",
// // // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Registration error:", error);
// // // // // // //     return res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ User Login (final debug version)
// // // // // // // export const loginUser = async (req, res) => {
// // // // // // //     try {
// // // // // // //       const { email, password } = req.body;
// // // // // // //       console.log("Login attempt:", email, password);
  
// // // // // // //       // Validate input
// // // // // // //       if (!email || !password) {
// // // // // // //         return res.status(400).json({ message: "All fields are required" });
// // // // // // //       }
  
// // // // // // //       // Find user
// // // // // // //       const user = await User.findOne({ email });
// // // // // // //       console.log("Found user:", user);
  
// // // // // // //       if (!user) {
// // // // // // //         console.log("❌ No user found for email:", email);
// // // // // // //         return res.status(400).json({ message: "Invalid credentials" });
// // // // // // //       }
  
// // // // // // //       // 🧩 Extra log to ensure we see what's being compared
// // // // // // //       console.log("Comparing entered password:", password);
// // // // // // //       console.log("With stored hash:", user.password);
  
// // // // // // //       // Compare password
// // // // // // //       const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
// // // // // // //       console.log("Password match result:", isMatch);
  
// // // // // // //       if (!isMatch) {
// // // // // // //         console.log("❌ Password did not match");
// // // // // // //         return res.status(400).json({ message: "Invalid credentials" });
// // // // // // //       }
  
// // // // // // //       // Generate JWT token
// // // // // // //       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // // // // // //         expiresIn: "1d",
// // // // // // //       });
  
// // // // // // //       console.log("✅ Login successful for:", email);
  
// // // // // // //       return res.status(200).json({
// // // // // // //         message: "Login successful",
// // // // // // //         token,
// // // // // // //         user: { id: user._id, name: user.name, email: user.email },
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       console.error("❌ Login error:", error);
// // // // // // //       return res.status(500).json({ message: "Server error" });
// // // // // // //     }
// // // // // // //   };
  

// // // // // // // import bcrypt from "bcryptjs";
// // // // // // // import jwt from "jsonwebtoken";
// // // // // // // import User from "../models/User.js";
// // // // // // // import dotenv from "dotenv";

// // // // // // // dotenv.config();

// // // // // // // // ✅ User Registration
// // // // // // // export const registerUser = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { name, email, password } = req.body;

// // // // // // //     if (!name || !email || !password) {
// // // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // // //     }

// // // // // // //     const existingUser = await User.findOne({ email });
// // // // // // //     if (existingUser) {
// // // // // // //       return res.status(400).json({ message: "User already exists" });
// // // // // // //     }

// // // // // // //     // ❌ Manual bcrypt not needed if using pre-save hook
// // // // // // //     const user = await User.create({ name, email, password });

// // // // // // //     return res.status(201).json({
// // // // // // //       message: "User registered successfully",
// // // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Registration error:", error);
// // // // // // //     return res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ User Login
// // // // // // // export const loginUser = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { email, password } = req.body;

// // // // // // //     if (!email || !password) {
// // // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // // //     }

// // // // // // //     const user = await User.findOne({ email });

// // // // // // //     if (!user) {
// // // // // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // // // // //     }

// // // // // // //     const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
// // // // // // //     if (!isMatch) {
// // // // // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // // // // //     }

// // // // // // //     // 🧾 Generate JWT Token
// // // // // // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // // // // // //       expiresIn: "1d",
// // // // // // //     });

// // // // // // //     return res.status(200).json({
// // // // // // //       message: "Login successful",
// // // // // // //       token,
// // // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Login error:", error);
// // // // // // //     return res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ Get Logged-in User Profile
// // // // // // // export const getUserProfile = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.user._id).select("-password");
// // // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // // //     res.status(200).json(user);
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Get profile error:", error);
// // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ Update Logged-in User Profile
// // // // // // // export const updateUserProfile = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.user._id);

// // // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // // //     user.name = req.body.name || user.name;
// // // // // // //     user.email = req.body.email || user.email;

// // // // // // //     const updatedUser = await user.save();

// // // // // // //     res.status(200).json({
// // // // // // //       message: "Profile updated successfully",
// // // // // // //       user: {
// // // // // // //         id: updatedUser._id,
// // // // // // //         name: updatedUser.name,
// // // // // // //         email: updatedUser.email,
// // // // // // //       },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Update profile error:", error);
// // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };


// // // // // // // import bcrypt from "bcryptjs";
// // // // // // // import jwt from "jsonwebtoken";
// // // // // // // import User from "../models/User.js";
// // // // // // // import dotenv from "dotenv";

// // // // // // // dotenv.config();

// // // // // // // // ✅ Register User
// // // // // // // export const registerUser = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { name, email, password } = req.body;

// // // // // // //     if (!name || !email || !password) {
// // // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // // //     }

// // // // // // //     const existingUser = await User.findOne({ email });
// // // // // // //     if (existingUser) {
// // // // // // //       return res.status(400).json({ message: "User already exists" });
// // // // // // //     }

// // // // // // //     const user = await User.create({ name, email, password });

// // // // // // //     res.status(201).json({
// // // // // // //       message: "User registered successfully",
// // // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Registration error:", error);
// // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ Login User
// // // // // // // export const loginUser = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { email, password } = req.body;

// // // // // // //     if (!email || !password) {
// // // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // // //     }

// // // // // // //     const user = await User.findOne({ email });
// // // // // // //     if (!user) {
// // // // // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // // // // //     }

// // // // // // //     const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
// // // // // // //     if (!isMatch) {
// // // // // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // // // // //     }

// // // // // // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // // // // // //       expiresIn: "1d",
// // // // // // //     });

// // // // // // //     res.status(200).json({
// // // // // // //       message: "Login successful",
// // // // // // //       token,
// // // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Login error:", error);
// // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ Get Profile (Protected)
// // // // // // // export const getProfile = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.user._id).select("-password");

// // // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // // //     res.status(200).json(user);
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Get profile error:", error);
// // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // // ✅ Update Profile (Protected)
// // // // // // // export const updateProfile = async (req, res) => {
// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.user._id);
// // // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // // //     user.name = req.body.name || user.name;
// // // // // // //     user.email = req.body.email || user.email;

// // // // // // //     const updatedUser = await user.save();

// // // // // // //     res.status(200).json({
// // // // // // //       message: "Profile updated successfully",
// // // // // // //       user: {
// // // // // // //         id: updatedUser._id,
// // // // // // //         name: updatedUser.name,
// // // // // // //         email: updatedUser.email,
// // // // // // //       },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Update profile error:", error);
// // // // // // //     res.status(500).json({ message: "Server error" });
// // // // // // //   }
// // // // // // // };

// // // // // // // backend/controllers/userController.js
// // // // // // import bcrypt from "bcryptjs";
// // // // // // import jwt from "jsonwebtoken";
// // // // // // import User from "../models/User.js";
// // // // // // import dotenv from "dotenv";

// // // // // // dotenv.config();

// // // // // // // 🧩 Register User
// // // // // // export const registerUser = async (req, res) => {
// // // // // //   try {
// // // // // //     const { name, email, password } = req.body;

// // // // // //     if (!name || !email || !password) {
// // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // //     }

// // // // // //     const existingUser = await User.findOne({ email });
// // // // // //     if (existingUser) {
// // // // // //       return res.status(400).json({ message: "User already exists" });
// // // // // //     }

// // // // // //     const salt = await bcrypt.genSalt(10);
// // // // // //     const hashedPassword = await bcrypt.hash(password, salt);

// // // // // //     const user = await User.create({
// // // // // //       name,
// // // // // //       email,
// // // // // //       password: hashedPassword,
// // // // // //     });

// // // // // //     return res.status(201).json({
// // // // // //       message: "User registered successfully",
// // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // //     });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Registration error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // // // 🧩 Login User
// // // // // // export const loginUser = async (req, res) => {
// // // // // //   try {
// // // // // //     const { email, password } = req.body;

// // // // // //     if (!email || !password) {
// // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // //     }

// // // // // //     const user = await User.findOne({ email });
// // // // // //     if (!user) return res.status(400).json({ message: "Invalid credentials" });

// // // // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // // // //     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// // // // // //     // Generate JWT
// // // // // //     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// // // // // //       expiresIn: "1d",
// // // // // //     });

// // // // // //     res.status(200).json({
// // // // // //       message: "Login successful",
// // // // // //       token,
// // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // //     });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Login error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // // // 🧩 Get Logged-in User Profile
// // // // // // export const getUserProfile = async (req, res) => {
// // // // // //   try {
// // // // // //     const user = await User.findById(req.user._id).select("-password");
// // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // //     res.status(200).json(user);
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Get profile error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // // // 🧩 Update Logged-in User Profile
// // // // // // export const updateUserProfile = async (req, res) => {
// // // // // //   try {
// // // // // //     const user = await User.findById(req.user._id);
// // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // //     user.name = req.body.name || user.name;
// // // // // //     user.email = req.body.email || user.email;

// // // // // //     const updatedUser = await user.save();

// // // // // //     res.status(200).json({
// // // // // //       message: "Profile updated successfully",
// // // // // //       user: {
// // // // // //         id: updatedUser._id,
// // // // // //         name: updatedUser.name,
// // // // // //         email: updatedUser.email,
// // // // // //       },
// // // // // //     });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Update profile error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // // import bcrypt from "bcryptjs";
// // // // // // import jwt from "jsonwebtoken";
// // // // // // import User from "../models/User.js";
// // // // // // import dotenv from "dotenv";

// // // // // // dotenv.config();

// // // // // // // 🧩 Register User
// // // // // // export const registerUser = async (req, res) => {
// // // // // //   try {
// // // // // //     const { name, email, password } = req.body;

// // // // // //     if (!name || !email || !password) {
// // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // //     }

// // // // // //     const existingUser = await User.findOne({ email });
// // // // // //     if (existingUser) {
// // // // // //       return res.status(400).json({ message: "User already exists" });
// // // // // //     }

// // // // // //     const salt = await bcrypt.genSalt(10);
// // // // // //     const hashedPassword = await bcrypt.hash(password, salt);

// // // // // //     const user = await User.create({
// // // // // //       name,
// // // // // //       email,
// // // // // //       password: hashedPassword,
// // // // // //     });

// // // // // //     // ✅ Generate JWT after registration
// // // // // //     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// // // // // //       expiresIn: "1d",
// // // // // //     });

// // // // // //     return res.status(201).json({
// // // // // //       message: "User registered successfully",
// // // // // //       token,
// // // // // //       user: {
// // // // // //         id: user._id,
// // // // // //         name: user.name,
// // // // // //         email: user.email,
// // // // // //       },
// // // // // //     });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Registration error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // // // 🧩 Login User
// // // // // // export const loginUser = async (req, res) => {
// // // // // //   try {
// // // // // //     const { email, password } = req.body;

// // // // // //     if (!email || !password) {
// // // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // // //     }

// // // // // //     const user = await User.findOne({ email });
// // // // // //     if (!user) return res.status(400).json({ message: "Invalid credentials" });

// // // // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // // // //     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// // // // // //     // ✅ Generate JWT
// // // // // //     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// // // // // //       expiresIn: "1d",
// // // // // //     });

// // // // // //     res.status(200).json({
// // // // // //       message: "Login successful",
// // // // // //       token,
// // // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // // //     });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Login error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // // // 🧩 Get Logged-in User Profile
// // // // // // export const getUserProfile = async (req, res) => {
// // // // // //   try {
// // // // // //     const user = await User.findById(req.user._id).select("-password");
// // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // //     res.status(200).json(user);
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Get profile error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // // // 🧩 Update Logged-in User Profile
// // // // // // export const updateUserProfile = async (req, res) => {
// // // // // //   try {
// // // // // //     const user = await User.findById(req.user._id);
// // // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // // //     user.name = req.body.name || user.name;
// // // // // //     user.email = req.body.email || user.email;

// // // // // //     const updatedUser = await user.save();

// // // // // //     res.status(200).json({
// // // // // //       message: "Profile updated successfully",
// // // // // //       user: {
// // // // // //         id: updatedUser._id,
// // // // // //         name: updatedUser.name,
// // // // // //         email: updatedUser.email,
// // // // // //       },
// // // // // //     });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Update profile error:", error);
// // // // // //     res.status(500).json({ message: "Server error" });
// // // // // //   }
// // // // // // };

// // // // // import bcrypt from "bcryptjs";
// // // // // import jwt from "jsonwebtoken";
// // // // // import User from "../models/User.js";
// // // // // import dotenv from "dotenv";

// // // // // dotenv.config();

// // // // // // 🧩 REGISTER USER
// // // // // export const registerUser = async (req, res) => {
// // // // //   try {
// // // // //     const { name, email, password } = req.body;
// // // // //     console.log("📩 Register request:", { name, email, password });

// // // // //     if (!name || !email || !password) {
// // // // //       console.log("❌ Missing fields during registration");
// // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // //     }

// // // // //     const existingUser = await User.findOne({ email });
// // // // //     if (existingUser) {
// // // // //       console.log("⚠️ User already exists:", email);
// // // // //       return res.status(400).json({ message: "User already exists" });
// // // // //     }

// // // // //     const salt = await bcrypt.genSalt(10);
// // // // //     const hashedPassword = await bcrypt.hash(password, salt);
// // // // //     console.log("🔒 Hashed password generated:", hashedPassword);

// // // // //     const user = await User.create({
// // // // //       name,
// // // // //       email,
// // // // //       password: hashedPassword,
// // // // //     });

// // // // //     // ✅ Generate JWT after registration
// // // // //     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// // // // //       expiresIn: "1d",
// // // // //     });

// // // // //     console.log("✅ User registered successfully:", user.email);

// // // // //     return res.status(201).json({
// // // // //       message: "User registered successfully",
// // // // //       token,
// // // // //       user: {
// // // // //         id: user._id,
// // // // //         name: user.name,
// // // // //         email: user.email,
// // // // //       },
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Registration error:", error);
// // // // //     res.status(500).json({ message: "Server error" });
// // // // //   }
// // // // // };

// // // // // // 🧩 LOGIN USER
// // // // // export const loginUser = async (req, res) => {
// // // // //   try {
// // // // //     console.log("📩 Login request body:", req.body);
// // // // //     const { email, password } = req.body;

// // // // //     if (!email || !password) {
// // // // //       console.log("❌ Missing email or password in request");
// // // // //       return res.status(400).json({ message: "All fields are required" });
// // // // //     }

// // // // //     const user = await User.findOne({ email });
// // // // //     if (!user) {
// // // // //       console.log("❌ No user found for:", email);
// // // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // // //     }

// // // // //     console.log("✅ User found:", user.email);

// // // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // // //     console.log("🔍 Password match result:", isMatch);

// // // // //     if (!isMatch) {
// // // // //       console.log("❌ Password did not match for:", email);
// // // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // // //     }

// // // // //     // ✅ Generate JWT
// // // // //     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// // // // //       expiresIn: "1d",
// // // // //     });

// // // // //     console.log("✅ Login successful for:", user.email);

// // // // //     res.status(200).json({
// // // // //       message: "Login successful",
// // // // //       token,
// // // // //       user: { id: user._id, name: user.name, email: user.email },
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Login error:", error);
// // // // //     res.status(500).json({ message: "Server error" });
// // // // //   }
// // // // // };

// // // // // // 🧩 GET LOGGED-IN USER PROFILE
// // // // // export const getUserProfile = async (req, res) => {
// // // // //   try {
// // // // //     const user = await User.findById(req.user._id).select("-password");
// // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // //     res.status(200).json(user);
// // // // //   } catch (error) {
// // // // //     console.error("❌ Get profile error:", error);
// // // // //     res.status(500).json({ message: "Server error" });
// // // // //   }
// // // // // };

// // // // // // 🧩 UPDATE LOGGED-IN USER PROFILE
// // // // // export const updateUserProfile = async (req, res) => {
// // // // //   try {
// // // // //     const user = await User.findById(req.user._id);
// // // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // // //     user.name = req.body.name || user.name;
// // // // //     user.email = req.body.email || user.email;

// // // // //     const updatedUser = await user.save();

// // // // //     console.log("✅ Profile updated for:", updatedUser.email);

// // // // //     res.status(200).json({
// // // // //       message: "Profile updated successfully",
// // // // //       user: {
// // // // //         id: updatedUser._id,
// // // // //         name: updatedUser.name,
// // // // //         email: updatedUser.email,
// // // // //       },
// // // // //     });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Update profile error:", error);
// // // // //     res.status(500).json({ message: "Server error" });
// // // // //   }
// // // // // };

// // // // import bcrypt from "bcryptjs";
// // // // import jwt from "jsonwebtoken";
// // // // import User from "../models/User.js";
// // // // import dotenv from "dotenv";

// // // // dotenv.config();

// // // // // 🧩 REGISTER USER
// // // // export const registerUser = async (req, res) => {
// // // //   try {
// // // //     const { name, email, password } = req.body;
// // // //     console.log("📩 Register request:", { name, email, password });

// // // //     if (!name || !email || !password) {
// // // //       console.log("❌ Missing fields during registration");
// // // //       return res.status(400).json({ message: "All fields are required" });
// // // //     }

// // // //     const existingUser = await User.findOne({ email });
// // // //     if (existingUser) {
// // // //       console.log("⚠️ User already exists:", email);
// // // //       return res.status(400).json({ message: "User already exists" });
// // // //     }

// // // //     const salt = await bcrypt.genSalt(10);
// // // //     const hashedPassword = await bcrypt.hash(password, salt);
// // // //     console.log("🔒 Hashed password generated:", hashedPassword);

// // // //     const user = await User.create({
// // // //       name,
// // // //       email,
// // // //       password: hashedPassword,
// // // //     });

// // // //     // ✅ Generate JWT after registration
// // // //     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// // // //       expiresIn: "1d",
// // // //     });

// // // //     console.log("✅ User registered successfully:", user.email);

// // // //     return res.status(201).json({
// // // //       message: "User registered successfully",
// // // //       token,
// // // //       user: {
// // // //         id: user._id,
// // // //         name: user.name,
// // // //         email: user.email,
// // // //       },
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("❌ Registration error:", error);
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // };

// // // // // 🧩 LOGIN USER
// // // // export const loginUser = async (req, res) => {
// // // //   try {
// // // //     console.log("📩 Login request body:", req.body);
// // // //     const { email, password } = req.body;

// // // //     if (!email || !password) {
// // // //       console.log("❌ Missing email or password in request");
// // // //       return res.status(400).json({ message: "All fields are required" });
// // // //     }

// // // //     const user = await User.findOne({ email });
// // // //     if (!user) {
// // // //       console.log("❌ No user found for:", email);
// // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // //     }

// // // //     console.log("✅ User found:", user.email);

// // // //     const isMatch = await bcrypt.compare(password, user.password);
// // // //     console.log("🔍 Password match result:", isMatch);

// // // //     if (!isMatch) {
// // // //       console.log("❌ Password did not match for:", email);
// // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // //     }

// // // //     // ✅ Generate JWT
// // // //     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// // // //       expiresIn: "1d",
// // // //     });

// // // //     console.log("✅ Login successful for:", user.email);

// // // //     res.status(200).json({
// // // //       message: "Login successful",
// // // //       token,
// // // //       user: { id: user._id, name: user.name, email: user.email },
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("❌ Login error:", error);
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // };

// // // // // 🧩 GET LOGGED-IN USER PROFILE
// // // // export const getUserProfile = async (req, res) => {
// // // //   try {
// // // //     const user = await User.findById(req.user._id).select("-password");
// // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // //     res.status(200).json(user);
// // // //   } catch (error) {
// // // //     console.error("❌ Get profile error:", error);
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // };

// // // // // 🧩 UPDATE LOGGED-IN USER PROFILE
// // // // export const updateUserProfile = async (req, res) => {
// // // //   try {
// // // //     const user = await User.findById(req.user._id);
// // // //     if (!user) return res.status(404).json({ message: "User not found" });

// // // //     user.name = req.body.name || user.name;
// // // //     user.email = req.body.email || user.email;

// // // //     const updatedUser = await user.save();

// // // //     console.log("✅ Profile updated for:", updatedUser.email);

// // // //     res.status(200).json({
// // // //       message: "Profile updated successfully",
// // // //       user: {
// // // //         id: updatedUser._id,
// // // //         name: updatedUser.name,
// // // //         email: updatedUser.email,
// // // //       },
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("❌ Update profile error:", error);
// // // //     res.status(500).json({ message: "Server error" });
// // // //   }
// // // // };


// // // import jwt from "jsonwebtoken";
// // // import User from "../models/User.js";
// // // import dotenv from "dotenv";

// // // dotenv.config();

// // // // 🔹 REGISTER USER
// // // export const registerUser = async (req, res) => {
// // //   try {
// // //     const { name, email, password } = req.body;

// // //     if (!name || !email || !password)
// // //       return res.status(400).json({ message: "All fields are required" });

// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser)
// // //       return res.status(400).json({ message: "User already exists" });

// // //     // ✅ Let pre('save') handle password hashing
// // //     const user = await User.create({ name, email, password });

// // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // //       expiresIn: "1d",
// // //     });

// // //     res.status(201).json({
// // //       message: "User registered successfully",
// // //       token,
// // //       user: { id: user._id, name: user.name, email: user.email },
// // //     });
// // //   } catch (error) {
// // //     console.error("❌ Registration error:", error);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // };

// // // // 🔹 LOGIN USER
// // // export const loginUser = async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;

// // //     if (!email || !password)
// // //       return res.status(400).json({ message: "All fields are required" });

// // //     const user = await User.findOne({ email });
// // //     if (!user)
// // //       return res.status(400).json({ message: "Invalid credentials" });

// // //     const isMatch = await user.matchPassword(password);
// // //     if (!isMatch)
// // //       return res.status(400).json({ message: "Invalid credentials" });

// // //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// // //       expiresIn: "1d",
// // //     });

// // //     res.status(200).json({
// // //       message: "Login successful",
// // //       token,
// // //       user: { id: user._id, name: user.name, email: user.email },
// // //     });
// // //   } catch (error) {
// // //     console.error("❌ Login error:", error);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // };

// // // // 🔹 GET USER PROFILE
// // // export const getUserProfile = async (req, res) => {
// // //   try {
// // //     const user = await User.findById(req.user._id).select("-password");
// // //     if (!user)
// // //       return res.status(404).json({ message: "User not found" });

// // //     res.status(200).json(user);
// // //   } catch (error) {
// // //     console.error("❌ Get profile error:", error);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // };

// // // // 🔹 UPDATE USER PROFILE
// // // export const updateUserProfile = async (req, res) => {
// // //   try {
// // //     const user = await User.findById(req.user._id);
// // //     if (!user)
// // //       return res.status(404).json({ message: "User not found" });

// // //     user.name = req.body.name || user.name;
// // //     user.email = req.body.email || user.email;
// // //     if (req.body.password) user.password = req.body.password; // pre-save will hash

// // //     const updatedUser = await user.save();

// // //     res.status(200).json({
// // //       message: "Profile updated successfully",
// // //       user: {
// // //         id: updatedUser._id,
// // //         name: updatedUser.name,
// // //         email: updatedUser.email,
// // //       },
// // //     });
// // //   } catch (error) {
// // //     console.error("❌ Update profile error:", error);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // };

// // import jwt from "jsonwebtoken";
// // import User from "../models/User.js";
// // import dotenv from "dotenv";

// // dotenv.config();

// // // 🔹 REGISTER USER
// // export const registerUser = async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     if (!name || !email || !password)
// //       return res.status(400).json({ message: "All fields are required" });

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser)
// //       return res.status(400).json({ message: "User already exists" });

// //     const user = await User.create({ name, email, password });

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "1d",
// //     });

// //     res.status(201).json({
// //       message: "User registered successfully",
// //       token,
// //       user: { id: user._id, name: user.name, email: user.email },
// //     });
// //   } catch (error) {
// //     console.error("❌ Registration error:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// // // 🔹 LOGIN USER
// // export const loginUser = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     if (!email || !password)
// //       return res.status(400).json({ message: "All fields are required" });

// //     const user = await User.findOne({ email });
// //     if (!user)
// //       return res.status(400).json({ message: "Invalid credentials" });

// //     const isMatch = await user.matchPassword(password);
// //     if (!isMatch)
// //       return res.status(400).json({ message: "Invalid credentials" });

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "1d",
// //     });

// //     res.status(200).json({
// //       message: "Login successful",
// //       token,
// //       user: { id: user._id, name: user.name, email: user.email },
// //     });
// //   } catch (error) {
// //     console.error("❌ Login error:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// // // 🔹 GET USER PROFILE
// // export const getUserProfile = async (req, res) => {
// //   try {
// //     const user = await User.findById(req.user._id).select("-password");
// //     if (!user)
// //       return res.status(404).json({ message: "User not found" });

// //     res.status(200).json(user);
// //   } catch (error) {
// //     console.error("❌ Get profile error:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// // // 🔹 UPDATE USER PROFILE
// // export const updateUserProfile = async (req, res) => {
// //   try {
// //     const user = await User.findById(req.user._id);
// //     if (!user)
// //       return res.status(404).json({ message: "User not found" });

// //     user.name = req.body.name || user.name;
// //     user.email = req.body.email || user.email;

// //     const updatedUser = await user.save();

// //     res.status(200).json({
// //       message: "Profile updated successfully",
// //       user: {
// //         id: updatedUser._id,
// //         name: updatedUser.name,
// //         email: updatedUser.email,
// //       },
// //     });
// //   } catch (error) {
// //     console.error("❌ Update profile error:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// // // 🔹 CHANGE PASSWORD
// // export const changePassword = async (req, res) => {
// //   try {
// //     const { oldPassword, newPassword } = req.body;
// //     const user = await User.findById(req.user._id);

// //     if (!user)
// //       return res.status(404).json({ message: "User not found" });

// //     const isMatch = await user.matchPassword(oldPassword);
// //     if (!isMatch)
// //       return res.status(400).json({ message: "Old password is incorrect" });

// //     user.password = newPassword; // pre-save middleware will hash it
// //     await user.save();

// //     res.status(200).json({ message: "Password changed successfully" });
// //   } catch (error) {
// //     console.error("❌ Change password error:", error);
// //     res.status(500).json({ message: "Server error" });
// //   }
// // };

// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import dotenv from "dotenv";
// import fs from "fs";
// import path from "path";

// dotenv.config();

// // 🔹 REGISTER USER
// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password)
//       return res.status(400).json({ message: "All fields are required" });

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const user = await User.create({ name, email, password });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//       token,
//       user: { id: user._id, name: user.name, email: user.email },
//     });
//   } catch (error) {
//     console.error("❌ Registration error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 🔹 LOGIN USER
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password)
//       return res.status(400).json({ message: "All fields are required" });

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: { id: user._id, name: user.name, email: user.email },
//     });
//   } catch (error) {
//     console.error("❌ Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 🔹 GET USER PROFILE
// export const getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user)
//       return res.status(404).json({ message: "User not found" });

//     res.status(200).json(user);
//   } catch (error) {
//     console.error("❌ Get profile error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 🔹 UPDATE USER PROFILE
// export const updateUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     if (!user)
//       return res.status(404).json({ message: "User not found" });

//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;

//     const updatedUser = await user.save();

//     res.status(200).json({
//       message: "Profile updated successfully",
//       user: {
//         id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         profilePic: updatedUser.profilePic,
//       },
//     });
//   } catch (error) {
//     console.error("❌ Update profile error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 🔹 CHANGE PASSWORD
// export const changePassword = async (req, res) => {
//   try {
//     const { oldPassword, newPassword } = req.body;
//     const user = await User.findById(req.user._id);

//     if (!user)
//       return res.status(404).json({ message: "User not found" });

//     const isMatch = await user.matchPassword(oldPassword);
//     if (!isMatch)
//       return res.status(400).json({ message: "Old password is incorrect" });

//     user.password = newPassword;
//     await user.save();

//     res.status(200).json({ message: "Password changed successfully" });
//   } catch (error) {
//     console.error("❌ Change password error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // 🔹 UPLOAD PROFILE PICTURE
// export const uploadProfilePic = async (req, res) => {
//   try {
//     if (!req.file)
//       return res.status(400).json({ message: "No image uploaded" });

//     const imagePath = `/uploads/${req.file.filename}`;
//     const user = await User.findById(req.user._id);
//     if (!user)
//       return res.status(404).json({ message: "User not found" });

//     user.profilePic = imagePath;
//     await user.save();

//     res.status(200).json({
//       message: "Profile picture uploaded successfully",
//       profilePic: imagePath,
//     });
//   } catch (error) {
//     console.error("❌ Upload image error:", error);
//     res.status(500).json({ message: "Image upload failed" });
//   }
// };

import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// 🔹 Helper: Generate JWT
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

// 🔹 REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic || "",
      },
    });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({
      message: "Login successful",
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic || "",
      },
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 GET USER PROFILE
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Get profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 UPDATE USER PROFILE
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        profilePic: updatedUser.profilePic,
      },
    });
  } catch (error) {
    console.error("❌ Update profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 CHANGE PASSWORD
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword)
      return res.status(400).json({ message: "Both fields are required" });

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await user.matchPassword(oldPassword);
    if (!isMatch)
      return res.status(400).json({ message: "Old password is incorrect" });

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("❌ Change password error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 UPLOAD PROFILE PICTURE
export const uploadProfilePic = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "No image uploaded" });

    const imagePath = `/uploads/${req.file.filename}`;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Delete old picture if exists
    if (user.profilePic && fs.existsSync(`.${user.profilePic}`)) {
      fs.unlinkSync(`.${user.profilePic}`);
    }

    user.profilePic = imagePath;
    await user.save();

    res.status(200).json({
      message: "Profile picture uploaded successfully",
      profilePic: imagePath,
    });
  } catch (error) {
    console.error("❌ Upload image error:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
};
