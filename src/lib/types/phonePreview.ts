export interface PhonePreview {
    id: number;
    name: string;
    brand: string;
    storage: string;
    memory: string;
    price: {
      base: number;
      currency: string;
    };
    region: string;
    image: string;
  }