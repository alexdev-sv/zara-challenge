/* eslint-disable @next/next/no-img-element */
import ProductCarousel from '@/components/carrousel/ProductCarrousel'
import { PhoneImageDetail } from '@/components/item/image/PhoneImageDetail'
import ProductSpecifications from '@/components/item/ProductSpecifications'
import { Navbar } from '@/components/layout/Navbar'
import { useCart } from '@/contexts/CartProvider'
import { CartItem } from '@/models/CartItem'
import { ColorOption, ProductDetail, StorageOption } from '@/models/ProductDetail'
import { getOneProduct } from '@/services/product/product.service'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProductDetailPage() {
  const { addToCart } = useCart()
  const router = useRouter()
  const { id } = router.query
  const defaultFirstColorDevideIndex : number = 0

  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [selectedColorIndex, setColor] = useState<number | null>(null)
  const [selectedStorageIndex, setStorage] = useState<number | null>(null)

  useEffect(() => {
    if (!router.isReady || !id) return

    const fetchProductById = async () => {
      const resultProduct = await getOneProduct({ productId: id as string })
      setProduct(resultProduct)
    }

    fetchProductById()
  }, [router.isReady, id])

  if (!product) {
    return <p>Loading...</p>
  }

  const handleAddToCart = () => {
    const colorSelected = product.colorOptions[selectedColorIndex!].name
    const storageSelected = product.storageOptions[selectedStorageIndex!].capacity
    const imageUrl = product.colorOptions[selectedColorIndex!].imageUrl

    const itemDevice : CartItem = {
      id: product.id,
      name: product.name,
      price: product.basePrice,
      image: imageUrl,
      color: colorSelected,
      storage: storageSelected
    } 
    addToCart(itemDevice)
  }

  const handleSelectDeviceStorage = (indexStorageOption: number) => {
    setStorage(indexStorageOption)
  }
  const handleSelectDeviceColor = (indexColorOption: number) => {
    setColor(indexColorOption) 
  }

  return (
    <>
      <Navbar />
      <div className="view-article-container">
        <div className="toolbar-container">
          <img
            onClick={() => router.back()}
            src="/arrow.svg"
            alt="arrow"
          />
          <span>BACK</span>
        </div>

        <div className="view-article">
          {/* IMAGE */}
          <div className="view-article-image-preview">
            <PhoneImageDetail
              deviceImageByColor={
                product.colorOptions[ selectedColorIndex == null ? defaultFirstColorDevideIndex : selectedColorIndex!].imageUrl
              }
            />
          </div>

          {/* DETAILS */}
          <div className="view-article-details">
            <div>
              <span>{product.name.toUpperCase()}</span>
              <span>{product.basePrice} EUR</span>

              {/* STORAGES */}
              <div className="view-article-storages-container">
                <span>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</span>

                <div className="view-article-storages">
                  {product.storageOptions.map(
                    (storage: StorageOption, index: number) => (
                      <div
                        key={index}
                        onClick={() => handleSelectDeviceStorage(index)}
                        className={`view-article-storages-option ${
                          index === selectedStorageIndex ? 'selected' : ''
                        }`}
                      >
                        {storage.capacity}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* COLORS */}
              <div className="view-article-colors">
                {product.colorOptions.map(
                  (color: ColorOption, index: number) => (
                    <div
                      key={index}
                      onClick={() => handleSelectDeviceColor(index)}
                      className="view-article-colors-option"
                      style={{
                        backgroundColor: color.hexCode,
                        border:
                          index === selectedColorIndex
                            ? '1px solid #000'
                            : '1px solid #ccc',
                        outline: '2px solid white',
                        outlineOffset: '-3px',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                    />
                  )
                )}
              </div>

              <div className="color-device-name">
                <span>COLOR. PICK YOUR FAVOURITE.</span>
                {selectedColorIndex != null
                  ? product.colorOptions[selectedColorIndex].name
                  : ''}
              </div>
            </div>

            <button
              className="add-cart-button"
              disabled={
                selectedColorIndex == null || selectedStorageIndex == null
              }
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <ProductSpecifications
          brand={product.brand}
          name={product.name}
          description={product.description}
          specs={product.specs}
        />
        <ProductCarousel products={product.similarProducts}/>
      </div>
    </>
  )
}
