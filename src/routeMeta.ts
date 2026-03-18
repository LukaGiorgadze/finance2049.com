type RouteMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
};

const HOME_TITLE = "Finance 2049 | Portfolio Tracking for Long-Term Investors";
const HOME_DESCRIPTION =
  "Finance 2049 is an open-source portfolio tracking app for long-term investors. Track cost basis, gains, allocation, and performance with a clean, local-first experience.";

export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    canonicalPath: "/",
    ogType: "website",
  },
  "/terms-and-use": {
    title: "Terms of Use | Finance 2049",
    description:
      "These Terms of Use govern your use of Finance 2049, including the mobile application, website, and related services.",
    canonicalPath: "/terms-and-use",
    ogType: "article",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Finance 2049",
    description:
      "This Privacy Policy explains how Finance 2049 keeps portfolio data stored locally on your device while relying on limited third-party analytics, crash reporting, and market data services.",
    canonicalPath: "/privacy-policy",
    ogType: "article",
  },
  "/404": {
    title: "Page Not Found | Finance 2049",
    description: "The requested Finance 2049 page could not be found.",
    canonicalPath: "/404",
    ogType: "website",
  },
};

export const normalizeRoutePath = (pathname: string) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
};

export const getRouteMeta = (pathname: string) =>
  routeMeta[normalizeRoutePath(pathname)] ?? routeMeta["/404"];
