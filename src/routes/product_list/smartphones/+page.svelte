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
      title: 'Samsung Galaxy M14',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+M14',
      storage: '128GB',
      memory: '4GB',
      price: 290
    },
    {
      title: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+S24+Ultra',
      storage: '256GB',
      memory: '12GB',
      price: 1190
    },
    {
      title: 'Samsung Galaxy S24+',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+S24+Plus',
      storage: '256GB',
      memory: '8GB',
      price: 990
    },
    {
      title: 'Samsung Galaxy S24',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+S24',
      storage: '128GB',
      memory: '8GB',
      price: 790
    },
    {
      title: 'Samsung Galaxy Z Fold 5',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+Z+Fold+5',
      storage: '512GB',
      memory: '12GB',
      price: 1790
    },
    {
      title: 'Samsung Galaxy Z Flip 5',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+Z+Flip+5',
      storage: '256GB',
      memory: '8GB',
      price: 990
    },
    {
      title: 'Samsung Galaxy A54',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+A54',
      storage: '128GB',
      memory: '6GB',
      price: 490
    },
    {
      title: 'Samsung Galaxy A34',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+A34',
      storage: '128GB',
      memory: '6GB',
      price: 390
    },
    {
      title: 'Samsung Galaxy A14',
      brand: 'Samsung',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Samsung+A14',
      storage: '128GB',
      memory: '4GB',
      price: 290
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
      {
          title: 'iPhone 11 series',
          brand: 'Apple',
          image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+11',
          storage: '128GB',
          memory: '4GB',
          price: 590
      },
      {
          title: 'iPhone SE series',
          brand: 'Apple',
          image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+SE',
          storage: '64GB',
          memory: '3GB',
          price: 490
      },
      {
          title: 'iPhone 13 series',
          brand: 'Apple',
          image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+13',
          storage: '128GB',
          memory: '6GB',
          price: 690
      },
      {
          title: 'iPhone 14 series',
          brand: 'Apple',
          image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+14',
          storage: '128GB',
          memory: '6GB',
          price: 790
      }
      ,
      {
            title: 'vivo Y100 Pro',
            brand: 'Vivo',
            image: 'https://dummyimage.com/150x200/ccc/000&text=Y100+Pro',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        
      {
      title: 'google Pixel 3 series',
      brand: 'Google',
      image: 'https://dummyimage.com/150x200/ccc/000&text=Pixel+3',
      storage: '128GB',
      memory: '8GB',
      price: 290
    },

      {
          title: 'iPhone 14 Plus series',
          brand: 'Apple',
          image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+14+Plus',
          storage: '128GB',
          memory: '6GB',
          price: 890
      },
      {
          title: 'iPhone 14 Pro series',
          brand: 'Apple',
          image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+14+Pro',
          storage: '128GB',
          memory: '6GB',
          price: 990
      },
      {
          title: 'iPhone 14 Pro Max series',
          brand: 'Apple',
          image: 'https://dummyimage.com/150x200/ccc/000&text=iPhone+14+Pro+Max',
          storage: '128GB',
          memory: '6GB',
          price: 1090
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
