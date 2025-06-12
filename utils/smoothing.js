export const smooth = (prev, current, alpha = 0.2) => {
  return prev * (1 - alpha) + current * alpha;
};
