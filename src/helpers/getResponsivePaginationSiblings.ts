export const getSiblings = () => {
  const width = window.innerWidth;
  if (width < 560) {
    return 0;
  } else {
    return 2;
  }
};
