export const BASE_API_URL = 'https://20.79.188.227'
export const fetcher = (url:string) => fetch(url).then(r => r.json())
