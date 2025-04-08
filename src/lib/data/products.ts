// src/lib/data/product.ts

export interface Product {
  title: string;
  brand: string;
  image: string;
  storage: string;
  memory: string;
  price: string;
}

export const products: Product[] = [
  {
    title: 'iPhone 13 Series',
    brand: 'Apple',
    image: 'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/apple-iphone-13-mini-frandroid-2021.png?resize=350',
    storage: '128GB',
    memory: '8GB',
    price: '380',
  },
  // Add more products here
];
