import { createEffect } from "effector";

import { requestFx } from "../request";

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
