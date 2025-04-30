export interface Smartphone {
    id: number;
    name: string;
    brand: string;
    category: string;
    releaseDate: string;
    description: {
      pros: string[];
      cons: string[];
    };
    design: {
      images: {
        front: string;
        back: string;
        side: string;
      };
    }
    structure: {
      size: string;
      weight: string;
      usableSurface: string;
      materials: string[];
      resistance: {
        dust: boolean;
        water: boolean;
      };
      colors: string[];
    };
    screen: {
      type: string;
      aspectRatio: string;
      resolution: string;
      density: string;
    };
    performance: {
      processor: {
        model: string;
        cpu: string;
        type: string;
        frequency: string;
        b4bits: boolean;
      };
      gpu: string;
      ram: string;
      ramType: string;
      storageOptions: string[];
      storageType: string;
      security: string[];
      sensors: {
        accelerometer: boolean;
        gyro: boolean;
        proximity: boolean;
        compass: boolean;
        barometer: boolean;
      };
      audio: string;
    };
    connectivity: {
      bands: string;
      sim: string;
      wifi: string;
      bluetooth: string;
      usb: string;
      battery: {
        fastCharge: boolean;
      };
    };
    software: {
      os: string;
      updates: string;
    };
    price: {
      base: number;
      currency: string;
      variants: {
        [storage: string]: number; // '128GB': 799, etc
      };
    };
    regions: string[];
    videoReview: string;
  }
  