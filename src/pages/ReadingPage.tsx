
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "@/data/mockBooks";
import { Book } from "@/types/book";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize, Minimize, ZoomIn, ZoomOut } from "lucide-react";
import PageNavigation from "@/components/navigation/PageNavigation";

const ReadingPage = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Mock total pages
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    if (id) {
      // In a real app, we'd fetch book from an API
      const foundBook = getBookById(id);
      setBook(foundBook || null);
      setLoading(false);
    }
  }, [id]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.log(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
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
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Reading toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to={`/book/${id}`} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Book Details
              </Link>
            </Button>
            <h2 className="text-xl font-bold text-white hidden md:block">{book.title}</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-white mx-2">{zoom}%</span>
            <Button variant="outline" size="icon" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {/* Book viewer */}
        <div className="flex flex-col items-center">
          <div 
            className="relative bg-white aspect-[3/4] w-full max-w-3xl shadow-2xl mb-8 rounded-lg overflow-hidden"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          >
            {/* Mock PDF pages - in a real application, you would integrate a PDF viewer library */}
            <div className="w-full h-full p-8">
              {/* This would be replaced with an actual PDF viewer component */}
              <div className="flex flex-col h-full justify-center items-center">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="max-h-64 object-contain mb-8"
                />
                <h2 className="text-black text-2xl font-bold mb-4">{book.title}</h2>
                <p className="text-black text-center mb-6">Page {currentPage} of {totalPages}</p>
                <p className="text-gray-700 text-center">
                  This is a preview of {book.title} by {book.author}. 
                  In a real application, the actual pages of the book would be displayed here.
                </p>
              </div>
            </div>
          </div>
          
          {/* Page navigation controls */}
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="w-64">
              <Slider 
                value={[currentPage]} 
                min={1} 
                max={totalPages} 
                step={1} 
                onValueChange={(value) => setCurrentPage(value[0])} 
              />
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-white">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </motion.div>
      <PageNavigation />
    </div>
  );
};

export default ReadingPage;
