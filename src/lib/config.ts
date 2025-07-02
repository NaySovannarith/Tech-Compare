// C:\Users\Nith\Tech-Compare\src\lib\config.ts

import type { Product } from "./api/productApi";

const BASE_URL = import.meta.env.DEV
  ? "http://localhost:8000/api"
  : "https://be-tc-ip-production-2084.up.railway.app/api";

export const API_CONFIG = {
  BASE_URL,
  ENDPOINTS: {
    LOGIN: "/login",
    REGISTER: "/register",
    USER: "/user",
    CONTACT: "/contact",
    WISHLIST: "/wishlist",
    PRODUCTS: "/products",
  },
};

export function getApiUrl(endpoint: string): string {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
}

export function getImageUrl(product: Product): string {
  if (product.image_url) return product.image_url;

  if (product.image) {
    if (product.image.startsWith('http')) return product.image;
    return `${API_CONFIG.BASE_URL.replace('/api', '')}/storage/products/${encodeURIComponent(product.image)}`;
  }

  return '/placeholder-image.jpg';
}