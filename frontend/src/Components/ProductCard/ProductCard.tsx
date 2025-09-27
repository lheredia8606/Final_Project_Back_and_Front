import { TProduct } from "../../utils/ApplicationTypesAndGlobals";
import "./ProductCard.css";

type TProductCardProps = {
  product: TProduct;
  setIsModalOpen: (isOpen: boolean) => void;
  setModalImage: (image: string) => void;
  buttonClass: string;
  buttonValue: string;
  onBtnClickAction: (id: number) => void;
};

export const ProductCard = ({
  setIsModalOpen,
  product,
  setModalImage,
  buttonClass,
  buttonValue,
  onBtnClickAction,
}: TProductCardProps) => {
  const { image, price, type, id } = product;
  const handleImageClick = () => {
    setModalImage(image);
    setIsModalOpen(true); // Open modal when card is clicked
  };

  return (
    <>
      <div className="product-card">
        <img
          src={image}
          alt={type}
          className="product-image"
          onClick={handleImageClick}
        />
        <div className="product-info">
          <h2 className="product-name">{type}</h2>
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
        <button className={buttonClass} onClick={() => onBtnClickAction(id)}>
          {buttonValue}
        </button>
      </div>
    </>
  );
};
