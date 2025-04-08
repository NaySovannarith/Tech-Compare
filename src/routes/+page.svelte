<script lang="ts">
    import BrandBar from '$lib/components/BrandBar.svelte';
    import ProductCard from '$lib/components/ProductCard.svelte';
    import { products} from '$lib/data/products';
  </script>
  
  <!-- Hero Section -->
  <div class="flex justify-center  h-screen">
    <img src="/images/11.png" alt="home" style="width: 1000px; height: 400px; object-fit: cover;" />


  </div>

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
  