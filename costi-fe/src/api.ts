const url: string = "http://localhost:8080";

export const POST = (endpoint: string, requestBody: any) => {
  return fetch(url + endpoint, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export const GET = (endpoint: string) => {
  return fetch(url + endpoint, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
