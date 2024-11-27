const express = require("express");

const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Ensure you have a User model
const nodemailer = require("nodemailer"); // For sending emails
const crypto = require("crypto");
// const dotenv = require('dotenv');

const router = express.Router();
const JWT_SECRET ="this is a secret key"; // Replace with a strong secret
const TOKEN_EXPIRATION = "1h"; // Example expiration for JWT token

// Nodemailer Transporter (Replace with your SMTP details)
const transporter = nodemailer.createTransport({
  service: "Gmail", // or your email provider
  auth: {
    user: "rajasekhartummala05@gmail.com", // Your email
    pass: "saxz puuy tkdj kgil", // Your email password or app-specific password
  },
});

// ==================================
// SIGNUP ROUTE
// ==================================
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  console.log(password);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // No need to hash the password here, it's handled by the pre-save hook
    const newUser = new User({ name, email, password });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ==================================
// LOGIN ROUTE
// ==================================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Use the model's comparePassword method
    // console.log(password,user.comparePassword(password))
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});



// ==================================
// FORGOT PASSWORD ROUTE
// ==================================
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();
    console.log(resetToken)
    const resetURL = `https://tprwealth.netlify.app/reset-password/${resetToken}`; // Frontend reset password route

    await transporter.sendMail({
      to: email,
      from: "rajasekhartummala05@gmail.com",
      subject: "TPR Wealth 'Password Reset Request'",
      html: `<p>You requested a password reset</p>
             <p>Click this <a href="${resetURL}">link</a> to reset your password</p>
             `
    });

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ==================================
// RESET PASSWORD ROUTE
// ==================================
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  console.log(req.params);
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  try {
    // Find user with the token and the expiration date
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Set the new password, no need to hash manually as pre-save hook handles this
    user.password = password; // Directly assign password, hashing is handled by pre-save hook
    user.resetPasswordToken = undefined; // Clear the reset token after use
    user.resetPasswordExpires = undefined; // Clear the reset expiration date

    await user.save(); // Save the updated user with the hashed password

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
