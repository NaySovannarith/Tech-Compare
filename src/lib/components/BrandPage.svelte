<script lang="ts">
  import { onMount, afterUpdate, tick } from 'svelte';
  import ProductCard from './ProductCard.svelte';
  import { productApi, type Product } from '$lib/api/productApi';

  export let brandName: string;

  let products: Product[] = [];
  let loading = true;
  let error = '';
  let minPrice = 0;
  let maxPrice = 5000;
  let currentPage = 1;
  let totalPages = 1;
  let previousBrand = ''; // track to detect brand change

  // Load products initially
  onMount(() => {
    loadProducts();
    previousBrand = brandName;
  });

  //  React to brand change when navigating between pages (sveltekit does not reload component)
  afterUpdate(async () => {
    if (brandName !== previousBrand) {
      previousBrand = brandName;
      currentPage = 1;
      await tick(); // wait for reactivity to settle
      await loadProducts();
    }
  });

  //  Reactive filtered products
  $: filteredProducts = products.filter(
    product => product.price >= minPrice && product.price <= maxPrice
  );

  async function loadProducts() {
    try {
      loading = true;
      error = '';
      const response = await productApi.getProductsByBrand(brandName, currentPage);
      products = response.data;
      totalPages = response.last_page;

      if (products.length > 0) {
        const prices = products.map(p => p.price);
        minPrice = 0;
        maxPrice = Math.max(...prices);
      } else {
        minPrice = 0;
        maxPrice = 5000;
      }
    } catch (err) {
      console.error('Error loading products:', err);
      error = 'Failed to load products. Please try again later.';
    } finally {
      loading = false;
    }
  }

  async function goToPage(page: number) {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      currentPage = page;
      await loadProducts();
    }
  }

  function getProductImage(product: Product): string {
    return product.image_url || product.image || '/placeholder-phone.jpg';
  }

  function getStorage(product: Product): string {
    return product.storage || 'N/A';
  }

  function getMemory(product: Product): string {
    return product.memory || product.ram || 'N/A';
  }
</script>

<div class="mt-[100px] px-6 py-4 space-y-6">
  <!-- Brand Header -->
  <div class="text-center mb-8">
    <h1 class="text-3xl font-bold text-[#00332e] capitalize">{brandName} Products</h1>
    <p class="text-gray-600 mt-2">Discover the latest {brandName} devices</p>
  </div>

  <!-- Price Range Filter -->
  <div class="bg-white rounded-lg shadow p-4 text-center">
    <h2 class="text-lg font-semibold mb-2">Price Range</h2>
    <div class="flex items-center justify-between mb-2">
      <span>Minimum Price</span>
      <span>Maximum Price</span>
    </div>
    <div class="flex items-center gap-4">
      <input 
        type="range" 
        min="0" 
        max={Math.max(...products.map(p => p.price), 5000)} 
        bind:value={minPrice} 
        class="flex-1" 
      />
      <input 
        type="range" 
        min="0" 
        max={Math.max(...products.map(p => p.price), 5000)} 
        bind:value={maxPrice} 
        class="flex-1" 
      />
    </div>
    <div class="flex justify-between text-sm mt-2">
      <span>${minPrice}</span>
      <span>${maxPrice}</span>
    </div>
  </div>

  <!-- Loading State -->
  {#if loading}
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00332e]"></div>
      <span class="ml-3 text-gray-600">Loading {brandName} products...</span>
    </div>
  {:else if error}
    <!-- Error State -->
    <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
      <p class="text-red-600">{error}</p>
      <button 
        on:click={loadProducts}
        class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  {:else if filteredProducts.length === 0}
    <!-- No Products State -->
    <div class="text-center py-12">
      <p class="text-gray-600 text-lg">No {brandName} products found in the selected price range.</p>
      <p class="text-gray-500 mt-2">Try adjusting your price filter.</p>
    </div>
  {:else}
    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
      {#each filteredProducts as product}
        <ProductCard
          id={product.id}
          title={product.title}
          brand={product.brand?.name || brandName}
          image={getProductImage(product)}
          storage={getStorage(product)}
          memory={getMemory(product)}
          price={product.price}
          slug={product.slug}
        />
      {/each}
    </div>

    <!-- Pagination -->
    {#if totalPages > 1}
      <div class="flex justify-center items-center space-x-2 mt-8">
        <button 
          on:click={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        {#each Array(totalPages) as _, i}
          <button 
            on:click={() => goToPage(i + 1)}
            class="px-3 py-1 rounded {currentPage === i + 1 ? 'bg-[#00332e] text-white' : 'bg-gray-200 hover:bg-gray-300'}"
          >
            {i + 1}
          </button>
        {/each}
        
        <button 
          on:click={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    {/if}
  {/if}

  <!-- Products Count -->
  {#if !loading && !error}
    <div class="text-center text-gray-600 mt-4">
      Showing {filteredProducts.length} of {products.length} {brandName} products
    </div>
  {/if}
</div>
