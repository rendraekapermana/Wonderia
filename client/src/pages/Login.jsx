import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
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
          <div className="text-right">
            <a href="#" className="text-blue-500 text-sm">
              Forgot password?
            </a>
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
          <a href="#" className="text-blue-500">
            {" "}
            Sign Up
          </a>
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
