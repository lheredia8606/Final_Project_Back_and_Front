import { createFileRoute } from "@tanstack/react-router";
import { useOrder } from "../../../Providers/OrderProvider";
import { useUser } from "../../../Providers/UserProvider";
import React, { useEffect } from "react";
import { OrderCard } from "../../../Components/Order/OrderCard/OrderCard";
import { TOrder } from "../../../utils/ApplicationTypesAndGlobals";
import { SpinnerModal } from "../../../Components/SpinnerModal/SpinnerModal";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";

export const Route = createFileRoute("/_worker/workerPage/MyOrders")({
  component: RouteComponent,
});

function RouteComponent() {
  const { currenUserOrders, changeOrder, isFetchingUserOrders } = useOrder();
  const { authenticatedUser } = useUser();
  const { setActiveBtn } = useActiveBtn();
  const myOrders = currenUserOrders.filter((order) => {
    return (
      order.workerId === authenticatedUser?.id && order.status === "processing"
    );
  });

  const onMarkClick = (orderId: number) => {
    const toUpdate: Partial<Omit<TOrder, "id">> = {
      status: "ready",
    };
    changeOrder(orderId, toUpdate);
  };

  useEffect(() => {
    setActiveBtn("My Orders");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetchingUserOrders) {
    return <SpinnerModal />;
  }

  if (myOrders.length === 0) {
    return (
      <div className="empty-container">
        <h2>You don't have orders!</h2>
      </div>
    );
  }

  return (
    <>
      {myOrders.map((order) => {
        return (
          <React.Fragment key={order.id}>
            <OrderCard order={order}>
              <button
                className="order-btn"
                onClick={() => onMarkClick(order.id)}
              >
                Mark as done
              </button>
            </OrderCard>
          </React.Fragment>
        );
      })}
    </>
  );
}
