import { motion } from "framer-motion";
import { Check, LayoutDashboard, Lock, DollarSign } from "lucide-react";
import logo from "/logo.png";

const problems = [
  {
    title: "Too complex",
    description:
      "Most portfolio apps feel too complex. They are packed with unnecessary features and busy interfaces that make simple portfolio tracking hard for long-term investors.",
    icon: LayoutDashboard,
  },
  {
    title: "Too limited",
    description:
      "Some apps like Google Finance stay simple, but key details like cost basis, gain breakdowns, and lot history are missing.",
    icon: Lock,
  },
  {
    title: "Too paywalled",
    description:
      "Many apps lock even basic portfolio insights like invested capital, total profit, and long-term performance under paid plans.",
    icon: DollarSign,
  },
] as const;

const solutionPoints = [
  "Simple portfolio-first interface",
  "Accurate cost basis and invested capital",
  "Clear realized and unrealized gains",
  "Full transaction and lot history",
  "Essential analytics available for free",
  "Local-first and open-source",
  "100% FREE",
] as const;

const Why = () => (
  <section
    id="why"
    aria-labelledby="why-title"
    aria-describedby="why-description"
    className="relative overflow-hidden bg-white py-24 text-foreground dark:bg-zinc-900 dark:text-white"
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent dark:bg-none dark:bg-white/10" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-white to-white dark:bg-none" />
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
    <div className="pointer-events-none absolute left-1/2 top-8 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl dark:bg-primary/10" />

    <div className="container relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <span className="inline-flex rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-primary dark:border-white/10 dark:bg-white/[0.04]">
          Why it exists
        </span>
        <h2 id="why-title" className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
          Portfolio tracking became too <span className="text-rose-950 dark:text-rose-100">complex</span>, too <span className="text-rose-950 dark:text-rose-100">limited</span>, or too <span className="text-rose-950 dark:text-rose-100">expensive</span>
        </h2>
        <p
          id="why-description"
          className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground dark:text-white/65"
        >
          Finance 2049 is built for people who want to understand their portfolio quickly, without trading noise or
          premium-only basics.
        </p>
      </motion.header>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-label="Common portfolio tracking problems"
          className="border-y border-rose-200/80 dark:border-rose-400/15"
        >
          <ul>
            {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <li
                key={problem.title}
                className={[
                  "flex gap-4 py-6",
                  index < problems.length - 1 ? "border-b border-rose-200/80 dark:border-rose-400/15" : "",
                ].join(" ")}
              >
                <div
                  aria-hidden="true"
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300"
                >
                  <Icon size={18} />
                </div>
                <article>
                  <h4 className="text-xl font-semibold tracking-tight text-rose-950 dark:text-rose-100">
                    {problem.title}
                  </h4>
                  <h6 className="mt-2 max-w-xl text-sm leading-7 text-rose-950/75 dark:text-rose-100/70">
                    {problem.description}
                  </h6>
                </article>
              </li>
            );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          aria-labelledby="why-solution-title"
          aria-describedby="why-solution-description"
          className="relative flex flex-col justify-start"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[length:min(18rem,50vw)] bg-right-bottom bg-no-repeat opacity-[0.05] dark:opacity-[0.03]"
            style={{ backgroundImage: `url(${logo})` }}
          />
          <h3 id="why-solution-title" className="relative z-10 max-w-lg text-2xl font-semibold tracking-tight">
            <strong>Finance 2049</strong> is a portfolio tracking app — nothing more, nothing less
          </h3>
          <p
            id="why-solution-description"
            className="relative z-10 mt-4 max-w-lg text-sm leading-7 text-muted-foreground dark:text-white/65"
          >
            Inspired by the simplicity of Google Finance, but built to give you the full picture.
          </p>

          <ul className="relative z-10 mt-8 space-y-4">
            {solutionPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                  <Check size={14} />
                </div>
                <p className="text-sm leading-6 text-secondary-foreground dark:text-white/75">{point}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Why;
