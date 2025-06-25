// src/routes/product_list/smartphones/+page.ts
import { productApi } from '$lib/api/productApi.js';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
  try {
    const page = parseInt(url.searchParams.get('page') ?? '1');
    const categoryId = 2; // Smartphones category ID
    
    const productsResponse = await productApi.getProducts(page, categoryId);
    
    return {
      products: productsResponse.data,
      pagination: {
        currentPage: productsResponse.current_page,
        lastPage: productsResponse.last_page,
        perPage: productsResponse.per_page,
        total: productsResponse.total
      }
    };
  } catch (err) {
    console.error('Failed to load products:', err);
    // Return empty data instead of throwing error to let component handle it
    return {
      products: [],
      pagination: {
        currentPage: 1,
        lastPage: 1,
        perPage: 12,
        total: 0
      },
      error: 'Failed to load products'
    };
  }
}