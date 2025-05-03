
import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Book } from "@/types/book";

interface BookActionsProps {
  book: Book;
  variant?: "card" | "detail";
  onWishlistToggle?: (bookId: string, isWishlisted: boolean) => void;
  onRatingChange?: (bookId: string, rating: number) => void;
}

const BookActions = ({ 
  book, 
  variant = "card",
  onWishlistToggle,
  onRatingChange
}: BookActionsProps) => {
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  
  // Toggle wishlist status
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newStatus = !isWishlisted;
    setIsWishlisted(newStatus);
    
    if (onWishlistToggle) {
      onWishlistToggle(book.id, newStatus);
    }
    
    toast({
      title: newStatus ? "Added to Wishlist" : "Removed from Wishlist",
      description: `"${book.title}" has been ${newStatus ? "added to" : "removed from"} your wishlist`,
      variant: newStatus ? "default" : "destructive",
    });
  };
  
  // Handle rating selection
  const handleRating = (rating: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setCurrentRating(rating);
    
    if (onRatingChange) {
      onRatingChange(book.id, rating);
    }
    
    toast({
      title: "Rating Submitted",
      description: `You rated "${book.title}" ${rating} out of 5 stars`,
    });
  };
  
  return (
    <div className={cn(
      "flex items-center justify-end gap-2",
      variant === "detail" ? "mt-4" : ""
    )}>
      {/* Star Rating */}
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((rating) => (
          <motion.button
            key={rating}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-1"
            onClick={handleRating(rating)}
            onMouseEnter={() => setHoverRating(rating)}
            onMouseLeave={() => setHoverRating(0)}
          >
            <Star
              className={cn(
                "h-4 w-4 transition-colors",
                (hoverRating >= rating || currentRating >= rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400"
              )}
            />
          </motion.button>
        ))}
      </div>
      
      {/* Wishlist Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-1"
        onClick={toggleWishlist}
      >
        <Heart
          className={cn(
            "h-5 w-5 transition-all",
            isWishlisted
              ? "text-red-500 fill-red-500"
              : "text-gray-400"
          )}
        />
      </motion.button>
    </div>
  );
};

export default BookActions;
