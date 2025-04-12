<script lang="ts">
    import ProductCard from '$lib/components/ProductCard.svelte';
  
    let minPrice = 0;
    let maxPrice = 5000;
  
    const huaweiProducts = [
      {
        title: 'huawei P60 series',
        brand: 'Huawei',
        image: '/huawei/huawei P60.jpg',
        storage: '128GB',
        memory: '8GB',
        price: 790
      },
        {
            title: 'huawei P50 series',
            brand: 'Huawei',
            image: '/huawei/huawei P50.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 690
        },
        {
            title: 'huawei P40 series',
            brand: 'Huawei',
            image: '/huawei/huawei P40.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 590
        },
        {
            title: 'huawei P30 series',
            brand: 'Huawei',
            image: '/huawei/huawei P30.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 490
        },
        {
            title: 'huawei P20 series',
            brand: 'Huawei',
            image: '/huawei/huawei P20.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 390
        },
        {
            title: 'huawei P10 series',
            brand: 'Huawei',
            image: '/huawei/huawei P10.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        {
            title: 'huawei P9 series',
            brand: 'Huawei',
            image: '/huawei/huawei P9.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 190
        },
        {
            title: 'huawei P8 series',
            brand: 'Huawei',
            image: '/huawei/huawei P8.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 90
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
        {#each huaweiProducts as product}
          <ProductCard
            title={product.title}
            brand={product.brand}
            image={product.image}
            storage={product.storage}
            memory={product.memory}
            price={product.price}
          />
        {/each}
        {#each huaweiProducts as product}
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
  