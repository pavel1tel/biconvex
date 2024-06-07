<<<<<<< HEAD
=======
// import { CosmosIcon } from "@/shared/ui";
>>>>>>> parent of 9d665d2b (Revert "finish market tools pages")
import { redirect } from "atomic-router";
import { createStore, sample } from "effector";
import { persist } from "effector-storage/local";

import { loginUser } from "@/shared/api";
import { ResponseDto } from "@/shared/api/types";
import { showErrorNotification } from "@/shared/lib/notification";
<<<<<<< HEAD
=======
// import { AuthStatus } from "@/shared/lib/types";
>>>>>>> parent of 9d665d2b (Revert "finish market tools pages")
import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.signInByEmail;
export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});

const $error = createStore<ResponseDto>({ message: "" });
$error.on(loginUser.failData, (_, error) => error).reset(loginUser);

export const $token = createStore<string>("");
$token.on(loginUser.doneData, (_, token) => token.message).reset(loginUser);

persist({
  store: $token,
  key: "token",
  serialize(value) {
    return value;
  },
  deserialize(value) {
    return value;
  },
});

redirect({
  clock: loginUser.doneData,
  route: routes.myProfile,
});

sample({
  clock: loginUser.failData,
  source: $error,
  fn: (error) => error.message,
  target: showErrorNotification,
});
