export const sectionLayoutParentAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
export const sectionLayoutChildAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const duration = 0.2;
export const pageAnimation = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,

    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};
