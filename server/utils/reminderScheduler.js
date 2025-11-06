// server/utils/reminderScheduler.js
const cron = require("node-cron");
const Task = require("../models/Task");
const User = require("../models/User");
const sendEmail = require("./sendEmail");

const checkReminders = async () => {
  const now = new Date();

  const tasks = await Task.find({
    reminderTime: { $lte: now },
    notified: false,
  }).populate("user", "email name");

  for (const task of tasks) {
    const userEmail = task.user?.email;
    if (!userEmail) continue;

    // 📨 Compose the reminder email
    const subject = `⏰ TaskIQ Reminder: ${task.title}`;
    const text = `Hey ${task.user.name || "there"},\n\nThis is a reminder for your task:\n\n📋 ${task.title}\n🕐 Scheduled at: ${task.reminderTime.toLocaleString()}\n\nDescription:\n${task.description || "No description"}\n\n- TaskIQ Assistant 🚀`;

    // Send Email
    await sendEmail(userEmail, subject, text);

    // Mark as notified
    task.notified = true;
    await task.save();
  }
};

// Runs every minute
cron.schedule("* * * * *", checkReminders);

module.exports = checkReminders;
