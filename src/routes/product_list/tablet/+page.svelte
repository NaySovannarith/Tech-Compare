<!-- src/routes/product_list/smartphones/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { productApi, type Product } from '$lib/api/productApi';

  let products: Product[] = [];
  let loading = true;
  let error = '';
  let minPrice = 0;
  let maxPrice = 5000;
  let currentPage = 1;
  let totalPages = 1;

  // Filter products by category ID (smartphones)
  const SMARTPHONE_CATEGORY_ID = 2;

  // Helper function to get storage and memory from specs OR direct fields
  function getSpecValue(product: Product, specName: string): string {
    // First check if it's stored directly in the product
    if (specName.toLowerCase() === 'storage' && product.storage) {
      return product.storage;
    }
    if (specName.toLowerCase() === 'memory' && product.memory) {
      return product.memory;
    }
    
    // Then check specs array
    if (!product.specs) return 'N/A';
    const spec = product.specs.find(s => s.name.toLowerCase().includes(specName.toLowerCase()));
    return spec ? spec.value : 'N/A';
  }

  // Helper function to get brand name
  function getBrandName(product: Product): string {
    return product.brand?.name || 'Unknown';
  }

  // Helper function to get image URL
function getImageUrl(product: Product): string {
  if (product.image_url) return product.image_url;

  if (product.image) {
    if (product.image.startsWith('http')) return product.image;
    return `http://localhost:8000/storage/products/${encodeURIComponent(product.image)}`;
  }

  return '/placeholder-phone.jpg';
}


  // Filtered products based on price range
  $: filteredProducts = products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );

  async function loadProducts(page: number = 1) {
    try {
      loading = true;
      error = '';
      
      const response = await productApi.getProducts(page, SMARTPHONE_CATEGORY_ID);
      products = response.data;
      currentPage = response.current_page;
      totalPages = response.last_page;
      
      // Update maxPrice based on loaded products
      if (products.length > 0) {
        const prices = products.map(p => p.price);
        maxPrice = Math.max(...prices);
      }
    } catch (err) {
      error = 'Failed to load products. Please try again.';
      console.error('Error loading products:', err);
    } finally {
      loading = false;
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      loadProducts(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      loadProducts(currentPage - 1);
    }
  }

  onMount(() => {
    loadProducts();
  });
</script>

<!-- Rest of your template remains the same -->
<div class="mt-[100px] px-6 py-4 space-y-6">
  <!-- Price Range Filter -->
  <div class="bg-white rounded-lg shadow p-4 text-center">
    <h2 class="text-lg font-semibold mb-2">Price range</h2>
    <div class="flex items-center justify-between mb-2">
      <span>Minimum Price</span>
      <span>Maximum Price</span>
    </div>
    <div class="flex items-center gap-4 mb-2">
      <input 
        type="range" 
        min="0" 
        max={maxPrice} 
        bind:value={minPrice} 
        class="flex-1" 
      />
      <input 
        type="range" 
        min="0" 
        max={maxPrice} 
        bind:value={maxPrice} 
        class="flex-1" 
      />
    </div>
    <div class="flex justify-between text-sm">
      <span>${minPrice}</span>
      <span>${maxPrice}</span>
    </div>
  </div>

  <!-- Loading State -->
  {#if loading}
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00332e]"></div>
      <span class="ml-3 text-lg">Loading products...</span>
    </div>
  {/if}

  <!-- Error State -->
  {#if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
      {error}
      <button 
        on:click={() => loadProducts()} 
        class="ml-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  {/if}

  <!-- Products Grid -->
  {#if !loading && !error}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
      {#each filteredProducts as product (product.id)}
        <ProductCard
          id={product.id}
          title={product.title}
          brand={getBrandName(product)}
          image={getImageUrl(product)}
          storage={getSpecValue(product, 'storage')}
          memory={getSpecValue(product, 'memory')}
          price={product.price}
          slug={product.slug} 
        />
      {/each}
    </div>

    <!-- No products message -->
    {#if filteredProducts.length === 0 && products.length > 0}
      <div class="text-center py-8">
        <p class="text-gray-600">No products found in the selected price range.</p>
      </div>
    {/if}

    <!-- Pagination -->
    {#if totalPages > 1}
      <div class="flex justify-center items-center gap-4 mt-8">
        <button
          on:click={prevPage}
          disabled={currentPage <= 1}
          class="px-4 py-2 bg-[#00332e] text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#00584f] transition-colors"
        >
          Previous
        </button>
        
        <span class="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          on:click={nextPage}
          disabled={currentPage >= totalPages}
          class="px-4 py-2 bg-[#00332e] text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#00584f] transition-colors"
        >
          Next
        </button>
      </div>
    {/if}
  {/if}
</div>