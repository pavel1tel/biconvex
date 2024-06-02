/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from "react";

import { FavoriteStarFilledIcon } from "@/shared/ui/icon/FavoriteStarFilledIcon";
import { FavoriteStarIIcon } from "@/shared/ui/icon/FavoriteStarIcon";

import classes from "./Favorite.module.css";

export const Favorite = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.wrapper} role="button" onClick={() => setActive(!active)}>
      {active ? <FavoriteStarFilledIcon /> : <FavoriteStarIIcon />}
    </div>
  );
};
