import { cookies } from "next/headers";
import LoginForm from "./components/LoginForm";

export default async function LandingPage() {
  const cookieStore = await cookies();
  const username = cookieStore.get("my-user")?.value || "guest";

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      <p className="mt-2 text-gray-600">This is your landing page content.</p>

      {username === "guest" && (
        <div className="mt-6">
          <LoginForm />
        </div>
      )}
    </div>
  );
}
