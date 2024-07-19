export const BASE_API_URL = "http://74.234.35.241";
export const BASE_API_FAST_SWAP_URL = "https://74.235.165.183";
export const fetcher = (url: string) => fetch(url, { credentials: "include" }).then((r) => r.json());
