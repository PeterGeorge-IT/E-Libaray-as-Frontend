
import { useEffect, useState, useRef } from "react";
import { Book } from "@/types/book";
import { getFeaturedBooks } from "@/data/mockBooks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedBooks = () => {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const books = getFeaturedBooks();
    setFeaturedBooks(books);
  }, []);
  
  useEffect(() => {
    // Auto-rotate featured books every 8 seconds
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentBookIndex((prevIndex) => 
        prevIndex === featuredBooks.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [featuredBooks.length]);
  
  if (featuredBooks.length === 0) return null;
  
  const currentBook = featuredBooks[currentBookIndex];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentBookIndex((prevIndex) => 
      prevIndex === 0 ? featuredBooks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentBookIndex((prevIndex) => 
      prevIndex === featuredBooks.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  
  return (
    <section className="relative h-[500px] md:h-[600px] bg-elibrary-bg-dark overflow-hidden">
      {/* Background image with overlay */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div 
          key={currentBookIndex}
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${currentBook.coverImage})` }}
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
          custom={direction}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-elibrary-bg-dark via-elibrary-bg-dark/80 to-transparent"></div>
        </motion.div>
      </AnimatePresence>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div 
              key={currentBookIndex}
              className="space-y-6"
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              custom={direction}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {currentBook.title}
              </h1>
              <p className="text-xl text-gray-300">by {currentBook.author}</p>
              <div className="max-w-xl">
                <p className="text-gray-400 line-clamp-3">{currentBook.description}</p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <Button asChild className="bg-elibrary-accent hover:bg-elibrary-accent-dark text-white">
                  <Link to={`/book/${currentBook.id}`}>Read Now</Link>
                </Button>
                <Button asChild variant="outline" className="border-elibrary-accent text-elibrary-accent">
                  <Link to="/library">Browse Library</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="hidden md:block relative h-[400px] w-[280px] mx-auto" ref={carouselRef}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img 
                key={currentBookIndex}
                src={currentBook.coverImage} 
                alt={currentBook.title} 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transform -rotate-3"
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                custom={direction}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Previous book"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Next book"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      
      {/* Book selector indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {featuredBooks.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentBookIndex ? 1 : -1);
              setCurrentBookIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBookIndex ? "bg-elibrary-accent w-8" : "bg-white/30"
            }`}
            aria-label={`Go to featured book ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
