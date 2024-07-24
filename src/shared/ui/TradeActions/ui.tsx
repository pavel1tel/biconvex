import { Button, Text, rem } from "@mantine/core";
import { RouteInstance, RouteParams, createRoute } from "atomic-router";
import { redirect } from "atomic-router";
import { Link, useLink, useRouter } from "atomic-router-react";
import clsx from "clsx";

import { router } from "@/shared/routing";
import { TradeIcon } from "@/shared/ui/icon/TradeIcon";

import classes from "./TradeActions.module.css";

interface TradeActionProps {
  actionsTitle: string;
  buyLabel: string;
  sellLabel: string;
  linkTo: string;
  params?: { pairId: string };
}

export const TradeActions = ({ actionsTitle, buyLabel, sellLabel, linkTo, params }: TradeActionProps) => {
  const router = useRouter();
  return (
    <div className={classes.tradeActionsView}>
      <div className={classes.tradeActionsFlexContainer}>
        <Text
          variant="text-4"
          style={{ cursor: "pointer" }}
          onClick={() =>
            router.push({
              path: linkTo,
              params: { pairId: params?.pairId },
              query: {},
              method: "push",
            })
          }
        >
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
