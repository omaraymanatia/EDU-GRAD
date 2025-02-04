import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { NeuralBackground } from "@/components/ui/neural-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@db/schema";
import { Toggle } from "@/components/ui/toggle";

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const { user, loginMutation, registerMutation } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState<"student" | "professor">("student");

  const form = useForm({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      username: "",
      password: "",
      role: selectedRole
    }
  });

  useEffect(() => {
    if (user) {
      setLocation(user.role === "professor" ? "/professor" : "/student");
    }
  }, [user, setLocation]);

  const onSubmit = (data: any) => {
    const mutation = isLogin ? loginMutation : registerMutation;
    mutation.mutate({ ...data, role: selectedRole });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <NeuralBackground />

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        <Card className="p-6 bg-background/60 backdrop-blur-lg border-primary/20">
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h1>
                <p className="text-muted-foreground">
                  AI-powered exam grading platform
                </p>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    {...form.register("username")}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    {...form.register("password")}
                    className="bg-background/50"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <div className="flex gap-4">
                      <Toggle
                        pressed={selectedRole === "student"}
                        onPressedChange={() => setSelectedRole("student")}
                      >
                        Student
                      </Toggle>
                      <Toggle
                        pressed={selectedRole === "professor"}
                        onPressedChange={() => setSelectedRole("professor")}
                      >
                        Professor
                      </Toggle>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loginMutation.isPending || registerMutation.isPending}
                >
                  {isLogin ? "Login" : "Register"}
                </Button>
              </form>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Need an account?" : "Already have an account?"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="hidden md:flex flex-col justify-center text-center space-y-6">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Next-Gen Exam Grading
          </h2>
          <p className="text-xl text-muted-foreground">
            Powered by advanced AI for accurate and efficient assessment
          </p>
          <img
            src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1"
            alt="AI Technology"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}