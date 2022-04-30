export const startPageAnimation = {
  hidden: { y: 80, opacity: 1 },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, ease: 'easeOut', duration: 0.8 },
  }),
};

export const startPageAnimationSecond = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1 },
  },
};
