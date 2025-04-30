// File: src/data/products/smartphones/apple/iphone15Pro.ts
export const iphone15Pro = {
    id: 2,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'Smartphone',
    releaseDate: '2023-09-22',
    description: {
      pros: ['A17 Pro chip', 'Lightweight titanium design', 'USB-C port'],
      cons: ['High price', 'No major battery improvement']
    },
    design: {
      images: { front: '', back: '', side: '' },
    },
    structure: {
      size: '146.6 x 70.6 x 8.25 mm',
      weight: '187g',
      usableSurface: '87.1%',
      materials: ['Glass', 'Titanium'],
      resistance: { dust: true, water: true },
      colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium']
    },
    screen: {
      type: 'OLED',
      aspectRatio: '19.5:9',
      resolution: '2556 x 1179',
      density: '460 ppi'
    },
    performance: {
      processor: {
        model: 'A17 Pro',
        cpu: '6-core',
        type: 'Hexa-core',
        frequency: 'Up to 3.78GHz',
        b4bits: true
      },
      gpu: 'Apple 6-core GPU',
      ram: '8GB',
      ramType: 'LPDDR5',
      storageOptions: ['128GB', '256GB', '512GB', '1TB'],
      storageType: 'NVMe',
      security: ['Face ID'],
      sensors: {
        accelerometer: true, gyro: true, proximity: true, compass: true, barometer: true
      },
      audio: 'Stereo speakers, Spatial audio'
    },
    connectivity: {
      bands: '5G, LTE, GSM',
      sim: 'Nano-SIM and eSIM',
      wifi: 'Wi‑Fi 6E',
      bluetooth: '5.3',
      usb: 'USB-C (10Gbps)',
      battery: { fastCharge: true }
    },
    software: {
      os: 'iOS 17',
      updates: 'Up to 5 years'
    },
    price: {
      base: 999,
      currency: 'USD',
      variants: {
        '128GB': 999,
        '256GB': 1099,
        '512GB': 1299,
        '1TB': 1499
      }
    },
    regions: ['US', 'UK', 'EU', 'Canada', 'Australia', 'Japan', 'Singapore'],
    videoReview: 'https://www.youtube.com/watch?v=dummy-review-pro'
  };
  