import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for getting started",
    features: ["1 bank account", "Spending insights", "Virtual card", "Basic alerts"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mo",
    desc: "For serious money managers",
    features: ["Unlimited accounts", "AI investing", "Unlimited virtual cards", "Priority support", "Advanced analytics", "Custom categories"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "/mo",
    desc: "For teams and companies",
    features: ["Everything in Pro", "Team management", "Expense reports", "API access", "Dedicated manager", "Custom integrations"],
    cta: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => (
  <section
    id="pricing"
    className="relative overflow-hidden bg-zinc-950 py-24 text-white"
  >
    {/* Separator */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-400/5 to-transparent" />
    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />

    <svg className="absolute top-12 right-10 h-[300px] w-[300px] opacity-[0.04] pointer-events-none" viewBox="0 0 300 300">
      <polygon points="150,20 280,260 20,260" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
      <polygon points="150,60 250,230 50,230" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
    </svg>

    <svg className="absolute bottom-12 left-10 h-[200px] w-[200px] opacity-[0.04] pointer-events-none" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="hsl(var(--accent))" strokeWidth="0.5" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="hsl(var(--accent))" strokeWidth="0.5" />
    </svg>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl space-y-4 text-center"
      >
        <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Pricing
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Simple, <span className="text-gradient">transparent</span> pricing
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/70">
          One clean stack for spending, saving, and investing. Start free, then scale when you need deeper control.
        </p>
      </motion.div>

      <div className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/60">
        <span>No setup fees</span>
        <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />
        <span>Cancel anytime</span>
        <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />
        <span>Priority support on Pro</span>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
              plan.featured
                ? "border border-primary/25 bg-white/[0.05] shadow-[0_25px_60px_-35px_rgba(52,199,89,0.35)] md:-translate-y-3"
                : "border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-70" />
            {plan.featured && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-transparent to-transparent" />
            )}
            {plan.featured && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-zinc-950 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Most Popular
              </span>
            )}

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8">
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                  {plan.name}
                </div>
                <div className="mb-3 flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  {plan.period && <span className="pb-1 text-base text-white/50">{plan.period}</span>}
                </div>
                <p className="max-w-[18rem] text-sm leading-6 text-white/65">{plan.desc}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3 border-t border-white/10 pt-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/15 bg-primary/10">
                      <Check size={14} className="text-primary shrink-0" />
                    </span>
                    <span className="text-white/85">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={
                  plan.featured
                    ? "group border border-primary/20 bg-primary font-semibold text-primary-foreground shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_24px_50px_-20px_hsl(var(--primary)/0.9)] focus-visible:ring-primary/30"
                    : "group border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/[0.07]"
                }
              >
                {plan.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
