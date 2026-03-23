import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { reviews } from "./reviewsData";
import { useLandingMotion } from "./useLandingMotion";

const Reviews = () => {
  const { getInViewProps } = useLandingMotion();

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-white py-24 text-foreground dark:bg-zinc-900 dark:text-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent dark:bg-none dark:bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-white to-white dark:bg-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent/10 to-transparent dark:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large subtle ring decoration */}
      <svg
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-[0.03]"
        viewBox="0 0 500 500"
      >
        <circle cx="250" cy="250" r="200" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
        <circle cx="250" cy="250" r="220" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        <circle cx="250" cy="250" r="240" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" />
      </svg>

      {/* Horizontal dashed lines */}
      <svg
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute left-0 top-20 h-4 w-full opacity-[0.04]"
        viewBox="0 0 1400 4"
      >
        <line x1="0" y1="2" x2="1400" y2="2" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeDasharray="8 16" />
      </svg>

      <div className="container relative z-10">
        <motion.header {...getInViewProps()} className="mb-16 space-y-4 text-center">
          <p className="inline-flex rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-primary dark:border-white/10 dark:bg-white/[0.04]">
            Reviews
          </p>
          <h2 id="reviews-heading" className="text-4xl font-bold tracking-tight md:text-5xl">
            Loved by <span className="text-gradient-indigo dark:text-primary">users</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/65">
            Trusted by founders, freelancers, and people who want a cleaner way to track their assets.
          </p>
        </motion.header>

        <div role="list" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              role="listitem"
              aria-label={`Review by ${r.name}`}
              {...getInViewProps({ delay: i * 0.08 })}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border/70 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.22)] transition-transform duration-200 md:hover:-translate-y-1 md:hover:border-primary/20 md:hover:shadow-[0_24px_70px_-36px_rgba(52,199,89,0.22)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:dark:hover:border-white/15 md:dark:hover:bg-white/[0.06] md:dark:hover:shadow-[0_24px_70px_-40px_rgba(99,102,241,0.22)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent opacity-80 dark:bg-none dark:bg-white/15"
              />
              <div className="flex gap-1" role="img" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} aria-hidden="true" size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-secondary-foreground dark:text-white/80">
                <p>{r.text}</p>
              </blockquote>
              <footer className="mt-auto flex items-center gap-3">
                <Avatar className="h-11 w-11 ring-1 ring-black/5 dark:ring-white/10">
                  <AvatarImage src={r.avatar} alt={r.name} />
                  <AvatarFallback className="bg-muted text-sm font-semibold text-foreground">
                    {r.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold dark:text-white">{r.name}</p>
                  <p className="text-xs text-muted-foreground dark:text-white/50">{r.role}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
