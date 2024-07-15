import { getStakingHistoryFx } from "@/shared/api/profile/profile";
import { getTransactions } from "@/shared/api/transactions/requests";
import { ResponseDto } from "@/shared/api/types";
import { routes } from "@/shared/routing";
import { chainAnonymous, chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore } from "effector";

export const currentRoute = routes.transactions;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.transactions.open,
});

export const $transactionsReponse = createStore({});
$transactionsReponse.on(getTransactions.doneData, (_: any, data: ResponseDto) => data.message);

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getStakingHistoryFx,
    mapParams: (params) => params,
  },
});

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getTransactions,
    mapParams: (params) => params,
  },
});