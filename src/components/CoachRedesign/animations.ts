import { type MotionProps, type Variants } from "framer-motion";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const revealInView: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.22 },
};

export const heroReveal: MotionProps = {
  initial: "hidden",
  animate: "visible",
};
