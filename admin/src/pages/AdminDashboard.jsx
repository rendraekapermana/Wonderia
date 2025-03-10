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
  const [activeMenu, setActiveMenu] = useState("tickets"); // State untuk menu aktif

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tickets")
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTicket = async () => {
    if (!newTicket.name || !newTicket.price || !newTicket.category || !newTicket.image) {
      console.error("❌ Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newTicket.name);
    formData.append("price", Number(newTicket.price));
    formData.append("category", newTicket.category);
    formData.append("image", newTicket.image);

    try {
      const response = await axios.post("http://localhost:8080/api/tickets", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
      image: null,
    });
  };

  const handleUpdateTicket = async () => {
    if (!editingTicket) return;

    const formData = new FormData();
    formData.append("name", newTicket.name);
    formData.append("price", Number(newTicket.price));
    formData.append("category", newTicket.category);

    if (newTicket.image) {
      formData.append("image", newTicket.image);
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/tickets/${editingTicket._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
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

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#975DC1] text-white p-4">
        <h2 className="text-lg font-bold mb-4">Admin Menu</h2>
        <ul>
          <li
            className={`p-2 hover:bg-[#7a4a9a] rounded-md cursor-pointer ${
              activeMenu === "tickets" ? "bg-[#7a4a9a]" : ""
            }`}
            onClick={() => setActiveMenu("tickets")}
          >
            Tickets
          </li>
          <li
            className={`p-2 hover:bg-[#7a4a9a] rounded-md cursor-pointer ${
              activeMenu === "people" ? "bg-[#7a4a9a]" : ""
            }`}
            onClick={() => setActiveMenu("people")}
          >
            People
          </li>
          <li
            className={`p-2 hover:bg-[#7a4a9a] rounded-md cursor-pointer ${
              activeMenu === "bookings" ? "bg-[#7a4a9a]" : ""
            }`}
            onClick={() => setActiveMenu("bookings")}
          >
            Bookings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        {activeMenu === "tickets" && (
          <>
            <div className="mb-4 border p-4 rounded-md bg-white shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Add / Edit Ticket</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ticket Name"
                  value={newTicket.name}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={newTicket.price}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={newTicket.category}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) =>
                    setNewTicket((prev) => ({ ...prev, image: e.target.files[0] }))
                  }
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="mt-4">
                {editingTicket ? (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleUpdateTicket}
                  >
                    Update Ticket
                  </button>
                ) : (
                  <button
                    className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                    onClick={handleAddTicket}
                  >
                    Add Ticket
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tickets.map((ticket) => (
                <div key={ticket._id} className="p-4 border rounded-md bg-white shadow-sm">
                  <img
                    src={ticket.image}
                    alt={ticket.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="text-xl font-bold mt-2">{ticket.name}</h2>
                  <p className="text-gray-600">
                    Price:{" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(ticket.price)}
                  </p>
                  <p className="text-gray-600">Category: {ticket.category}</p>
                  <div className="mt-4">
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
                      onClick={() => handleEditTicket(ticket)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      onClick={() => handleDeleteTicket(ticket._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeMenu === "people" && (
          <div className="p-4 border rounded-md bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-4">People Management</h2>
            {/* Tambahkan konten untuk manajemen orang di sini */}
            <p>People content goes here...</p>
          </div>
        )}

        {activeMenu === "bookings" && (
          <div className="p-4 border rounded-md bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Bookings Management</h2>
            {/* Tambahkan konten untuk manajemen pemesanan di sini */}
            <p>Bookings content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;