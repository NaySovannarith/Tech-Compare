// logo.ts - Keep your brands array and add helper functions

export interface Brand {
  name: string;
  logo: string;
}

export const brands: Brand[] = [
  { name: 'Samsung', logo: '/images/samsung.png' },
  { name: 'iPhone', logo: '/images/apple.jpg' },
  { name: 'Oppo', logo: '/images/oppo.png' },
  { name: 'Vivo', logo: '/images/vivo.jpg' },
  { name: 'Huawei', logo: '/images/huawei.jpg' },
  { name: 'Google', logo: '/images/google.jpg' },
  { name: 'Asus', logo: '/images/asus.jpg' },
  { name: 'Nokia', logo: '/images/nokia.png' },
  { name: 'Xiaomi', logo: '/images/xiaomi.jpg' },
  { name: 'Tecno', logo: '/images/techno.jpg' },
  { name: 'Sony', logo: '/images/sony.png' },
  { name: 'Realme', logo: '/images/realme.jpg' },
  { name: 'OnePlus', logo: '/images/oneplus.png' },
  { name: 'MSI', logo: '/images/msi.jpg' },
  { name: 'Lenovo', logo: '/images/lenovo.jpg' },
  { name: 'Acer', logo: '/images/acer.jpg' },
  { name: 'Dell', logo: '/images/dell.png' },
];

export const getBrandRoute = (brandName: string): string => {
  return `/brands/${brandName.toLowerCase()}`;
};