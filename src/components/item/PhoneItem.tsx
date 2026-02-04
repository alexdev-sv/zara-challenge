/* eslint-disable @next/next/no-img-element */
import { PhoneItemProps } from "./phoneItem.props";

const PhoneItem = ({ product }: PhoneItemProps) => {
  return (
    <div key={product.id} className='productItem'>
      <img
        src={product.imageUrl}
        alt={product.name}
        width={180}
        height={240}
        className='productImage'
      />
      <div className='productBrand'>{product.brand}</div>
      <div className='productInfo'>
        <span className='productName'>{product.name}</span>
        <span className='productPrice'>{product.basePrice}</span>
      </div>
    </div>
  );
};

export default PhoneItem;