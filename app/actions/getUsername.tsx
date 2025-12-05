"use server";

import { cookies } from "next/headers";

export async function getUsername() {
  const cookieStore = await cookies();
  const username = cookieStore.get("my-user")?.value || "guest";
  return username;
}
