<script lang="ts">
    import ProductCard from '$lib/components/ProductCard.svelte';
  
    let minPrice = 0;
    let maxPrice = 5000;
  
    const vivoProducts = [
      {
        title: 'vivo X90 Pro',
        brand: 'Vivo',
        image: 'https://dummyimage.com/150x200/ccc/000&text=X90+Pro',
        storage: '256GB',
        memory: '12GB',
        price: 990
      },
        {
            title: 'vivo X90',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=X90',
            storage: '256GB',
            memory: '8GB',
            price: 790
        },
        {
            title: 'vivo V27 Pro',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=V27+Pro',
            storage: '256GB',
            memory: '8GB',
            price: 690
        },
        {
            title: 'vivo V27',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=V27',
            storage: '128GB',
            memory: '8GB',
            price: 590
        },
        {
            title: 'vivo V25 Pro',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=V25+Pro',
            storage: '256GB',
            memory: '8GB',
            price: 490
        },
        {
            title: 'vivo V25',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=V25',
            storage: '128GB',
            memory: '8GB',
            price: 390
        },
        {
            title: 'vivo Y100 Pro',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=Y100+Pro',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        {
            title: 'vivo Y100',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=Y100',
            storage: '128GB',
            memory: '6GB',
            price: 290
        },
        {
            title: 'vivo Y200',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=Y200',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        {
            title: 'vivo Y100e',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=Y100e',
            storage: '128GB',
            memory: '6GB',
            price: 290
        }
        ,
        {
            title: 'vivo Y200e',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=Y200e',
            storage: '128GB',
            memory: '6GB',
            price: 290
        },
        {
            title: 'vivo Y100i',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=Y100i',
            storage: '128GB',
            memory: '6GB',
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
  