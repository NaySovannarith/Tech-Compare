<script lang="ts">
    import ProductCard from '$lib/components/CameraCard.svelte';
    import { Battery } from 'lucide-svelte';
    
  
    let minPrice = 0;
    let maxPrice = 5000;
  
    const camerasAccessories = [


      {
        title: 'Nikon Z400 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z400.jpg',
        resulution: '4K',
        battery: '1200mAh',
        price: 590
      },
      {
        title: 'Nikon Z200 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z200.jpg',
        resulution: '4K',
        battery: '1000mAh',
        price: 490
      },
      {
        title: 'Nikon Z100 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z100.jpg',
        resulution: '4K',
        battery: '800mAh',
        price: 390
      },
      {
        title: 'Nikon Z50 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z50.jpg',
        resulution: '4K',
        battery: '600mAh',
        price: 290
      },

      {
        title: 'Nikon Z600 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z600.jpg',
        resulution: '4K',
        battery: '1500mAh',
        price: 690
      },
      {
        title: 'Nikon Z400 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z400.jpg',
        resulution: '4K',
        battery: '1200mAh',
        price: 590
      },
      {
        title: 'Nikon Z200 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z200.jpg',
        resulution: '4K',
        battery: '1000mAh',
        price: 490
      },
      {
        title: 'Nikon Z100 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z100.jpg',
        resulution: '4K',
        battery: '800mAh',
        price: 390
      },
      {
        title: 'Nikon Z50 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z50.jpg',
        resulution: '4K',
        battery: '600mAh',
        price: 290
      },
      {
        title: 'Nikon Z30 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z30.jpg',
        resulution: '4K',
        battery: '500mAh',
        price: 190
      },
      {
        title: 'Nikon Z10 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z10.jpg',
        resulution: '4K',
        battery: '400mAh',
        price: 90
      },
      {
        title: 'Nikon Z1 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z1 series.png',
        resulution: '4K',
        battery: '300mAh',
        price: 90
      },
      {
        title: 'Nikon Z2 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z2.png',
        resulution: '4K',
        battery: '200mAh',
        price: 90
      },
      {
        title: 'Nikon Z3 series',
        brand: 'Nikon',
        image: '/camera/Nikon Z3.png',
        resulution: '4K',
        battery: '100mAh',
        price: 90
      },
  
    ];

  </script>
  
  <div class="mt-[100 px] px-6 py-4 space-y-6">
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
        {#each camerasAccessories as product}
          <ProductCard
            title={product.title}
            brand={product.brand}
            image={product.image}
            resulution={product.resulution}
            battery={product.battery}
            price={product.price}
          />
        {/each}
        
      </div>
  </div>
  