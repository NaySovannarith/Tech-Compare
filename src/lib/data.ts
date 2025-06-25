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
];
