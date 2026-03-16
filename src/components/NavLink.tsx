import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            "relative inline-flex items-center overflow-hidden rounded-full border border-white/60 bg-white/30 px-3 py-2 text-sm font-medium text-muted-foreground shadow-[inset_1px_1px_0_rgba(255,255,255,0.8),inset_0_0_0_1px_rgba(255,255,255,0.18)] backdrop-blur-[18px] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/15 dark:bg-white/[0.05] dark:shadow-[inset_1px_1px_0_rgba(255,255,255,0.16),inset_0_0_0_1px_rgba(255,255,255,0.04)] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.08))] before:opacity-90 dark:before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] group-data-[contrast=light]/nav:text-white/72",
            !activeClassName &&
              "hover:border-white/75 hover:bg-white/38 hover:text-foreground dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:hover:text-white group-data-[contrast=light]/nav:hover:text-white",
            !activeClassName &&
              isActive &&
              "border-primary/20 bg-white/44 text-foreground dark:border-primary/25 dark:bg-white/[0.1] dark:text-white group-data-[contrast=light]/nav:text-white",
            !activeClassName &&
              "after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-[calc(100%-1rem)] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-primary/90 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100",
            !activeClassName &&
              isActive &&
              "after:scale-x-100",
            "supports-[backdrop-filter]:bg-white/20 dark:supports-[backdrop-filter]:bg-white/[0.04]",
            isPending && "opacity-70",
            className,
            isActive && activeClassName,
            isPending && pendingClassName,
          )
        }
        style={{
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
          backdropFilter: "blur(18px) saturate(180%)",
          filter: "url(#nav-link-glass)",
        }}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
