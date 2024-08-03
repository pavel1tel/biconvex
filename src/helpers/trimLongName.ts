export const trimLongName = (name: string, adaptiveScreen: boolean) => {
  return adaptiveScreen ? name.slice(0, 7).concat("...") : name;
};
