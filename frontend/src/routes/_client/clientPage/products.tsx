import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useProducts } from "../../../Providers/ProductProvider";
import { ProductCard } from "../../../Components/ProductCard/ProductCard";
import { useOrder } from "../../../Providers/OrderProvider";
import { SpinnerModal } from "../../../Components/SpinnerModal/SpinnerModal";
import { useActiveBtn } from "../../../Providers/ActiveBtnProvider";
import { useUser } from "../../../Providers/UserProvider";

export const Route = createFileRoute("/_client/clientPage/products")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const { allProducts, isFetchingAllProducts, isLoadingAllProducts } =
    useProducts();
  const router = useRouter();
  const { changeProductQtyInOrder, userCart } = useOrder();
  const { authenticatedUser } = useUser();
  const { setActiveBtn } = useActiveBtn();
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  useEffect(() => {
    setActiveBtn("Products");
  }, []);

  if (isFetchingAllProducts || isLoadingAllProducts) {
    return <SpinnerModal />;
  }

  return (
    <>
      <div className="card-container">
        {allProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setIsModalOpen={setIsModalOpen}
              setModalImage={setModalImage}
              buttonClass="add-to-cart-btn"
              buttonValue="Add to Cart"
              onBtnClickAction={() => {
                if (!authenticatedUser) {
                  router.navigate({ to: "/login" });
                }
                if (userCart) {
                  changeProductQtyInOrder(userCart.id, product.id, 1);
                }
              }}
            />
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
