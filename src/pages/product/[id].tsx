/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { PhoneImageDetail } from '@/components/item/image/PhoneImageDetail'
import { Navbar } from '@/components/layout/Navbar'
import { ColorOption, ProductDetail, StorageOption } from '@/models/ProductDetail'
import { getOneProduct } from '@/services/product/product.service'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function ProductDetailPage() {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [selectedColorIndex, setSelectedColor] = useState<number>(0)

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

  const handleSelectDeviceColor = (indexColorDevice: number) => {
      setSelectedColor(indexColorDevice) 
  }

  return (
    <>
      <Navbar />
      <div className='view-article-container'>
        <div className='toolbar-container'>
          <img onClick={() => {
            router.back()
          }} src={'/arrow.svg'}/>
          <span>BACK</span>
        </div>
        <div className='view-article'>
          <PhoneImageDetail deviceImageByColor={product.colorOptions[selectedColorIndex].imageUrl}/>
          <div className='view-article-details'>
            <span>{product.name.toUpperCase()}</span>
            <span>{product.basePrice} EUR</span>

            <div className="view-article-storages-container">
              <div>
                <span>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</span>
              </div> 
              <div className='view-article-storages'> 
              {
                product.storageOptions.map((storage: StorageOption, index: number) => {
                  return <div key={index} className='view-article-storages-option'>
                    {storage.capacity}
                  </div>
                })
              }
              </div>
            </div>

            <div className='view-article-colors'>
              {
                product.colorOptions.map((color: ColorOption, index: number) => {
                  return <div 
                  onClick={() => {
                    handleSelectDeviceColor(index)
                  }}
                  key={index}
                  style={{
                    height: '24px',
                    width: '24px',
                    cursor: 'pointer',
                    backgroundColor: color.hexCode,
                    border: index === selectedColorIndex ? '1px solid #000' : '1px solid #CCCCCC',
                    outline: '2px solid white', 
                    outlineOffset: '-3px',
                    boxSizing: 'border-box',
                  }}
                  ></div>
                })
              }
            </div>  
            <div className='color-device-name'>
              <span>COLOR. PICK YOUR FAVOURITE.</span>
              {product.colorOptions[selectedColorIndex].name}
            </div>
            <button className="add-cart-button">
            Añadir
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
