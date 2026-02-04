import { Product } from "@/models/Product"
import { api } from "../api"
import { FetchProductRequest } from "../dto/request/fetch-products.dto"
import { v4 } from "uuid"

export const getProducts = async ({productName} : FetchProductRequest): Promise<Product[]> => {
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