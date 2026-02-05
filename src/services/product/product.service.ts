import { Product } from "@/models/Product"
import { api } from "../api"

import { v4 } from "uuid"
import { FetchProducstRequest, FetchProductRequest } from "../dto/request/fetch-products.dto"
import { ProductDetail } from "@/models/ProductDetail"

export const getProducts = async ({productName} : FetchProducstRequest): Promise<Product[]> => {
  const response = await api.get(`/products?limit=20&search=${productName}&offset=0`)
  return response.data.map((product: Record<string, unknown>) => {
    return {
      id: product.id,
      sku: v4(),
      brand: product.brand,
      name: product.name,
      basePrice: product.basePrice,
      imageUrl: product.imageUrl
    }
  })
}
export const getOneProduct = async ({productId} : FetchProductRequest): Promise<ProductDetail> => {
  const response = await api.get(`/products/${productId}`)
  return response.data
}