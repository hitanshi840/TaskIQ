// // // // // // // // import express from "express";
// // // // // // // // import { registerUser, loginUser } from "../controllers/userController.js";

// // // // // // // // const router = express.Router();

// // // // // // // // // Routes
// // // // // // // // router.post("/register", registerUser);
// // // // // // // // router.post("/login", loginUser);

// // // // // // // // export default router;
// // // // // // // import express from "express";
// // // // // // // import { registerUser, loginUser } from "../controllers/userController.js";
// // // // // // // import { protect } from "../middleware/auth.js";

// // // // // // // const router = express.Router();

// // // // // // // // Routes
// // // // // // // router.post("/register", registerUser);
// // // // // // // router.post("/login", loginUser);

// // // // // // // // Example of protected route
// // // // // // // router.get("/profile", protect, (req, res) => {
// // // // // // //     res.json({
// // // // // // //       message: "Welcome to your profile",
// // // // // // //       user: req.user,
// // // // // // //     });
// // // // // // // });

// // // // // // // export default router;

// // // // // // import express from "express";
// // // // // // import {
// // // // // //   registerUser,
// // // // // //   loginUser,
// // // // // //   getUserProfile,
// // // // // //   updateUserProfile,
// // // // // // } from "../controllers/userController.js";
// // // // // // import { protect } from "../middleware/auth.js";

// // // // // // const router = express.Router();

// // // // // // // 🧩 Auth Routes
// // // // // // router.post("/register", registerUser);
// // // // // // router.post("/login", loginUser);

// // // // // // // 🧠 Profile Routes (Protected)
// // // // // // router.get("/profile", protect, getUserProfile);
// // // // // // router.put("/profile", protect, updateUserProfile);

// // // // // // export default router;

// // // // // // import express from "express";
// // // // // // import {
// // // // // //   registerUser,
// // // // // //   loginUser,
// // // // // //   getProfile,
// // // // // //   updateProfile,
// // // // // // } from "../controllers/userController.js";
// // // // // // import { protect } from "../middleware/auth.js";

// // // // // // const router = express.Router();

// // // // // // // 🔐 Auth Routes
// // // // // // router.post("/register", registerUser);
// // // // // // router.post("/login", loginUser);

// // // // // // // 👤 Profile Routes (Protected)
// // // // // // router.get("/profile", protect, getProfile);
// // // // // // router.put("/profile", protect, updateProfile);

// // // // // // export default router;

// // // // // // backend/routes/userRoutes.js
// // // // // import express from "express";
// // // // // import {
// // // // //   registerUser,
// // // // //   loginUser,
// // // // //   getUserProfile,
// // // // //   updateUserProfile,
// // // // // } from "../controllers/userController.js";
// // // // // import { protect } from "../middleware/auth.js";

// // // // // const router = express.Router();

// // // // // // 🧩 Auth Routes
// // // // // // router.post("/register", registerUser);
// // // // // // router.post("/login", loginUser);

// // // // // // 👤 Profile Routes (Protected)
// // // // // router
// // // // //   .route("/profile")
// // // // //   .get(protect, getUserProfile)
// // // // //   .put(protect, updateUserProfile);

// // // // // export default router;

// // // // import express from "express";
// // // // import { getUserProfile, updateUserProfile } from "../controllers/userController.js";
// // // // import { protect } from "../middleware/auth.js";

// // // // const router = express.Router();

// // // // // 👤 Profile Routes (Protected)
// // // // router
// // // //   .route("/profile")
// // // //   .get(protect, getUserProfile)
// // // //   .put(protect, updateUserProfile);

// // // // export default router;

// // // import express from "express";
// // // import {
// // //   getUserProfile,
// // //   updateUserProfile,
// // //   changePassword,
// // // } from "../controllers/userController.js";
// // // import { protect } from "../middleware/auth.js";

// // // const router = express.Router();

// // // // 👤 Profile Routes (Protected)
// // // router
// // //   .route("/profile")
// // //   .get(protect, getUserProfile)
// // //   .put(protect, updateUserProfile);

// // // // 🔐 Change Password (Protected)
// // // router.put("/change-password", protect, changePassword);

// // // export default router;

// // import express from "express";
// // import {
// //   getUserProfile,
// //   updateUserProfile,
// //   uploadProfilePic,
// // } from "../controllers/userController.js";
// // import { protect } from "../middleware/auth.js";
// // import multer from "multer";
// // import path from "path";

// // const router = express.Router();

// // // 📁 Multer setup for image uploads
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// //     cb(null, uniqueSuffix + path.extname(file.originalname));
// //   },
// // });
// // const upload = multer({ storage });

// // // 👤 Profile Routes
// // router
// //   .route("/profile")
// //   .get(protect, getUserProfile)
// //   .put(protect, updateUserProfile);

// // // 🖼️ Upload profile picture
// // router.post("/profile/upload", protect, upload.single("image"), uploadProfilePic);

// // export default router;

// import express from "express";
// import multer from "multer";
// import path from "path";
// import {
//   getUserProfile,
//   updateUserProfile,
//   changePassword,
//   uploadProfilePic,
// } from "../controllers/userController.js";
// import { protect } from "../middleware/auth.js";

// const router = express.Router();

// // 📁 Multer setup for storing uploaded images
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename(req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // max 5MB
//   fileFilter(req, file, cb) {
//     const fileTypes = /jpeg|jpg|png/;
//     const extname = fileTypes.test(
//       path.extname(file.originalname).toLowerCase()
//     );
//     const mimetype = fileTypes.test(file.mimetype);
//     if (extname && mimetype) return cb(null, true);
//     cb(new Error("Only .jpeg, .jpg and .png files are allowed!"));
//   },
// });

// // 👤 Profile Routes
// router.route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

// // 🔑 Change Password
// router.put("/profile/password", protect, changePassword);

// // 🖼 Upload Profile Picture
// router.post("/profile/upload", protect, upload.single("image"), uploadProfilePic);

// export default router;

import express from "express";
import multer from "multer";
import path from "path";
import {
  getUserProfile,
  updateUserProfile,
  changePassword,
  uploadProfilePic,
} from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// ✅ Multer storage setup for image uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
  fileFilter(req, file, cb) {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) return cb(null, true);
    cb(new Error("Only .jpeg, .jpg, and .png files are allowed!"));
  },
});

// 👤 PROFILE ROUTES
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// 🔑 CHANGE PASSWORD
router.put("/profile/password", protect, changePassword);

// 🖼 UPLOAD PROFILE PICTURE
router.post(
  "/profile/upload",
  protect,
  upload.single("image"),
  uploadProfilePic
);

export default router;
