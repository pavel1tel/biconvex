import { useResize } from "@/hooks/useResize";
import { Stack } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { Container } from "../TradePageContainer/Container";
import classes from "./OrderBook.module.css";
import { OrderBookDesktop } from "./OrderBookDesktop";
import { OrderBookMobile } from "./OrderBookMobile";

const categories = ["All", "Asks", "Bids"] as const;

export const OrderBook = ({addScroll,orderBookHeight,isFullRows}:{addScroll?:boolean,orderBookHeight?:string,isFullRows?:boolean}) => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const { isAdaptive: md } = useResize(1200);
  return (
    <Container className={classes.content}  style={{height:orderBookHeight}}>
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

        {md ? <OrderBookMobile {...{ activeCategory }} activeTab="Chart" /> : <OrderBookDesktop {...{ activeCategory }} addScroll={addScroll} isFullRows={isFullRows}/>}
      </Stack>
    </Container>
  );
};
