import type {PhonePreview} from '$lib/types/phonePreview';

export const phonePreviews: PhonePreview[] = [
  {
    id: 1,
    name: 'iPhone 15',
    brand: 'Apple',
    storage: '128GB',
    memory: '6GB',
    price: {
      base: 799,
      currency: 'USD'
    },
    region: 'US',
    image: '/image/iphone15.png'  
  },
  {
    id: 2,
    name: 'iPhone 15 ProMax',
    brand: 'Apple',
    storage: '128GB',
    memory: '6GB',
    price: {
      base: 799,
      currency: 'USD'
    },
    region: 'US',
    image: '/image/iphone12.jpg'  
  },
];