import { baseUrl, TProduct } from "../utils/ApplicationTypesAndGlobals";

export const getActiveProducts = async (): Promise<TProduct[]> => {
  const response = await fetch(`${baseUrl}products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
    },
  });
  const result = response.json();
  if (!response.ok) {
  }
};
