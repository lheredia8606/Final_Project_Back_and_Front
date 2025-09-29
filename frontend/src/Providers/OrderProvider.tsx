import { ReactNode } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useState } from "react";
import {
  orderApi,
  TOrder,
  TOrderStatus,
} from "../utils/ApplicationTypesAndGlobals";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUser } from "./UserProvider";
import { Temporal } from "@js-temporal/polyfill";
import { apiHandler } from "../api/apiHandler";
import {
  getAllUserOrders,
  modifyProductQtyInOrder,
} from "../api/specificApi.ts/specificOrderApi";
import { getUserCart } from "../api/specificApi.ts/specificUserApi";

const apiOrders = apiHandler<TOrder>("orders/");

type TOrderContextProps = {
  sortOrdersByDeadline: (orders: TOrder[], modifier?: 1 | -1) => TOrder[];
  getOrdersByStatus: (status: TOrderStatus) => TOrder[];
  currenUserOrders: TOrder[];
  setCurrenUserOrders: (newOrders: TOrder[]) => void;
  userCart: TOrder | undefined;
  setUserCart: (order: TOrder | undefined) => void;
  isUserOrdersFetchError: boolean;
  userOrdersFetchError: Error | null;
  isLoadingFetchUserOrders: boolean;
  isFetchingUserOrders: boolean;
  changeProductQtyInOrder: (
    orderId: number,
    productId: number,
    qty: number
  ) => void;
  changeOrder: (
    orderId: number,
    partialOrder: Partial<Omit<TOrder, "id">>
  ) => void;
  addOrder: (newOrder: Omit<TOrder, "id">) => void;
};
const OrderContext = createContext<TOrderContextProps | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [currenUserOrders, setCurrenUserOrders] = useState<TOrder[]>([]);
  const [userCart, setUserCart] = useState<TOrder | undefined>(undefined);
  const queryClient = useQueryClient();
  const { authenticatedUser } = useUser();

  const {
    data: fetchedUserOrders,
    isError: isUserOrdersFetchError,
    error: userOrdersFetchError,
    isLoading: isLoadingFetchUserOrders,
    isFetching: isFetchingUserOrders,
  } = useQuery({
    queryKey: ["getAllUserOrders"],
    queryFn: () => getAllUserOrders(),
    enabled: !!authenticatedUser,
  });

  const { data: fetchedUserCart } = useQuery({
    queryKey: ["getUserCart"],
    queryFn: () => getUserCart(),
    enabled: !!authenticatedUser,
  });
  useEffect(() => {
    if (!fetchedUserCart && authenticatedUser) {
      const newOrder: Omit<TOrder, "id"> = {
        clientId: authenticatedUser.id,
        status: "in_cart",
      };
      addOrderMutation.mutate(newOrder, {
        onSuccess: (order) => setUserCart(order),
      });
    } else {
      setUserCart(fetchedUserCart);
    }
  }, [fetchedUserCart]);

  const addOrderMutation = useMutation({
    mutationFn: (order: Omit<TOrder, "id">) => apiOrders.create(order),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["getAllUserOrders"] }),
  });

  const patchOrder = useMutation({
    mutationFn: ({
      orderId,
      partialOrder,
    }: {
      orderId: number;
      partialOrder: Partial<Omit<TOrder, "id">>;
    }) => orderApi.update(orderId, partialOrder),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["getAllUserOrders"] }),
  });

  const getOrdersByStatus = (status: TOrderStatus) => {
    return currenUserOrders.filter((order) => {
      return order.status === status;
    });
  };

  const sortOrdersByDeadline = (orders: TOrder[], modifier: 1 | -1 = 1) => {
    return orders.sort((a, b) => {
      let tempA, tempB: Temporal.PlainDate;
      if (a.deadLine && b.deadLine) {
        tempA = Temporal.PlainDate.from(a.deadLine!);
        tempB = Temporal.PlainDate.from(b.deadLine!);
        return (tempA.day - tempB.day) * modifier;
      }
      return 1;
    });
  };

  const changeProductQtyInOrder = (
    orderId: number,
    productId: number,
    qty: number
  ) => {
    if (!userCart) return;
    userCart.productQty = userCart.productQty || [];

    setUserCart((prev) => ({
      ...prev!,
      productQty: prev!.productQty!.map((p) =>
        p.productId === productId ? { ...p, qty: p.qty + qty } : p
      ),
    }));
    modifyProductQtyInOrder(orderId, productId, qty)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["getUserCart"] });
        queryClient.invalidateQueries({ queryKey: ["getAllUserOrders"] });
      })
      .catch((err) => {
        console.error("Failed to update product quantity:", err);
        queryClient.invalidateQueries({ queryKey: ["getUserCart"] });
        queryClient.invalidateQueries({ queryKey: ["getAllUserOrders"] });
      });
  };

  const addOrder = (newOrder: Omit<TOrder, "id">) => {
    addOrderMutation.mutate(newOrder);
  };

  const changeOrder = (
    orderId: number,
    partialOrder: Partial<Omit<TOrder, "id">>
  ) => {
    patchOrder.mutate({ orderId, partialOrder });
  };

  useEffect(() => {
    if (fetchedUserOrders) {
      setCurrenUserOrders(fetchedUserOrders);
    }
  }, [fetchedUserOrders]);

  return (
    <OrderContext.Provider
      value={{
        currenUserOrders,
        setCurrenUserOrders,
        userCart,
        setUserCart,
        sortOrdersByDeadline,
        userOrdersFetchError,
        isUserOrdersFetchError,
        changeProductQtyInOrder,
        changeOrder,
        addOrder,
        getOrdersByStatus,
        isFetchingUserOrders,
        isLoadingFetchUserOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder should be used inside OrderProvider");
  }
  return context;
};
