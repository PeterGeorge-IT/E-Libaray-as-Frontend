
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate passwords match
      if (password !== confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords don't match",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // In a real app, this would make an API call to register the user
      console.log({ name, email, password });
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your account has been created successfully!",
      });
      navigate("/login");
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
      <div className="max-w-md w-full space-y-8">
        <motion.div 
          className="text-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Link to="/" className="inline-flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-elibrary-accent" />
          </Link>
          <h2 className="mt-4 text-3xl font-bold text-white">Create an account</h2>
          <p className="mt-2 text-sm text-gray-400">
            Join DigitalInk to access your personal library
          </p>
        </motion.div>
        
        <motion.form 
          className="mt-8 space-y-6 card-gradient p-8 rounded-lg border border-white/10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="bg-elibrary-bg-dark border-white/10 focus:border-elibrary-accent focus:ring-1 focus:ring-elibrary-accent"
              />
            </div>
            
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
            </div>
            
            <div>
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                className="bg-elibrary-bg-dark border-white/10 focus:border-elibrary-accent focus:ring-1 focus:ring-elibrary-accent"
              />
            </div>
            
            <div>
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="bg-elibrary-bg-dark border-white/10 focus:border-elibrary-accent focus:ring-1 focus:ring-elibrary-accent"
              />
            </div>
            
            <div className="flex items-center">
              <Checkbox id="terms" className="border-white/10" />
              <Label htmlFor="terms" className="ml-2 text-gray-400 text-sm">
                I agree to the <a href="#" className="text-elibrary-accent hover:text-elibrary-accent-light">Terms of Service</a> and <a href="#" className="text-elibrary-accent hover:text-elibrary-accent-light">Privacy Policy</a>
              </Label>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-elibrary-accent hover:bg-elibrary-accent-dark text-white"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
          
          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-elibrary-accent hover:text-elibrary-accent-light font-medium">
              Sign in
            </Link>
          </div>
          
          <div className="flex justify-center mt-4">
            <Button
              type="button"
              variant="ghost"
              className="text-gray-400 hover:text-white flex items-center"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to homepage
            </Button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
