import { Button } from "@mantine/core";
import { Link } from "atomic-router-react";

import { StartTradingIcon } from "../icon/icons";
import classes from "./styles.module.css";

export const BannerButton = ({ size, text, route, handleRedirection, params}: { size: string; text: string; route: any; handleRedirection: () => void; params?: any | undefined }) => {
  return (
    <Link to={route} params={params ? params : undefined} className={classes.homeButton} onClick={handleRedirection}>
      <Button {...{ size }} variant="radial-gradient" className={classes.bannerButton} rightSection={<StartTradingIcon />}>
        {text}
      </Button>
    </Link>
  );
};
