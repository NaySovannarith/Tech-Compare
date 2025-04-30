<script lang="ts">
  import ProductCard from '$lib/components/TvCard.svelte';
    import type { Cpu } from 'lucide-svelte';

  let minPrice = 0;
  let maxPrice = 5000;

  const tvProducts = [
    {
      title: 'Samsung S90D',
      brand: 'Samsung',
      image: '/Tv/Samsung S90D.jpg',
      display: 'OLED',
      size: '55"',      
      price: 2490
    },
    {
      title: 'LG C2',
      brand: 'LG',
      image: '/Tv/LG C2.jpg',
      display: 'OLED',
      size: '65"',
      price: 2990
    },
    {
      title: 'Sony A80J',
      brand: 'Sony',
      image: '/Tv/Sony A80J.jpg',
      display: 'OLED',
      size: '55"',
      price: 2490
    },
    {
      title: 'TCL 6-Series R635',
      brand: 'TCL',
      image: '/Tv/TCL 6-Series R635.jpg',
      display: 'QLED',
      size: '65"',
      price: 1690
    },
    {
      title: 'Samsung QN90A',
      brand: 'Samsung',
      image: '/Tv/Samsung QN90A.jpg',
      display: 'QLED',
      size: '55"',
      price: 1990
    },
    {
      title: 'LG NanoCell 90',
      brand: 'LG',
      image: '/Tv/LG NanoCell 90.jpg',
      display: 'NanoCell',
      size: '65"',
      price: 1790
    },
    {
      title: 'Sony X90J',
      brand: 'Sony',
      image: '/Tv/Sony X90J.jpg',
      display: 'LED',
      size: '55"',
      price: 1490
    },
    {
      title: 'Vizio P-Series Quantum X',
      brand: 'Vizio',
      image: '/Tv/Vizio P-Series Quantum X.jpg',
      display: 'QLED',
      size: '65"',
      price: 1990
    },
    {
      title: 'Hisense U8G',
      brand: 'Hisense',
      image: '/Tv/Hisense U8G.jpg',
      display: 'QLED',
      size: '55"',
      price: 1290
    },
    {
      title: 'TCL 5-Series S546',
      brand: 'TCL',
      image: '/Tv/TCL 5-Series S546.jpg',
      display: 'QLED',
      size: '65"',
      price: 1190
    },
    {
      title: 'Samsung TU8000',
      brand: 'Samsung',
      image: '/Tv/Samsung TU8000.jpg',
      display: 'LED',
      size: '55"',
      price: 990
    },
    {
      title: 'LG UN7300',
      brand: 'LG',
      image: '/Tv/LG UN7300.jpg',
      display: 'LED',
      size: '65"',
      price: 890
    },
    {
      title: 'Sony X750H',
      brand: 'Sony',
      image: '/Tv/Sony X750H.jpg',
      display: 'LED',
      size: '55"',
      price: 1190
    },
    {
      title: 'Vizio V-Series V505-H19',
      brand: 'Vizio',
      image: '/Tv/Vizio V-Series V505-H19.jpg',
      display: 'LED',
      size: '50"',
      price: 790
    },
    {
      title: 'Hisense H6570G',
      brand: 'Hisense',
      image: '/Tv/Hisense H6570G.jpg',
      display: 'LED',
      size: '55"',
      price: 690
    },
    {
      title: 'TCL 4-Series S435',
      brand: 'TCL',
      image: '/Tv/TCL 4-Series S435.jpg',
      display: 'LED',
      size: '50"',
      price: 590
    },
    {
      title: 'Samsung Q60A',
      brand: 'Samsung',
      image: '/Tv/Samsung Q60A.jpg',
      display: 'QLED',
      size: '55"',
      price: 1290
    },
    {
      title: 'LG QNED80',
      brand: 'LG',
      image: '/Tv/LG QNED80.jpg',
      display: 'QNED',
      size: '65"',
      price: 1490
    },
    {
      title: 'Sony A90J',
      brand: 'Sony',
      image: '/Tv/Sony A90J.jpg',
      display: 'OLED',
      size: '55"',
      price: 2990
    },
    {
      title: 'TCL 8-Series Q825',
      brand: 'TCL',
      image: '/Tv/TCL 8-Series Q825.jpg',
      display: 'QLED',
      size: '65"',
      price: 2490
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
    <input type="range" min="0" max="5000" bind:value={minPrice} class="w-full mb-1" />
    <div class="flex justify-between text-sm">
      <span>{minPrice}$</span>
      <span>{maxPrice}$</span>
    </div>
  </div>

  <!-- Products -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
      {#each tvProducts as product}
        <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}
          display={product.display}
          size={product.size}
          price={product.price}
        />
      {/each}
      
    </div>
</div>
