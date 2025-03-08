import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    console.log("Register request received:", req.body); // Tambahkan log
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in register route:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});


// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cek apakah user ada di database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email tidak terdaftar!" });
    }

    // Cek apakah password benar
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password salah!" });
    }

    res.status(200).json({ message: "Login berhasil!" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});


export default router;
