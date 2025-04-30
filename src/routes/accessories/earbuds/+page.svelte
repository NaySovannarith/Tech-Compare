<script lang="ts">
    import ProductCard from '$lib/components/EarbudsCard.svelte';
      import { Battery, Bluetooth } from 'lucide-svelte';


    let minPrice = 0;
    let maxPrice = 5000;
  
    const earbudsAccessories = [
      {
        title: 'EarFun Free Pro 3 Brown',
        brand: 'EarFun',
        image: '/earbud/EarFun Free Pro 3 Brown Black.jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '30 hours',
        price: 79
      },
      {
        title: 'Sony WF-1000XM4',
        brand: 'Sony',
        image: '/earbud/Sony_WF-1000XM4-removebg-preview.jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '32 hours',
        price: 279
      },
      {
        title: 'Sony WF-C500',
        brand: 'Sony',
        image: '/earbud/Sony WF-C500.jpg',
        bluetooth: 'Bluetooth 5.0',
        battery: '20 hours',
        price: 149
      },
      {
        title: 'EarFun Free Pro 3 White',
        brand: 'EarFun',
        image: '/earbud/EarFun Free Pro 3 White.jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '30 hours',
        price: 79
      },
      {
        title: 'JBL Tune 230NC TWS',
        brand: 'JBL',
        image: '/earbud/JBL Tune 230NC TWS.jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '40 hours',
        price: 99
      },
      {
        title: 'JBL Tune 130NC TWS',
        brand: 'JBL',
        image: '/earbud/EarFun Free Pro 3 Brown Black.jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '40 hours',
        price: 99
      },
      {
        title: 'Apple AirPods Pro (2nd gen)',
        brand: 'Apple',
        image: '/earbud/Apple AirPods Pro (2nd generation).jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '30 hours',
        price: 249
      },
      {
        title: 'Apple AirPods (3rd gen)',
        brand: 'Apple',
        image: '/earbud/Apple AirPods (3rd generation).jpg',
        bluetooth: 'Bluetooth 5.0',
        battery: '30 hours',
        price: 199
      },
      {
        title: 'Samsung Galaxy Buds2 Pro',
        brand: 'Samsung',
        image: '/earbud/Samsung Galaxy Buds2 Pro.jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '30 hours',
        price: 229
      },
      {
        title: 'Samsung Galaxy Buds Live',
        brand: 'Samsung',
        image: '/earbud/Samsung Galaxy Buds Live.jpg',
        bluetooth: 'Bluetooth 5.0',
        battery: '29 hours',
        price: 169
      },
     
      {
        title: 'Anker Soundcore Liberty 4',
        brand: 'Anker',
        image: '/earbud/Anker Soundcore Liberty 4.jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '28 hours',
        price: 149
      },
      {
        title: 'Anker Soundcore Life P3i',
        brand: 'Anker',
        image: '/earbud/Anker_Soundcore_Life_P3i-removebg-preview.jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '36 hours',
        price: 79
      },
      {
        title: 'Beats Fit Pro',
        brand: 'Beats',
        image: '/earbud/Beats Fit Pro.jpg',
        bluetooth: 'Bluetooth 5.0',
        battery: '30 hours',
        price: 199
      },
      {
        title: 'Beats Studio Buds+',
        brand: 'Beats',
        image: '/earbud/Beats Studio Buds+.jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '36 hours',
        price: 199
      },
      {
        title: 'Google Pixel Buds Pro',
        brand: 'Google',
        image: '/earbud/Google Pixel Buds Pro.jpg',
        bluetooth: 'Bluetooth 5.0',
        battery: '31 hours',
        price: 199
      },
      {
        title: 'Google Pixel Buds A-Series',
        brand: 'Google',
        image: '/earbud/Google Pixel Buds A-Series.jpg',
        bluetooth: 'Bluetooth 5.0',
        battery: '24 hours',
        price: 99
      },
      {
        title: 'OnePlus Buds Pro 2',
        brand: 'OnePlus',
        image: '/earbud/OnePlus Buds Pro 2.jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '38 hours',
        price: 179
      },
      {
        title: 'OnePlus Buds Z2',
        brand: 'OnePlus',
        image: '/earbud/OnePlus Buds Z2.jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '38 hours',
        price: 99
      },
      {
        title: 'Nothing Ear (2)',
        brand: 'Nothing',
        image: '/earbud/Nothing Ear (2).jpg',
        bluetooth: 'Bluetooth 5.3',
        battery: '36 hours',
        price: 149
      },
      {
        title: 'Nothing Ear (1)',
        brand: 'Nothing',
        image: '/earbud/Nothing Ear (1).jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '34 hours',
        price: 99
      },
      {
        title: 'Huawei FreeBuds Pro 2',
        brand: 'Huawei',
        image: '/earbud/Huawei FreeBuds Pro 2.jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '30 hours',
        price: 199
      },
      {
        title: 'Huawei FreeBuds SE 2',
        brand: 'Huawei',
        image: '/earbud/Huawei FreeBuds SE 2.jpg',
        bluetooth: 'Bluetooth 5.2',
        battery: '36 hours',
        price: 79
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
        {#each earbudsAccessories as product}
          <ProductCard
            title={product.title}
            brand={product.brand}
            image={product.image}
            bluetooth={product.bluetooth}
            battery={product.battery}
            price={product.price}
          />
        {/each}
       
      </div>
  </div>
  