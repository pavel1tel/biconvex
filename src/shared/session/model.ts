import { RouteInstance, RouteParams, RouteParamsAndQuery, chainRoute, redirect } from "atomic-router";
import { createEvent, sample } from "effector";

import { $token } from "@/pages/auth/sign-in/model";

import { AuthStatus, ChainParams } from "@/shared/lib/types";
import { routes } from "@/shared/routing";

export const $authenticationStatus = $token.map((token) => {
  if (token === "") {
    return AuthStatus.Anonymous;
  } else {
    return AuthStatus.Authenticated;
  }
});

export function chainAuthenticated<Params extends RouteParams>(route: RouteInstance<Params>, { }: ChainParams = {}): RouteInstance<Params> {
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

export function chainAnonymous<Params extends RouteParams>(route: RouteInstance<Params>, { }: ChainParams = {}): RouteInstance<Params> {
  return route;
}
