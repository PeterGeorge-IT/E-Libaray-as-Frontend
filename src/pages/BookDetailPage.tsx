
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "@/data/mockBooks";
import { Book } from "@/types/book";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, Download, Calendar, BookText, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CheckoutModal from "@/components/checkout/CheckoutModal";
import { motion } from "framer-motion";

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutMode, setCheckoutMode] = useState<'borrow' | 'buy' | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (id) {
      // In a real app, we'd fetch book from an API
      const foundBook = getBookById(id);
      setBook(foundBook || null);
      setLoading(false);
    }
  }, [id]);

  const handleBorrow = () => {
    setCheckoutMode('borrow');
  };
  
  const handleBuy = () => {
    setCheckoutMode('buy');
  };
  
  const handleReadOnline = () => {
    if (!id) return;
    window.location.href = `/read/${id}`;
  };
  
  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-elibrary-bg-dark">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  
  if (!book) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-elibrary-bg-dark">
        <h2 className="text-2xl text-white mb-4">Book not found</h2>
        <Button asChild>
          <Link to="/library">Back to Library</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="bg-elibrary-bg-dark min-h-screen">
      {/* Hero section with book cover and blur effect background */}
      <section className="relative h-[350px] md:h-[400px] overflow-hidden">
        {/* Background blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${book.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-elibrary-bg-dark/80 via-elibrary-bg-dark to-elibrary-bg-dark"></div>
        </div>
      </section>
      
      {/* Book details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-64 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book cover - large on left */}
          <div className="md:col-span-1">
            <motion.div 
              className="aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border-4 border-elibrary-bg-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={book.coverImage} 
                alt={book.title} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
          
          {/* Book information - right side */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {book.categories.map((category, index) => (
                <Badge key={index} className="bg-elibrary-accent/20 text-elibrary-accent-light border-none">
                  {category}
                </Badge>
              ))}
              {book.isFeatured && (
                <Badge className="bg-yellow-500/20 text-yellow-400 border-none">Featured</Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{book.title}</h1>
            <p className="text-xl text-gray-300 mb-4">by {book.author}</p>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-5 w-5 ${
                      star <= Math.floor(book.rating) 
                        ? "text-yellow-400 fill-yellow-400" 
                        : star - 0.5 <= book.rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-600"
                    }`} 
                  />
                ))}
                <span className="ml-2 text-white">{book.rating}</span>
              </div>
              <span className="mx-3 text-gray-600">•</span>
              <div className="flex items-center text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(book.publicationDate).getFullYear()}
              </div>
              <span className="mx-3 text-gray-600">•</span>
              <div className="flex items-center text-gray-400">
                <BookText className="h-4 w-4 mr-1" />
                {book.pageCount} pages
              </div>
            </div>
            
            <div className="card-gradient rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">About this book</h3>
              <p className="text-gray-300">{book.description}</p>
            </div>
            
            {/* Price section */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div className="card-gradient rounded-lg p-4">
                  <div className="text-sm text-gray-400">Borrow</div>
                  <div className="text-xl font-bold text-white">Free</div>
                </div>
                <div className="card-gradient rounded-lg p-4">
                  <div className="text-sm text-gray-400">Purchase</div>
                  <div className="text-xl font-bold text-white">$9.99</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-elibrary-accent hover:bg-elibrary-accent-dark text-white flex items-center gap-2"
                onClick={handleReadOnline}
              >
                <BookOpen className="h-5 w-5" /> Read Online
              </Button>
              <Button 
                variant="outline"
                className="border-elibrary-accent text-elibrary-accent hover:bg-elibrary-accent/10 flex items-center gap-2"
                onClick={handleBorrow}
              >
                <Download className="h-5 w-5" /> Borrow
              </Button>
              <Button 
                variant="secondary"
                className="flex items-center gap-2"
                onClick={handleBuy}
              >
                <ShoppingCart className="h-5 w-5" /> Buy $9.99
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Additional book details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="text-gray-400">Author</p>
                <p className="text-white font-medium">{book.author}</p>
              </div>
              <div>
                <p className="text-gray-400">Language</p>
                <p className="text-white font-medium">{book.language}</p>
              </div>
              <div>
                <p className="text-gray-400">Publication Date</p>
                <p className="text-white font-medium">
                  {new Date(book.publicationDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Categories</p>
                <p className="text-white font-medium">{book.categories.join(", ")}</p>
              </div>
              <div>
                <p className="text-gray-400">Pages</p>
                <p className="text-white font-medium">{book.pageCount}</p>
              </div>
              <div>
                <p className="text-gray-400">Availability</p>
                <p className={`font-medium ${book.isAvailable ? "text-green-400" : "text-red-400"}`}>
                  {book.isAvailable ? "Available" : "Currently Unavailable"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Checkout Modal */}
      {checkoutMode && book && (
        <CheckoutModal 
          isOpen={!!checkoutMode} 
          onClose={() => setCheckoutMode(null)} 
          book={book} 
          mode={checkoutMode} 
        />
      )}
    </div>
  );
};

export default BookDetailPage;
