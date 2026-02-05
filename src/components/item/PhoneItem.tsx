/* eslint-disable @next/next/no-img-element */
import { PhoneItemProps } from "./phoneItem.props";
import Link from 'next/link'


const PhoneItem = ({ product }: PhoneItemProps) => {
  return (
    <Link
      key={product.id}
      href={`/product/${product.id}`}
    >
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
    </Link>
  );
};

export default PhoneItem;