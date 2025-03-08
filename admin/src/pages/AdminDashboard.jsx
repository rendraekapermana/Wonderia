import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });
  const [editingTicket, setEditingTicket] = useState(null);

  // Fetch Tickets from Backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tickets")
      .then((response) => {
        console.log("Tickets Data:", response.data); // Debugging
        setTickets(response.data);
      })
      .catch((error) => console.log(error));
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTicket = async () => {
    if (
      !newTicket.name ||
      !newTicket.price ||
      !newTicket.category ||
      !newTicket.image
    ) {
      console.error("❌ Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newTicket.name);
    formData.append("price", Number(newTicket.price));
    formData.append("category", newTicket.category);
    formData.append("image", newTicket.image);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/tickets",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setTickets([...tickets, response.data]);
      setNewTicket({ name: "", price: "", category: "", image: null });
    } catch (error) {
      console.error("❌ Error adding ticket:", error.response?.data || error);
    }
  };

  const handleDeleteTicket = async (id) => {
    if (!id) {
      console.error("Invalid ticket ID:", id);
      return;
    }

    try {
      await axios.delete(`http://localhost:8080/api/tickets/${id}`);
      setTickets(tickets.filter((ticket) => ticket._id !== id));
    } catch (error) {
      console.error("Error deleting ticket:", error.response?.data || error);
    }
  };

  const handleEditTicket = (ticket) => {
    setEditingTicket(ticket);
    setNewTicket({
      name: ticket.name,
      price: ticket.price,
      category: ticket.category,
      image: null, // Jangan langsung set gambar lama, biarkan user mengunggah ulang jika ingin mengubah
    });
  };

  const handleUpdateTicket = async () => {
    if (!editingTicket) return;

    const formData = new FormData();
    formData.append("name", newTicket.name);
    formData.append("price", Number(newTicket.price));
    formData.append("category", newTicket.category);

    if (newTicket.image) {
      formData.append("image", newTicket.image); // Hanya tambahkan jika ada gambar baru
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/tickets/${editingTicket._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }, // Pastikan pakai FormData
        }
      );

      setTickets(
        tickets.map((ticket) =>
          ticket._id === editingTicket._id ? response.data : ticket
        )
      );
      setNewTicket({ name: "", price: "", category: "", image: null });
      setEditingTicket(null);
    } catch (error) {
      console.error("Error updating ticket:", error.response?.data || error);
    }
  };

console.log(
  "Ticket Image URL:",
  tickets.map((ticket) => ticket.image)
);


  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-4 border p-4 rounded-md">
        <h2 className="text-lg font-semibold">Add / Edit Ticket</h2>
        <input
          type="text"
          name="name"
          placeholder="Ticket Name"
          value={newTicket.name}
          onChange={handleInputChange}
          className="border p-2 m-2 w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newTicket.price}
          onChange={handleInputChange}
          className="border p-2 m-2 w-full"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newTicket.category}
          onChange={handleInputChange}
          className="border p-2 m-2 w-full"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) =>
            setNewTicket((prev) => ({ ...prev, image: e.target.files[0] }))
          }
          className="border p-2 m-2 w-full"
        />

        {editingTicket ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleUpdateTicket}
          >
            Update Ticket
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleAddTicket}
          >
            Add Ticket
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket._id} className="p-4 border rounded-md shadow">
            <img
              src={ticket.image}
              alt={ticket.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold">{ticket.name}</h2>
            <p>
              Price:{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(ticket.price)}
            </p>

            <p>Category: {ticket.category}</p>
            <div className="mt-2">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleEditTicket(ticket)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteTicket(ticket._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
