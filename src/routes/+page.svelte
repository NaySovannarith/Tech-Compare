<script lang="ts">
  import BrandBar from '$lib/components/BrandBar.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { products } from '$lib/data/products';
</script>

<!-- Horizontally scrollable image section -->
<div class="w-full overflow-x-auto hide-scrollbar mt-[80px]"> <!-- Add margin-top to push the images down -->
  <div class="flex px-4 py-6 relative w-max">
    <!-- Left hidden image -->
    <img src="/images/11.png" alt="Phone 1" class="h-[400px] w-[1000px] object-cover flex-shrink-0 transform -translate-x-[25%]" />
    
    <!-- Center image (middle image stays visible) -->
    <img src="/images/side.jpg" alt="Phone 2" class="h-[400px] w-[1000px] object-cover flex-shrink-0" />
    
    <!-- Right hidden image -->
    <img src="/images/16.png" alt="Phone 3" class="h-[400px] w-[1000px] object-cover flex-shrink-0 transform translate-x-[25%]" />
  </div>
</div>

<!-- Product Grid -->
<div class="min-h-screen bg-[#e3eadd] p-6">
  <BrandBar />

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
    {#each products as product}
      <ProductCard {...product} />
    {/each}
  </div>

  <div class="mt-6 text-center">
    <button class="bg-white px-4 py-2 rounded-md shadow hover:bg-gray-200">View All Phones</button>
  </div>
</div>

<style>
  /* Hide the scrollbars */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
</style>
