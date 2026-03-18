import { useEffect, useState, useSyncExternalStore } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, useRoutes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { routes } from "./routes.tsx";
import "./index.css";

const AppRoutes = () => useRoutes(routes);

const GA_MEASUREMENT_ID = "G-G6G2YVT1GH";

const GoogleAnalytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
    }
  }, [pathname]);

  return null;
};

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

const emptySubscribe = () => () => {};

const useIsClient = () =>
  useSyncExternalStore(emptySubscribe, () => true, () => false);

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const isClient = useIsClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {isClient ? <Toaster /> : null}
          {isClient ? <Sonner /> : null}
          <GoogleAnalytics />
          <ScrollManager />
          <AppRoutes />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
