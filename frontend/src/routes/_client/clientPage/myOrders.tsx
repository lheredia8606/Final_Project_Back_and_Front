import { createFileRoute } from "@tanstack/react-router";
import { OrderCard } from "../../../Components/Order/OrderCard/OrderCard";
import { useOrder } from "../../../Providers/OrderProvider";
import { SpinnerModal } from "../../../Components/SpinnerModal/SpinnerModal";
import { ErrorModal } from "../../../Components/ErrorModal/ErrorModal";
import { useUser } from "../../../Providers/UserProvider";
import { useEffect } from "react";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";

export const Route = createFileRoute("/_client/clientPage/myOrders")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    currenUserOrders: allOrders,
    allOrdersFetchError,
    isAllOrdersFetchError,
    isLoadingFetchAllOrders,
    isFetchingAllOrders,
  } = useOrder();
  const { setActiveBtn } = useActiveBtn();
  const { authenticatedUser } = useUser();

  useEffect(() => {
    setActiveBtn("My Orders");
  }, []);
  if (isLoadingFetchAllOrders || isFetchingAllOrders) {
    return <SpinnerModal />;
  }
  if (isAllOrdersFetchError) {
    return (
      <ErrorModal message={allOrdersFetchError!.message} onClose={() => {}} />
    );
  }
  return (
    <>
      {allOrders.map((order) => (
        <OrderCard key={order.id} order={order}>
          <button className="order-btn">View Order</button>
        </OrderCard>
      ))}
    </>
  );
}
