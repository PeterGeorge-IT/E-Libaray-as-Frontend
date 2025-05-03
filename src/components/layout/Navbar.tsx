
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, User, Book, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-elibrary-bg-dark/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-elibrary-accent mr-2" />
              <span className="text-xl font-bold text-white">EPY-Library</span>
            </Link>
          </div>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Search for books..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full bg-elibrary-bg-card/50 border-white/5 focus:border-elibrary-accent focus:ring-1 focus:ring-elibrary-accent"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                Search
              </Button>
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/library" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Library
              </Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
              <Button variant="outline" size="sm" asChild className="ml-4 border-elibrary-accent text-elibrary-accent hover:bg-elibrary-accent hover:text-white">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-400 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-elibrary-bg-card animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search for books..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full bg-elibrary-bg-dark border-white/5"
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  Search
                </Button>
              </form>
            </div>
            <Link to="/" className="text-gray-300 hover:bg-elibrary-accent/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Home className="h-5 w-5 mr-2" /> Home
            </Link>
            <Link to="/library" className="text-gray-300 hover:bg-elibrary-accent/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <Book className="h-5 w-5 mr-2" /> Library
            </Link>
            <Link to="/dashboard" className="text-gray-300 hover:bg-elibrary-accent/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center">
              <User className="h-5 w-5 mr-2" /> Dashboard
            </Link>
            <div className="pt-4 pb-3 border-t border-white/10">
              <Button className="w-full bg-elibrary-accent hover:bg-elibrary-accent-dark text-white">
                <Link to="/login" className="w-full">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
