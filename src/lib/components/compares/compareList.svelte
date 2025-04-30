<script lang="ts">
  import { compareHistory } from '$lib/data/stores';

  function removeHistory(id: number) {
    compareHistory.update((history) => history.filter((h) => h.id !== id));
  }

  function viewDetail(compareItem: { id: number; products: string[]; }) {
    console.log('View detail for:', compareItem);
    // In the future: open modal or navigate to comparison table
  }
</script>

<div class="history-container">
  <h3 class="history-title">🕘 Compare History</h3>

  {#if $compareHistory.length}
    <ul class="history-list">
      {#each $compareHistory as h (h.id)}
        <li class="history-item">
          <div class="history-header">
            <div class="left">
              <span class="check-icon">✓</span>
              <span class="timestamp">{new Date(h.id).toLocaleString()}</span>
            </div>
            <button class="remove-btn" on:click={() => removeHistory(h.id)}>✕</button>
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
          <button class="view-btn" on:click={() => viewDetail(h)}>View Detail</button>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="no-history">No comparisons yet.</p>
  {/if}
</div>

<style>
  .history-container {
    background-color: #ffffff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    max-width: 750px;
    margin: auto;
    font-family: 'Segoe UI', sans-serif;
    border: 1px solid #00332e;
  }

  .history-title {
    font-size: 24px;
    font-weight: 700;
    color: #00332e;
    margin-bottom: 24px;
    text-align: center;
  }

  .no-history {
    text-align: center;
    font-size: 16px;
    color: #6b7280;
    padding: 40px 0;
  }

  .history-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .history-item {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 16px;
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
    color: #00332e;
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
    margin-bottom: 16px; /* Space before "View Detail" */
  }

  .product {
    background-color: #e0f2fe;
    color: #00332e;
    padding: 4px 10px;
    border-radius: 20px;
  }

  .vs {
    padding: 0 6px;
    color: #6b7280;
  }

  .view-btn {
    background-color: #00332e;
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    transition: background 0.2s ease;
    width: 100%;
  }

  .view-btn:hover {
    background-color: #00463c;
  }
</style>
