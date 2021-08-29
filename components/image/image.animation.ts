export const fadeInUp = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 25,
  },
  exit: {
    opacity: 0,
    y: -25,
  },
};

export const stagger = { staggerChildren: 0.05 };

export const fadeTransition = { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] };
