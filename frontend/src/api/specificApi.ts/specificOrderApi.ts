import { baseUrl, TOrder } from "../../utils/ApplicationTypesAndGlobals";

export const getAllUserOrders = async (): Promise<TOrder[]> => {
  const response = await fetch(`${baseUrl}user/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
    },
  });
  let result: any;
  try {
    result = await response.json();
  } catch {
    throw new Error("Invalid JSON response");
  }
  if (!response.ok) {
    throw new Error(result?.message ?? "Unknown error");
  }
  return result.data;
};

export const modifyProductQtyInOrder = async (
  orderId: number,
  productId: number,
  qty: number
) => {
  try {
    const response = await fetch(
      `${baseUrl}orders/${orderId}/products/${productId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userJwt")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qty }),
      }
    );
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Unknown error");
    }
    return result.data;
  } catch (error) {
    console.log("error occur in specificOrder api calls ");
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error");
    }
  }
};
