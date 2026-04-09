import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Seller Online <span className="text-blue-600">Boilerplate</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A premium full-stack starter kit with Next.js, Better Auth, Drizzle, Redis, and Docker.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8">Get Started</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">Documentation</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>Powered by Better Auth</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Secure, framework-agnostic auth with Drizzle adapter and session management.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Database</CardTitle>
              <CardDescription>Drizzle ORM & Postgres</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Type-safe SQL queries and easy migrations with Drizzle and PostgreSQL.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Infrastructure</CardTitle>
              <CardDescription>Docker & Redis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Ready-to-go caching with Redis and full containerization with Docker Compose.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-8">
          <code className="px-4 py-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-sm font-mono">
            make deploy
          </code>
        </div>
      </div>
    </div>
  );
}
