import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="text-xs font-body uppercase tracking-[0.3em] text-accent mb-6 block">
          Error 404
        </span>
        <h1 className="font-display text-6xl lg:text-8xl text-primary mb-6">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg font-light max-w-md mx-auto mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="luxury" size="lg" className="group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
