<script lang="ts">
  import { onMount } from 'svelte';
  import TvCard from '$lib/components/TvCard.svelte';
  import { productApi, type Product } from '$lib/api/productApi';
  import { API_CONFIG } from '$lib/config';

  let products: Product[] = [];
  let loading = true;
  let error = '';
  let minPrice = 0;
  let maxPrice = 5000;
  let currentPage = 1;
  let totalPages = 1;

  const TV_CATEGORY_ID = 4; // Adjust to match your DB

function getSpecValue(product: Product, specName: string): string {
  if (!product.specs) return 'N/A';

  const nameLower = specName.toLowerCase();

  const match = product.specs.find(s =>
    s.name.toLowerCase().includes(nameLower)
  );

  return match?.value || 'N/A';
}


  function getBrandName(product: Product): string {
    return product.brand?.name || 'Unknown';
  }

function getImageUrl(product: Product): string {
  if (product.image_url) return product.image_url;

  if (product.image) {
    if (product.image.startsWith('http')) return product.image;
    return `${API_CONFIG.BASE_URL.replace('/api', '')}/storage/products/${encodeURIComponent(product.image)}`;
  }

  return '/placeholder-phone.jpg';
}

  $: filteredProducts = products.filter(product =>
    product.price >= minPrice && product.price <= maxPrice
  );

  async function loadProducts(page: number = 1) {
    try {
      loading = true;
      error = '';
      const response = await productApi.getProducts(page, TV_CATEGORY_ID);
      products = response.data;
      currentPage = response.current_page;
      totalPages = response.last_page;
      if (products.length > 0) {
        const prices = products.map(p => p.price);
        maxPrice = Math.max(...prices);
      }
    } catch (err) {
      error = 'Failed to load TVs.';
      console.error(err);
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

<div class="mt-[100px] px-6 py-4 space-y-6">
  <div class="bg-white rounded-lg shadow p-4 text-center">
    <h2 class="text-lg font-semibold mb-2">Price range</h2>
    <div class="flex items-center justify-between mb-2">
      <span>Minimum Price</span>
      <span>Maximum Price</span>
    </div>
    <input type="range" min="0" max={maxPrice} bind:value={minPrice} class="w-full mb-1" />
    <div class="flex justify-between text-sm">
      <span>{minPrice}$</span>
      <span>{maxPrice}$</span>
    </div>
  </div>

  {#if loading}
    <div class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00332e]"></div>
      <span class="ml-3 text-lg">Loading TVs...</span>
    </div>
  {/if}

  {#if error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
      {error}
      <button on:click={() => loadProducts()} class="ml-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
        Retry
      </button>
    </div>
  {/if}

  {#if !loading && !error}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
      {#each filteredProducts as product (product.id)}
        <TvCard
          id={product.id}
          title={product.title}
          brand={getBrandName(product)}
          image={getImageUrl(product)}
          resolution={getSpecValue(product, 'resolution')}
          size={getSpecValue(product, 'size')}
          price={product.price}
        />
      {/each}
    </div>

    {#if totalPages > 1}
      <div class="flex justify-center items-center gap-4 mt-8">
        <button
          on:click={prevPage}
          disabled={currentPage <= 1}
          class="px-4 py-2 bg-[#00332e] text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#00584f]"
        >
          Previous
        </button>
        <span class="text-gray-600">Page {currentPage} of {totalPages}</span>
        <button
          on:click={nextPage}
          disabled={currentPage >= totalPages}
          class="px-4 py-2 bg-[#00332e] text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#00584f]"
        >
          Next
        </button>
      </div>
    {/if}
  {/if}
</div>
