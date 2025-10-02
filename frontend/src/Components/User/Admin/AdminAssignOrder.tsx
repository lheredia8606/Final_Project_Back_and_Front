import React, { useState } from "react";
import { useUser } from "../../../Providers/UserProvider";
import { TOrder } from "../../../utils/ApplicationTypesAndGlobals";
import { useOrder } from "../../../Providers/OrderProvider";

type TAdminAssignOrderProps = {
  orderId: number;
  isError: boolean;
  setIsError: (isError: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
};

export const AdminAssignOrder = ({
  orderId,
  isError,
  setErrorMessage,
  setIsError,
}: TAdminAssignOrderProps) => {
  const [workerId, setWorkerId] = useState<number | null>(null);
  const { allWorkers } = useUser();
  const { changeOrder } = useOrder();
  const onAssignClick = (orderId: number) => {
    const worker = allWorkers?.find((user) => {
      return user.id === workerId;
    });
    if (!worker) {
      setErrorMessage(`No worker found with id "${workerId}"`);
      setIsError(true);
    }
    const newOrder: Partial<Omit<TOrder, "id">> = {
      workerId,
      status: "processing",
    };
    changeOrder(orderId, newOrder);
  };

  return (
    <>
      {!isError && (
        <div id="admin-assign-container">
          <input
            list="worker-names"
            type="text"
            placeholder="Worker name"
            value={workerId ? workerId : ""}
            onChange={(e) => setWorkerId(Number(e.target.value))}
          />
          <datalist id="worker-names">
            {allWorkers?.map((worker) => {
              return (
                <React.Fragment key={worker.id}>
                  <option value={worker.id}>
                    {`${worker.firstName} ${worker.lastName}`}
                  </option>
                </React.Fragment>
              );
            })}
          </datalist>
          <button className="order-btn" onClick={() => onAssignClick(orderId)}>
            Assign
          </button>
        </div>
      )}
    </>
  );
};
