<script lang="ts">
  import { compareSheet, type Product } from '$lib/data/stores';
  import { get } from 'svelte/store';
  import { fly, scale, fade } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let query = $state('');
  let error = $state('');
  let isSearchFocused = $state(false);
  let searchInput: HTMLInputElement | undefined = $state();

  const sampleProducts: Product[] = [
    { id: '1', name: 'iPhone 16 Pro Max' },
    { id: '2', name: 'Samsung Galaxy S25 Ultra' },
    { id: '3', name: 'Google Pixel 9 Pro' },
    { id: '4', name: 'iPhone 14 Pro' },
    { id: '5', name: 'OnePlus 12' },
    { id: '6', name: 'iPhone 15 ProMax' }
  ];

  async function addToCompare(product: Product) {
    const current = get(compareSheet);
    const alreadyExists = current.some(p => p.id === product.id);

    if (alreadyExists) {
      error = `"${product.name}" is already added.`;
      setTimeout(() => (error = ''), 2000);
      return;
    }

    if (current.length >= 4) {
      error = 'Maximum 4 products can be compared at once.';
      setTimeout(() => (error = ''), 2000);
      return;
    }

    compareSheet.update(current => [...current, product]);
  }

  function clearSearch() {
    query = '';
    searchInput?.focus();
  }

  function getProductIcon(name: string) {
    if (name.toLowerCase().includes('iphone')) return '📱';
    if (name.toLowerCase().includes('samsung')) return '📱';
    if (name.toLowerCase().includes('pixel')) return '📱';
    if (name.toLowerCase().includes('oneplus')) return '📱';
    return '🔍';
  }

  const filtered = sampleProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
</script>

<div class="search-container">
  <!-- Header Section -->
  <div class="search-header">
    <div class="flex items-center gap-4 mb-6">
      <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
      <div>
        <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Product Search
        </h3>
        <p class="text-slate-600 mt-1">Find and add products to your comparison sheet</p>
      </div>
    </div>

    <!-- Stats Bar -->
    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-number">{$compareSheet.length}</span>
        <span class="stat-label">Selected</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">4</span>
        <span class="stat-label">Max</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">{filtered.length}</span>
        <span class="stat-label">Available</span>
      </div>
    </div>
  </div>

  <!-- Search Input Section -->
  <div class="search-input-section">
    <div class="search-input-wrapper">
      <div class="search-input-container">
        <div class="search-icon">
          <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <input
          bind:this={searchInput}
          type="text"
          placeholder="Search to add products"
          bind:value={query}
          onfocus={() => isSearchFocused = true}
          onblur={() => isSearchFocused = false}
          class="search-input"
        />
        {#if query}
          <button
            onclick={clearSearch}
            class="clear-button"
            aria-label="Clear search"
            in:scale={{ duration: 200 }}
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        {/if}
      </div>
      <div class="search-glow" class:active={isSearchFocused}></div>
    </div>
  </div>

  <!-- Error Message -->
  {#if error}
    <div 
      class="error-message"
      in:fly={{ y: -20, duration: 300, easing: elasticOut }}
      out:fade={{ duration: 200 }}
    >
      <div class="error-icon">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <span>{error}</span>
    </div>
  {/if}

  <!-- Results Section -->
  <div class="results-section">
    <div class="results-header">
      <h4 class="results-title">
        {query ? `Search Results (${filtered.length})` : 'Add to Compare'}
      </h4>
      {#if query}
        <button
          onclick={() => query = ''}
          class="clear-search-btn"
          aria-label="Clear search"
        >
          Clear search
        </button>
      {/if}
    </div>

    <!-- Products Grid -->
    <div class="products-grid">
      {#each filtered as product, index (product.id)}
        {@const isInCompare = $compareSheet.some(p => p.id === product.id)}
        <button
          onclick={() => addToCompare(product)}
          disabled={isInCompare}
          class="product-button"
          class:added={isInCompare}
          in:fly={{ y: 30, duration: 400, delay: index * 50, easing: quintOut }}
          aria-label={isInCompare ? 'Added to compare' : 'Click to add'}
        >
          <div class="product-content">
            <div class="product-icon">
              {getProductIcon(product.name)}
            </div>
            <div class="product-info">
              <span class="product-name">{product.name}</span>
              <span class="product-action">
                {isInCompare ? 'Added to compare' : 'Click to add'}
              </span>
            </div>
            <div class="product-status">
              {#if isInCompare}
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              {:else}
                <svg class="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              {/if}
            </div>
          </div>
          <div class="product-overlay"></div>
        </button>
      {/each}
    </div>

    <!-- No Results State -->
    {#if filtered.length === 0 && query}
      <div class="no-results" in:fade={{ duration: 300 }}>
        <div class="no-results-icon">
          <svg class="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h4 class="no-results-title">No products found</h4>
        <p class="no-results-text">Try adjusting your search terms</p>
        <button
          onclick={() => query = ''}
          class="show-all-btn"
          aria-label="Show all products"
        >
          Show All Products
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
  /* Main Container */
  .search-container {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 32px;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    overflow: hidden;
    margin-bottom: 32px;
    padding: 24px;
  }

  /* Header Section */
  .search-header {
    padding: 32px 32px 24px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
    border-radius: 20px;
    border: 1px solid rgba(226, 232, 240, 0.3);
    margin-bottom: 24px;
  }

  /* Stats Bar */
  .stats-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 20px;
    background: rgba(248, 250, 252, 0.5);
    border-radius: 16px;
    border: 1px solid rgba(226, 232, 240, 0.3);
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .stat-number {
    font-size: 24px;
    font-weight: 700;
    color: #3b82f6;
  }

  .stat-label {
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
  }

  .stat-divider {
    width: 1px;
    height: 32px;
    background: rgba(226, 232, 240, 0.5);
  }

  /* Search Input Section */
  .search-input-section {
    padding: 32px;
    padding-bottom: 24px;
  }

  .search-input-wrapper {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
  }

  .search-input-container {
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    border: 2px solid rgba(226, 232, 240, 0.5);
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  .search-input-container:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  }

  .search-icon {
    padding: 16px 20px;
    display: flex;
    align-items: center;
  }

  .search-input {
    flex: 1;
    padding: 16px 0;
    border: none;
    outline: none;
    font-size: 16px;
    color: #1e293b;
    background: transparent;
  }

  .search-input::placeholder {
    color: #94a3b8;
  }

  .clear-button {
    margin-right: 16px;
    padding: 8px;
    background: rgba(148, 163, 184, 0.1);
    border: none;
    border-radius: 8px;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .clear-button:hover {
    background: rgba(148, 163, 184, 0.2);
    color: #475569;
  }

  .search-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  .search-glow.active {
    opacity: 0.2;
  }

  /* Error Message */
  .error-message {
    margin: 0 32px 24px;
    padding: 16px 20px;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.2);
    border-radius: 12px;
    color: #dc2626;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .error-icon {
    width: 20px;
    height: 20px;
    background: rgba(239, 68, 68, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Results Section */
  .results-section {
    padding: 0 32px 32px;
  }

  .results-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .results-title {
    font-size: 20px;
    font-weight: 700;
    color: #1e293b;
  }

  .clear-search-btn {
    color: #3b82f6;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  .clear-search-btn:hover {
    background: rgba(59, 130, 246, 0.1);
    color: #2563eb;
  }

  /* Products Grid */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  /* Product Button */
  .product-button {
    position: relative;
    background: linear-gradient(135deg, #ffffff, #f8fafc);
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 16px;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }

  .product-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .product-button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .product-button.added {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05));
    border-color: rgba(34, 197, 94, 0.2);
  }

  .product-content {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    position: relative;
    z-index: 1;
  }

  .product-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
  }

  .product-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .product-name {
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    text-align: left;
  }

  .product-action {
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
  }

  .product-button.added .product-action {
    color: #059669;
  }

  .product-status {
    width: 32px;
    height: 32px;
    background: rgba(148, 163, 184, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  .product-button.added .product-status {
    background: rgba(34, 197, 94, 0.1);
  }

  .product-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .product-button:hover:not(:disabled) .product-overlay {
    opacity: 1;
  }

  /* No Results State */
  .no-results {
    text-align: center;
    padding: 60px 20px;
  }

  .no-results-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: rgba(148, 163, 184, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .no-results-title {
    font-size: 18px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 8px;
  }

  .no-results-text {
    color: #6b7280;
    margin-bottom: 24px;
  }

  .show-all-btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .show-all-btn:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .search-header {
      padding: 24px 20px 20px;
    }

    .search-input-section {
      padding: 24px 20px 20px;
    }

    .results-section {
      padding: 0 20px 24px;
    }

    .products-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .stats-bar {
      gap: 16px;
      padding: 16px;
    }

    .stat-number {
      font-size: 20px;
    }

    .product-content {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    .results-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .stats-bar {
      flex-direction: column;
      gap: 12px;
    }

    .stat-divider {
      width: 100%;
      height: 1px;
    }
  }
</style>
