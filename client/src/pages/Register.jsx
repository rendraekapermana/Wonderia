import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to register");
      }

      // Simpan token & role di localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/login"; // Redirect ke login
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="register" className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-6">Create Your Account</h1>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div>
            <label className="block font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded-md"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>

        <p className="mt-4">
          Already have an account?
          <a href="./Login" className="text-blue-500">
            {" "}
            Login
          </a>
        </p>
      </div>

      {/* Gambar di sebelah kanan */}
      <div className="w-1/2 flex justify-end">
        <img
          src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/login%20background.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvbG9naW4gYmFja2dyb3VuZC5qcGciLCJpYXQiOjE3NDA4ODY3NDksImV4cCI6MTc3MjQyMjc0OX0.V225MvT--60I__-_Uy9nxYOMfZfbQFfGrANAQHXztZY"
          alt="Register Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
