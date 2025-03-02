import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div id="register" className="flex h-screen">
      {/* Container untuk form register (di kiri) */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-6">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <a href="#" className="text-blue-500">
            {" "}
            Login
          </a>
        </p>
      </div>

      {/* Container untuk gambar (di kanan) */}
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
