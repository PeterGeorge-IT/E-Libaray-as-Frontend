
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import LibraryPage from "@/pages/LibraryPage";
import BookDetailPage from "@/pages/BookDetailPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import NotFound from "@/pages/NotFound";
import ReadingPage from "@/pages/ReadingPage";
import DashboardPage from "@/pages/DashboardPage";

const queryClient = new QueryClient();

// Wrapper component to handle AnimatePresence with Routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/library" element={<Layout><LibraryPage /></Layout>} />
        <Route path="/book/:id" element={<Layout><BookDetailPage /></Layout>} />
        <Route path="/read/:id" element={<ReadingPage />} />
        <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
