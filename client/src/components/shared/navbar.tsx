import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-primary animate-pulse" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              AI Exam Grader
            </span>
          </Link>
          
          {user && (
            <div className="hidden md:flex space-x-4">
              <Link href={user.role === 'professor' ? '/professor' : '/student'}>
                Dashboard
              </Link>
              <Link href="/about">About</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground">
                {user.username} ({user.role})
              </span>
              <Button
                variant="ghost"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
              >
                Logout
              </Button>
            </>
          ) : (
            location !== '/auth' && (
              <Link href="/auth">
                <Button>Login</Button>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
