<script lang="ts">
  import { run } from 'svelte/legacy';

  import { compareHistory } from '$lib/data/stores';
  import { goto } from '$app/navigation';

  // Search and filter state
  let searchTerm = $state('');
  let sortBy = $state('newest'); // 'newest', 'oldest', 'products'

  // Pagination state
  let currentPage = $state(1);
  let itemsPerPage = 6;

  // Filter and sort the history
  let filteredHistory = $derived($compareHistory
    .filter(h => {
      if (!searchTerm) return true;
      return h.products.some(product => 
        product.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id;
        case 'oldest':
          return a.id - b.id;
        case 'products':
          return a.products.length - b.products.length;
        default:
          return b.id - a.id;
      }
    }));

  // Pagination calculations
  let totalPages = $derived(Math.ceil(filteredHistory.length / itemsPerPage));
  let paginatedHistory = $derived(filteredHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ));

  // Reset to first page when search changes
  run(() => {
    if (searchTerm) {
      currentPage = 1;
    }
  });

  function removeHistory(id: number) {
    compareHistory.update((history) => history.filter((h) => h.id !== id));
    
    // Adjust current page if needed
    if (paginatedHistory.length === 1 && currentPage > 1) {
      currentPage--;
    }
  }

  function viewDetail(compareItem: { id: number; products: string[]; }) {
    console.log('View detail for:', compareItem);
    // Navigate to comparison page or open modal
    // goto(`/compare/${compareItem.id}`);
  }

  function clearAllHistory() {
    if (confirm('Are you sure you want to clear all comparison history?')) {
      compareHistory.set([]);
      currentPage = 1;
    }
  }

  function goToComparePage() {
    goto('/compares');  
  }

  // Format date helper
  function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)} hours ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  }

  // Get comparison stats
  let totalComparisons = $derived($compareHistory.length);
  let totalProducts = $derived(new Set($compareHistory.flatMap(h => h.products)).size);
</script>

<svelte:head>
<title>Compare History - Product Comparison</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 pt-32 pb-8">
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Header Section -->
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Compare History
        </h1>
        <p class="text-gray-600 mt-1">View and manage your product comparison history</p>
      </div>
      
      <div class="flex gap-3">
        <button 
          onclick={goToComparePage}
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Comparison
        </button>
        
        {#if $compareHistory.length > 0}
          <button 
            onclick={clearAllHistory}
            class="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
          >
            Clear All
          </button>
        {/if}
      </div>
    </div>

    <!-- Stats -->
    {#if $compareHistory.length > 0}
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div class="text-center">
          <div class="text-2xl font-bold text-blue-600">{totalComparisons}</div>
          <div class="text-sm text-gray-600">Total Comparisons</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-green-600">{totalProducts}</div>
          <div class="text-sm text-gray-600">Unique Products</div>
        </div>
        <div class="text-center sm:block hidden">
          <div class="text-2xl font-bold text-purple-600">{Math.round(totalProducts / totalComparisons * 10) / 10}</div>
          <div class="text-sm text-gray-600">Avg Products/Comparison</div>
        </div>
      </div>
    {/if}
  </div>

  {#if $compareHistory.length > 0}
    <!-- Search and Filter Section -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div class="flex flex-col sm:flex-row gap-4">
        <!-- Search -->
        <div class="flex-1">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search products in history..."
              bind:value={searchTerm}
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>
        
        <!-- Sort -->
        <div class="sm:w-48">
          <select 
            bind:value={sortBy}
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="products">By Product Count</option>
          </select>
        </div>
      </div>
    </div>

    <!-- History List -->
    <ul class="history-list">
      {#each paginatedHistory as h (h.id)}
        <li class="history-item">
          <div class="history-header">
            <div class="left">
              <span class="check-icon">✓</span>
              <span class="timestamp">{formatDate(h.id)}</span>
            </div>
            <button class="remove-btn" onclick={() => removeHistory(h.id)}>✕</button>
          </div>

          <div class="history-content">
            {#each h.products as product, i}
              <span class="product">{product}</span>
              {#if i < h.products.length - 1}
                <span class="vs">vs</span>
              {/if}
            {/each}
          </div>

          <!-- View Detail button at the bottom -->
          <button class="view-btn" onclick={() => viewDetail(h)}>View Detail</button>
        </li>
      {/each}
    </ul>

    <!-- Pagination -->
    {#if totalPages > 1}
      <div class="flex justify-center items-center gap-2 mt-8">
        <button 
          onclick={() => currentPage = Math.max(1, currentPage - 1)}
          disabled={currentPage === 1}
          class="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Previous
        </button>
        
        {#each Array(totalPages) as _, i}
          <button 
            onclick={() => currentPage = i + 1}
            class="px-3 py-2 border rounded-lg {currentPage === i + 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:bg-gray-50'}"
          >
            {i + 1}
          </button>
        {/each}
        
        <button 
          onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
          disabled={currentPage === totalPages}
          class="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    {/if}

    <!-- No Results -->
    {#if filteredHistory.length === 0}
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No results found</h3>
        <p class="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
        <button 
          onclick={() => { searchTerm = ''; sortBy = 'newest'; }}
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    {/if}
  {:else}
    <!-- Empty State -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
      <div class="mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h3 class="text-xl font-medium text-gray-900 mb-2">No comparison history yet</h3>
      <p class="text-gray-600 mb-6">Start comparing products to see your history here</p>
      <button 
        onclick={goToComparePage}
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Start Comparing
      </button>
    </div>
  {/if}
</div>
</div>

<style>
  .history-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .history-item {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 20px;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    position: relative;
  }

  .history-item:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }

  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .timestamp {
    font-size: 14px;
    color: #6b7280;
  }

  .check-icon {
    color: #10b981;
    font-size: 16px;
    font-weight: bold;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #ef4444;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.2s ease;
    padding: 4px;
  }

  .remove-btn:hover {
    color: #b91c1c;
  }

  .history-content {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 16px;
  }

  .product {
    background-color: #dbeafe;
    color: #1e40af;
    padding: 4px 10px;
    border-radius: 20px;
  }

  .vs {
    padding: 0 6px;
    color: #6b7280;
  }

  .view-btn {
    background-color: #3b82f6;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s ease;
    width: 100%;
    font-weight: 500;
  }

  .view-btn:hover {
    background-color: #2563eb;
  }
</style>
