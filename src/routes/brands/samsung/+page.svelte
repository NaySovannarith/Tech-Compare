<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';

  let minPrice = 0;
  let maxPrice = 5000;

  const samsungProducts = [
    {
      title: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy S24 Ultra.jpg',
      storage: '256GB',
      memory: '12GB',
      price: 1190
    },
    {
      title: 'Samsung Galaxy S24+',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy S24+.jpg',
      storage: '256GB',
      memory: '8GB',
      price: 990
    },
    {
      title: 'Samsung Galaxy S24',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy S24.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 790
    },
    {
      title: 'Samsung Galaxy Z Fold 5',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy Z Fold 5.jpg',
      storage: '512GB',
      memory: '12GB',
      price: 1790
    },
    {
      title: 'Samsung Galaxy Z Flip 5',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy Z Flip 5.jpg',
      storage: '256GB',
      memory: '8GB',
      price: 990
    },
    {
      title: 'Samsung Galaxy A54',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy A54.jpg',
      storage: '128GB',
      memory: '6GB',
      price: 490
    }
    ,
    {
      title: 'Samsung Galaxy A34',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy A34.jpg',
      storage: '128GB',
      memory: '6GB',
      price: 390
    },
    {
      title: 'Samsung Galaxy M54',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy M54.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 490
    },
    {
      title: 'Samsung Galaxy M34',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy M34.jpg',
      storage: '128GB',
      memory: '6GB',
      price: 390
    },
    {
      title: 'Samsung Galaxy F54',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy F54.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 490
    },
    {
      title: 'Samsung Galaxy F34',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy F34.jpg',
      storage: '128GB',
      memory: '6GB',
      price: 390
    }
    ,
    {
      title: 'Samsung Galaxy A14',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy A14.jpg',
      storage: '128GB',
      memory: '4GB',
      price: 290
    },
    {
      title: 'Samsung Galaxy M14',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy M14.jpg',
      storage: '128GB',
      memory: '4GB',
      price: 290
    },
    {
      title: 'Samsung Galaxy F14',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy F14.jpg',
      storage: '128GB',
      memory: '4GB',
      price: 290
    },
    {
      title: 'Samsung Galaxy A04s',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy A04s.jpg',
      storage: '64GB',
      memory: '4GB',
      price: 190
    },
    {
      title: 'Samsung Galaxy M04',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy M04.jpg',
      storage: '64GB',
      memory: '4GB',
      price: 190
    },
    {
      title: 'Samsung Galaxy F04',
      brand: 'Samsung',
      image: '/samsung/Samsung Galaxy F04.jpg',
      storage: '64GB',
      memory: '4GB',
      price: 190
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
      {#each samsungProducts as product}
        <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}
          storage={product.storage}
          memory={product.memory}
          price={product.price}
        />
      {/each}
      {#each samsungProducts as product}
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
