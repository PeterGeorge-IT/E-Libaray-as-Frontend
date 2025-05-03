import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/types/book";
import BookGrid from "@/components/books/BookGrid";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Download, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [borrowedBooks, setBorrowedBooks] = useState<Book[]>([]);
  const [purchasedBooks, setPurchasedBooks] = useState<Book[]>([]);
  const [wishlistBooks, setWishlistBooks] = useState<Book[]>([]);
  const [historyBooks, setHistoryBooks] = useState<Book[]>([]);
  const { toast } = useToast();

  // In a real app, we'd fetch this data from an API
  // For now, we'll use empty states since we don't have actual user data

  const emptyStateAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headerAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const EmptyState = ({ message, icon, actionLabel, actionLink }: { 
    message: string;
    icon: React.ReactNode;
    actionLabel: string;
    actionLink: string;
  }) => (
    <motion.div 
      className="flex flex-col items-center justify-center py-16 text-center"
      initial="hidden"
      animate="visible"
      variants={emptyStateAnimation}
    >
      <div className="w-16 h-16 rounded-full bg-elibrary-accent/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
      <p className="text-gray-400 max-w-md mb-6">
        Explore our library to find your next favorite read
      </p>
      <Button asChild>
        <Link to={actionLink} className="flex items-center gap-2">
          {actionLabel} <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </motion.div>
  );

  return (
    <div className="bg-elibrary-bg-dark min-h-screen pb-16">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
        initial="hidden"
        animate="visible"
        variants={headerAnimation}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">My Dashboard</h1>
          <Button variant="outline" asChild>
            <Link to="/library" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Library
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="borrowed" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
            <TabsTrigger value="purchased">Purchased</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="borrowed" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Borrowed Books</CardTitle>
                <CardDescription>Books you currently have on loan.</CardDescription>
              </CardHeader>
              <CardContent>
                {borrowedBooks.length > 0 ? (
                  <BookGrid books={borrowedBooks} />
                ) : (
                  <EmptyState 
                    message="You haven't borrowed any books yet" 
                    icon={<Download className="w-8 h-8 text-elibrary-accent" />} 
                    actionLabel="Browse Library"
                    actionLink="/library"
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purchased" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Purchased Books</CardTitle>
                <CardDescription>Books you own in your collection.</CardDescription>
              </CardHeader>
              <CardContent>
                {purchasedBooks.length > 0 ? (
                  <BookGrid books={purchasedBooks} />
                ) : (
                  <EmptyState 
                    message="You haven't purchased any books yet" 
                    icon={<ShoppingCart className="w-8 h-8 text-elibrary-accent" />} 
                    actionLabel="Shop Books"
                    actionLink="/library"
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Wishlist</CardTitle>
                <CardDescription>Books you've saved for later.</CardDescription>
              </CardHeader>
              <CardContent>
                {wishlistBooks.length > 0 ? (
                  <BookGrid books={wishlistBooks} />
                ) : (
                  <EmptyState 
                    message="Your wishlist is empty" 
                    icon={<BookOpen className="w-8 h-8 text-elibrary-accent" />} 
                    actionLabel="Find Books"
                    actionLink="/library"
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Reading History</CardTitle>
                <CardDescription>Books you've previously borrowed or read.</CardDescription>
              </CardHeader>
              <CardContent>
                {historyBooks.length > 0 ? (
                  <BookGrid books={historyBooks} />
                ) : (
                  <EmptyState 
                    message="No reading history yet" 
                    icon={<Calendar className="w-8 h-8 text-elibrary-accent" />} 
                    actionLabel="Discover Books"
                    actionLink="/library"
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
