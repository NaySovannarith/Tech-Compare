<script lang="ts">
  import CompareSearch from '$lib/components/compares/compareSearch.svelte';
  import CompareTabs from '$lib/components/compares/compareTabs.svelte';

  import { compareSheet } from '$lib/data/stores';
  import type { Product } from '$lib/data/stores';

  // Function to handle adding products to compare (if needed for events)
  function handleAddToCompare(product: Product) {
    compareSheet.update((list) => {
      if (!list.find((item) => item.id === product.id)) {
        return [...list, product];
      }
      return list;
    });
  }
</script>

<svelte:head>
  <title>Product Comparison - Tech Compare</title>
  <meta name="description" content="Compare products side by side and make informed decisions" />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
  <!-- Header Section -->
  <div class="pt-24 pb-8 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
        Product Comparison Hub
      </h1>
      <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
        Compare products side-by-side and track your comparison history with our advanced analysis tools
      </p>
      
      <!-- Quick Stats -->
      <div class="flex justify-center items-center gap-8 mb-12">
        <div class="text-center">
          <div class="text-2xl font-bold text-blue-600">{$compareSheet.length}</div>
          <div class="text-sm text-slate-500">Products Selected</div>
        </div>
        <div class="w-px h-8 bg-slate-300"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-purple-600">4</div>
          <div class="text-sm text-slate-500">Max Comparison</div>
        </div>
        <div class="w-px h-8 bg-slate-300"></div>
        <div class="text-center">
          <div class="text-2xl font-bold text-green-600">∞</div>
          <div class="text-sm text-slate-500">History Saved</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Search Section -->
  <div class="px-4 mb-8">
    <div class="max-w-7xl mx-auto">
      <CompareSearch />
    </div>
  </div>

  <!-- Tabs Section -->
  <div class="px-4 pb-12">
    <div class="max-w-7xl mx-auto">
      <CompareTabs />
    </div>
  </div>
</main>

<style>
  :global(body) {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    margin: 0;
    background-color: #f8fafc;
    color: #1e293b;
  }

  :global(*) {
    box-sizing: border-box;
  }

  /* Smooth scrolling */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #f1f5f9;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #cbd5e1;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #94a3b8;
  }

  /* Focus styles */
  :global(:focus-visible) {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  /* Animation utilities */
  :global(.animate-pulse) {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  /* Responsive text utilities */
  @media (max-width: 768px) {
    :global(.text-5xl) {
      font-size: 2.5rem;
    }
    
    :global(.text-6xl) {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    :global(.text-5xl) {
      font-size: 2rem;
    }
    
    :global(.text-6xl) {
      font-size: 2.25rem;
    }
  }
</style>
