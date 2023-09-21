export default function makeQueryString(queryParams) {
  return Object.keys(queryParams)
    .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
    .join("&");
}
