
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-elibrary-bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-elibrary-accent mr-2" />
              <span className="text-xl font-bold text-white">EPY-Library</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Your gateway to a world of digital knowledge. Explore, borrow, and read from our vast collection of e-books.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/library" className="text-gray-300 hover:text-elibrary-accent">
                  Browse Library
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-elibrary-accent">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/new-releases" className="text-gray-300 hover:text-elibrary-accent">
                  New Releases
                </Link>
              </li>
              <li>
                <Link to="/most-borrowed" className="text-gray-300 hover:text-elibrary-accent">
                  Most Borrowed
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Account</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-elibrary-accent">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-elibrary-accent">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-elibrary-accent">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/reading-history" className="text-gray-300 hover:text-elibrary-accent">
                  Reading History
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-elibrary-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-elibrary-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-elibrary-accent">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-elibrary-accent">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* Social links if needed */}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2025 EPY-Library ,E-Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
