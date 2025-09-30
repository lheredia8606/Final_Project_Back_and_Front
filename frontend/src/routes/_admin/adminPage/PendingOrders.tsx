import { createFileRoute } from "@tanstack/react-router";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";
import { useEffect } from "react";

export const Route = createFileRoute("/_admin/adminPage/PendingOrders")({
  component: RouteComponent,
});
function RouteComponent() {
  const { setActiveBtn } = useActiveBtn();
  useEffect(() => {
    setActiveBtn("Pending Orders");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Hello "/_admin/adminPage/PendingOrders"!</div>;
}
