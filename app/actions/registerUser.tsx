"use server";

import { supabase } from "@/lib/supabaseClient";
import { UserEntity } from "@/types/users";
import bcrypt from "bcrypt"

export async function registerUser(data: UserEntity) {
  // Hash the password
  const hashedPassword = bcrypt.hashSync(data.password, 10);

  const { error } = await supabase
    .from("users")
    .insert({
      username: data.username,
      email: data.email,
      password: hashedPassword, // ⚠️ store hashed
    });

  if (error) {
    console.error("REGISTER ERROR:", error);
    return { success: false, message: error.message };
  }

  return { success: true };
}
