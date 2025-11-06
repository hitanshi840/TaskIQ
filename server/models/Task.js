// // // // import mongoose from "mongoose";

// // // // const taskSchema = new mongoose.Schema(
// // // //   {
// // // //     user: {
// // // //       type: mongoose.Schema.Types.ObjectId,
// // // //       ref: "User",
// // // //       required: true,
// // // //     },
// // // //     title: {
// // // //       type: String,
// // // //       required: true,
// // // //     },
// // // //     description: {
// // // //       type: String,
// // // //     },
// // // //     priority: {
// // // //       type: String,
// // // //       enum: ["Low", "Medium", "High"],
// // // //       default: "Medium",
// // // //     },
// // // //     completed: {
// // // //       type: Boolean,
// // // //       default: false,
// // // //     },
// // // //     dueDate: {
// // // //       type: Date,
// // // //     },
// // // //   },
// // // //   { timestamps: true }
// // // // );

// // // // const Task = mongoose.model("Task", taskSchema);
// // // // export default Task;

// // // import mongoose from "mongoose";

// // // const taskSchema = new mongoose.Schema(
// // //   {
// // //     user: {
// // //       type: mongoose.Schema.Types.ObjectId,
// // //       ref: "User",
// // //       required: true,
// // //     },
// // //     title: {
// // //       type: String,
// // //       required: true,
// // //     },
// // //     description: {
// // //       type: String,
// // //     },
// // //     completed: {
// // //       type: Boolean,
// // //       default: false,
// // //     },
// // //   },
// // //   { timestamps: true }
// // // );

// // // const Task = mongoose.model("Task", taskSchema);
// // // export default Task;

// // import mongoose from "mongoose";

// // const taskSchema = new mongoose.Schema(
// //   {
// //     title: {
// //       type: String,
// //       required: [true, "Title is required"],
// //       trim: true,
// //     },
// //     description: {
// //       type: String,
// //       trim: true,
// //       default: "",
// //     },
// //     status: {
// //       type: String,
// //       enum: ["pending", "in-progress", "completed"],
// //       default: "pending",
// //     },
// //     user: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "User",
// //       required: true,
// //     },
// //   },
// //   { timestamps: true }
// // );

// // const Task = mongoose.model("Task", taskSchema);
// // export default Task;

// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//       trim: true,
//     },
//     description: {
//       type: String,
//       trim: true,
//       default: "",
//     },
//     status: {
//       type: String,
//       enum: ["pending", "in-progress", "completed"],
//       default: "pending",
//     },
//     category: {
//       type: String,
//       default: "General",
//       trim: true,
//     },
//     priority: {
//       type: String,
//       enum: ["Low", "Medium", "High"],
//       default: "Medium",
//     },
//     dueDate: {
//       type: Date,
//     },
//     // 🧠 New Field → Marks if the task was user-created or AI-generated
//     source: {
//       type: String,
//       enum: ["Manual", "AI"],
//       default: "Manual",
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Task = mongoose.model("Task", taskSchema);
// export default Task;


import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    category: {
      type: String,
      default: "General",
      trim: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    dueDate: {
      type: Date,
    },
    // ⏰ New fields for reminders
    reminderTime: {
      type: Date,
      default: null,
    },
    isReminded: {
      type: Boolean,
      default: false,
    },
    // 🧠 New Field → Marks if the task was user-created or AI-generated
    source: {
      type: String,
      enum: ["Manual", "AI"],
      default: "Manual",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
