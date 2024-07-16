import { useResize } from "@/hooks/useResize";

import { OrdersTabDesktop } from "./OrdersTabDesktop";
import { OrdersTabMobile } from "./OrdersTabMobile";

export const OrdersTab = ({ setTotalPages, currentPage, setCurrentPageCoins, activePeriodValue }) => {
  const { isAdaptive: md } = useResize(1200);

  return md ? (
    <OrdersTabMobile
      activePeriodValue={activePeriodValue}
      setCurrentPageCoins={setCurrentPageCoins}
      setTotalPages={setTotalPages}
      currentPage={currentPage}
    />
  ) : (
    <OrdersTabDesktop
      activePeriodValue={activePeriodValue}
      setCurrentPageCoins={setCurrentPageCoins}
      setTotalPages={setTotalPages}
      currentPage={currentPage}
    />
  );
};
