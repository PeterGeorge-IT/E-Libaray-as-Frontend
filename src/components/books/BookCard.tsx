
import { Link } from "react-router-dom";
import { Book } from "@/types/book";
import { Badge } from "@/components/ui/badge";
import BookActions from "./BookActions";
import { motion } from "framer-motion";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/book/${book.id}`} className="group block">
        <div className="card-gradient rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-elibrary-accent/20 h-full flex flex-col">
          <div className="relative aspect-[2/3] overflow-hidden">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {!book.isAvailable && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                <Badge className="bg-red-500 text-white">Not Available</Badge>
              </div>
            )}
            {book.isFeatured && (
              <Badge className="absolute top-2 right-2 bg-elibrary-accent text-white">Featured</Badge>
            )}
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-elibrary-accent transition-colors">
              {book.title}
            </h3>
            <p className="text-sm text-gray-400">by {book.author}</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-gray-300">{book.rating}</span>
              <span className="mx-2 text-gray-600">•</span>
              <span className="text-xs text-gray-400">{book.pageCount} pages</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {book.categories.slice(0, 2).map((category, index) => (
                <Badge key={index} variant="outline" className="text-xs border-elibrary-accent/30 text-elibrary-accent-light">
                  {category}
                </Badge>
              ))}
              {book.categories.length > 2 && (
                <Badge variant="outline" className="text-xs border-elibrary-accent/30 text-elibrary-accent-light">
                  +{book.categories.length - 2}
                </Badge>
              )}
            </div>
            
            {/* Book Actions (Rating and Wishlist) */}
            <div className="mt-auto pt-3">
              <BookActions book={book} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;
