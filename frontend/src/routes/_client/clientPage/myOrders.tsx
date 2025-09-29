import { createFileRoute } from "@tanstack/react-router";
import { OrderCard } from "../../../Components/Order/OrderCard/OrderCard";
import { useOrder } from "../../../Providers/OrderProvider";
import { SpinnerModal } from "../../../Components/SpinnerModal/SpinnerModal";
import { ErrorModal } from "../../../Components/ErrorModal/ErrorModal";
import { useEffect } from "react";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";

export const Route = createFileRoute("/_client/clientPage/myOrders")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    currenUserOrders,
    userOrdersFetchError,
    isUserOrdersFetchError,
    isLoadingFetchUserOrders,
    isFetchingUserOrders,
  } = useOrder();
  const { setActiveBtn } = useActiveBtn();

  useEffect(() => {
    setActiveBtn("My Orders");
  }, []);
  if (isLoadingFetchUserOrders || isFetchingUserOrders) {
    return <SpinnerModal />;
  }
  if (isUserOrdersFetchError) {
    return (
      <ErrorModal message={userOrdersFetchError!.message} onClose={() => {}} />
    );
  }
  return (
    <>
      {currenUserOrders.map((order) => (
        <OrderCard key={order.id} order={order}>
          <button className="order-btn">View Order</button>
        </OrderCard>
      ))}
    </>
  );
}
