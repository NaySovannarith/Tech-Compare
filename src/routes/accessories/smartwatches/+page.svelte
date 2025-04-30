<script lang="ts">
  import ProductCard from '$lib/components/SmartwatchCard.svelte';

  let minPrice = 0;
  let maxPrice = 5000;

  const smartwatchesProducts = [
    {
      title: 'Apple Watch Series 10',
      brand: 'Apple',
      image: '/smartwatch/Apple Watch Series 10.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '18 hours',
      price: 790
    },
    {
      title: 'Samsung Galaxy Watch 5 Pro',
      brand: 'Samsung',
      image: '/smartwatch/Samsung Galaxy Watch 5 Pro.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '80 hours',
      price: 590
    },
    {
      title: 'Garmin Fenix 7X Solar',
      brand: 'Garmin',
      image: '/smartwatch/Garmin Fenix 7X Solar.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '28 days',
      price: 990
    },
    {
      title: 'Apple Watch Series 9',
      brand: 'Apple',
      image: '/smartwatch/Apple Watch Series 9.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '18 hours',
      price: 690
    },
    {
      title: 'Apple Watch Ultra 2',
      brand: 'Apple',
      image: '/smartwatch/Apple Watch Ultra 2.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '36 hours',
      price: 1090
    },
    {
      title: 'Samsung Galaxy Watch 6 Classic',
      brand: 'Samsung',
      image: '/smartwatch/Samsung Galaxy Watch 6 Classic.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '40 hours',
      price: 490
    },
    {
      title: 'Samsung Galaxy Watch 6',
      brand: 'Samsung',
      image: '/smartwatch/Samsung Galaxy Watch 6.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '40 hours',
      price: 390
    },
    
    {
      title: 'Garmin Venu 3',
      brand: 'Garmin',
      image: '/smartwatch/Garmin Venu 3.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '14 days',
      price: 490
    },
    {
      title: 'Garmin Forerunner 265',
      brand: 'Garmin',
      image: '/smartwatch/Garmin Forerunner 265.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '13 days',
      price: 390
    },
    {
      title: 'Fitbit Sense 2',
      brand: 'Fitbit',
      image: '/smartwatch/Fitbit Sense 2.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '6 days',
      price: 290
    },
    {
      title: 'Fitbit Versa 4',
      brand: 'Fitbit',
      image: '/smartwatch/Fitbit Versa 4.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '6 days',
      price: 190
    },
    {
      title: 'Amazfit GTR 4',
      brand: 'Amazfit',
      image: '/smartwatch/Amazfit GTR 4.jpg',
      functions : 'GPS,Heatlh check ....',
      battery: '14 days',
      price: 290
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
      {#each smartwatchesProducts as product}
        <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}
          functions={product.functions}
          battery={product.battery}
          price={product.price}
        />
      {/each}
     
    </div>
</div>
