
import { useState, useEffect } from "react";
import FeaturedBooks from "@/components/books/FeaturedBooks";
import BookGrid from "@/components/books/BookGrid";
import { Button } from "@/components/ui/button";
import { categories, books } from "@/data/mockBooks";
import { Book } from "@/types/book";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [popularBooks, setPopularBooks] = useState<Book[]>([]);
  const [recentlyAddedBooks, setRecentlyAddedBooks] = useState<Book[]>([]);
  
  useEffect(() => {
    // In a real app, we'd fetch these from an API
    // For now, we'll sort our mock data
    
    // Get popular books (highest rated)
    const popular = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);
    setPopularBooks(popular);
    
    // Get recently added books (by publication date)
    const recent = [...books]
      .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
      .slice(0, 4);
    setRecentlyAddedBooks(recent);
  }, []);

  return (
    <div>
      {/* Hero Section with Featured Books */}
      <FeaturedBooks />
      
      {/* Popular Books Section */}
      <section className="bg-elibrary-bg-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Popular Books</h2>
            <Button asChild variant="link" className="text-elibrary-accent hover:text-elibrary-accent-light">
              <Link to="/library">View all</Link>
            </Button>
          </div>
          <BookGrid books={popularBooks} />
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="bg-gradient-to-b from-elibrary-bg-dark to-elibrary-bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Explore Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(0, 12).map((category) => (
              <Link 
                key={category.id} 
                to={`/library?category=${category.slug}`}
                className="card-gradient rounded-lg p-4 text-center hover:border-elibrary-accent transition-all duration-300 group"
              >
                <h3 className="font-medium text-white group-hover:text-elibrary-accent">{category.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{category.bookCount} books</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recently Added Section */}
      <section className="bg-elibrary-bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Recently Added</h2>
            <Button asChild variant="link" className="text-elibrary-accent hover:text-elibrary-accent-light">
              <Link to="/library?sort=newest">View all</Link>
            </Button>
          </div>
          <BookGrid books={recentlyAddedBooks} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-elibrary-bg-dark py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start reading?</h2>
          <p className="text-gray-400 mb-8">Join our digital library today and get access to thousands of books.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-elibrary-accent hover:bg-elibrary-accent-dark text-white">
              <Link to="/register">Sign Up Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/10 hover:bg-white/5">
              <Link to="/library">Browse Books</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
