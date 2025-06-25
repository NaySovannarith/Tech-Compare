// Example of fetchProducts in lib/api.ts or api.js
export async function fetchProducts() {
  const res = await fetch('http://localhost:8080/api/products');
  return await res.json();
}
