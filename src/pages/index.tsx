import PhoneGrid from "@/components/catalog/PhoneGrid"
import Input from "@/components/layout/input"
import { Product } from "@/models/Product"
import { getProducts } from "@/services/product/product.service"
import { useEffect, useState } from "react"

export default function Home() {

  const [products, setProducts] = useState<Product[]>([])
  const [searchText, setSearchText] = useState<string>('')

  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchText)
    }, 400) 

    return () => clearTimeout(timeout)
  }, [searchText])

  useEffect(() => {
    const fetchDevices = async () => {
      const mobileProductsData = await getProducts({
        productName: debouncedSearch,
      })
      setProducts(mobileProductsData)
    }

    fetchDevices()
  }, [debouncedSearch])

  return <>
    <Input
      onChange={(e) => setSearchText(e.target.value)}
    />
    <div className="results-container">
      <span>{products.length} RESULTS</span>
    </div>
    <PhoneGrid products={products}/>
  </>
}
