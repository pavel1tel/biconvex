import { getChat } from "@/shared/api/chat/requests";
import { routes } from "@/shared/routing";
import { chainAuthenticated } from "@/shared/session";
import { chainRoute } from "atomic-router";
import { createStore } from "effector";

export const currentRoute = routes.live;

export const anonymousRoute = chainAuthenticated(currentRoute, {
  otherwise: routes.live.open,
});


export const $chatResponse = createStore<any>({});
$chatResponse.on(getChat.doneData, (_, error) => error.message);

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: getChat,
    mapParams: (params) => params,
  },
});