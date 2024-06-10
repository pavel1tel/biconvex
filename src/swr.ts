export const BASE_API_URL = 'http://20.79.188.227:8081'
export const fetcher = (url:string) => fetch(url).then(r => r.json())
