import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
import Ticket from "../models/Ticket.js";

dotenv.config();

const router = express.Router(); // Pastikan router dideklarasikan di awal

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Konfigurasi `multer` untuk menyimpan file ke Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wonderia_tickets", // Folder di Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// Route untuk menambahkan tiket dengan gambar
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newTicket = new Ticket({
      name,
      price,
      category,
      image: req.file.path || req.file.secure_url, // Pastikan ambil secure_url dari Cloudinary
    });

    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: "Error adding ticket", error });
  }
});

// Get all tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update ticket
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category } = req.body;

    // Cari tiket berdasarkan ID
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    // Perbarui data tiket
    ticket.name = name;
    ticket.price = price;
    ticket.category = category;

    // Jika ada gambar baru, upload ke Cloudinary dan perbarui URL
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "tickets",
      });
      ticket.image = result.secure_url;
    }

    // Simpan perubahan
    await ticket.save();
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Delete ticket
router.delete("/:id", async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
