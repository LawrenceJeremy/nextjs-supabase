"use client";

import { useState } from "react";
import { createUser } from "@/app/actions/createUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await createUser(form);
    console.log(res);
  }

  return (
    <div className="max-w-sm mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold">Create User</h1>

      <form onSubmit={onSubmit} className="space-y-4">

        <Input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <Input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
