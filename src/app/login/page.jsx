"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="bg-base-100 p-10 rounded-2xl shadow-xl text-center space-y-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-gray-500">Sign in to continue</p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="px-4 py-2 bg-black text-white rounded-lg w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
