import { createEffect } from "effector";

import { requestFx } from "../request";

function getCookie(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  console.log(document.cookie);

  return b ? b.pop() : "";
}

export const getStakingHistoryFx = createEffect<void, any, void>(async () => {
  console.log(1);

  return requestFx({
    path: "/api/wallet?action=GET_STAKING_HISTORY",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: `session_id=HeTsNWGjmebGBySCldvHikJhFIDONNsV`,
    },
  });
});
