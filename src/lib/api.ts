// Example of fetchProducts in lib/api.ts or api.js
import { getApiUrl } from './config';

export async function fetchProducts() {
  const res = await fetch(getApiUrl('/products'));
  return await res.json();
}
