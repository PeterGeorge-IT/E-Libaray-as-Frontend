
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would make an API call to authenticate the user
      console.log({ email, password });
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (email === "admin@example.com" && password === "password") {
        toast({
          title: "Success!",
          description: "Welcome back, admin!",
        });
        navigate("/admin");
      } else if (email && password) {
        toast({
          title: "Success!",
          description: "Welcome back to DigitalInk Library!",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center bg-elibrary-bg-dark py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        className="max-w-md w-full space-y-8 card-gradient p-8 rounded-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div 
          className="text-center"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link to="/" className="inline-flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-elibrary-accent" />
          </Link>
          <h2 className="mt-4 text-3xl font-bold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to your account to access your library
          </p>
        </motion.div>
        
        <motion.form 
          className="mt-8 space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-white">Email address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-elibrary-bg-dark border-white/10 focus:border-elibrary-accent focus:ring-1 focus:ring-elibrary-accent"
              />
              <p className="text-xs text-gray-500 mt-1">Test credentials for admin: admin@example.com / password</p>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-white">Password</Label>
                <a href="#" className="text-sm text-elibrary-accent hover:text-elibrary-accent-light">
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="bg-elibrary-bg-dark border-white/10 focus:border-elibrary-accent focus:ring-1 focus:ring-elibrary-accent"
              />
            </div>
            
            <div className="flex items-center">
              <Checkbox id="remember-me" className="border-white/10" />
              <Label htmlFor="remember-me" className="ml-2 text-gray-400 text-sm">
                Remember me
              </Label>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              className="w-full bg-elibrary-accent hover:bg-elibrary-accent-dark text-white transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </motion.div>
          
          <div className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-elibrary-accent hover:text-elibrary-accent-light font-medium">
              Register now
            </Link>
          </div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
