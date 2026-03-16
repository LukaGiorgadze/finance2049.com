import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { label: "Why", id: "why", href: "#why" },
  { label: "Features", id: "features", href: "#features" },
  { label: "Reviews", id: "reviews", href: "#reviews" },
  // { label: "Pricing", id: "pricing", href: "#pricing" },
  { label: "FAQ", id: "faq", href: "#faq" },
] as const;
const darkSectionIds = ["features", "pricing", "footer"];
const githubRepo = {
  owner: "LukaGiorgadze",
  name: "finance2049",
  url: "https://github.com/LukaGiorgadze/finance2049",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [overDarkSection, setOverDarkSection] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setOverDarkSection(false);
      return;
    }

    const updateContrast = () => {
      const nav = document.querySelector("nav");
      if (!nav) return;

      const rect = nav.getBoundingClientRect();
      const navTop = rect.top + (nav.offsetHeight - 20 || 0);
      const navBottom = rect.bottom - (nav.offsetHeight - 60 || 0);

      const isOverDark = darkSectionIds.some((id) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const sectionRect = section.getBoundingClientRect();
        return sectionRect.top < navBottom && sectionRect.bottom > navTop;
      });

      setOverDarkSection(isOverDark);
    };

    updateContrast();
    window.addEventListener("scroll", updateContrast, { passive: true });
    window.addEventListener("resize", updateContrast);

    return () => {
      window.removeEventListener("scroll", updateContrast);
      window.removeEventListener("resize", updateContrast);
    };
  }, [theme]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };


  return (
    <nav
      className="group/nav fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
      data-contrast={overDarkSection ? "light" : "default"}
    >
      <div
        className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between overflow-hidden rounded-[1.65rem] border border-white/50 px-4 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.32),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-[24px] transition-colors duration-200 before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.65rem] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.02))] before:opacity-100 after:pointer-events-none after:absolute after:inset-px after:rounded-[calc(1.65rem-1px)] after:border after:border-white/10 dark:border-white/20 dark:bg-black/20 dark:shadow-[0_26px_70px_-36px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.08)] dark:before:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.01))] dark:after:border-white/5 sm:px-5"
        style={{
          WebkitBackdropFilter: "blur(24px) saturate(165%)",
          backdropFilter: "blur(24px) saturate(165%)",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative z-10 inline-flex items-center gap-3 rounded-full outline-none transition-opacity duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Go to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-t from-primary to-[#63ed85] p-1.5 shadow-[0_14px_32px_-18px_hsl(var(--primary)/0.75)]">
            <img src={logoWhite} alt="" className="h-full w-full object-contain" />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className={cn("text-base font-semibold tracking-tight text-foreground transition-colors duration-200", overDarkSection && "text-white")}>
              Finance 2049
            </span>
            <span className={cn("text-xs font-medium tracking-tight text-foreground/80 transition-colors duration-200", overDarkSection && "text-white/80")}>
              Simple portfolio tracking
            </span>
          </span>
        </button>

        <div className="relative z-10 hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={(e) => scrollTo(e, link.id)}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-foreground/72 outline-none transition-colors duration-200 hover:text-foreground hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-primary/30 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10",
                overDarkSection && "!text-white hover:!text-white hover:!bg-white/10",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="relative z-10 hidden items-center gap-4 md:flex">
          <button
            onClick={toggle}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-muted-foreground outline-none transition-colors duration-200 hover:bg-white/16 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:hover:text-white",
              overDarkSection && "text-white hover:text-white",
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={githubRepo.url}
            target="_blank"
            aria-label={`Open ${githubRepo.owner}/${githubRepo.name} on GitHub`}
          >
            <img
              src={`https://img.shields.io/github/stars/${githubRepo.owner}/${githubRepo.name}`}
              alt={`GitHub stars for ${githubRepo.owner}/${githubRepo.name}`}
              className="dark:invert h-6"
            />
          </a>
        </div>

        <div className="relative z-10 flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-muted-foreground outline-none transition-colors duration-200 hover:bg-white/16 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:hover:text-white",
              overDarkSection && "!text-white/70 hover:!text-white",
            )}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground outline-none transition-colors duration-200 hover:bg-white/16 focus-visible:ring-2 focus-visible:ring-primary/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]",
              overDarkSection && "!text-white/70 hover:!text-white",
            )}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-3 w-full max-w-6xl px-1 md:hidden">
          <div
            className="relative overflow-hidden rounded-[1.5rem] border border-white/50 p-3 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.34),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-[24px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[1.5rem] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.04))] dark:border-white/15 dark:bg-black/20 dark:shadow-[0_24px_70px_-36px_rgba(0,0,0,0.78),inset_0_1px_0_rgba(255,255,255,0.08)] dark:before:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.01))]"
            style={{
              WebkitBackdropFilter: "blur(24px) saturate(165%)",
              backdropFilter: "blur(24px) saturate(165%)",
            }}
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={(e) => scrollTo(e, link.id)}
                  href={link.href}
                  className={cn(
                    "block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-foreground/78 outline-none transition-colors duration-200 hover:bg-white/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/30 dark:text-white/75 dark:hover:bg-white/[0.05] dark:hover:text-white",
                    overDarkSection && "!text-white/70 hover:!text-white",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
