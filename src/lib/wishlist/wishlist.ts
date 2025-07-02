import { writable } from 'svelte/store';
import { getApiUrl } from '../config';

export type WishlistItem = {
  id: number;
  product: {
    id: string | number;
    title: string;
    brand: string;
    image: string;
    storage: string;
    memory: string;
    price: number;
    description?: string;
  };
};

function createWishlistStore() {
  const { subscribe, set, update } = writable<WishlistItem[]>([]);

  function buildRequestOptions(method: string, body?: any): RequestInit {
    // Fixed: Check both token keys for compatibility
    const token = localStorage.getItem('auth_token') || localStorage.getItem('authToken');
    console.log('Auth token:', token ? 'Present' : 'Missing');

    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const options: RequestInit = {
      method,
      headers,
      credentials: 'include' // Added for CORS
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return options;
  }

  async function load() {
    console.log('[Wishlist] Loading from backend...');
    try {
      const res = await fetch(getApiUrl('/wishlist'), buildRequestOptions('GET'));

      if (!res.ok) {
        if (res.status === 401) {
          console.warn('[Wishlist] Unauthorized - user may not be logged in');
          set([]);
          return;
        }
        throw new Error(`Failed to load wishlist: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      console.log('[Wishlist] Raw response:', data);

      // Handle both array response and object with data property
      const items = Array.isArray(data) ? data : (data.data || []);
      
      const validItems = items
        .filter((item: any) => item?.product)
        .map((item: any) => ({
          ...item,
          product: {
            ...item.product,
            id: String(item.product.id), // Ensure ID is string for consistency
            image: item.product.image_url || item.product.image || 'https://via.placeholder.com/80?text=No+Image',
            price: Number(item.product.price) || 0,
            brand: item.product.brand?.name || item.product.brand || 'Unknown',
            storage: item.product.storage || 'N/A',
            memory: item.product.memory || item.product.ram || 'N/A'
          }
        }));

      console.log(`[Wishlist] Loaded ${validItems.length} items`);
      set(validItems);
    } catch (error) {
      console.error('[Wishlist] Load failed:', error);
      set([]);
      throw error;
    }
  }

  async function addToWishlist(productId: number) {
    console.log('Adding to wishlist with product_id:', productId);

    try {
      const res = await fetch(
        getApiUrl('/wishlist'),
        buildRequestOptions('POST', { product_id: productId })
      );

      if (!res.ok) {
        const errorText = await res.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          throw new Error(`Failed to add to wishlist: ${res.status} ${res.statusText}`);
        }
        
        console.error('[Wishlist] Add failed:', errorData);
        throw new Error(errorData.message || 'Failed to add to wishlist');
      }

      const result = await res.json();
      console.log('[Wishlist] Product added:', result);
      await load(); // Reload the wishlist
    } catch (error) {
      console.error('[Wishlist] Add to wishlist failed:', error);
      throw error;
    }
  }

  async function remove(wishlistId: number) {
    console.log(`[Wishlist] Removing item ID ${wishlistId}...`);

    try {
      const res = await fetch(
        getApiUrl(`/wishlist/${wishlistId}`),
        buildRequestOptions('DELETE')
      );

      if (!res.ok) {
        throw new Error(`Failed to remove from wishlist: ${res.status} ${res.statusText}`);
      }

      console.log('[Wishlist] Removed item ID:', wishlistId);
      update(items => items.filter(item => item.id !== wishlistId));
    } catch (error) {
      console.error('[Wishlist] Remove failed:', error);
      throw error;
    }
  }

  return {
    subscribe,
    load,
    addToWishlist,
    remove
  };
}

export const wishlist = createWishlistStore();