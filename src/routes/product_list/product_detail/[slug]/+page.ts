import { products } from '$lib/data';

export function load({ params }) {
  const product = products.find(p => p.slug === params.slug);


  if (!product) {
    return {
      status: 404,
      error: new Error(`Product not found: ${params.slug}`)
    };
  }

  return {
    product
  };
}
