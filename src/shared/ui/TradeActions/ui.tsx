import { Button, Text, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";

import { TradeIcon } from "@/shared/ui/icon/TradeIcon";

import classes from "./TradeActions.module.css";

interface TradeActionProps {
  actionsTitle: string;
  buyLabel: string;
  sellLabel: string;
  linkTo: string;
}

export const TradeActions = ({ actionsTitle, buyLabel, sellLabel, linkTo }: TradeActionProps) => {
  return (
    <div className={classes.tradeActionsView}>
      <div className={classes.tradeActionsFlexContainer}>
        <Text variant="text-4" to={linkTo} component={Link} style={{ cursor: "pointer" }}>
          <button className={classes.tradeIconButton}>
            <TradeIcon />
            <p className={classes.tradeButtonLabel}>{actionsTitle}</p>
          </button>
        </Text>{" "}
        <div className={classes.stockActions}>
          <Button className={clsx(classes.btn, classes.actionButton)} h={rem("54px")} variant="success">
            {buyLabel}
          </Button>
          <Button className={clsx(classes.btn, classes.actionButton)} h={rem("54px")} variant="danger">
            {sellLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
