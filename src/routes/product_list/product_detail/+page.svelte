<script lang="ts">
    import ProductCard from '$lib/components/ProductCard.svelte';
  
    let minPrice = 0;
    let maxPrice = 5000;
  
    const iphoneProducts = [
      {
        title: 'iPhone 16 series',
        brand: 'Apple',
        image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+16',
        storage: '128GB',
        memory: '8GB',
        price: 790
      },
      {
        title: 'iPhone 15 series',
        brand: 'Apple',
        image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+15',
        storage: '128GB',
        memory: '6GB',
        price: 690
      },
      {
        title: 'iPhone 12 series',
        brand: 'Apple',
        image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone12',
        storage: '128GB',
        memory: '6GB',
        price: 690
      }
        ,
        
    ];

  </script>
  
  <div class="px-6 mt-[80px] py-4 space-y-6">
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
  