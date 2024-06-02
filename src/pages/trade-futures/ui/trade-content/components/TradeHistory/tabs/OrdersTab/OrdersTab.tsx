import { useResize } from "@/hooks/useResize";

import { OrdersTabDesktop } from "./OrdersTabDesktop";
import { OrdersTabMobile } from "./OrdersTabMobile";

export const OrdersTab = () => {
  const { isAdaptive: md } = useResize(1200);

  return md ? <OrdersTabMobile /> : <OrdersTabDesktop />;
};
