import { RouteInstance, RouteParams, RouteParamsAndQuery, chainRoute, redirect } from "atomic-router";
import { Event, attach, createEvent, createStore, sample, split } from "effector";
import { debug, interval } from "patronum";

import { $token } from "@/pages/auth/sign-in/model";

import * as api from "@/shared/api";
import { UserDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { AuthStatus, ChainParams } from "@/shared/lib/types";
import { routes } from "@/shared/routing";

export const $authenticationStatus = $token.map((token) => {
  console.log(token);
  if (token === "") {
    return AuthStatus.Anonymous;
  } else {
    return AuthStatus.Authenticated;
  }
});

export function chainAuthenticated<Params extends RouteParams>(route: RouteInstance<Params>, {}: ChainParams = {}): RouteInstance<Params> {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    source: $authenticationStatus,
    filter: (status) => status === AuthStatus.Anonymous,
  });

  const alreadyAuthenticated = sample({
    clock: sessionCheckStarted,
    source: $authenticationStatus,
    filter: (status) => status === AuthStatus.Authenticated,
  });

  redirect({
    clock: alreadyAnonymous,
    route: routes.auth.signInByEmail,
  });

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthenticated],
    cancelOn: [alreadyAnonymous],
  });
}

export function chainAnonymous<Params extends RouteParams>(route: RouteInstance<Params>, {}: ChainParams = {}): RouteInstance<Params> {
  return route;
}
