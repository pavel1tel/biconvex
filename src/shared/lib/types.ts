import { Effect, Event } from "effector";

export enum AuthStatus {
  Initial = 0,
  Pending,
  Anonymous,
  Authenticated,
}

export interface ChainParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherwise?: Event<void> | Effect<void, any, any>;
}
