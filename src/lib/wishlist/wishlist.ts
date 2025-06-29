// src/lib/wishlist/wishlist.ts
import { writable } from 'svelte/store';

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

  function buildRequestOptions(method: string, body?: any) {
    const token = localStorage.getItem('authToken');
	console.log(' Auth token:', token); // Add this for debugging

    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const options: RequestInit = {
      method,
      headers
    };

    if (!token) {
      options.credentials = 'include';
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    return options;
  }

  // FIXED: Add proper image prefix for Laravel
  async function load() {
    console.log('[Wishlist] Loading from backend...');
    const res = await fetch('http://localhost:8000/api/wishlist', buildRequestOptions('GET'));

    if (!res.ok) {
      console.error('[Wishlist] Failed to load:', res.status);
      set([]);
      return;
    }

    const data = await res.json();
    console.log('[Wishlist] Raw response:', data);

const validItems = data
  .filter((item: any) => item?.product)
  .map((item: any) => ({
    ...item,
    product: {
      ...item.product,
      image: item.product.image_url
        ? item.product.image_url // use directly, no prefix
        : 'https://via.placeholder.com/80?text=No+Image',
      price: Number(item.product.price)
    }
  }));



    console.log(`[Wishlist] Loaded ${validItems.length} items`);
    set(validItems);
  }

  async function addToWishlist(productId: number) {
    console.log(' Adding to wishlist with product_id:', productId); // Add this

    const res = await fetch(
      'http://localhost:8000/api/wishlist',
      buildRequestOptions('POST', { product_id: productId })
    );

    let result = null;
    try {
      result = await res.json();
    } catch (err) {
      console.error('[Wishlist] Failed to parse response:', err);
    }

    if (!res.ok) {
      console.error('[Wishlist] Add failed:', result);
      return;
    }

    console.log('[Wishlist] Product added:', result);
    await load();
  }

  async function removeWishlist(wishlistId: number) {
    console.log(`[Wishlist] Removing item ID ${wishlistId}...`);

    const res = await fetch(
      `http://localhost:8000/api/wishlist/${wishlistId}`,
      buildRequestOptions('DELETE')
    );

    if (!res.ok) {
      console.error('[Wishlist] Remove failed:', res.status);
      return;
    }

    console.log('[Wishlist] Removed item ID:', wishlistId);
    update(items => items.filter(item => item.id !== wishlistId));
  }

  return {
    subscribe,
    load,
    addToWishlist,
    removeWishlist,
  };
}

export const wishlist = createWishlistStore();
