// import "../../../styles/root/root-style.css";
import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../../../Providers/ProductProvider";
import { ProductCard } from "../../../Components/ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import { useOrder } from "../../../Providers/OrderProvider";
import { WarningModal } from "../../../Components/WarningModal/WarningModal";
import { TProductQty } from "../../../utils/ApplicationTypesAndGlobals";
import { UserCartHeader } from "../../../Components/Cart/UserCartHeader/UserCartHeader";
import { QtyHandle } from "../../../Components/Cart/QtyHandle/QtyHandle";
import { SpinnerModal } from "../../../Components/SpinnerModal/SpinnerModal";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";

export const Route = createFileRoute("/_client/clientPage/myCart")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    isLoadingFetchUserOrders,
    isFetchingUserOrders,
    userCart,
    changeProductQtyInOrder,
  } = useOrder();
  const { setActiveBtn } = useActiveBtn();
  const { getProductById } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [idProductToDelete, setIdProductToDelete] = useState("");
  const [cartId, setCartId] = useState<number | null>(null);
  const [idOrderToDelete, setIdOrderToDelete] = useState("");
  const [cartProducts, setCartProducts] = useState<TProductQty[]>([]);
  const [shouldDisplayDeleteModal, setShouldDisplayDeleteModal] =
    useState<boolean>(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setActiveBtn("My Cart");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userCart) {
      setCartProducts(userCart.productQty || []);
      setCartId(userCart.id);
    }
  }, [userCart]);

  if (isLoadingFetchUserOrders || isFetchingUserOrders) {
    return <SpinnerModal />;
  }

  if (cartId === null) {
    return (
      <div className="empty-container">
        <h2>No cartFound!</h2>
      </div>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <div className="empty-container">
        <h2>No Products in your cart!</h2>
      </div>
    );
  }

  return (
    <>
      <UserCartHeader />
      <div className="card-container">
        {cartProducts.map(({ productId, qty }) => {
          const product = getProductById(productId);

          return (
            <React.Fragment key={productId}>
              {shouldDisplayDeleteModal && (
                <WarningModal
                  message="Are you sure you want to remove this item from your cart?"
                  onCancel={() => setShouldDisplayDeleteModal(false)}
                  onConfirm={() => {
                    changeProductQtyInOrder(
                      Number(idOrderToDelete),
                      Number(idProductToDelete),
                      -qty
                    );
                    setShouldDisplayDeleteModal(false);
                  }}
                />
              )}
              {product && (
                <div className="product-card-wrapper">
                  <ProductCard
                    product={product}
                    setIsModalOpen={setIsModalOpen}
                    setModalImage={setModalImage}
                    buttonClass="remove"
                    buttonValue="Remove"
                    onBtnClickAction={() => {
                      setIdOrderToDelete(cartId.toString());
                      setIdProductToDelete(product.id.toString());
                      setShouldDisplayDeleteModal(true);
                    }}
                  />
                  <QtyHandle
                    productId={productId}
                    productQty={qty}
                    orderId={cartId}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content product-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Modal Content" className="modal-image" />
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
