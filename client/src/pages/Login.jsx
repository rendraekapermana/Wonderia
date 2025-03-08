import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State untuk menampilkan pesan error
  const navigate = useNavigate(); // Untuk navigasi ke halaman lain

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error sebelum request baru

    console.log("Data yang dikirim:", { email, password }); // Debugging

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Status Response:", response.status); // Debugging status
      const data = await response.json();
      console.log("Response dari server:", data); // Debugging response

      if (!response.ok) {
        throw new Error(data.message || "Email atau password salah");
      }

      alert("Login berhasil!");
      navigate("/DetailTicket");
    } catch (err) {
      console.error("Error login:", err.message); // Debugging error
      setError(err.message); // Menampilkan error jika login gagal
    }
  };

  return (
    <div id="login" className="flex h-screen">
      {/* Container untuk form login (di kiri) */}
      <div
        id="login-container"
        className="w-1/2 flex flex-col justify-center items-center p-8"
      >
        <h1 className="text-3xl font-bold mb-6">Get Started Now</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Menampilkan pesan error jika login gagal */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="text-right">
            <Link href="#" className="text-blue-500 text-sm">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>

        <p className="mt-4">
          Dont have an account?
          <Link to="/Register" className="text-blue-500">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>

      {/* Container untuk gambar (di kanan) */}
      <div className="w-1/2 flex justify-end">
        <img
          src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/login%20background.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvbG9naW4gYmFja2dyb3VuZC5qcGciLCJpYXQiOjE3NDA4ODY3NDksImV4cCI6MTc3MjQyMjc0OX0.V225MvT--60I__-_Uy9nxYOMfZfbQFfGrANAQHXztZY"
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
