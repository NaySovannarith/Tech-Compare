<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';
  

  let minPrice = 0;
  let maxPrice = 5000;

  const googleProducts = [
    {
      title: 'google Pixel 8 series',
      brand: 'Google',
      image: '/google/google Pixel 8.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 790
    },
    {
      title: 'google Pixel 7 series',
      brand: 'Google',
      image: '/google/google Pixel 7.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 690
    },
    {
      title: 'google Pixel 6 series',
      brand: 'Google',
      image: '/google/google Pixel 6.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 590
    },
    {
      title: 'google Pixel 5 series',
      brand: 'Google',
      image: '/google/google Pixel 5.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 490
    },
    {
      title: 'google Pixel 4 series',
      brand: 'Google',
      image: '/google/google Pixel 4.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 390
    },
    {
      title: 'google Pixel 3 series',
      brand: 'Google',
      image: '/google/google Pixel 3.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 290
    },
    {
      title: 'google Pixel 2 series',
      brand: 'Google',
      image: '/google/google Pixel 2.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 190
    },
    {
      title: 'google Pixel 1 series',
      brand: 'Google',
      image: '/google/google Pixel 1.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 90
    }
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
      {#each googleProducts as product}
        <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}
          storage={product.storage}
          memory={product.memory}
          price={product.price}
        />
      {/each}
     
    </div>
</div>
