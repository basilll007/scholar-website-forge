import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-5">
      <div className="text-center max-w-md">
        <p className="section-label">404</p>
        <h1 className="font-serif text-3xl font-semibold mb-3">Page not found</h1>
        <p className="text-sm text-muted-foreground mb-6">
          The page you requested could not be found.
        </p>
        <Link to="/" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
