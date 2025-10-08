import { createFileRoute } from "@tanstack/react-router";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";
import React, { useEffect } from "react";
import { useOrder } from "../../../Providers/OrderProvider";
import { SpinnerModal } from "../../../Components/SpinnerModal/SpinnerModal";
import { OrderCard } from "../../../Components/Order/OrderCard/OrderCard";

export const Route = createFileRoute("/_admin/adminPage/PendingOrders")({
  component: RouteComponent,
});
function RouteComponent() {
  const { currenUserOrders, isFetchingUserOrders } = useOrder();
  const { setActiveBtn } = useActiveBtn();
  useEffect(() => {
    setActiveBtn("Pending Orders");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetchingUserOrders) {
    return <SpinnerModal />;
  }
  const pendingOrders = currenUserOrders.filter((order) => {
    return order.status === "processing";
  });

  if (pendingOrders.length === 0) {
    return (
      <div className="empty-container">
        <h2>Good, all orders were done!!</h2>
      </div>
    );
  }
  return (
    <>
      {pendingOrders.map((order) => {
        return (
          <React.Fragment key={order.id}>
            <OrderCard order={order}>
              <></>
            </OrderCard>
          </React.Fragment>
        );
      })}
    </>
  );
}
