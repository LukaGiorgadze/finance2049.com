import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  ChartPie,
  BarChart3,
  FolderSync,
  LockKeyhole,
  ReceiptText,
} from "lucide-react";

const features = [
  {
    icon: PanelsTopLeft,
    title: "Portfolio overview",
    desc: "See your total portfolio value, allocation, and long-term performance in one calm, clear screen.",
  },
  {
    icon: ChartPie,
    title: "Cost basis & performance clarity",
    desc: "Know exactly how much you invested and clearly track realized and unrealized gains over time.",
  },
  {
    icon: ReceiptText,
    title: "Transaction & lot history",
    desc: "Every trade is recorded and positions are tracked by individual entries for precise performance.",
  },
  {
    icon: BarChart3,
    title: "Performance analytics",
    desc: "Track total return, asset performance, and long-term investment progress without complexity.",
  },
  {
    icon: FolderSync,
    title: "Flexible import & full export",
    desc: "Import transactions from .xlsx, .json, .pdf, images, or other formats - and export your complete portfolio data anytime.",
  },
  {
    icon: LockKeyhole,
    title: "Private, free & open",
    desc: "Local-first architecture keeps your data on your device. No subscriptions. Fully open-source and transparent.",
  },
];

const Features = () => (
  <section
    id="features"
    aria-labelledby="features-heading"
    className="relative overflow-hidden bg-zinc-950 py-24 text-white"
  >
    {/* Dot grid pattern */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-400/5 to-transparent"
    />

    {/* Accent line */}
    <div
      aria-hidden="true"
      className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
    />

    {/* Floating geometric vectors */}
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute right-10 top-12 h-[300px] w-[300px] opacity-[0.04]"
      viewBox="0 0 300 300"
    >
      <polygon points="150,20 280,260 20,260" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
      <polygon points="150,60 250,230 50,230" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
    </svg>

    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute bottom-12 left-10 h-[200px] w-[200px] opacity-[0.04]"
      viewBox="0 0 200 200"
    >
      <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="hsl(var(--accent))" strokeWidth="0.5" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="hsl(var(--accent))" strokeWidth="0.5" />
    </svg>

    <div className="container relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-4 text-center"
      >
        <p className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Features
        </p>
        <h2 id="features-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Everything you need to <span className="text-gradient">understand</span> your portfolio
        </h2>
        <p className="mx-auto max-w-xl text-white/70">
          Clear portfolio tracking, precise performance insight, and full ownership of your investment data.
        </p>
      </motion.header>

      <div
        role="list"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            role="listitem"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-70"
            />

            {/* Corner accent line */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <svg viewBox="0 0 80 80" className="h-full w-full" focusable="false">
                <line x1="80" y1="0" x2="0" y2="80" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3" />
                <line x1="80" y1="20" x2="20" y2="80" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.2" />
              </svg>
            </div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 transition-shadow group-hover:shadow-glow">
              <f.icon aria-hidden="true" size={22} className="text-primary" />
            </div>
            <h4 className="mb-2 text-lg font-semibold text-white">{f.title}</h4>
            <h5 className="text-sm leading-relaxed text-white/65">{f.desc}</h5>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
