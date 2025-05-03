import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { books, categories } from "@/data/mockBooks";
import BookGrid from "@/components/books/BookGrid";
import { Book } from "@/types/book";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";
import PageNavigation from "@/components/navigation/PageNavigation";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

// Featured books carousel component
const FeaturedBooksCarousel = ({ featuredBooks }: { featuredBooks: Book[] }) => {
  if (featuredBooks.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Featured Books</h2>
      
      <div className="relative px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {featuredBooks.map((book) => (
              <CarouselItem key={book.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-1"
                >
                  <div className="overflow-hidden rounded-lg bg-gradient-to-b from-elibrary-bg-card to-elibrary-bg-dark shadow-lg">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="aspect-[2/3] overflow-hidden rounded-lg">
                        <img 
                          src={book.coverImage} 
                          alt={book.title} 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-white line-clamp-2">{book.title}</h3>
                          <p className="text-sm text-gray-400">by {book.author}</p>
                          <p className="mt-2 text-xs line-clamp-4 text-gray-300">{book.description}</p>
                        </div>
                        <Button 
                          asChild 
                          variant="outline" 
                          className="mt-2 border-elibrary-accent text-elibrary-accent hover:bg-elibrary-accent/10"
                        >
                          <a href={`/book/${book.id}`}>View Details</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </motion.div>
  );
};

const LibraryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  // Get query params
  const categoryParam = searchParams.get("category");
  const sortParam = searchParams.get("sort") || "title";
  
  // Get featured books
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);

  // Load featured books
  useEffect(() => {
    setFeaturedBooks(books.filter(book => book.isFeatured));
  }, []);
  
  // Handle search term changes with real-time filtering
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Show searching feedback when typing
    if (value.length > 0) {
      setIsSearching(true);
      
      // Small artificial delay for typing feedback
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  };
  
  // Filter and sort books based on URL query params and search term
  useEffect(() => {
    let filtered = [...books];
    
    // Filter by category if specified
    if (categoryParam) {
      const category = categories.find(cat => cat.slug === categoryParam);
      if (category) {
        filtered = filtered.filter(book => book.categories.includes(category.name));
      }
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        book =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.description.toLowerCase().includes(term) ||
          book.categories.some(cat => cat.toLowerCase().includes(term))
      );
    }
    
    // Sort books
    switch (sortParam) {
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    setFilteredBooks(filtered);
  }, [categoryParam, sortParam, searchTerm]);
  
  // Handle category selection
  const handleCategoryChange = (categorySlug: string) => {
    setSearchParams(prev => {
      if (categorySlug === "all") {
        prev.delete("category");
      } else {
        prev.set("category", categorySlug);
      }
      return prev;
    });
    
    // Show notification
    toast("Category filter applied", {
      description: `Showing books in ${categorySlug === "all" ? "all categories" : `the ${categorySlug} category`}`,
      duration: 3000
    });
  };
  
  // Handle sort change
  const handleSortChange = (value: string) => {
    setSearchParams(prev => {
      prev.set("sort", value);
      return prev;
    });
    
    // Show notification
    toast("Sort order updated", {
      description: `Books are now sorted by ${value === "title" ? "title" : value === "newest" ? "publication date" : "rating"}`,
      duration: 3000
    });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSearchParams({});
    
    // Show notification
    toast("Filters cleared", {
      description: "Showing all books in the default sort order",
      duration: 3000
    });
  };
  
  // Get active category name
  const activeCategoryName = categoryParam 
    ? categories.find(cat => cat.slug === categoryParam)?.name || "All Categories"
    : "All Categories";

  return (
    <div className="bg-elibrary-bg-dark min-h-screen">
      <div className="bg-gradient-to-b from-elibrary-bg-dark to-elibrary-bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Library
          </motion.h1>
          
          {/* Featured Books Carousel */}
          <FeaturedBooksCarousel featuredBooks={featuredBooks} />
          
          {/* Search and Filters */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Search Form */}
            <div className="md:col-span-2">
              <div className="flex items-center">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className={`h-5 w-5 ${isSearching ? 'text-elibrary-accent' : 'text-gray-400'}`} />
                  </div>
                  <Input 
                    type="text" 
                    name="search" 
                    placeholder="Search by title, author, or keyword..." 
                    className="pl-10 bg-elibrary-bg-dark border-white/5 focus:border-elibrary-accent transition-all duration-300"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button 
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setSearchTerm("")}
                    >
                      <X className="h-4 w-4 text-gray-400 hover:text-white transition-colors" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sort Selector */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-full">
                <Select
                  value={sortParam}
                  onValueChange={handleSortChange}
                >
                  <SelectTrigger className="bg-elibrary-bg-dark border-white/5 transition-all duration-300">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-elibrary-bg-card border-white/10">
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Category Filters */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg font-medium text-white mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={!categoryParam ? "default" : "outline"} 
                size="sm" 
                className={!categoryParam 
                  ? "bg-elibrary-accent text-white hover:bg-elibrary-accent-dark transition-all duration-300" 
                  : "border-white/10 hover:bg-white/5 transition-all duration-300"
                }
                onClick={() => handleCategoryChange("all")}
              >
                All Categories
              </Button>
              {categories.map(category => (
                <Button 
                  key={category.id} 
                  variant={categoryParam === category.slug ? "default" : "outline"} 
                  size="sm"
                  className={categoryParam === category.slug 
                    ? "bg-elibrary-accent text-white hover:bg-elibrary-accent-dark transition-all duration-300" 
                    : "border-white/10 hover:bg-white/5 transition-all duration-300"
                  }
                  onClick={() => handleCategoryChange(category.slug)}
                >
                  {category.name} ({category.bookCount})
                </Button>
              ))}
            </div>
          </motion.div>
          
          {/* Active Filters Summary */}
          <AnimatePresence>
            {(categoryParam || searchTerm || sortParam !== "title") && (
              <motion.div 
                className="flex items-center justify-between bg-elibrary-bg-card/50 rounded-lg p-4 mb-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-400">Filters:</span>
                  {categoryParam && (
                    <span className="bg-elibrary-accent/20 text-elibrary-accent-light text-xs rounded-full px-3 py-1">
                      Category: {activeCategoryName}
                    </span>
                  )}
                  {searchTerm && (
                    <span className="bg-elibrary-accent/20 text-elibrary-accent-light text-xs rounded-full px-3 py-1">
                      Search: "{searchTerm}"
                    </span>
                  )}
                  {sortParam !== "title" && (
                    <span className="bg-elibrary-accent/20 text-elibrary-accent-light text-xs rounded-full px-3 py-1">
                      Sort: {sortParam === "newest" ? "Newest First" : "Highest Rated"}
                    </span>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={clearFilters}
                >
                  <X className="h-4 w-4 mr-1" /> Clear
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Books Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BookGrid 
              books={filteredBooks} 
              title={`${filteredBooks.length} ${filteredBooks.length === 1 ? 'book' : 'books'} found`} 
            />
          </motion.div>
        </div>
      </div>
      
      {/* Page Navigation (Back and Go to Top buttons) */}
      <PageNavigation />
    </div>
  );
};

export default LibraryPage;
