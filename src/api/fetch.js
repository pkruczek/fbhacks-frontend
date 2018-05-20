export function fetchApi(url, ...options) {
  const token = sessionStorage.getItem("token");
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: "Basic " + token
    }
  });
}
