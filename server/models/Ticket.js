import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }, // Tambahkan field image
});

export default mongoose.model("Ticket", TicketSchema);
