import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChartBar,
  Landmark,
  Newspaper,
  ShieldCheckIcon,
  Star,
  Wallet,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme-context";
import appStore from "/appstore.svg";
import playStore from "/playstore.svg";

import appHome from "/app_home.png";
import appPortfolio from "/app_portfolio.png";
import appAnalytics from "/app_analytics.png";
import appAnalytics2 from "/app_analytics2.png";
import appTicker from "/app_ticker.png";
import appNews from "/app_news.png";

import appHomeDark from "/app_home_dark.png";
import appPortfolioDark from "/app_portfolio_dark.png";
import appAnalyticsDark from "/app_analytics_dark.png";
import appAnalytics2Dark from "/app_analytics2_dark.png";
import appTickerDark from "/app_ticker_dark.png";
import appNewsDark from "/app_news_dark.png";
import { reviews } from "./reviewsData";
import {
  buildSoftwareApplicationSchema,
  softwareApplicationMeta,
} from "./structuredData";

const heroScreens = [
  {
    title: "Home",
    description: "Markets, watchlists, and your portfolio snapshot in one fast home screen.",
    image: appHome,
    darkImage: appHomeDark,
  },
  {
    title: "Portfolio",
    description: "Track allocation, cost basis, and per-position performance without spreadsheet cleanup.",
    image: appPortfolio,
    darkImage: appPortfolioDark,
  },
  {
    title: "Analytics",
    description: "Separate realized and unrealized returns so long-term performance stays honest.",
    image: appAnalytics,
    darkImage: appAnalyticsDark,
  },
  {
    title: "Winners & losers",
    description: "See which holdings are driving returns, and how much each position contributed.",
    image: appAnalytics2,
    darkImage: appAnalytics2Dark,
  },
  {
    title: "Position detail",
    description: "Open any holding for charts, lots, cost basis, and historical return context.",
    image: appTicker,
    darkImage: appTickerDark,
  },
  {
    title: "News",
    description: "Stay on top of headlines linked to tickers you actually own and follow.",
    image: appNews,
    darkImage: appNewsDark,
  },
] as const;

const heroCallouts = [
  {
    label: "All-time",
    value: "+$21k",
    screen: 2,
    position: "left-0 top-[5rem] lg:left-0",
    cardClass: "w-[8rem]",
    icon: ArrowUpRight,
    valueClass: "text-emerald-600 dark:text-emerald-400",
    iconClass: "text-emerald-500 dark:text-emerald-400",
  },
  {
    label: "Portfolio",
    value: "$72k",
    screen: 0,
    position: "left-0 top-[15rem] lg:left-0",
    cardClass: "w-[8rem]",
    icon: Wallet,
    valueClass: "text-slate-950 dark:text-white",
    iconClass: "text-[#6366F1]",
  },
  {
    label: "NVDA",
    value: "$180.25",
    screen: 4,
    position: "left-0 top-[25rem] lg:left-0",
    cardClass: "w-[8rem]",
    icon: ArrowDownRight,
    valueClass: "text-slate-950 dark:text-white",
    iconClass: "text-rose-500 dark:text-rose-400",
  },
  {
    label: "Cost basis",
    value: "$62k",
    screen: 1,
    position: "right-0 top-[5rem] lg:-right-0",
    cardClass: "w-[8rem]",
    icon: Landmark,
    valueClass: "text-slate-950 dark:text-white",
    iconClass: "text-slate-400 dark:text-white/45",
  },
  {
    label: "Positions",
    value: "-$3,079",
    screen: 3,
    position: "right-0 top-[15rem] lg:-right-0",
    cardClass: "w-[8rem]",
    icon: ChartBar,
    valueClass: "text-emerald-600 dark:text-emerald-400",
    iconClass: "text-emerald-500 dark:text-emerald-400",
  },
  {
    label: "News",
    value: "Headlines",
    screen: 5,
    position: "right-0 top-[25rem] lg:right-0",
    cardClass: "w-[8rem]",
    icon: Newspaper,
    valueClass: "text-slate-950 dark:text-white",
    iconClass: "text-slate-400 dark:text-white/45",
  },
] as const;

const activeScreenTimeout = 20000;

const defaultActiveScreen = heroCallouts[0]?.screen ?? 0;
const heroReviewAvatars = reviews.slice(0, 4);
const averageRating =
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

const Hero = () => {
  const [activeScreen, setActiveScreen] = useState<number>(defaultActiveScreen);
  const [slideshowResetKey, setSlideshowResetKey] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const softwareApplicationSchema = buildSoftwareApplicationSchema({
    ratingValue: averageRating,
    reviewCount: reviews.length,
    screenshots: heroScreens.map((screen) => screen.image),
  });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveScreen((currentScreen) => (currentScreen + 1) % heroScreens.length);
    }, activeScreenTimeout);

    return () => window.clearTimeout(timeoutId);
  }, [activeScreen, slideshowResetKey]);

  const handleSelectScreen = (screen: number) => {
    setActiveScreen(screen);
    setSlideshowResetKey((currentKey) => currentKey + 1);
  };

  return (
    <section
      className="relative overflow-hidden bg-background pt-24 text-foreground sm:pt-28 lg:h-screen lg:min-h-[900px] lg:pt-32"
      aria-labelledby="hero-title"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <meta itemProp="name" content={softwareApplicationMeta.name} />
      <meta itemProp="description" content={softwareApplicationMeta.description} />
      <meta itemProp="applicationCategory" content={softwareApplicationMeta.applicationCategory} />
      <meta itemProp="operatingSystem" content={softwareApplicationMeta.operatingSystem} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(142,69%,49%,0.14),transparent_40%),radial-gradient(ellipse_at_74%_22%,hsla(239,84%,67%,0.12),transparent_33%),linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background)))] dark:bg-[radial-gradient(ellipse_at_top,hsla(142,69%,49%,0.16),transparent_36%),radial-gradient(ellipse_at_74%_18%,hsla(239,84%,67%,0.14),transparent_31%),linear-gradient(to_bottom,#060606,#0b0f0c_42%,#0d0f10)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 via-white/30 to-transparent dark:from-white/[0.05] dark:via-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/8" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-[22rem] rounded-full bg-accent/10 blur-3xl dark:bg-accent/15" />

      <div className="container relative z-10 mt-10 grid items-center gap-8 sm:mt-12 sm:gap-10 lg:mt-16 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl lg:self-start"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs text-muted-foreground shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05] dark:text-white/70">
            <ShieldCheckIcon size={14} className="text-primary" strokeWidth={2} />
            <span>Open-source. 100% FREE.</span>
          </div>

          <div className="mt-4 space-y-5">
            <h1
              id="hero-title"
              className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl md:text-7xl xl:text-[5.4rem]"
              itemProp="headline"
            >
              Portfolio tracking for <span className="text-gradient">long-term investors</span>
            </h1>

            <h2
              className="max-w-xl text-lg leading-8 text-muted-foreground dark:text-white/65 sm:text-xl"
              itemProp="abstract"
            >
              Inspired by <strong>Google Finance</strong>.
              <br />
              Built for strategic investors who want clarity on real portfolio performance.
            </h2>
          </div>

          <div className="mb-6 mt-10 flex flex-row justify-center gap-3 sm:mb-10 sm:mt-14 sm:gap-4 sm:justify-start lg:mb-12 lg:mt-20">
            <a
              href="#"
              onClick={() => alert("Stay tuned for the app release!")}
              rel="noopener noreferrer"
              aria-label="Download Modern Money on the App Store"
              className="inline-flex rounded-xl bg-white transition-all duration-300 ease-in-out"
            >
              <img
                src={appStore}
                alt="Download on the App Store"
                loading="eager"
                decoding="async"
                className="w-40 select-none rounded-xl border border-white/10 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:w-44 lg:w-48 dark:hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]"
              />
            </a>
            <a
              href="#"
              onClick={() => alert("Stay tuned for the app release!")}
              rel="noopener noreferrer"
              aria-label="Get Modern Money on Google Play"
              className="inline-flex rounded-xl bg-white transition-all duration-300 ease-in-out"
            >
              <img
                src={playStore}
                alt="Get it on Google Play"
                loading="eager"
                decoding="async"
                className="w-40 select-none rounded-xl border border-white/10 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] sm:w-44 lg:w-48 dark:hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]"
              />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col items-center gap-3 sm:items-start"
          >
            <div
              className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center" aria-hidden="true">
                  {heroReviewAvatars.map((review, index) => (
                    <Avatar
                      key={review.name}
                      className={`h-9 w-9 border-2 border-background shadow-[0_10px_30px_-18px_rgba(15,23,42,0.5)] ${
                        index === 0 ? "" : "-ml-3"
                      }`}
                    >
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-muted text-sm font-semibold text-foreground">
                        {review.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">
                  Loved by <span className="text-gradient-indigo dark:text-primary">100+</span>{" "}
                  users
                </p>
              </div>
              <meta itemProp="ratingValue" content={averageRating.toFixed(1)} />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="reviewCount" content={String(reviews.length)} />
              <div className="mt-1 flex flex-col items-center gap-1.5 sm:items-start">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                    <span className="text-base">{averageRating.toFixed(1)}</span> average rating
                  </p>
                </div>
                <p className="max-w-xs text-sm leading-6 text-muted-foreground dark:text-white/60">
                  From reviews on <span className="font-medium text-foreground dark:text-white">App Store</span> and{" "}
                  <span className="font-medium text-foreground dark:text-white">Google Play</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:h-full lg:self-end lg:items-end lg:justify-end"
        >
          <div className="relative flex w-full max-w- translate-y-[200px] -mt-40 sm:translate-y-[88px] lg:translate-y-[40px] flex-col items-center justify-center lg:max-w-156">
            <div className="pointer-events-none absolute inset-x-10 top-10 h-24 rounded-full bg-primary/16 blur-3xl dark:bg-primary/15" />
            <div className="pointer-events-none absolute inset-x-16 bottom-28 h-24 rounded-full bg-accent/10 blur-3xl dark:bg-accent/10" />

            {heroCallouts.map((callout, index) => {
              const Icon = callout.icon;
              const isActive = activeScreen === callout.screen;

              return (
                <motion.button
                  key={callout.label}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 + index * 0.08 }}
                  onClick={() => handleSelectScreen(callout.screen)}
                  aria-label={`Show ${heroScreens[callout.screen]?.title ?? callout.label} app screen`}
                  aria-pressed={isActive}
                  className={`absolute z-20 hidden rounded-[1rem] border px-2.5 py-2 text-left shadow-[0_14px_30px_-28px_rgba(15,23,42,0.16)] backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 md:block ${callout.position} ${callout.cardClass} ${
                    isActive
                      ? "border-accent/30 bg-white/80 dark:border-accent/80 dark:bg-zinc-950/70 dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]"
                      : "border-slate-200/65 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-950/70 dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <div className={`flex items-center justify-between gap-2 cursor-pointer ${isActive ? "opacity-100" : "opacity-50"}`}>
                    <div className="min-w-0">
                      <div className="text-[0.6rem] font-medium uppercase tracking-[0.12em] dark:text-white/40">
                        {callout.label}
                      </div>
                      <div className={`mt-1 text-[0.82rem] font-semibold leading-none tracking-[-0.03em] ${callout.valueClass}`}>
                        {callout.value}
                      </div>
                    </div>
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950/4 dark:bg-white/5">
                      <Icon className={`h-3 w-3 ${callout.iconClass}`} strokeWidth={2.1} />
                    </div>
                  </div>
                </motion.button>
              );
            })}

            <div className="relative z-20 mb-4 grid w-full max-w-[20.75rem] grid-cols-2 gap-2 px-1 md:hidden">
              {heroCallouts.map((callout) => {
                const Icon = callout.icon;
                const isActive = activeScreen === callout.screen;

                return (
                  <button
                    key={`${callout.label}-mobile`}
                    type="button"
                    onClick={() => handleSelectScreen(callout.screen)}
                    aria-label={`Show ${heroScreens[callout.screen]?.title ?? callout.label} app screen`}
                    aria-pressed={isActive}
                    className={`flex min-w-0 items-center gap-2 rounded-[1rem] border px-3 py-2 text-left backdrop-blur-md transition-all duration-300 ${
                      isActive
                        ? "border-accent/35 bg-white/85 dark:border-accent/80 dark:bg-zinc-950/80"
                        : "border-slate-200/70 bg-white/72 dark:border-zinc-800/80 dark:bg-zinc-950/72"
                    }`}
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950/[0.04] dark:bg-white/[0.05]">
                      <Icon className={`h-3 w-3 ${callout.iconClass}`} strokeWidth={2.1} />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[0.58rem] font-medium uppercase tracking-[0.12em] text-black/55 dark:text-white/45">
                        {callout.label}
                      </div>
                      <div className={`truncate text-[0.78rem] font-semibold leading-none tracking-[-0.03em] ${callout.valueClass}`}>
                        {callout.value}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <figure
              className="relative mx-auto w-full max-w-[20.6rem] sm:max-w-[22rem]"
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <meta itemProp="name" content="Modern Money mobile app screenshots" />
              <meta
                itemProp="description"
                content="Phone mockup showcasing the Modern Money home, portfolio, analytics, winners and losers, position detail, and news screens."
              />
              <div className="absolute left-1/2 top-full h-12 w-44 -translate-x-1/2 rounded-full bg-black/20 blur-2xl dark:bg-black/45" />
              <div className="absolute -left-[4px] top-[5.35rem] h-12 w-[3px] rounded-full bg-black/14 dark:bg-white/10" />
              <div className="absolute -left-[4px] top-[9.1rem] h-8 w-[3px] rounded-full bg-black/14 dark:bg-white/10" />
              <div className="absolute -right-[4px] top-[6.25rem] h-14 w-[3px] rounded-full bg-black/14 dark:bg-white/10" />

              <div className="relative overflow-hidden rounded-[2.8rem] bg-[linear-gradient(180deg,#2b2d31_0%,#0f1013_100%)] p-[8px] shadow-[0_42px_96px_-48px_rgba(15,16,19,0.92)]">
                <div className="pointer-events-none absolute inset-x-7 top-[4px] h-9 rounded-full bg-white/5 blur-md" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[2.7rem] ring-1 ring-white/10" />
                <div className="pointer-events-none absolute left-1/2 top-7 z-[60] h-[1.08rem] w-[4.6rem] -translate-x-1/2 rounded-full bg-[#050506] shadow-[0_7px_16px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.04]" />

                <div
                  className={`relative overflow-hidden rounded-[2.35rem] ${
                    isDark ? "bg-[#0f1013]" : "bg-[#f4f5fa] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
                  }`}
                >
                  <div className="relative aspect-[1206/2622]">
                    {heroScreens.map((screen, index) => (
                      <motion.img
                        key={`${screen.title}-${isDark ? "dark" : "light"}`}
                        src={isDark ? screen.darkImage : screen.image}
                        alt={`${screen.title} screen of the Modern Money app`}
                        title={`${screen.title} screen preview`}
                        itemProp={index === activeScreen ? "screenshot" : undefined}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        aria-hidden={index === activeScreen ? undefined : true}
                        initial={false}
                        animate={{ opacity: index === activeScreen ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-0 h-full w-full object-cover select-none pointer-events-none"
                      />
                    ))}
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-24 ${
                        isDark ? "bg-gradient-to-b from-white/4 to-transparent" : "bg-gradient-to-b from-white/8 to-transparent"
                      }`}
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-[2.35rem] ${
                        isDark ? "ring-1 ring-white/5" : "ring-1 ring-black/5"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-7 -bottom-5 h-12 rounded-full bg-primary/14 blur-3xl dark:bg-primary/15" />
              <figcaption className="sr-only">
                Rotating phone screenshots of the Modern Money mobile app, including home,
                portfolio, analytics, winners and losers, position detail, and news views.
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
