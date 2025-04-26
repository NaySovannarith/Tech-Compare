<script lang="ts">
  import ProductCard from '$lib/components/EarbudsCard.svelte';
    import { Battery, Bluetooth } from 'lucide-svelte';

  let minPrice = 0;
  let maxPrice = 5000;

  const earbudsAccessories = [
    {
      title: 'Sony WH-1000XM4 Wireless',
      brand: 'Sony',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '30 hours',
      price: 349
    },
    {
      title: 'Apple AirPods Max (2nd generation)',
      brand: 'Apple',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.3',
      battery: '20 hours',
      price: 599
    },
    {
      title: 'Sennheiser Momentum 4 Wireless',
      brand: 'Sennheiser',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.2',
      battery: '60 hours',
      price: 349
    },
    {
      title: 'Sony WH-1000XM5 Wireless',
      brand: 'Sony',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.2',
      battery: '30 hours',
      price: 399
    },
    {
      title: 'Bose Noise Cancelling Headphones 700',
      brand: 'Bose',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '20 hours',
      price: 379
    },
    {
      title: 'Apple AirPods Max',
      brand: 'Apple',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '20 hours',
      price: 549
    },
    
    {
      title: 'Jabra Elite 85h Wireless',
      brand: 'Jabra',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '36 hours',
      price: 249
    },
    {
      title: 'Bose QuietComfort 35 II',
      brand: 'Bose',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 4.1',
      battery: '20 hours',
      price: 299
    },
    {
      title: 'Anker Soundcore Space Q45 Wireless',
      brand: 'Anker',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '50 hours',
      price: 149
    },
    {
      title: 'JBL Club One Wireless',
      brand: 'JBL',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 4.2',
      battery: '20 hours',
      price: 349
    },
    {
      title: 'Bang & Olufsen Beoplay H95',
      brand: 'Bang & Olufsen',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.1',
      battery: '38 hours',
      price: 799
    },
    {
      title: 'Focal Bathys Wireless',
      brand: 'Focal',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '30 hours',
      price: 399
    },
    {
      title: 'Bowers & Wilkins PX7 S2',
      brand: 'Bowers & Wilkins',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '30 hours',
      price: 399
    },
    {
      title: 'Marshall Monitor II ANC Wireless',
      brand: 'Marshall',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '30 hours',
      price: 349
    },
    {
      title: 'Shure AONIC 50 Wireless',
      brand: 'Shure',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '20 hours',
      price: 299
    },
    {
      title: 'AKG N700NC M2 Wireless',
      brand: 'AKG',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 4.2',
      battery: '20 hours',
      price: 299
    },
    {
      title: 'Plantronics BackBeat Go 810 Wireless',
      brand: 'Plantronics',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 4.1',
      battery: '28 hours',
      price: 149
    },
    {
      title: 'Skullcandy Crusher ANC Wireless',
      brand: 'Skullcandy',
      image: '/Headphone/',
      bluetooth: 'Bluetooth 5.0',
      battery: '24 hours',
      price: 199
    },
  
  ];

</script>

<div class="mt-[80px] px-6 py-4 space-y-6">
  <!-- Price Range -->
  <div class="bg-white rounded-lg shadow p-4 text-center">
    <h2 class="text-lg font-semibold mb-2">Price range</h2>
    <div class="flex items-center justify-between mb-2">
      <span>Minimum Price</span>
      <span>Maximum Price</span>
    </div>
    <input type="range" min="0" max="5000" bind:value={minPrice} class="w-full mb-1" />
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
