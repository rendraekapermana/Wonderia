import Ticket from "../models/Ticket.js";
import cloudinary from "../utils/cloudinary.js"; // Pastikan ini ada

export const createTicket = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    // Pastikan file ada sebelum mengakses req.file
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    // Upload gambar ke Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "tickets", // Folder di Cloudinary
    });

    // Buat tiket baru dengan URL gambar dari Cloudinary
    const newTicket = new Ticket({
      name,
      price,
      category,
      image: result.secure_url, // Menggunakan secure_url dari Cloudinary
    });

    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    console.error("❌ Error creating ticket:", error);
    res.status(500).json({ error: error.message });
  }
};
