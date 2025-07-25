"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
      )}
      <div className="mb-2">
        <strong>Name:</strong> {session.user?.name || "-"}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {session.user?.email || "-"}
      </div>
      <div className="mb-2">
        <strong>ID:</strong> {session.user?.id || "-"}
      </div>
      {/* You can add more fields here if needed */}
    </div>
  );
}
