
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import PageNavigation from "@/components/navigation/PageNavigation";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-elibrary-bg-dark p-4">
      <div className="text-center max-w-md">
        <BookOpen className="h-16 w-16 text-elibrary-accent mb-6 mx-auto" />
        <h1 className="text-4xl font-bold text-white mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button asChild className="bg-elibrary-accent hover:bg-elibrary-accent-dark text-white">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
      <PageNavigation />
    </div>
  );
};

export default NotFound;
