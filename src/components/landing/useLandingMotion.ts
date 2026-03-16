import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

type InViewOptions = {
  delay?: number;
  y?: number;
};

export function useLandingMotion() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  const baseY = prefersReducedMotion ? 0 : isMobile ? 10 : 20;
  const baseDuration = prefersReducedMotion ? 0 : isMobile ? 0.32 : 0.48;
  const viewport = isMobile
    ? { once: true, amount: 0.08, margin: "0px 0px -10% 0px" }
    : { once: true, amount: 0.18 };

  const getInViewProps = ({ delay = 0, y = baseY }: InViewOptions = {}) => ({
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: {
      duration: baseDuration,
      delay: prefersReducedMotion ? 0 : isMobile ? Math.min(delay, 0.04) : delay,
      ease: "easeOut" as const,
    },
  });

  return {
    isMobile,
    prefersReducedMotion,
    getInViewProps,
  };
}
