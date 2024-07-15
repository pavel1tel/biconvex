import { useResize } from "@/hooks/useResize";

import { HistoryTabDesktop } from "./HistoryTabDesktop";
import { HistoryTabMobile } from "./HistoryTabMobile";

export const HistoryTab = ({ setTotalPages, currentPage, setCurrentPageCoins, activePeriodValue }) => {
  const { isAdaptive: md } = useResize(1200);

  return md ? <HistoryTabMobile activePeriodValue={activePeriodValue} setCurrentPageCoins={setCurrentPageCoins} setTotalPages={setTotalPages} currentPage={currentPage} /> : <HistoryTabDesktop activePeriodValue={activePeriodValue} setCurrentPageCoins={setCurrentPageCoins} setTotalPages={setTotalPages} currentPage={currentPage} />;
};
