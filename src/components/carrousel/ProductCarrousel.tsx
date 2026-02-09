import React, { useState, useRef, useEffect } from 'react';
import { Product } from '@/models/Product';
import CarouselProgress from './CarrouselProgress';
import ProductCarouselItem from './ProductSimilarItem';

export interface ProductCarouselProps {
  title?: string;
  products: Product[];
}


const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  title = "SIMILAR ITEMS", 
  products
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5; 
      if (window.innerWidth >= 768) return 2; 
      return 1;
    }
    return 5;
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.scrollWidth / products.length;
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (direction: 'prev' | 'next') => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.scrollWidth / products.length;
      const newScrollLeft = direction === 'prev' 
        ? sliderRef.current.scrollLeft - itemWidth
        : sliderRef.current.scrollLeft + itemWidth;
      
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-carousel">
      <div className="product-carousel__header">
        <h2 className="product-carousel__title">{title}</h2>
        <div className="product-carousel__controls">
          <button 
            className="product-carousel__arrow"
            onClick={() => scrollTo('prev')}
            aria-label="Previous"
            type="button"
            disabled={currentIndex === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="product-carousel__arrow"
            onClick={() => scrollTo('next')}
            aria-label="Next"
            type="button"
            disabled={currentIndex >= products.length - slidesPerView}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={sliderRef}
        className="product-carousel__slider"
      >
        <div className="product-carousel__track">
          {products.map((product, index) => (
            <ProductCarouselItem
              key={product.id || index}
              brand={product.brand}
              name={product.name}
              price={product.basePrice.toString()}
              image={product.imageUrl}
            />
          ))}
        </div>
      </div>

      <CarouselProgress 
        currentIndex={currentIndex}
        totalItems={products.length}
        slidesPerView={slidesPerView}
      />
    </section>
  );
};

export default ProductCarousel;