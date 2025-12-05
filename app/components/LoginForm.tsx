"use client";

import { useState } from "react";
import { loginUser } from "../actions/loginUser";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginUser(email, password);

    if (res.success) {
      setMessage("Login successful!");
      window.location.reload(); // refresh page to see username
    } else {
      setMessage(res.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 flex flex-col gap-2 max-w-sm">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
}
