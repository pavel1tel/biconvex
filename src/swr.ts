export const BASE_API_URL = "http://20.79.188.227";
export const BASE_API_FAST_SWAP_URL = "https://20.79.188.227";
export const fetcher = (url: string) => fetch(url, { credentials: "include" }).then((r) => r.json());
