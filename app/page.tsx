import { cookies } from "next/headers";

export default async function LandingPage() {
  const cookieStore = await cookies(); // ✅ await here
  const username = cookieStore.get("my-user")?.value || "guest";

  return (
    <div>
      Welcome, {username}!
    </div>
  );
}
