// src/lib/api/productApi.ts
import { browser } from '$app/environment';

const API_BASE_URL = 'http://localhost:8000/api';

export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  price: number;
  image_url: string | null; // This comes from the accessor
  image?: string | null; // Raw database field
  storage?: string | null;
  memory?: string | null;
  cpu?: string | null;
  ram?: string | null;
  resolution?: string; 
  battery?: string; 
  bluetooth?: string;
  wattage?: string;
  functions?: string;
  brand_id: number | null;
  category_id: number;
  created_at: string;
  updated_at: string;
  brand?: {
    id: number;
    name: string;
  };
  category?: {
    id: number;
    name: string;
  };
  specs?: Array<{
    id: number;
    name: string;
    value: string;
  }>;
}

export interface ProductsResponse {
  data: Product[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

class ProductApiService {
  private getAuthHeaders(): HeadersInit {
    if (!browser) return {};
    
    const token = localStorage.getItem('auth_token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  async getProducts(page: number = 1, categoryId?: number): Promise<ProductsResponse> {
    try {
      let url = `${API_BASE_URL}/products?page=${page}`;
      if (categoryId) {
        url += `&category_id=${categoryId}`;
      }

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      return result;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  // NEW METHOD: Get products by brand name
// Get products by brand name (e.g. "Apple", "Samsung")
async getProductsByBrand(brandName: string, page: number = 1): Promise<ProductsResponse> {
  try {
    const url = `${API_BASE_URL}/products?brand_name=${encodeURIComponent(brandName)}&page=${page}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching products by brand:', error);
    throw error;
  }
}


  // NEW METHOD: Get products by brand ID
  async getProductsByBrandId(brandId: number, page: number = 1): Promise<ProductsResponse> {
    try {
      const url = `${API_BASE_URL}/products?brand_id=${brandId}&page=${page}`;
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching products by brand ID:', error);
      throw error;
    }
  }

  async getProduct(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  async searchProducts(query: string): Promise<ProductsResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/products?search=${encodeURIComponent(query)}`, {
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  }
}

export const productApi = new ProductApiService();