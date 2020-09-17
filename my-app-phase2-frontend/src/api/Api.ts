import { IRestaurantState } from "../common/Interfaces";

const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "https://localhost:44388/api/"
    : "https://phase2-backend.azurewebsites.net/api/";

// const API_BASE_URL =
//   process.env.NODE_ENV === "development"
//     ? "https://phase2-backend.azurewebsites.net/api/"
//     : "https://localhost:44388/api/";

const TASTY_API_URL = API_BASE_URL + "Restaurants";

export const getArray = async () => {
  const response = await fetch(TASTY_API_URL, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return response;
};

export const postArray = async (data: IRestaurantState | {}) => {
  // Default options are marked with *
  const response = await fetch(TASTY_API_URL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};
