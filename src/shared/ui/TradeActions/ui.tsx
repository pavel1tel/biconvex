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
  handleAction?: (name: "Trade" | "Chart") => void;
  handleActionType?: (name: "Buy" | "Sell") => void;
}

export const TradeActions = ({ actionsTitle, buyLabel, sellLabel, linkTo, params, handleAction, handleActionType }: TradeActionProps) => {
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
          <Button
            className={clsx(classes.btn, classes.actionButton)}
            h={rem("54px")}
            variant="success"
            onClick={() => {
              handleAction && handleAction("Trade");
              handleActionType && handleActionType("Buy");
            }}
          >
            {buyLabel}
          </Button>
          <Button
            className={clsx(classes.btn, classes.actionButton)}
            h={rem("54px")}
            variant="danger"
            onClick={() => {
              handleAction && handleAction("Trade");
              handleActionType && handleActionType("Sell");
            }}
          >
            {sellLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
