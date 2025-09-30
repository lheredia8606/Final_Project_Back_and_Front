import { createFileRoute } from "@tanstack/react-router";
import { useOrder } from "../../../Providers/OrderProvider";
import { Temporal } from "@js-temporal/polyfill";
import { OrderCard } from "../../../Components/Order/OrderCard/OrderCard";
import React, { useEffect } from "react";
import { useUser } from "../../../Providers/UserProvider";
import { TOrder } from "../../../utils/ApplicationTypesAndGlobals";
import { SpinnerModal } from "../../../Components/SpinnerModal/SpinnerModal";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";

export const Route = createFileRoute("/_worker/workerPage/UnassignedOrders")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    currenUserOrders: allOrders,
    changeOrder,
    isFetchingUserOrders,
  } = useOrder();
  const { authenticatedUser } = useUser();
  const { setActiveBtn } = useActiveBtn();
  const unassignedOrders = allOrders
    .filter((order) => order.status === "ordered")
    .sort((a, b) => {
      if (a.deadLine && b.deadLine) {
        //removing z designator to be able to convert to plain date
        const normalize = (d: string) =>
          d.includes("T") ? d.split("T")[0] : d.replace("Z", "");
        const tempA = Temporal.PlainDate.from(normalize(a.deadLine));
        const tempB = Temporal.PlainDate.from(normalize(b.deadLine));
        return Temporal.PlainDate.compare(tempA, tempB);
      }
      return 1;
    });

  const onClaimClick = (orderId: number) => {
    const toUpdate: Partial<Omit<TOrder, "id">> = {
      status: "processing",
      workerId: authenticatedUser?.id,
    };
    changeOrder(orderId, toUpdate);
  };

  useEffect(() => {
    setActiveBtn("Unassigned Orders");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetchingUserOrders) {
    return <SpinnerModal />;
  }

  if (unassignedOrders.length === 0) {
    return (
      <div className="empty-container">
        <h2>No unassigned orders!</h2>
      </div>
    );
  }
  return (
    <>
      {unassignedOrders.map((order) => {
        return (
          <React.Fragment key={order.id}>
            <OrderCard order={order}>
              <button
                className="order-btn"
                onClick={() => onClaimClick(order.id)}
              >
                Claim
              </button>
            </OrderCard>
          </React.Fragment>
        );
      })}
    </>
  );
}
