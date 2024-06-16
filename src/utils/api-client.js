const apiURL = "http://www.omdbapi.com/?apikey=6a43a462";

function client(endpoint = "", { data, params } = {}) {
  const url = new URL(apiURL + endpoint);

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  const headers = {};
  if (data) {
    headers["Content-Type"] = "application/json";
  }

  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      ...headers,
    },
  };

  console.log(">>>>>>", url);

  return fetch(url.toString(), config).then(async (response) => {
    const responseData = await response.json();
    if (response.ok) {
      return responseData;
    }
    return Promise.reject(responseData);
  });
}

export { client };
