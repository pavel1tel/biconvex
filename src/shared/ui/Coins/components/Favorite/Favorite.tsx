/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from "react";

import { FavoriteStarFilledIcon } from "@/shared/ui/icon/FavoriteStarFilledIcon";
import { FavoriteStarIIcon } from "@/shared/ui/icon/FavoriteStarIcon";

import classes from "./Favorite.module.css";

export const Favorite = ({ pair, price, defaultValue }: { pair: string; price: number | string; defaultValue: boolean }) => {
  const [active, setActive] = useState(defaultValue);
  return (
    <div
      className={classes.wrapper}
      role="button"
      onClick={() => {
        let fav_coins: {
          pair: string;
          price: number | string;
        }[] = localStorage.getItem("fav_coins") != null ? JSON.parse(localStorage.getItem("fav_coins")!) : [];
        if (active == false) {
          fav_coins.push({ pair, price });
        }
        if (active == true) {
          fav_coins = fav_coins.filter((element) => element.pair != pair);
        }
        localStorage.setItem("fav_coins", JSON.stringify(fav_coins));
        setActive(!active);
      }}
    >
      <FavoriteStarFilledIcon />
    </div>
  );
};
