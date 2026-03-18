import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildFAQPageSchema, faqs } from "./structuredData";
import { useLandingMotion } from "./useLandingMotion";

const faqPageSchema = buildFAQPageSchema(faqs);

const FAQ = () => {
  const { getInViewProps } = useLandingMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      aria-describedby="faq-description"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="relative overflow-hidden bg-white py-24 text-foreground dark:bg-zinc-900 dark:text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent dark:bg-none dark:bg-white/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-white dark:bg-none" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Side decoration */}
      <svg className="absolute left-8 top-1/2 -translate-y-1/2 h-[300px] w-[3px] opacity-[0.12] pointer-events-none" viewBox="0 0 3 300">
        <line x1="1.5" y1="0" x2="1.5" y2="300" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 8" />
      </svg>
      <svg className="absolute right-8 top-1/2 -translate-y-1/2 h-[300px] w-[3px] opacity-[0.12] pointer-events-none" viewBox="0 0 3 300">
        <line x1="1.5" y1="0" x2="1.5" y2="300" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="container relative z-10 max-w-3xl">
        <motion.header {...getInViewProps()} className="mb-16 space-y-4 text-center">
          <span className="inline-flex rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-primary dark:border-white/10 dark:bg-white/[0.04]">
            FAQ
          </span>
          <h2 id="faq-title" className="text-4xl font-bold tracking-tight md:text-5xl">
            Got questions?
          </h2>
          <p
            id="faq-description"
            className="mx-auto max-w-2xl text-muted-foreground dark:text-white/65"
          >
            Everything you need to know before you start tracking your portfolio.
          </p>
        </motion.header>

        <motion.div {...getInViewProps({ y: 16 })}>
          <Accordion type="single" collapsible aria-label="Frequently asked questions" className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="overflow-hidden rounded-2xl border border-border/70 bg-white px-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)] md:hover:border-primary/20 md:hover:shadow-[0_24px_70px_-36px_rgba(52,199,89,0.2)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:dark:hover:border-white/15 md:dark:hover:bg-white/[0.06] md:dark:hover:shadow-[0_24px_70px_-40px_rgba(99,102,241,0.2)]"
              >
                <AccordionTrigger className="cursor-pointer text-left text-sm font-medium hover:no-underline dark:text-white">
                  <span itemProp="name">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className="text-sm leading-relaxed text-muted-foreground dark:text-white/65"
                >
                  <p itemProp="text">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
