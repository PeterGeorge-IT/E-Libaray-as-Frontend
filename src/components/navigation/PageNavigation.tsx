
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PageNavigation = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const navigate = useNavigate();
  
  // Show "Go to Top" button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  // Go back to previous page
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      <AnimatePresence>
        {showScrollToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full shadow-lg bg-elibrary-accent text-white hover:bg-elibrary-accent-dark"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Button 
          variant="secondary" 
          size="icon" 
          className="rounded-full shadow-lg"
          onClick={goBack}
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default PageNavigation;
