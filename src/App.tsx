import { useEffect, useLayoutEffect, useState, useSyncExternalStore } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, useRoutes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { routes } from "./routes.tsx";
import { getRouteMeta } from "./routeMeta.ts";
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

const RouteHead = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const canonicalUrl = `https://finance2049.com${meta.canonicalPath}`;

    document.title = meta.title;

    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:type"]', meta.ogType ?? "website");
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);

    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
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
          <RouteHead />
          <GoogleAnalytics />
          <ScrollManager />
          <AppRoutes />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
