<script lang="ts">
  import ProductCard from "$lib/components/EarbudsCard.svelte";
  import { Battery, Bluetooth } from "lucide-svelte";

  let minPrice = 0;
  let maxPrice = 5000;

  const earbudsAccessories = [
    {
      title: "Sony WH-1000XM4 ",
      brand: "Sony",
      image: "/headphone/Sony WH-1000XM4 Wireless.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "30 hours",
      price: 349,
    },
    {
      title: "Apple AirPods Max (2nd gen)",
      brand: "Apple",
      image: "/headphone/Apple AirPods Max (2nd generation).jpg",
      bluetooth: "Bluetooth 5.3",
      battery: "20 hours",
      price: 599,
    },
    {
      title: "Sennheiser Momentum 4 ",
      brand: "Sennheiser",
      image: "/headphone/Sennheiser Momentum 4 Wireless.jpg",
      bluetooth: "Bluetooth 5.2",
      battery: "60 hours",
      price: 349,
    },
    {
      title: "Sony WH-1000XM5",
      brand: "Sony",
      image: "/headphone/Sony WH-1000XM4 Wireless.jpg",
      bluetooth: "Bluetooth 5.2",
      battery: "30 hours",
      price: 399,
    },
    {
      title: "Bose Headphones 700",
      brand: "Bose",
      image: "/headphone/Bose Noise Cancelling Headphones 700.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "20 hours",
      price: 379,
    },
    {
      title: "Apple AirPods Max",
      brand: "Apple",
      image: "/headphone/Apple AirPods Max.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "20 hours",
      price: 549,
    },

    {
      title: "Jabra Elite 85h ",
      brand: "Jabra",
      image: "/headphone/Jabra Elite 85h Wireless.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "36 hours",
      price: 249,
    },
    {
      title: "Bose QuietComfort 35 II",
      brand: "Bose",
      image: "/headphone/Bose QuietComfort 35 II.jpg",
      bluetooth: "Bluetooth 4.1",
      battery: "20 hours",
      price: 299,
    },
    {
      title: "Anker Soundcore Space Q45 ",
      brand: "Anker",
      image: "/headphone/Anker Soundcore Space Q45 Wireless.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "50 hours",
      price: 149,
    },
    {
      title: "JBL Club One Wireless",
      brand: "JBL",
      image: "/headphone/JBL Club One Wireless.jpg",
      bluetooth: "Bluetooth 4.2",
      battery: "20 hours",
      price: 349,
    },
    {
      title: "Bang & Olufsen Beoplay H95",
      brand: "Bang & Olufsen",
      image: "/headphone/Bang & Olufsen Beoplay H95.jpg",
      bluetooth: "Bluetooth 5.1",
      battery: "38 hours",
      price: 799,
    },
    {
      title: "Focal Bathys Wireless",
      brand: "Focal",
      image: "/headphone/Focal Bathys Wireless.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "30 hours",
      price: 399,
    },
    {
      title: "Bowers & Wilkins PX7 S2",
      brand: "Bowers & Wilkins",
      image: "/headphone/Bowers & Wilkins PX7 S2.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "30 hours",
      price: 399,
    },
    {
      title: "Marshall Monitor II ANC ",
      brand: "Marshall",
      image: "/headphone/Marshall Monitor II ANC Wireless.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "30 hours",
      price: 349,
    },
    {
      title: "Shure AONIC 50 Wireless",
      brand: "Shure",
      image: "/headphone/Shure AONIC 50 Wireless.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "20 hours",
      price: 299,
    },
    {
      title: "AKG N700NC M2 Wireless",
      brand: "AKG",
      image: "/headphone/AKG N700NC M2 Wireless.jpg",
      bluetooth: "Bluetooth 4.2",
      battery: "20 hours",
      price: 299,
    },
    {
      title: "Plantronics BackBeat Go 810 ",
      brand: "Plantronics",
      image: "/headphone/Plantronics BackBeat Go 810 Wireless.jpg",
      bluetooth: "Bluetooth 4.1",
      battery: "28 hours",
      price: 149,
    },
    {
      title: "Skullcandy Crusher ANC ",
      brand: "Skullcandy",
      image: "/headphone/Skullcandy Crusher ANC Wireless.jpg",
      bluetooth: "Bluetooth 5.0",
      battery: "24 hours",
      price: 199,
    },
  ];
</script>

<div class="mt-[100px] px-6 py-4 space-y-6">
  <!-- Price Range -->
  <div class="bg-white rounded-lg shadow p-4 text-center">
    <h2 class="text-lg font-semibold mb-2">Price range</h2>
    <div class="flex items-center justify-between mb-2">
      <span>Minimum Price</span>
      <span>Maximum Price</span>
    </div>
    <input
      type="range"
      min="0"
      max="5000"
      bind:value={minPrice}
      class="w-full mb-1"
    />
    <div class="flex justify-between text-sm">
      <span>{minPrice}$</span>
      <span>{maxPrice}$</span>
    </div>
  </div>

  <!-- Products -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
    {#each earbudsAccessories as product}
      <ProductCard
        title={product.title}
        brand={product.brand}
        image={product.image}
        bluetooth={product.bluetooth}
        battery={product.battery}
        price={product.price}
      />
    {/each}
   
  </div>
</div>
