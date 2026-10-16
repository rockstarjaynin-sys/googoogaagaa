import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="content-surface max-w-lg rounded-[2rem] p-10 text-center">
        <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-muted-foreground">404</p>
        <h1 className="font-display text-5xl leading-none tracking-[-0.06em]">Lost in the build.</h1>
        <p className="mt-6 text-lg text-muted-foreground">The page you’re looking for isn’t here.</p>
        <a href="/" className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:bg-white/10">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
