<script lang="ts">
  import ProductCard from '$lib/components/ComputerCard.svelte';
    import type { Cpu } from 'lucide-svelte';

  let minPrice = 0;
  let maxPrice = 5000;

  const computerProducts = [
    {
      title: 'MacBook Pro 16',
      brand: 'Apple',
      image: '',
      cpu: 'M1 Pro',
      ram: '16GB',
      price: 2490
      
    },
    {
      title: 'Dell XPS 15',
      brand: 'Dell',
      image: '',
      cpu: 'i7-12700H',
      ram: '32GB',
      price: 2490
    },
    {
      title: 'Lenovo ThinkPad X1 Carbon',
      brand: 'Lenovo',
      image: '',
      cpu: 'i7-1260P',
      ram: '16GB',
      price: 1990
    },
    {
      title: 'HP Spectre x360 14',
      brand: 'HP',
      image: '',
      cpu: 'i7-1255U',
      ram: '16GB',
      price: 1690
    },
    {
      title: 'MacBook Pro 14',
      brand: 'Apple',
      image: '',
      cpu: 'M1 Pro',
      ram: '16GB',
      price: 1990
    },
    {
      title: 'MacBook Air 13',
      brand: 'Apple',
      image: '',
      cpu: 'M1',
      ram: '8GB',
      price: 1290
    },
    {
      title: 'MacBook Air 15',
      brand: 'Apple',
      image: '',
      cpu: 'M2',
      ram: '8GB',
      price: 1490
    },
    {
      title: 'Dell XPS 13',
      brand: 'Dell',
      image: '',
      cpu: 'i7-1250U',
      ram: '16GB',
      price: 1490
    },
    
    {
      title: 'Lenovo ThinkPad T14s',
      brand: 'Lenovo',
      image: '',
      cpu: 'i7-1265U',
      ram: '16GB',
      price: 1790
    },
    
    {
      title: 'HP Envy 16',
      brand: 'HP',
      image: '',
      cpu: 'i7-12700H',
      ram: '32GB',
      price: 2290
    },
    {
      title: 'Asus ZenBook 14',
      brand: 'Asus',
      image: '',
      cpu: 'i7-1260P',
      ram: '16GB',
      price: 1390
    },
    {
      title: 'Asus ROG Zephyrus G14',
      brand: 'Asus',
      image: '',
      cpu: 'Ryzen 9 6900HS',
      ram: '32GB',
      price: 2490
    },
    {
      title: 'Acer Swift 3',
      brand: 'Acer',
      image: '',
      cpu: 'i7-1260P',
      ram: '16GB',
      price: 1190
    },
    {
      title: 'Acer Predator Helios 300',
      brand: 'Acer',
      image: '',
      cpu: 'i7-12700H',
      ram: '32GB',
      price: 1990
    },
    {
      title: 'Microsoft Surface Laptop 4',
      brand: 'Microsoft',
      image: '',
      cpu: 'i7-1185G7',
      ram: '16GB',
      price: 1490
    },
    {
      title: 'Microsoft Surface Book 3',
      brand: 'Microsoft',
      image: '',
      cpu: 'i7-1065G7',
      ram: '32GB',
      price: 2490
    }    
,
    {
      title: 'Razer Blade 15',
      brand: 'Razer',
      image: '',
      cpu: 'i7-12800H',
      ram: '32GB',
      price: 2490
    },
    {
      title: 'Razer Blade Stealth 13',
      brand: 'Razer',
      image: '',
      cpu: 'i7-1165G7',
      ram: '16GB',
      price: 1490
    },
    {
      title: 'LG Gram 17',
      brand: 'LG',
      image: '',
      cpu: 'i7-1260P',
      ram: '16GB',
      price: 1690
    },
    {
      title: 'LG Gram 14',
      brand: 'LG',
      image: '',
      cpu: 'i7-1260P',
      ram: '16GB',
      price: 1390
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
      {#each computerProducts as product}
        <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}
          cpu={product.cpu}
          ram={product.ram}
          price={product.price}
        />
      {/each}
      {#each computerProducts as product}
        <ProductCard
          title={product.title}
          brand={product.brand}
          image={product.image}
          cpu={product.cpu}
          ram={product.ram}
          price={product.price}
        />
      {/each}
    </div>
</div>
