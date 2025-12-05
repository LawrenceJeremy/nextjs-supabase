"use server";

import { supabase } from "@/lib/supabaseClient";
import { UserEntity } from "@/types/users";

export async function createUser(data: UserEntity) {
  const { error } = await supabase
    .from("users")
    .insert({
      username: data.username,
      email: data.email,
      password: data.password,
    });

  if (error) {
    console.error(error);
    return { success: false, message: error.message };
  }

  return { success: true };
}
