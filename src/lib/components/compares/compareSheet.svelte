<script lang="ts">
  import { compareSheet, compareHistory } from '$lib/data/stores';
  import { get } from 'svelte/store';

  function handleCompare() {
    const current = get(compareSheet);
    if (current.length > 1) {
      compareHistory.update((history) => [
        ...history,
        {
          id: Date.now(),
          products: current.map((p) => p.name)
        }
      ]);
      compareSheet.set([]); // Clear after comparing
    }
  }

  function removeFromCompare(id: string | number) {
    compareSheet.update((list) => list.filter((item) => String(item.id) !== String(id)));
  }
</script>

<div class="compare-sheet-container">
  <h3 class="compare-sheet-header">Compare Sheet ({$compareSheet.length})</h3>

  {#if $compareSheet.length === 0}
    <p class="compare-sheet-empty">No items to compare</p>
  {:else}
    <ul class="compare-sheet-list">
      {#each $compareSheet as item}
        <li>
          <span>{item.name}</span>
          <button class="remove-button" on:click={() => removeFromCompare(item.id)}>✕</button>
        </li>
      {/each}
    </ul>

    {#if $compareSheet.length > 1}
      <button class="compare-button" on:click={handleCompare}>Compare Now</button>
    {/if}
  {/if}
</div>

<style>
  /* Main container styles */
  .compare-sheet-container {
    padding: 20px;
    background: linear-gradient(135deg, #f9f9f9, #e0e0e0);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    margin: 30px auto;
    font-family: 'Segoe UI', sans-serif;
    transition: all 0.3s ease;
  }

  .compare-sheet-container:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  /* Header */
  .compare-sheet-header {
    font-size: 22px;
    font-weight: 700;
    color: #00332e;
    margin-bottom: 20px;
    text-align: center;
  }

  /* Empty state styling */
  .compare-sheet-empty {
    font-size: 16px;
    color: #6b7280;
    text-align: center;
    font-style: italic;
  }

  /* List styles */
  .compare-sheet-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #e5e7eb;
    animation: fadeIn 0.5s ease-in-out;
  }

  .compare-sheet-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #e5e7eb;
    background-color: #f9fafb;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
  }

  .compare-sheet-list li:hover {
    background-color: #f3f4f6;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
    transform: translateX(4px);
  }

  .compare-sheet-list li span {
    font-size: 16px;
    color: #374151;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .compare-sheet-list li span:hover {
    color: #00332e;
  }

  /* Remove button styling */
  .remove-button {
    background: none;
    border: none;
    color: #ef4444;
    font-size: 18px;
    cursor: pointer;
    padding: 0 6px;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .remove-button:hover {
    color: #dc2626;
    transform: rotate(20deg);
  }

  /* Compare Now Button */
  .compare-button {
    background-color: #00332e;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .compare-button:hover {
    background-color: #045a4f;
    transform: scale(1.05);
  }

  /* Mobile Responsiveness */
  @media (max-width: 600px) {
    .compare-sheet-container {
      padding: 15px;
    }

    .compare-sheet-header {
      font-size: 18px;
    }

    .compare-button {
      width: 100%;
      padding: 12px;
    }
  }

  /* Fade In Animation for List */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
