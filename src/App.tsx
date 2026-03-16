import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, useRoutes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { routes } from "./routes.tsx";
import "./index.css";

const AppRoutes = () => useRoutes(routes);

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    let frame = 0;
    let attempts = 0;

    const scrollToHash = () => {
      const element = document.getElementById(hash.slice(1));

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (attempts < 10) {
        attempts += 1;
        frame = window.requestAnimationFrame(scrollToHash);
      }
    };

    frame = window.requestAnimationFrame(scrollToHash);

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {isMounted ? <Toaster /> : null}
          {isMounted ? <Sonner /> : null}
          <ScrollManager />
          <AppRoutes />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
