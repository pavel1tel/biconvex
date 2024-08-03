import { useEffect, useState } from "react";

export const useResize = (breakpoint: number) => {
  const [isAdaptive, setAdaptive] = useState<boolean>(false);
  const handleWindowResize = () => {
    window.innerWidth <= breakpoint ? setAdaptive(true) : setAdaptive(false);
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { isAdaptive };
};
