export const iphone15ProMax = {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Smartphone',
    releaseDate: '2023-09-22',
    description: {
      pros: ['A17 Pro chip', 'Titanium body', 'Excellent camera'],
      cons: ['Very expensive'],
    },
    design: {
      images: { front: '', back: '', side: '' },
    },
    structure: {
      size: '159.9 x 76.7 x 8.25 mm',
      weight: '221g',
      usableSurface: '89.8%',
      materials: ['Glass', 'Titanium'],
      resistance: { dust: true, water: true },
      colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium']
    },
    screen: {
      type: 'OLED',
      aspectRatio: '19.5:9',
      resolution: '2796 x 1290',
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
      storageOptions: ['256GB', '512GB', '1TB'],
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
      base: 1199,
      currency: 'USD',
      variants: {
        '256GB': 1199,
        '512GB': 1399,
        '1TB': 1599
      }
    },
    regions: ['US', 'UK', 'EU', 'Canada', 'Australia', 'Japan', 'Singapore'],
    videoReview: 'https://youtu.be/xQwfnYh2dmY?si=FPaho0g1dWHKFeza'
  };
  