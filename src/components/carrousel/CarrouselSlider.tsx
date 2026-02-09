
import React, { useRef } from 'react';
import { CarouselSliderProps } from './CarrouselSlider.props';


const CarouselSlider: React.FC<CarouselSliderProps> = ({ 
  children, 
  slidesPerView = 2 
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right'): void => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth / slidesPerView;
      const scrollLeft = direction === 'left' 
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount;
      
      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-slider">
      <button 
        className="carousel-slider__arrow carousel-slider__arrow--left"
        onClick={() => scroll('left')}
        aria-label="Previous"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div 
        ref={sliderRef}
        className="carousel-slider__container"
        style={{ '--slides-per-view': slidesPerView } as React.CSSProperties}
      >
        <div className="carousel-slider__track">
          {children}
        </div>
      </div>

      <button 
        className="carousel-slider__arrow carousel-slider__arrow--right"
        onClick={() => scroll('right')}
        aria-label="Next"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default CarouselSlider;