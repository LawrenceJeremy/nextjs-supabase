"use server";

import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function loginUser(email: string, password: string) {
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user) {
    return { success: false, message: "Invalid credentials" };
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return { success: false, message: "Invalid credentials" };
  }

  // ✅ Writable cookies in server action
  const cookieStore = await cookies();
  cookieStore.set("my-user", user.username, {
    httpOnly: true,
    path: "/",
  });

  return { success: true, user };
}
