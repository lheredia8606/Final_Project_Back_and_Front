import { baseUrl, TProduct } from "../utils/ApplicationTypesAndGlobals";

export const getActiveProducts = async (): Promise<TProduct[]> => {
  const response = await fetch(`${baseUrl}products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
    },
  });
  const result = await response.json();
  console.log({ result });
  if (!response.ok) {
    throw new Error(result.message);
  }
  console.log(result.products);

  return result.products;
};
