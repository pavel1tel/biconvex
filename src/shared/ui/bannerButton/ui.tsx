import { Button } from "@mantine/core";
import { Link } from "atomic-router-react";

import { StartTradingIcon } from "../icon/icons";
import classes from "./styles.module.css";

export const BannerButton = ({ size, text, route, handleRedirection }: { size: string; text: string; route: any; handleRedirection: () => void }) => {
  return (
    <Link to={route} className={classes.homeButton} onClick={handleRedirection}>
      <Button {...{ size }} variant="radial-gradient" className={classes.bannerButton} rightSection={<StartTradingIcon />}>
        {text}
      </Button>
    </Link>
  );
};
