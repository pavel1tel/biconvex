import { useResize } from "@/hooks/useResize";

import { HistoryTabDesktop } from "./HistoryTabDesktop";
import { HistoryTabMobile } from "./HistoryTabMobile";

export const HistoryTab = () => {
  const { isAdaptive: md } = useResize(1200);

  return md ? <HistoryTabMobile /> : <HistoryTabDesktop />;
};
