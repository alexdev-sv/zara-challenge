/* eslint-disable @next/next/no-img-element */
import { PhoneItemProps } from "./phoneItem.props";
import Link from 'next/link'


const PhoneItem = ({ product }: PhoneItemProps) => {
  return (
    <Link
      key={product.id}
      href={`/product/${product.id}`}
    >
      <div key={product.id} className='product-card'>
        <img
          src={product.imageUrl}
          alt={product.name}
          width={180}
          height={240}
          className='product-card__image'
        />
        <div className='product-card__brand'>{product.brand}</div>
        <div className="product-card__info">
          <span className='product-card__name'>{product.name}</span>
          <span className='product-card__price'>{product.basePrice} EUR</span>
        </div>
      </div>
    </Link>
  );
};

export default PhoneItem;