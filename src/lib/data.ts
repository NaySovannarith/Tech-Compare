// data.ts

export const products = [
  {
    slug: "iphone-16",
    title: "iPhone 16",
    image: "/iphones/iphone16.png",
    videoUrl: "https://www.youtube.com/watch?v=aDqzDoJPkaA",
    specs: [  // brief info
      {
        lines: ["6.1\"", "1179x2556", "pixels"]
      },
      {
        lines: ["Apple A18", "6-core CPU", "5-core GPU"]
      },
      {
        lines: ["3561mAh", "25W Charging"]
      },
      {
        lines: ["8GB RAM", "Up to", "512GB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "9th September, 2024" },
        { label: "Status", value: "Available. Released 20th September, 2024" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "147.6 x 71.6 x 7.8 mm (5.81 x 2.82 x 0.31 in)" },
        { label: "Weight", value: "170g (6.00 oz)" },
        { label: "Build", value: "Glass front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Super Retina XDR OLED, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)" },
        { label: "Size", value: "6.1 inches, 91.7 cm² (~86.8% screen-to-body ratio)" },
        { label: "Resolution", value: "1179 x 2556 pixels, 19.5:9 ratio (~460 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "iOS 18, upgradable to iOS 18.4" },
        { label: "Chipset", value: "Apple A18 (3 nm)" },
        { label: "CPU", value: "Hexa-core (2x4.04 GHz + 4x2.02 GHz)" },
        { label: "GPU", value: "Apple GPU (5-core graphics)" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM NVMe" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 3561 mAh" },
        { label: "Charging", value: "Wired, PD2.0, 50% in 30 min" },
        { label: "", value: "25W wireless (MagSafe), 15W wireless (Qi2), 4.5W reverse wired" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "48 MP, f/1.6, 26mm (wide), 1/1.56\", 1.0µm, dual pixel PDAF, sensor-shift OIS" },
        { label: "", value: "12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/3.5\", 1.0µm, dual pixel PDAF" },
        { label: "Features", value: "Dual-LED dual-tone flash, HDR (photo/panorama)" },
        { label: "Video", value: "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR" },
        { label: "", value: "(up to 60fps), stereo sound rec." }
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/1.9, 23mm (wide), 1/3.6\", 1.0µm, PDAF" },
        { label: "", value: "SL 3D, (depth/biometrics sensor)" },
        { label: "Features", value: "HDR, Dolby Vision HDR, 3D (spatial) audio, stereo sound rec." },
        { label: "Video", value: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6/6e/7, tri-band, hotspot" },
        { label: "Bluetooth", value: "5.3, A2DP, LE" },
        { label: "Ports", value: "USB Type-C 2.0, DisplayPort through Type-C" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Face ID, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Ultra Wideband (UWB) support (gen2 chip)" },
        { label: "", value: "Emergency SOS, Messages and Find My via satellite" }
      ]}
    ]
  },
  {
    slug: "iphone-15",
    title: "iPhone 15 Pro Max",
    image: "/iphones/iphone15promax.png",
    videoUrl: "https://www.youtube.com/watch?v=cVpcl7KGly0",
    specs: [  // brief info
      {
        lines: ["6.7\"", "1290x1796", "pixels"]
      },
      {
        lines: ["Apple A17 Pro", "6-core CPU", "6-core GPU"]
      },
      {
        lines: ["4441mAh", "15W Charging"]
      },
      {
        lines: ["8GB RAM", "Up to", "1TB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "12th September, 2023" },
        { label: "Status", value: "Available. Released 22th September, 2023" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "159.9 x 76.7 x 8.3 mm (6.30 x 3.02 x 0.33 in)" },
        { label: "Weight", value: "221 g (7.80 oz)" },
        { label: "Build", value: "Glass front, glass back, titanium frame (grade 5)" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)" },
        { label: "Size", value: "6.7 inches, 110.2 cm2 (~89.8% screen-to-body ratio)" },
        { label: "Resolution", value: "1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "iOS 17, upgradable to iOS 18.4" },
        { label: "Chipset", value: "Apple A17 Pro (3 nm)" },
        { label: "CPU", value: "Hexa-core (2x3.78 GHz + 4x2.11 GHz)" },
        { label: "GPU", value: "Apple GPU (6-core graphics)" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 4441 mAh" },
        { label: "Charging", value: "Wired, PD2.0, 50% in 30 min" },
        { label: "", value: "15W wireless (MagSafe), 15W wireless (Qi2), 4.5W reverse wired" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "48 MP, f/1.8, 24mm (wide), 1/1.28\", 1.22µm, dual pixel PDAF, sensor-shift OIS" },
        { label: "", value: "12 MP, f/2.8, 120mm (periscope telephoto), 1/3.06\", 1.12µm, dual pixel PDAF" },
        { label: "Features", value: "Dual-LED dual-tone flash, HDR (photo/panorama)" },
        { label: "Video", value: "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR" },
        { label: "", value: "(up to 60fps), ProRes, 3D (spatial) video, stereo sound rec." }
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/1.9, 23mm (wide), 1/3.6\", 1.0µm, PDAF" },
        { label: "", value: "SL 3D, (depth/biometrics sensor)" },
        { label: "Features", value: "HDR, Dolby Vision HDR, 3D (spatial) audio, stereo sound rec." },
        { label: "Video", value: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6/6e/7, tri-band, hotspot" },
        { label: "Bluetooth", value: "5.3, A2DP, LE" },
        { label: "Ports", value: "USB Type-C 2.0, DisplayPort through Type-C" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Face ID, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Ultra Wideband (UWB) support (gen2 chip)" },
        { label: "", value: "Emergency SOS, Messages and Find My via satellite" }
      ]}
    ]
  },
  {
    slug: "iphone-14",
    title: "iPhone 14",
    image: "/iphones/iphone14.png",
    videoUrl: "https://www.youtube.com/watch?v=Ht90J5MwpUg",
    specs: [  // brief info
      {
        lines: ["6.1\"", "1170x2532", "pixels"]
      },
      {
        lines: ["Apple A15 Bionic", "6-core CPU", "5-core GPU"]
      },
      {
        lines: ["3279mAh", "15W Charging"]
      },
      {
        lines: ["6GB RAM", "Up to", "512GB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "07th September, 2022" },
        { label: "Status", value: "Available. Released 16th September, 2022" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "146.7 x 71.5 x 7.8 mm (5.78 x 2.81 x 0.31 in)" },
        { label: "Weight", value: "172 g (6.07 oz)" },
        { label: "Build", value: "Glass front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM)" },
        { label: "Size", value: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)" },
        { label: "Resolution", value: "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "iOS 16, upgradable to iOS 18.4" },
        { label: "Chipset", value: "Apple A15 Bionic (5 nm)" },
        { label: "CPU", value: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)" },
        { label: "GPU", value: "Apple GPU (5-core graphics)" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 3279 mAh (12.68 Wh)" },
        { label: "Charging", value: "Wired, PD2.0, 50% in 30 min" },
        { label: "", value: "15W wireless (MagSafe), 15W wireless (Qi2)" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "12 MP, f/1.5, 26mm (wide), 1/1.7\", 1.9µm, dual pixel PDAF, sensor-shift OIS" },
        { label: "", value: "12 MP, f/2.4, 13mm, 120˚ (ultrawide)" },
        { label: "Features", value: "Dual-LED dual-tone flash, HDR (photo/panorama)" },
        { label: "Video", value: "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR" },
        { label: "", value: "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), stereo sound rec." }
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/1.9, 23mm (wide), 1/3.6\", 1.0µm, PDAF" },
        { label: "", value: "SL 3D, (depth/biometrics sensor)" },
        { label: "Features", value: "HDR" },
        { label: "Video", value: "4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6, tri-band, hotspot" },
        { label: "Bluetooth", value: "5.3, A2DP, LE" },
        { label: "Ports", value: "Lightning port, USB 2.0" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Face ID, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Ultra Wideband (UWB) support" },
        { label: "", value: "Emergency SOS via satellite (SMS sending/receiving)" }
      ]}
    ]
  },
  {
    slug: "iphone-13",
    title: "iPhone 13",
    image: "/iphones/iphone13.png",
    videoUrl: "https://www.youtube.com/watch?v=rz_rus8Vg6Q",
    specs: [  // brief info
      {
        lines: ["6.1\"", "1170x2532", "pixels"]
      },
      {
        lines: ["Apple A15 Bionic", "6-core CPU", "4-core GPU"]
      },
      {
        lines: ["3240mAh", "15W Charging"]
      },
      {
        lines: ["4GB RAM", "Up to", "512GB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "14th September, 2021" },
        { label: "Status", value: "Available. Released 24th September, 2022" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)" },
        { label: "Weight", value: "174 g (6.14 oz)" },
        { label: "Build", value: "Glass front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM)" },
        { label: "Size", value: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)" },
        { label: "Resolution", value: "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "iOS 15, upgradable to iOS 18.4" },
        { label: "Chipset", value: "Apple A15 Bionic (5 nm)" },
        { label: "CPU", value: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)" },
        { label: "GPU", value: "Apple GPU (4-core graphics)" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "128GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 3240 mAh (12.41 Wh)" },
        { label: "Charging", value: "Wired, PD2.0, 50% in 30 min" },
        { label: "", value: "15W wireless (MagSafe), 15W wireless (Qi2)" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "12 MP, f/1.6, 26mm (wide), 1/1.9\", 1.7µm, dual pixel PDAF, sensor-shift OIS" },
        { label: "", value: "12 MP, f/2.4, 13mm, 120˚ (ultrawide)" },
        { label: "Features", value: "Dual-LED dual-tone flash, HDR (photo/panorama)" },
        { label: "Video", value: "4K@24/30/60fps, 1080p@30/60/120/240fps, 10-bit HDR, Dolby Vision HDR" },
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/2.2, 23mm (wide), 1/3.6\", 1.0µm, PDAF" },
        { label: "", value: "SL 3D, (depth/biometrics sensor)" },
        { label: "Features", value: "HDR" },
        { label: "Video", value: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6, tri-band, hotspot" },
        { label: "Bluetooth", value: "5.3, A2DP, LE" },
        { label: "Ports", value: "Lightning port, USB 2.0" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Face ID, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Ultra Wideband (UWB) support" },
        { label: "", value: "Emergency SOS via satellite (SMS sending/receiving)" }
      ]}
    ]
  },
  {
    slug: "iphone-12",
    title: "iPhone 12",
    image: "/iphones/iphone12.png",
    videoUrl: "https://www.youtube.com/watch?v=7h0CXQgPqN0",
    specs: [  // brief info
      {
        lines: ["6.1\"", "1170x2532", "pixels"]
      },
      {
        lines: ["Apple A14 Bionic", "6-core CPU", "4-core GPU"]
      },
      {
        lines: ["2815mAh", "15W Charging"]
      },
      {
        lines: ["4GB RAM", "Up to", "256GB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "13th September, 2020" },
        { label: "Status", value: "Available. Released 23th September, 2020" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "146.7 x 71.5 x 7.4 mm (5.78 x 2.81 x 0.29 in)" },
        { label: "Weight", value: "164 g (5.78 oz)" },
        { label: "Build", value: "Glass front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Super Retina XDR OLED, HDR10, Dolby Vision, 625 nits (HBM)" },
        { label: "Size", value: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)" },
        { label: "Resolution", value: "1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "iOS 14.1, upgradable to iOS 18.4" },
        { label: "Chipset", value: "Apple A14 Bionic (5 nm)" },
        { label: "CPU", value: "Hexa-core (2x3.1 GHz Avalanche + 4x1.81 GHz Icestorm)" },
        { label: "GPU", value: "Apple GPU (4-core graphics)" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 2815 mAh (10.78 Wh)" },
        { label: "Charging", value: "Wired, PD2.0, 50% in 30 min" },
        { label: "", value: "15W wireless (MagSafe), 15W wireless (Qi2)" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS" },
        { label: "", value: "12 MP, f/2.4, 13mm, 120˚ (ultrawide), 1/3.6\"" },
        { label: "Features", value: "Dual-LED dual-tone flash, HDR (photo/panorama)" },
        { label: "Video", value: "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 30fps)" },
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/2.2, 23mm (wide), 1/3.6\", 1.0µm" },
        { label: "", value: "SL 3D, (depth/biometrics sensor)" },
        { label: "Features", value: "HDR" },
        { label: "Video", value: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot" },
        { label: "Bluetooth", value: "5.0, A2DP, LE" },
        { label: "Ports", value: "Lightning port, USB 2.0" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Face ID, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Ultra Wideband (UWB) support" },
        { label: "", value: "Emergency SOS via satellite (SMS sending/receiving)" }
      ]}
    ]
  },
  {
    slug: "iphone-11",
    title: "iPhone 11",
    image: "/iphones/iphone11.png",
    videoUrl: "https://www.youtube.com/watch?v=hVpkbiQ9E4c",
    specs: [  // brief info
      {
        lines: ["6.1\"", "828x1792", "pixels"]
      },
      {
        lines: ["Apple A13 Bionic", "6-core CPU", "4-core GPU"]
      },
      {
        lines: ["3110mAh", "5W Charging"]
      },
      {
        lines: ["4GB RAM", "Up to", "256GB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "10th September, 2019" },
        { label: "Status", value: "Available. Released 20th September, 2019" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)" },
        { label: "Weight", value: "194 g (6.84 oz)" },
        { label: "Build", value: "Glass front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Liquid Retina IPS LCD, 625 nits (typ)" },
        { label: "Size", value: "6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio)" },
        { label: "Resolution", value: "828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "iOS 13, upgradable to iOS 18.4" },
        { label: "Chipset", value: "Apple A13 Bionic (7 nm+)" },
        { label: "CPU", value: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)" },
        { label: "GPU", value: "Apple GPU (4-core graphics)" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 3110 mAh, non-removable (11.91 Wh)" },
        { label: "Charging", value: "Wired, PD2.0, 50% in 30 min" },
        { label: "", value: "Wireless (Qi2)" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "12 MP, f/1.8, 26mm (wide), 1/2.55\", 1.4µm, dual pixel PDAF, OIS" },
        { label: "", value: "12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6\"" },
        { label: "Features", value: "Dual-LED dual-tone flash, HDR (photo/panorama)" },
        { label: "Video", value: "4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec." },
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/2.2, 23mm (wide), 1/3.6\", 1.0µm" },
        { label: "", value: "SL 3D, (depth/biometrics sensor)" },
        { label: "Features", value: "HDR" },
        { label: "Video", value: "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot" },
        { label: "Bluetooth", value: "5.0, A2DP, LE" },
        { label: "Ports", value: "Lightning port, USB 2.0" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Face ID, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Ultra Wideband (UWB) support" },
      ]}
    ]
  },
  {
    slug: "samsung-s24-ultra",
    title: "Samsung Galaxy S24 Ultra",
    image: "/samsung/samsung-s24-ultra.png",
    videoUrl: "https://www.youtube.com/watch?v=K-JGaqfIOmI",
    specs: [  // brief info
      {
        lines: ["6.8\"", "1440x3120", "pixels"]
      },
      {
        lines: ["Snapdragon 8", "8-core CPU", "Adreno 750 GPU"]
      },
      {
        lines: ["5000mAh", "45W Charging"]
      },
      {
        lines: ["12GB RAM", "Up to", "1TB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "17th January, 2024" },
        { label: "Status", value: "Available. Released 24th January, 2024" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "162.3 x 79 x 8.6 mm (6.39 x 3.11 x 0.34 in)" },
        { label: "Weight", value: "233 g (8.18 oz)" },
        { label: "Build", value: "Glass front, glass back, titanium frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Dynamic LTPO AMOLED 2X, 120Hz, 480Hz PWM, HDR10+, 2600 nits (peak)" },
        { label: "Size", value: "6.8 inches, 113.5 cm2 (~88.5% screen-to-body ratio)" },
        { label: "Resolution", value: "1440 x 3120 pixels, 19.5:9 ratio (~505 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "Android 14, up to 7 major Android upgrades, One UI 6.1.1" },
        { label: "Chipset", value: "Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm)" },
        { label: "CPU", value: "8-core (1x3.39GHz & 3x3.1GHz & 2x2.9GHz & 2x2.2GHz)" },
        { label: "GPU", value: "Adreno 750 (1 GHz)" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 5000 mAh" },
        { label: "Charging", value: "45W wired, PD3.0, 65% in 30 min" },
        { label: "", value: "15W wireless (Qi), 4.5W reverse wireless" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "200 MP, f/1.7, 24mm (wide), 1/1.3\", 0.6µm, multi-directional PDAF, OIS" },
        { label: "", value: "10 MP, f/2.4, 67mm (telephoto), 1/3.52\", 1.12µm, PDAF, OIS, 3x optical zoom" },
        { label: "", value: "50 MP, f/3.4, 111mm (periscope telephoto), 1/2.52\", 0.7µm, PDAF, OIS, 5x optical zoom" },
        { label: "", value: "12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55\", 1.4µm, dual pixel PDAF, Super Steady video" },
        { label: "Features", value: "Laser AF, LED flash, auto-HDR, panorama" },
        { label: "Video", value: "8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps" },
        { label: "", value: "HDR10+, stereo sound rec., gyro-EIS" }
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/1.9, 23mm (wide), 1/3.6\", 1.0µm, PDAF" },
        { label: "Features", value: "HDR, HDR10+" },
        { label: "Video", value: "4K@30/60fps, 1080p@30fps" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct" },
        { label: "Bluetooth", value: "5.3, A2DP, LE" },
        { label: "Ports", value: "USB Type-C 3.2, DisplayPort 1.2, OTG" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Fingerprint, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Samsung DeX, Samsung Wireless DeX (desktop experience support)" },
        { label: "", value: "Ultra Wideband (UWB) support" }
      ]}
    ]
  },
  {
    slug: "samsung-s24",
    title: "Samsung Galaxy S24",
    image: "/samsung/samsung-s24.png",
    videoUrl: "https://www.youtube.com/watch?v=u9yv3RmqAm8",
    specs: [  // brief info
      {
        lines: ["6.2\"", "1080x2340", "pixels"]
      },
      {
        lines: ["Snapdragon 8", "8-core CPU", "Adreno 750 GPU"]
      },
      {
        lines: ["4000mAh", "25W Charging"]
      },
      {
        lines: ["8GB RAM", "Up to", "512GB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "17th January, 2024" },
        { label: "Status", value: "Available. Released 24th January, 2024" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "147 x 70.6 x 7.6 mm (5.79 x 2.78 x 0.30 in)" },
        { label: "Weight", value: "168 g (5.89 oz)" },
        { label: "Build", value: "Glass front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Dynamic LTPO AMOLED 2X, 120Hz, 480Hz PWM, HDR10+, 2600 nits (peak)" },
        { label: "Size", value: "6.2 inches, 94.4 cm2 (~90.9% screen-to-body ratio)" },
        { label: "Resolution", value: "1080 x 2340 pixels, 19.5:9 ratio (~416 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "Android 14, up to 7 major Android upgrades, One UI 6.1.1" },
        { label: "Chipset", value: "Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm) - USA/Canada/China" },
        { label: "", value: "Exynos 2400 (4 nm) - International"},
        { label: "CPU", value: "8-core (1x3.39GHz & 3x3.1GHz & 2x2.9GHz & 2x2.2GHz)"},
        { label: "", value: "10-core (1x3.2GHz & 2x2.9GHz & 3x2.6GHz & 4x1.95GHz)"},
        { label: "GPU", value: "Adreno 750 (1 GHz) - USA/Canada/China" },
        { label: "", value: "Xclipse 940 - International"}
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM, 512GB 8GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 4000 mAh" },
        { label: "Charging", value: "25W wired, PD3.0, 50% in 30 min" },
        { label: "", value: "15W wireless (Qi), 4.5W reverse wireless" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "50 MP, f/1.8, 24mm (wide), 1/1.56\", 1.0µm, dual pixel PDAF, OIS" },
        { label: "", value: "10 MP, f/2.4, 67mm (telephoto), 1/3.94\", 1.0µm, PDAF, OIS, 3x optical zoom" },
        { label: "", value: "12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55\" 1.4µm, Super Steady video" },
        { label: "Features", value: "LED flash, auto-HDR, panorama" },
        { label: "Video", value: "8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps" },
        { label: "", value: "HDR10+, stereo sound rec., gyro-EIS" }
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/2.2, 26mm (wide), 1/3.2\", 1.12µm, dual pixel PDAF" },
        { label: "Features", value: "HDR, HDR10+" },
        { label: "Video", value: "4K@30/60fps, 1080p@30fps" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct" },
        { label: "Bluetooth", value: "5.3, A2DP, LE" },
        { label: "Ports", value: "USB Type-C 3.2, DisplayPort 1.2, OTG" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Fingerprint, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Samsung DeX, Samsung Wireless DeX (desktop experience support)" },
        { label: "", value: "Ultra Wideband (UWB) support" }
      ]}
    ]
  },
  {
    slug: "samsung-s24plus",
    title: "Samsung Galaxy S24+",
    image: "/samsung/samsung-s24plus.png",
    videoUrl: "https://www.youtube.com/watch?v=aEzNk_pkngc",
    specs: [  // brief info
      {
        lines: ["6.7\"", "1440x3120", "pixels"]
      },
      {
        lines: ["Snapdragon 8", "8-core CPU", "Adreno 750 GPU"]
      },
      {
        lines: ["4900mAh", "45W Charging"]
      },
      {
        lines: ["12GB RAM", "Up to", "512GB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "17th January, 2024" },
        { label: "Status", value: "Available. Released 24th January, 2024" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "158.5 x 75.9 x 7.7 mm (6.24 x 2.99 x 0.30 in)" },
        { label: "Weight", value: "197 g (6.91 oz)" },
        { label: "Build", value: "Glass front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Dynamic LTPO AMOLED 2X, 120Hz, 480Hz PWM, HDR10+, 2600 nits (peak)" },
        { label: "Size", value: "6.7 inches, 110.2 cm2 (~91.6% screen-to-body ratio)" },
        { label: "Resolution", value: "1440 x 3120 pixels, 19.5:9 ratio (~513 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "Android 14, up to 7 major Android upgrades, One UI 6.1.1" },
        { label: "Chipset", value: "Qualcomm SM8650-AC Snapdragon 8 Gen 3 (4 nm) - USA/Canada/China" },
        { label: "", value: "Exynos 2400 (4 nm) - International"},
        { label: "CPU", value: "8-core (1x3.39GHz & 3x3.1GHz & 2x2.9GHz & 2x2.2GHz)"},
        { label: "", value: "10-core (1x3.2GHz & 2x2.9GHz & 3x2.6GHz & 4x1.95GHz)"},
        { label: "GPU", value: "Adreno 750 (1 GHz) - USA/Canada/China" },
        { label: "", value: "Xclipse 940 - International"}
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "256GB 12GB RAM, 512GB 12GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Ion 4900 mAh" },
        { label: "Charging", value: "45W wired, PD3.0, 65% in 30 min" },
        { label: "", value: "15W wireless (Qi), 4.5W reverse wireless" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "50 MP, f/1.8, 24mm (wide), 1/1.56\", 1.0µm, dual pixel PDAF, OIS" },
        { label: "", value: "10 MP, f/2.4, 67mm (telephoto), 1/3.94\", 1.0µm, PDAF, OIS, 3x optical zoom" },
        { label: "", value: "12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55\" 1.4µm, Super Steady video" },
        { label: "Features", value: "LED flash, auto-HDR, panorama" },
        { label: "Video", value: "8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps" },
        { label: "", value: "HDR10+, stereo sound rec., gyro-EIS" }
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "12 MP, f/2.2, 26mm (wide), 1/3.2\", 1.12µm, dual pixel PDAF" },
        { label: "Features", value: "HDR, HDR10+" },
        { label: "Video", value: "4K@30/60fps, 1080p@30fps" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct" },
        { label: "Bluetooth", value: "5.3, A2DP, LE" },
        { label: "Ports", value: "USB Type-C 3.2, DisplayPort 1.2, OTG" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Fingerprint, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Samsung DeX, Samsung Wireless DeX (desktop experience support)" },
        { label: "", value: "Ultra Wideband (UWB) support" }
      ]}
    ]
  },
  {
    slug: "samsung-zfold5",
    title: "Samsung Galaxy Z Fold5",
    image: "/samsung/samsungzfold5.png",
    videoUrl: "https://www.youtube.com/watch?v=0kMKOpOTgHI",
    specs: [  // brief info
      {
        lines: ["7.6\"", "1812x2176", "pixels"]
      },
      {
        lines: ["Snapdragon 8", "8-core CPU", "Adreno 740 GPU"]
      },
      {
        lines: ["4400mAh", "25W Charging"]
      },
      {
        lines: ["12GB RAM", "Up to", "1TB NVMe"]
      }
    ],
    fullSpecs: [  // full detailed spec
      { category: "LAUNCH", items: [
        { label: "Announce", value: "26th July, 2023" },
        { label: "Status", value: "Available. Released 11th August, 2023" }
      ]},
      { category: "BODY", items: [
        { label: "Dimensions", value: "Unfolded: 154.9 x 129.9 x 6.1 mm" },
        { label: "", value: "Folded: 154.9 x 67.1 x 13.4 mm"},
        { label: "Weight", value: "253 g (8.92 oz)" },
        { label: "Build", value: "Glass front, plastic front, glass back, aluminum frame" }
      ]},
      { category: "DISPLAY", items: [
        { label: "Type", value: "Foldable Dynamic AMOLED 2X, 120Hz, HDR10+" },
        { label: "Size", value: "7.6 inches, 183.2 cm2 (~91.1% screen-to-body ratio)" },
        { label: "Resolution", value: "1812 x 2176 pixels (~373 ppi density)" }
      ]},
      { category: "PLATFORM", items: [
        { label: "OS", value: "Android 13, up to 4 major Android upgrades, One UI 6.1.1" },
        { label: "Chipset", value: "Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)" },
        { label: "CPU", value: "8-core (1x3.36GHz & 4x2.8GHz & 3x2.0GHz)" },
        { label: "GPU", value: "Adreno 740" }
      ]},
      { category: "MEMORY", items: [
        { label: "Card Slot", value: "No" },
        { label: "Internal", value: "256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM" }
      ]},
      { category: "BATTERY", items: [
        { label: "Capacity", value: "Li-Po 4400 mAh" },
        { label: "Charging", value: "25W wired, 50% in 30 min" },
        { label: "", value: "15W wireless, 4.5W reverse wireless" }
      ]},
      { category: "MAIN CAMERA", items: [
        { label: "Dual", value: "50 MP, f/1.8, 23mm (wide), 1/1.56\", 1.0µm, dual pixel PDAF, OIS" },
        { label: "", value: "10 MP, f/2.4, 66mm (telephoto), 1/3.94\", 1.0µm, PDAF, OIS, 3x optical zoom" },
        { label: "", value: "12 MP, f/2.2, 12mm, 123˚ (ultrawide), 1/3.06\", 1.12µm" },
        { label: "Features", value: "LED flash, HDR, panorama" },
        { label: "Video", value: "8K@30fps, 4K@60fps, 1080p@60/240fps, 720p@960fps" },
        { label: "", value: "HDR10+" }
      ]},
      { category: "FRONT CAMERA", items: [
        { label: "Single", value: "4 MP, f/1.8, 26mm (wide), 1/3.0\", 2.0µm, under display" },
        { label: "", value: "10 MP, f/2.2, 24mm (wide), 1/3.0\", 1.22µm"},
        { label: "Features", value: "HDR" },
        { label: "Video", value: "4K@30/60fps, 1080p@30/60fps" }
      ]},
      { category: "SOUND", items: [
        { label: "Speaker", value: "Yes, with stereo speakers" },
        { label: "3.5mm jack", value: "No" }
      ]},
      { category: "CONNECT", items: [
        { label: "WLAN", value: "Wi-Fi 802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct" },
        { label: "Bluetooth", value: "5.3, A2DP, LE, aptX HD" },
        { label: "Ports", value: "USB Type-C 3.2, OTG" },
        { label: "Cellular", value: "SIM/eSIM support" }
      ]},
      { category: "FEATURES", items: [
        { label: "Sensors", value: "Fingerprint, accelerometer, gyro, proximity, compass, barometer" },
        { label: "", value: "Samsung DeX, Samsung Wireless DeX (desktop experience support)" },
        { label: "", value: "Ultra Wideband (UWB) support" }
      ]}
    ]
  },
];
