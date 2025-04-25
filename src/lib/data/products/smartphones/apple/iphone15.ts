// File: src/data/products/smartphones/apple/iphone15.ts
export const iphone15 = {
    id: 3,
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'Smartphone',
    releaseDate: '2023-09-22',
    description: {
      pros: ['Dynamic Island', 'USB-C port', 'Great camera for the price'],
      cons: ['No ProMotion display', 'Aluminum instead of titanium']
    },
    design: {
      images: { front: '', back: '', side: '' },
    },
    structure: {
      size: '147.6 x 71.6 x 7.8 mm',
      weight: '171g',
      usableSurface: '86.4%',
      materials: ['Glass', 'Aluminum'],
      resistance: { dust: true, water: true },
      colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink']
    },
    screen: {
      type: 'OLED',
      aspectRatio: '19.5:9',
      resolution: '2556 x 1179',
      density: '460 ppi'
    },
    performance: {
      processor: {
        model: 'A16 Bionic',
        cpu: '6-core',
        type: 'Hexa-core',
        frequency: 'Up to 3.46GHz',
        b4bits: true
      },
      gpu: 'Apple 5-core GPU',
      ram: '6GB',
      ramType: 'LPDDR5',
      storageOptions: ['128GB', '256GB', '512GB'],
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
      wifi: 'Wi‑Fi 6',
      bluetooth: '5.3',
      usb: 'USB-C (480Mbps)',
      battery: { fastCharge: true }
    },
    software: {
      os: 'iOS 17',
      updates: 'Up to 5 years'
    },
    price: {
      base: 799,
      currency: 'USD',
      variants: {
        '128GB': 799,
        '256GB': 899,
        '512GB': 1099
      }
    },
    regions: ['US', 'UK', 'EU', 'Canada', 'Australia', 'Japan', 'Singapore'],
    videoReview: 'https://www.youtube.com/watch?v=dummy-review-15'
  };
  