
import { Book } from "@/types/book";
import BookCard from "./BookCard";
import { motion } from "framer-motion";

interface BookGridProps {
  books: Book[];
  title?: string;
}

const BookGrid = ({ books, title }: BookGridProps) => {
  return (
    <div className="w-full">
      {title && (
        <motion.h2 
          className="text-2xl font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1 + index * 0.05, // Staggered animation
              ease: "easeOut"
            }}
          >
            <BookCard book={book} />
          </motion.div>
        ))}
      </motion.div>
      {books.length === 0 && (
        <motion.div 
          className="py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-400 text-lg">No books found</p>
        </motion.div>
      )}
    </div>
  );
};

export default BookGrid;
