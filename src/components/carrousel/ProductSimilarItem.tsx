/* eslint-disable @next/next/no-img-element */
import { Product } from '@/models/Product';
import React from 'react';

const ProductCarouselItem: React.FC<Product> = ({ 
  brand, 
  name, 
  basePrice, 
  imageUrl 
}) => {
  return (
    <div className="product-carousel-item">
      <div className="product-carousel-item__image-container">
        <img 
          src={imageUrl} 
          alt={name}
          className="product-carousel-item__image"
        />
      </div>
      <div className="product-carousel-item__content">
        <span className="product-carousel-item__brand">{brand}</span>
        <div className="product-carousel-item__info">
          <h3 className="product-carousel-item__name">{name}</h3>
          <span className="product-carousel-item__price">{basePrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCarouselItem;