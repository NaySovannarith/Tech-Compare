// C:\Users\Nith\Tech-Compare\src\lib\config.ts

import type { Product } from "./api/productApi";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

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

/**
 * Correct image URL builder.
 * Matches your Laravel /image/{filename} route exactly.
 */
export function getImageUrl(product: Product): string {
  if (product.image_url) {
    return product.image_url;
  }

  if (product.image) {
    if (product.image.startsWith('http')) {
      return product.image;
    }

    // Replace /api with '' so we get the correct domain root
    const base = API_CONFIG.BASE_URL.replace(/\/api$/, '');
    return `${base}/image/${encodeURIComponent(product.image)}`;
  }

  // Default fallback
 return 'https://via.placeholder.com/300x300?text=No+Image';
}

