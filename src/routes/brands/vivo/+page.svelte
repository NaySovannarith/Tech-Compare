<script lang="ts">
    import ProductCard from '$lib/components/ProductCard.svelte';
  
    let minPrice = 0;
    let maxPrice = 5000;
  
    const vivoProducts = [
      {
        title: 'vivo X90 Pro',
        brand: 'Vivo',
        image: '/vivo/vivo X90 Pro.jpg',
        storage: '256GB',
        memory: '12GB',
        price: 990
      },
        {
            title: 'vivo X90',
            brand: 'Vivo',
            image: '/vivo/vivo X90.jpg',
            storage: '256GB',
            memory: '8GB',
            price: 790
        },
        {
            title: 'vivo V27 Pro',
            brand: 'Vivo',
            image: '/vivo/vivo V27 Pro.jpg',
            storage: '256GB',
            memory: '8GB',
            price: 690
        },
        {
            title: 'vivo V27',
            brand: 'Vivo',
            image: '/vivo/vivo V27.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 590
        },
        {
            title: 'vivo V25 Pro',
            brand: 'Vivo',
            image: '/vivo/vivo V25 Pro.jpg',
            storage: '256GB',
            memory: '8GB',
            price: 490
        },
        {
            title: 'vivo V25',
            brand: 'Vivo',
            image: '/vivo/vivo V25.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 390
        },
        {
            title: 'vivo Y100 Pro',
            brand: 'Vivo',
            image: '/vivo/vivo Y100 Pro.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        {
            title: 'vivo Y100',
            brand: 'Vivo',
            image: '/vivo/vivo Y100.jpg',
            storage: '128GB',
            memory: '6GB',
            price: 290
        },
        {
            title: 'vivo Y200',
            brand: 'Vivo',
            image: '/vivo/vivo Y200.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        {
            title: 'vivo Y100e',
            brand: 'Vivo',
            image: '/vivo/vivo Y100e.jpg',
            storage: '128GB',
            memory: '6GB',
            price: 290
        }
        ,
        {
            title: 'vivo Y200e',
            brand: 'Vivo',
            image: '/vivo/vivo Y200e.jpg',
            storage: '128GB',
            memory: '6GB',
            price: 290
        },
        {
            title: 'vivo Y100i',
            brand: 'Vivo',
            image: '/vivo/vivo Y100i.jpg',
            storage: '128GB',
            memory: '6GB',
            price: 290
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
        {#each vivoProducts as product}
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
  