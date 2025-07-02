

import { browser } from '$app/environment';
import { API_CONFIG } from '$lib/config';

const API_BASE_URL = API_CONFIG.BASE_URL;

export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  price: number;
  image_url: string | null;
  image?: string | null;
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
  brand?: { id: number; name: string };
  category?: { id: number; name: string };
  specs?: Array<{ id: number; name: string; value: string }>;
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
    // Fixed: Check both 'auth_token' and 'authToken' for compatibility
    const token = localStorage.getItem('auth_token') || localStorage.getItem('authToken');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  private async makeRequest(url: string, options: RequestInit = {}): Promise<Response> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...this.getAuthHeaders(),
    };

    const requestOptions: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      // Add credentials for CORS
      credentials: 'include',
    };

    try {
      const response = await fetch(url, requestOptions);
      
      // Handle different error status codes
      if (!response.ok) {
        if (response.status === 401) {
          console.warn('Unauthorized access - token may be invalid');
          // Clear invalid token
          if (browser) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('authToken');
          }
        }
        throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getProducts(page: number = 1, categoryId?: number): Promise<ProductsResponse> {
    try {
      let url = `${API_BASE_URL}/products?page=${page}`;
      if (categoryId) {
        url += `&category_id=${categoryId}`;
      }

      const response = await this.makeRequest(url);
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products. Please check your connection and try again.');
    }
  }

  async getProductsByBrand(brandName: string, page: number = 1): Promise<ProductsResponse> {
    try {
      const url = `${API_BASE_URL}/products?brand_name=${encodeURIComponent(brandName)}&page=${page}`;
      const response = await this.makeRequest(url);
      return await response.json();
    } catch (error) {
      console.error('Error fetching products by brand:', error);
      throw new Error(`Failed to fetch products for brand: ${brandName}`);
    }
  }

  async getProductsByBrandId(brandId: number, page: number = 1): Promise<ProductsResponse> {
    try {
      const url = `${API_BASE_URL}/products?brand_id=${brandId}&page=${page}`;
      const response = await this.makeRequest(url);
      return await response.json();
    } catch (error) {
      console.error('Error fetching products by brand ID:', error);
      throw new Error(`Failed to fetch products for brand ID: ${brandId}`);
    }
  }

  async getProduct(id: number): Promise<Product> {
    try {
      const response = await this.makeRequest(`${API_BASE_URL}/products/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error(`Failed to fetch product with ID: ${id}`);
    }
  }

  async searchProducts(query: string): Promise<ProductsResponse> {
    try {
      const response = await this.makeRequest(
        `${API_BASE_URL}/products?search=${encodeURIComponent(query)}`
      );
      return await response.json();
    } catch (error) {
      console.error('Error searching products:', error);
      throw new Error(`Failed to search products for: ${query}`);
    }
  }
}

export const productApi = new ProductApiService();