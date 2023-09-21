export default function parseQueryString(queryString) {
  const params = {};
  const pairs = queryString.slice(1).split("&");

  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    params[key] = decodeURIComponent(value || "");
  });

  return params;
}
