import PhoneItem from "../item/PhoneItem";
import { PhoneGridProps } from "./phoneGrid.props";

const PhoneGrid = ({ products }: PhoneGridProps) => {
  return (
    <div className="products-grid">
      {products.map(product => (
        <PhoneItem key={product.sku} product={product} />
      ))}
    </div>
  );
};

export default PhoneGrid;