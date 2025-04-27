<script lang="ts">
    import ProductCard from '$lib/components/PowerbankCard.svelte';
    import { brands } from '$lib/data/logo';

  
    let minPrice = 0;
    let maxPrice = 5000;
  
    const powerbankAccessories = [
      {
        title: 'Nimble Champ (Series 2)',
        brand: 'Nimble',
        image: '/powerbank/Nimble Champ (Series 2).jpg',
        wattage: '30W',
        battery: '10,000mAh',
        price: 49.95
    
      },
        {
            title: 'Zendure SuperTank Pro',
            brand: 'Zendure',
            image: '/powerbank/Zendure SuperTank Pro.jpg',
            wattage: '100W',
            battery: '26,800mAh',
            price: 199.99
        },
        {
            title: 'Anker PowerCore III Elite',
            brand: 'Anker',
            image: '/powerbank/Anker PowerCore III Elite.jpg',
            wattage: '60W',
            battery: '26,800mAh',
            price: 79.99
        },
        {
            title: 'RAVPower PD Pioneer',
            brand: 'RAVPower',
            image: '/powerbank/Nimble Champ (Series 2).jpg',
            wattage: '60W',
            battery: '20,000mAh',
            price: 49.99
        },
        {
            title: 'Mophie Powerstation Plus XL',
            brand: 'Mophie',
            image: '/powerbank/Mophie Powerstation Plus XL.jpg',
            wattage: '18W',
            battery: '20,000mAh',
            price: 69.95
        },
        {
            title: 'Zendure A2 Portable Charger',
            brand: 'Zendure',
            image: '/powerbank/Zendure A2 Portable Charger.jpg',
            wattage: '12W',
            battery: '6,700mAh',
            price: 39.99
        },
        {
            title: 'Aukey  Power Bank with PD 3.0',
            brand: 'Aukey',
            image: '/powerbank/Aukey  Power Bank with PD 3.0.jpg',
            wattage: '18W',
            battery: '20,000mAh',
            price: 39.99
        },
        {
            title: 'RAVPower with PD 3.0',
            brand: 'RAVPower',
            image: '/powerbank/RAVPower with PD 3.0.jpg',
            wattage: '30W',
            battery: '26,800mAh',
            price: 59.99
        },
        {
            title: 'Zendure SuperMini  ',
            brand: 'Zendure',
            image: '/powerbank/Zendure SuperMini .jpg',
            wattage: '18W',
            battery: '10,000mAh',
            price: 39.99
        },
        {
            title: 'Anker PowerCore Slim ',
            brand: 'Anker',
            image: '/powerbank/Anker PowerCore Slim.jpg',
            wattage: '12W',
            battery: '10,000mAh',
            price: 29.99
        },
        {
            title: 'Mophie Powerstation Wireless XL',
            brand: 'Mophie',
            image: '/powerbank/Mophie Powerstation Wireless XL.jpg',
            wattage: '10W',
            battery: '20,000mAh',
            price: 79.95
        },
        {
            title: 'Aukey with PD 3.0',
            brand: 'Aukey',
            image: '/powerbank/Aukey with PD 3.0.jpg',
            wattage: '18W',
            battery: '10,000mAh',
            price: 29.99
        },
        {
            title: 'RAVPower with PD 3.0',
            brand: 'RAVPower',
            image: '/powerbank/RAVPower with PD 3.0.jpg',
            wattage: '18W',
            battery: '10,000mAh',
            price: 29.99
        },

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
        {#each powerbankAccessories as product}
          <ProductCard
            title={product.title}
            brand={product.brand}
            image={product.image}
            battery={product.battery}
            wattage={product.wattage}
            price={product.price}
          />
        {/each}
        {#each powerbankAccessories as product}
          <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}	
          battery={product.battery}
          wattage={product.wattage}
          price={product.price}
          />
        {/each}
      </div>
  </div>
  