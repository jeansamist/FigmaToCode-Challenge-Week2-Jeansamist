import { Variants } from "framer-motion";

export const VARIANTS: Variants = {
  hiddenScale: {
    opacity: 0,
    scale: 1.1,
  },
  visibleScale: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  hiddenX: {
    opacity: 0,
    x: -24,
  },
  visibleX: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  hiddenY: {
    opacity: 0,
    y: -24,
  },
  visibleY: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
