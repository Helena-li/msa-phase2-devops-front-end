const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "https://localhost:44388/api/"
    : "https://msa-phase2-devops-backend1.azurewebsites.net";

const TASTY_API_URL = API_BASE_URL + "Restaurants";

export const getArray = async () => {
  const response = await fetch(TASTY_API_URL, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
  return response;
};
