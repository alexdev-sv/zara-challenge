import React from 'react';
import { CarouselProgressProps } from './CarrouselProgress.props';

const CarouselProgress: React.FC<CarouselProgressProps> = ({ 
  currentIndex, 
  totalItems, 
  slidesPerView 
}) => {
  const cursorWidth = (slidesPerView / totalItems) * 100;
  
  const maxIndex = Math.max(0, totalItems - slidesPerView);
  
  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * (100 - cursorWidth) : 0;

  return (
    <div className="carousel-progress">
      <div className="carousel-progress__track">
        <div 
          className="carousel-progress__cursor"
          style={{ 
            left: `${progressPercentage}%`,
            width: `${cursorWidth}%`
          }}
        />
      </div>
    </div>
  );
};

export default CarouselProgress;