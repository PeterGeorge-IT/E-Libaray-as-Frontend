
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageNavigation from "../navigation/PageNavigation";

interface LayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  enter: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { 
      duration: 0.3,
      ease: "easeIn" 
    } 
  }
};

const childVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 }
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.main>
      <Footer />
      <PageNavigation />
    </div>
  );
};

export default Layout;
