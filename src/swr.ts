export const BASE_API_URL = "http://74.234.35.241";
export const BASE_API_FAST_SWAP_URL = "https://98.71.24.87";
export const fetcher = (url: string) => fetch(url, { credentials: "include" }).then((r) => r.json());
