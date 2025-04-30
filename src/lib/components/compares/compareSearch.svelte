<script lang="ts">
  import { compareSheet } from '$lib/data/stores';
  import type { Product } from '$lib/data/stores';
  import { get } from 'svelte/store';

  let query = '';
  let error = '';

  const sampleProducts: Product[] = [
    { id: '1', name: 'iPhone 16 Pro Max' },
    { id: '2', name: 'Samsung Galaxy S25 Ultra' },
    { id: '3', name: 'Google Pixel 9 Pro' },
    { id: '4', name: 'iPhone 14 Pro' },
    { id: '5', name: 'OnePlus 12' },
    { id: '6', name: 'iPhone 15 ProMax' }
  ];

  function addToCompare(product: Product) {
    const current = get(compareSheet);
    const alreadyExists = current.some(p => p.id === product.id);

    if (alreadyExists) {
      error = `"${product.name}" is already added.`;
      setTimeout(() => (error = ''), 2000); // Clear after 2 seconds
      return;
    }

    compareSheet.set([...current, product]);
  }

  $: filtered = sampleProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
</script>

<div class="compare-search">
  <!-- Compare section title -->
  <h3 class="section-title">Compare</h3>
  
  <input
    type="text"
    placeholder="Search to add products"
    bind:value={query}
    class="search-input"
  />

  {#if error}
    <div class="error-message">{error}</div>
  {/if}

  <!-- Add to Compare section title -->
  <h3 class="section-title">Add to Compare</h3>

  <div class="search-results">
    {#each filtered as product}
      <button on:click={() => addToCompare(product)} class="search-item-button">
        + {product.name}
      </button>
    {/each}
  </div>
</div>

<style>
  :root {
    --primary-color: #00332e; /* Primary color for highlights */
    --primary-hover: #004d40;
    --accent-light: #e6f4f1;
    --accent-bg: #f0fef9;
    --border-color: #cceee6;
    --error-color: #d32f2f;
    --button-hover-bg: #00796b; /* Hover color for buttons */
  }

  /* Overall container styling for the search section */
  .compare-search {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--accent-bg);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 51, 46, 0.1);
    max-width: 900px;
    margin: 0 auto;
    width: 100%; /* Make it take up the full width of the parent container */
  }

  /* Styling for the section titles (Compare and Add to Compare) */
  .section-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  /* Styling for the search input field */
  .search-input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1.2rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    transition: border 0.2s ease;
    background-color: #fff;
  }

  /* Focus state for the search input */
  .search-input:focus {
    border-color: var(--primary-color);
    outline: none;
  }

  /* Styling for the search results section */
  .search-results {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  /* Styling for each button in the search results */
  .search-item-button {
    padding: 0.6rem 1.2rem;
    background-color: var(--accent-light);
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: all 0.3s ease-in-out;
    color: var(--primary-color);
    font-weight: 600;
    min-width: 140px;
    text-align: center;
  }

  /* Hover effects for search buttons */
  .search-item-button:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 51, 46, 0.1);
  }

  /* Error message styling */
  .error-message {
    color: var(--error-color);
    font-size: 0.95rem;
    margin-top: 1rem;
    font-weight: bold;
  }
</style>
