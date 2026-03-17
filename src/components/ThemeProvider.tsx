import { useEffect, useState, ReactNode } from "react";
import {
  ThemeContext,
  THEME_COLORS,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/components/theme-context";

const isTheme = (value: string | null): value is Theme =>
  value === "light" || value === "dark";

const getSystemTheme = (): Theme => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(saved) ? saved : getSystemTheme();
};

const syncThemeMetadata = (theme: Theme) => {
  const themeColor = THEME_COLORS[theme];
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeColor);

  const manifestLink = document.querySelector<HTMLLinkElement>('link[rel="manifest"]');
  if (!manifestLink) return () => {};

  const manifest = {
    name: "Finance 2049",
    short_name: "Finance 2049",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  const objectUrl = URL.createObjectURL(
    new Blob([JSON.stringify(manifest)], { type: "application/manifest+json" }),
  );
  manifestLink.href = objectUrl;

  return () => {
    URL.revokeObjectURL(objectUrl);
  };
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(saved) || typeof window.matchMedia !== "function") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    const cleanupMetadata = syncThemeMetadata(theme);

    return cleanupMetadata;
  }, [theme]);

  const toggle = () =>
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      return nextTheme;
    });

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
