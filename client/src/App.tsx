import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";

import AuthPage from "@/pages/auth-page";
import ProfessorDashboard from "@/pages/professor/dashboard";
import StudentDashboard from "@/pages/student/dashboard";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/shared/navbar";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <ProtectedRoute path="/professor" component={ProfessorDashboard} />
        <ProtectedRoute path="/student" component={StudentDashboard} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={AuthPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
