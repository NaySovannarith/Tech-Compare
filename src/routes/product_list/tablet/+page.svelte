<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';

  let minPrice = 0;
  let maxPrice = 5000;

  const iphoneProducts = [
    {
      title: 'Apple iPad Pro 12.9"',
      brand: 'Apple',
      image: '/images/tablet/Apple iPad Pro 12.9.jpg ',
      storage: '128GB',
      memory: '8GB',
      price: 1090
    },
    {
      title: 'Samsung Galaxy Tab S10 Ultra',
      brand: 'Samsung',
      image: '/images/tablet/ipad1.jpg',
      storage: '256GB',
      memory: '12GB',
      price: 1190
    },
    {
      title: 'Samsung Galaxy Tab S10+',
      brand: 'Samsung',
      image: '/images/tablet/Samsung Galaxy Tab S10+.jpg',
      storage: '256GB',
      memory: '12GB',
      price: 990
    },
    {
      title: 'Samsung Galaxy Tab S10',
      brand: 'Samsung',
      image: '/images/tablet/Apple iPad Pro 11.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 790
    },
    {
      title: 'Apple iPad Pro 11"',
      brand: 'Apple',
      image: '/images/tablet/Apple iPad Pro 11+.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 890
    },
    {
      title: 'Apple iPad Pro 11" (2021)',
      brand: 'Apple',
      image: '/images/tablet/Apple iPad Pro 11 2021.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 790
    },
    {
      title: 'Samsung Galaxy Tab S9 Ultra',
      brand: 'Samsung',
      image: '/images/tablet/Samsung Galaxy Tab S9 Ultra.jpg',
      storage: '512GB',
      memory: '12GB',
      price: 1790
    },
    {
      title: 'Samsung Galaxy Tab S9+',
      brand: 'Samsung',
      image: '/images/tablet/Samsung Galaxy Tab S9+.jpg',
      storage: '256GB',
      memory: '12GB',
      price: 990
    },
    {
      title: 'Samsung Galaxy Tab S9',
      brand: 'Samsung',
      image: '/images/tablet/Samsung Galaxy Tab S9.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 790
    },
    {
      title: 'Apple iPad Air 5th Gen',
      brand: 'Apple',
      image: '/images/tablet/Apple iPad Air 5th Gen.jpg',
      storage: '64GB',
      memory: '8GB',
      price: 690
    },
    {
      title: 'Apple iPad 10th Gen',
      brand: 'Apple',
      image: '/images/tablet/Apple iPad 10th Gen.jpg',
      storage: '64GB',
      memory: '4GB',
      price: 490
    },
    {
      title: 'Apple iPad Mini 6th Gen',
      brand: 'Apple',
      image: '/images/tablet/Apple iPad Mini 6th Gen.jpg',
      storage: '64GB',
      memory: '4GB',
      price: 590
    },
    {
      title: 'Apple iPad 9th Gen',
      brand: 'Apple',
      image: '/images/tablet/Apple iPad 9th Gen.jpg',
      storage: '64GB',
      memory: '3GB',
      price: 390
    },
    {
      title: 'Apple iPad 8th Gen',
      brand: 'Apple',
      image: '/images/tablet/Samsung Galaxy Tab S10+.jpg',
      storage: '32GB',
      memory: '3GB',
      price: 290
    }
      
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
      {#each iphoneProducts as product}
        <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}
          storage={product.storage}
          memory={product.memory}
          price={product.price}
        />
      {/each}
      {#each iphoneProducts as product}
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
