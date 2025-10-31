import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "orangesign@gmail.com" && password === "admin@123") {
      setIsLoggedIn(true);
      console.log("Admin logged in");
    } else {
      alert("Invalid credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-md bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-heading font-bold text-3xl">O</span>
            </div>
            <h1 className="font-heading font-bold text-2xl mb-2">Admin Login</h1>
            <p className="text-sm text-muted-foreground">Sign in to manage projects</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-admin-email"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                data-testid="input-admin-password"
              />
            </div>
            <Button type="submit" className="w-full" data-testid="button-admin-login">
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading font-bold text-3xl">Project Management</h1>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)} data-testid="button-admin-logout">
            Logout
          </Button>
        </div>
        <Card className="p-8">
          <p className="text-muted-foreground text-center">
            Admin panel functionality will be implemented in the backend phase.
          </p>
        </Card>
      </div>
    </div>
  );
}
