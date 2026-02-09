/* eslint-disable @next/next/no-img-element */
import React from 'react';

export interface ProductCarouselItemProps {
  brand: string;
  name: string;
  price: string;
  image: string;
}

const ProductCarouselItem: React.FC<ProductCarouselItemProps> = ({ 
  brand, 
  name, 
  price, 
  image 
}) => {
  return (
    <div className="product-carousel-item">
      <div className="product-carousel-item__image-container">
        <img 
          src={image} 
          alt={name}
          className="product-carousel-item__image"
        />
      </div>
      <div className="product-carousel-item__content">
        <span className="product-carousel-item__brand">{brand}</span>
        <div className="product-carousel-item__info">
          <h3 className="product-carousel-item__name">{name}</h3>
          <span className="product-carousel-item__price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCarouselItem;