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
  const [selectedRole, setSelectedRole] = useState<"student" | "professor">(
    "student"
  );

  const form = useForm({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      username: "",
      password: "",
      role: selectedRole,
    },
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
    <div className='min-h-screen flex items-center justify-center p-4 relative'>
      {/* Neural Background */}
      <div className='absolute inset-0 z-0'>
        <NeuralBackground />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8'>
        {/* Login Card */}
        <Card className='p-6 bg-white/90 backdrop-blur-lg border-purple-200 shadow-lg'>
          <CardContent>
            <div className='space-y-6'>
              <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold text-purple-800'>
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h1>
                <p className='text-black'>AI-powered exam grading platform</p>
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
              >
                <div className='space-y-2'>
                  <Label htmlFor='username' className='text-purple-800'>
                    Username
                  </Label>
                  <Input
                    id='username'
                    {...form.register("username")}
                    className='bg-purple-50 border-purple-200 focus-visible:ring-purple-500 text-black'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='password' className='text-purple-800'>
                    Password
                  </Label>
                  <Input
                    id='password'
                    type='password'
                    {...form.register("password")}
                    className='bg-purple-50 border-purple-200 focus-visible:ring-purple-500 text-black'
                  />
                </div>

                {!isLogin && (
                  <div className='space-y-2'>
                    <Label className='text-purple-800'>Role</Label>
                    <div className='flex gap-4'>
                      <Toggle
                        pressed={selectedRole === "student"}
                        onPressedChange={() => setSelectedRole("student")}
                        className='data-[state=on]:bg-purple-600 data-[state=on]:text-white border-purple-200 text-purple-800'
                      >
                        Student
                      </Toggle>
                      <Toggle
                        pressed={selectedRole === "professor"}
                        onPressedChange={() => setSelectedRole("professor")}
                        className='data-[state=on]:bg-purple-600 data-[state=on]:text-white border-purple-200 text-purple-800'
                      >
                        Professor
                      </Toggle>
                    </div>
                  </div>
                )}

                <Button
                  type='submit'
                  className='w-full bg-purple-600 hover:bg-purple-700'
                  disabled={
                    loginMutation.isPending || registerMutation.isPending
                  }
                >
                  {isLogin ? "Login" : "Register"}
                </Button>
              </form>

              <Button
                variant='ghost'
                className='w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50'
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Need an account?" : "Already have an account?"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Side */}
        <div className='hidden md:flex flex-col justify-center text-center space-y-6'>
          <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600'>
            Next-Gen Exam Grading
          </h2>
          <p className='text-xl text-black'>
            Powered by advanced AI for accurate and efficient assessment
          </p>
          <img
            src='https://github.com/ziadmostafa1/ziadmostafa1.github.io/blob/main/images/2nd-post/Screenshot%202025-02-08%20141236%20-%20Copy.png?raw=true'
            alt='AI Technology'
            className='rounded-lg shadow-2xl border-4 border-purple-100'
          />
        </div>
      </div>
    </div>
  );
}
