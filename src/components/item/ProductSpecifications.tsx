import React from 'react';

export interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface ProductSpecificationsProps {
  brand: string;
  name: string;
  description: string;
  specs: Specs;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  brand,
  name,
  description,
  specs
}) => {
  const specLabels: Record<keyof Specs, string> = {
    screen: 'SCREEN',
    resolution: 'RESOLUTION',
    processor: 'PROCESSOR',
    mainCamera: 'MAIN CAMERA',
    selfieCamera: 'SELFIE CAMERA',
    battery: 'BATTERY',
    os: 'OS',
    screenRefreshRate: 'SCREEN REFRESH RATE'
  };

  return (
    <section className="product-specifications">
      <h2 className="product-specifications__title">SPECIFICATIONS</h2>

      <div className="product-specifications__list">
        <div className="product-specifications__item">
          <span className="product-specifications__label">BRAND</span>
          <span className="product-specifications__value">{brand}</span>
        </div>

        <div className="product-specifications__item">
          <span className="product-specifications__label">NAME</span>
          <span className="product-specifications__value">{name}</span>
        </div>

        <div className="product-specifications__item">
          <span className="product-specifications__label">DESCRIPTION</span>
          <span className="product-specifications__value">{description}</span>
        </div>

        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="product-specifications__item">
            <span className="product-specifications__label">
              {specLabels[key as keyof Specs]}
            </span>
            <span className="product-specifications__value">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecifications;