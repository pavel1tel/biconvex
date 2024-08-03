import { getP2pInfo } from "@/shared/api/p2p/requests";
import { P2pResponse } from "@/shared/api/types";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore } from "effector";

export const currentRoute = routes.p2p;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.p2p.open,
});

export const $p2pResponse = createStore<P2pResponse | null>(null);
$p2pResponse.on(getP2pInfo.doneData, (_, data) => (data.message as unknown) as P2pResponse);

$p2pResponse.watch(e => console.log(e))
chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getP2pInfo,
    mapParams: (params) => params,
  },
});