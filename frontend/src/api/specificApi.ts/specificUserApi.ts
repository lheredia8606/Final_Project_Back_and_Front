import { baseUrl, TOrder } from "../../utils/ApplicationTypesAndGlobals";

export const getUserCart = async (): Promise<TOrder> => {
  try {
    const response = await fetch(`${baseUrl}user/orders/myCart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return result.data;
  } catch (error) {
    throw error;
  }
};
