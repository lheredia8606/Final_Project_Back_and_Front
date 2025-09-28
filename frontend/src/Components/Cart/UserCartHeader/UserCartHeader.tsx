import { useEffect, useState } from "react";
import "./UserCartHeader.css";
import { useProducts } from "../../../Providers/ProductProvider";
import { useOrder } from "../../../Providers/OrderProvider";
import { getOrderDeadLine } from "../../../utils/TemporalDate";
import { useQueryClient } from "@tanstack/react-query";

export const UserCartHeader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getProductById } = useProducts();
  const queryClient = useQueryClient();
  const {
    userCart,
    changeOrder,
    addOrder,
    isLoadingFetchAllOrders,
    isFetchingAllOrders,
  } = useOrder();
  const cartProducts = userCart?.productQty || [];
  const cartId = userCart?.id;
  const totalItems = cartProducts.reduce((acc, val) => {
    return acc + val.qty;
  }, 0);

  useEffect(() => {
    if (!isFetchingAllOrders && !isLoadingFetchAllOrders) {
      setIsLoading(false);
    }
  }, [isFetchingAllOrders]);

  const onPayClick = () => {
    if (cartId) {
      changeOrder(cartId, {
        deadLine: getOrderDeadLine(7),
        status: "ordered",
      });
      queryClient.clear();
    }
  };

  const totalPrice = cartProducts.reduce((acc, { productId, qty }) => {
    let product = getProductById(productId);
    if (product) {
      return Number((acc + product.price * qty).toFixed(2));
    }
    return acc;
  }, 0);

  return (
    <div className="cart-summary">
      <div className="cart-summary-item">
        <span className="label">Total Items:</span>
        <span className="value">{totalItems}</span>
      </div>
      <div className="cart-summary-item">
        <span className="label">Total Price:</span>
        <span className="value">${totalPrice}</span>
      </div>
      <button className="pay-button" disabled={isLoading} onClick={onPayClick}>
        Pay Now
      </button>
    </div>
  );
};
