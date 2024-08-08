import { useResize } from "@/hooks/useResize";
import { Stack } from "@mantine/core";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { Container } from "../TradePageContainer/Container";
import { LoadingScreen } from "../loading";
import classes from "./OrderBook.module.css";
import { OrderBookDesktop } from "./OrderBookDesktop";
import { OrderBookMobile } from "./OrderBookMobile";

const categories = ["All", "Asks", "Bids"] as const;

export const OrderBook = ({
  addScroll,
  orderBookHeight,
  isFullRows,
  currentPair,
  priceWs,
}: {
  addScroll?: boolean;
  orderBookHeight?: string;
  isFullRows?: boolean;
  currentPair: string;
  priceWs: any;
}) => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const { isAdaptive: md } = useResize(1200);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);
  return (
    <Container className={classes.content} style={{ height: orderBookHeight, position: "relative" }}>
      {loading ? <LoadingScreen type="block" title="" opened={loading} overlayStyles={{ top: 0 }} /> : null}
      <Stack gap={"clamp(1rem, 2vw, 2rem)"}>
        <p className={classes.orderBookTitle}>Order Book</p>
        <div className={classes.orderBookButtonsWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={clsx(classes.orderBooksButton, { [classes.active]: activeCategory === cat })}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {md ? (
          <OrderBookMobile priceWs={priceWs} currentPair={currentPair} {...{ activeCategory }} activeTab="Chart" />
        ) : (
          <OrderBookDesktop priceWs={priceWs} currentPair={currentPair} {...{ activeCategory }} addScroll={addScroll} isFullRows={isFullRows} />
        )}
      </Stack>
    </Container>
  );
};
