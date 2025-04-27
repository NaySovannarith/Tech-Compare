// data.ts

export const products = [
  {
    title: "iPhone 16",
    image: "/iphones/iphone16.png",
    videoUrl: "https://www.youtube.com/watch?v=aDqzDoJPkaA",
    specs: [
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
    fullSpecs: [
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
  }
];
