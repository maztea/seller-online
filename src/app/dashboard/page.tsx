"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/signin");
    }
  }, [session, isPending, router]);

  const handleSignout = async () => {
    await authClient.signOut();
    router.push("/auth/signin");
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center font-sans tracking-tight">
        <p className="text-lg animate-pulse">Loading session...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button variant="destructive" onClick={handleSignout}>
            Sign Out
          </Button>
        </div>

        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle>Welcome back, {session.user.name}!</CardTitle>
            <CardDescription>Here is your current session profile information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg border">
                <p className="text-sm text-zinc-500">Email</p>
                <p className="font-medium">{session.user.email}</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg border">
                <p className="text-sm text-zinc-500">User ID</p>
                <p className="font-mono text-xs">{session.user.id}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
