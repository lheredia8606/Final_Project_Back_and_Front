import { useProducts } from "../../../Providers/ProductProvider";
import { TProductQty } from "../../../utils/ApplicationTypesAndGlobals";
import "./OrderProdTable.css";
type TOrderProdTableProps = {
  productQuantities: TProductQty[];
};
export const OrderProdTable = ({ productQuantities }: TOrderProdTableProps) => {
  const { getProductById } = useProducts();
  return (
    <>
      <div className="order-products">
        <div className="table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th className="order-product">Product Name</th>
                <th className="centered">Qty</th>
              </tr>
            </thead>
            <tbody>
              {productQuantities.map((pQty) => {
                return (
                  <tr key={pQty.productId}>
                    <td>{getProductById(pQty.productId)?.name}</td>
                    <td className="centered">{pQty.qty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
