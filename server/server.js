import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import cloudinary from "cloudinary";
import Ticket from "./models/Ticket.js"; // Pastikan impor model Ticket
import ticketRoutes from "./routes/ticketsRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use("/api/tickets", ticketRoutes);
app.use(express.json());

// Konfigurasi Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware Multer (Menyimpan di Memori)
const upload = multer({ storage: multer.memoryStorage() });

// 📌 Route: Tambah Tiket dengan Gambar
app.post("/api/tickets", upload.single("image"), async (req, res) => {
  try {
    console.log("📝 Received Data:", req.body);
    console.log("🖼️ Image Data:", req.file);

    // Validasi input
    if (!req.body.name || !req.body.price || !req.body.category || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload gambar ke Cloudinary
    const uploadResult = await cloudinary.uploader.upload_stream(
      { folder: "wonderia_tickets" },
      async (error, result) => {
        if (error) {
          console.error("❌ Cloudinary Upload Error:", error);
          return res.status(500).json({ message: "Image upload failed" });
        }

        // Buat tiket baru dengan URL gambar
        const newTicket = new Ticket({
          name: req.body.name,
          price: parseFloat(req.body.price),
          category: req.body.category,
          image: result.secure_url, // Simpan URL gambar dari Cloudinary
        });

        await newTicket.save();
        console.log("✅ Ticket Saved:", newTicket);
        res.status(201).json(newTicket);
      }
    );

    // Kirim buffer gambar ke Cloudinary
    uploadResult.end(req.file.buffer);
  } catch (error) {
    console.error("❌ Error adding ticket:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

app.get("/api/tickets", async (req, res) => {
  try {
    const tickets = await Ticket.find(); // Ambil semua tiket dari database
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO, {})
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on port ${process.env.PORT}`)
    );
  })
  .catch((error) => console.log(error));

  // Rute
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes); // Contoh rute tiket
