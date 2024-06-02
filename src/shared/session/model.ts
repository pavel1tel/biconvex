import { RouteInstance, RouteParams, RouteParamsAndQuery, chainRoute } from "atomic-router";
import { Event, attach, createEvent, createStore, sample, split } from "effector";
import { debug, interval } from "patronum";

import * as api from "@/shared/api";
import { UserDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
import { AuthStatus, ChainParams } from "@/shared/lib/types";
import { routes } from "@/shared/routing";

const logoutLocalFx = attach({ effect: api.logoutFx });
const refreshTokenLocalFx = attach({ effect: api.refreshTokenFx });

const sessionResolveDone = createEvent();
const sessionResolveFail = createEvent();

const refreshTokenIntervalStop = createEvent();

const refreshTokenIntervalStart = createEvent();

const { tick: refreshTokenTick } = interval({
  timeout: 1800000,
  stop: refreshTokenIntervalStop,
  start: refreshTokenIntervalStart,
});

const authChecksDisabled = () => {
  return import.meta.env.VITE_DISABLE_AUTH_CHECKS === true;
};

export const sessionGetFx = attach({ effect: api.sessionGetFx });

export const logout = createEvent();

export const $user = createStore<UserDto | null>(null);

$user.on(sessionGetFx.doneData, (_, user) => user);

$user.reset(logoutLocalFx.done);

export const $authenticationStatus = createStore(AuthStatus.Initial);

export const $loading = sessionGetFx.pending;

$authenticationStatus.on(sessionGetFx, (status) => {
  if (status === AuthStatus.Initial) return AuthStatus.Pending;
  return status;
});

$authenticationStatus.on(sessionResolveDone, () => AuthStatus.Authenticated);

$authenticationStatus.on([logoutLocalFx.done, sessionResolveFail], () => AuthStatus.Anonymous);

sample({
  clock: sessionGetFx.done,
  target: [sessionResolveDone, refreshTokenIntervalStart],
});

sample({
  clock: sessionGetFx.fail,
  target: [sessionResolveFail, refreshTokenIntervalStop],
});

// REFRESH TOKEN INTERVAL

sample({
  clock: refreshTokenTick,
  target: refreshTokenLocalFx,
});

sample({
  clock: refreshTokenLocalFx.fail,
  target: [logout, sessionResolveFail, refreshTokenIntervalStop],
});

// LOGOUT

sample({
  clock: logout,
  target: [logoutLocalFx],
});

sample({
  clock: logoutLocalFx.done,
  target: [refreshTokenIntervalStop, routes.auth.signInByEmail.open],
});

sample({
  clock: logoutLocalFx.fail,
  fn: () => "Logout failed!",
  target: showErrorNotification,
});

// REDIRECT AFTER LOGIN DEPENDS ON USER ROLE

split({
  source: sample({
    clock: routes.home.opened,
    source: {
      user: $user,
      status: $authenticationStatus,
    },
    filter: ({ user, status }) => user != null && status == AuthStatus.Authenticated,
  }),
  match: () => {
    return "main";
  },
  cases: {
    main: routes.home.open,
    __: routes.auth.signInByEmail.open,
  },
});

export function chainAuthenticated<Params extends RouteParams>(route: RouteInstance<Params>, { otherwise }: ChainParams = {}): RouteInstance<Params> {
  if (authChecksDisabled()) {
    console.log("skip auth checks");
    return route;
  }

  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const sessionAnonymousReceived = createEvent<RouteParamsAndQuery<Params>>();

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

  sample({
    clock: sessionCheckStarted,
    source: $authenticationStatus,
    filter: (status) => status === AuthStatus.Initial,
    target: sessionGetFx,
  });

  sample({
    clock: [alreadyAnonymous, sessionResolveFail], // TODO
    source: { params: route.$params, query: route.$query },
    filter: route.$isOpened,
    target: sessionAnonymousReceived,
  });

  if (otherwise) {
    sample({
      // @ts-expect-error todo
      clock: sessionAnonymousReceived,
      filter: route.$isOpened,
      target: otherwise as Event<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthenticated, sessionResolveDone /*sessionRequestFx.done*/],
    cancelOn: sessionAnonymousReceived,
  });
}

export function chainAnonymous<Params extends RouteParams>(route: RouteInstance<Params>, { otherwise }: ChainParams = {}): RouteInstance<Params> {
  debug(route.$isOpened);

  if (authChecksDisabled()) {
    return route;
  }

  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const sessionAuthenticatedReceived = createEvent<RouteParamsAndQuery<Params>>();

  const alreadyAuthenticated = sample({
    clock: sessionCheckStarted,
    source: $authenticationStatus,
    filter: (status) => status === AuthStatus.Authenticated,
  });

  const alreadyAnonymous = sample({
    clock: sessionCheckStarted,
    source: $authenticationStatus,
    filter: (status) => status === AuthStatus.Anonymous,
  });

  sample({
    clock: sessionCheckStarted,
    source: $authenticationStatus,
    filter: (status) => status === AuthStatus.Initial,
    target: sessionGetFx,
  });

  sample({
    clock: [alreadyAuthenticated, sessionResolveDone],
    source: { params: route.$params, query: route.$query },
    filter: route.$isOpened,
    target: sessionAuthenticatedReceived,
  });

  if (otherwise) {
    sample({
      // @ts-expect-error todo
      clock: sessionAuthenticatedReceived,
      filter: route.$isOpened,
      target: otherwise as Event<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAnonymous, sessionResolveFail],
    cancelOn: sessionAuthenticatedReceived,
  });
}
