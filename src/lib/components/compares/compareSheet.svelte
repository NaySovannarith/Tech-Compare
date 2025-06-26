<script lang="ts">
  import { compareSheet, compareHistory } from '$lib/data/stores';
  import { fly, scale, fade } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  async function handleCompare() {
    if ($compareSheet.length > 1) {
      compareHistory.update(current => [{
        id: Date.now(),
        products: $compareSheet.map(p => p.name),
        created_at: new Date().toISOString()
      }, ...current]);
      compareSheet.set([]);
    }
  }

  async function removeFromCompare(id: string | number) {
    compareSheet.update(current => current.filter(p => p.id !== String(id)));
  }

  async function clearAll() {
    compareSheet.set([]);
  }

  function getComparisonReadiness() {
    const count = $compareSheet.length;
    if (count === 0) return { message: "Add products to start comparing", color: "text-slate-500" };
    if (count === 1) return { message: "Add one more product to compare", color: "text-amber-600" };
    if (count >= 2) return { message: "Ready to compare!", color: "text-green-600" };
    return { message: "", color: "" };
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
  <div class="max-w-4xl mx-auto">
    
    <!-- Header Section -->
    <div class="text-center mb-8">
      <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        Comparison Sheet
      </h2>
      <p class="text-lg text-slate-600">
        Build your comparison list and analyze products side by side
      </p>
    </div>

    <!-- Main Compare Sheet Container -->
    <div class="compare-sheet-container">
      
      <!-- Header with Stats -->
      <div class="sheet-header">
        <div class="header-content">
          <div class="header-info">
            <div class="icon-wrapper">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-slate-800">
                Compare Sheet ({$compareSheet.length})
              </h3>
              <p class="text-sm {getComparisonReadiness().color} font-medium">
                {getComparisonReadiness().message}
              </p>
            </div>
          </div>
          
          {#if $compareSheet.length > 0}
            <button
              onclick={clearAll}
              class="clear-all-btn"
              aria-label="Clear all products from comparison"
              in:scale={{ duration: 200 }}
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              Clear All
            </button>
          {/if}
        </div>

        <!-- Progress Bar -->
        <div class="progress-container">
          <div class="progress-bar">
            <div 
              class="progress-fill"
              style="width: {Math.min(($compareSheet.length / 4) * 100, 100)}%"
            ></div>
          </div>
          <div class="progress-labels">
            <span class="text-xs text-slate-500">0</span>
            <span class="text-xs text-slate-500">Max: 4 products</span>
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="sheet-content">
        {#if $compareSheet.length === 0}
          <!-- Empty State -->
          <div class="empty-state" in:fade={{ duration: 600 }}>
            <div class="empty-icon">
              <svg class="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-slate-700 mb-2">No Products Selected</h4>
            <p class="text-slate-500 mb-6 max-w-md mx-auto">
              Start building your comparison by adding products from the search section above.
            </p>
            <div class="empty-features">
              <div class="feature-item">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Add products</span>
              </div>
              <div class="feature-item">
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Compare features</span>
              </div>
              <div class="feature-item">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Make decisions</span>
              </div>
            </div>
          </div>
        {:else}
          <!-- Products List -->
          <div class="products-grid">
            {#each $compareSheet as item, index (item.id)}
              <div 
                class="product-card"
                in:fly={{ y: 50, duration: 400, delay: index * 100, easing: quintOut }}
                out:scale={{ duration: 300 }}
              >
                <!-- Card Header -->
                <div class="card-header">
                  <div class="card-header-content">
                    <div class="product-number">
                      {index + 1}
                    </div>
                    <div class="product-info">
                      <h4 class="product-name">{item.name}</h4>
                      <p class="product-meta">
                        Product • Added to comparison
                      </p>
                    </div>
                  </div>
                  
                  <!-- Remove Button -->
                  <button
                    onclick={() => removeFromCompare(item.id)}
                    class="remove-btn"
                    aria-label="Remove {item.name} from comparison"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <!-- Card Content -->
                <div class="card-content">
                  <div class="content-row">
                    <div class="content-left">
                      <span class="price-tag">Ready</span>
                    </div>
                    <div class="status-badge">
                      Ready
                    </div>
                  </div>
                </div>

                <!-- Card Overlay -->
                <div class="card-overlay"></div>
              </div>
            {/each}
          </div>

          <!-- Action Buttons -->
          <div class="action-section">
            {#if $compareSheet.length > 1}
              <button
                onclick={handleCompare}
                class="compare-btn"
                aria-label="Compare selected products"
                in:scale={{ duration: 300, easing: elasticOut }}
              >
                <div class="btn-content">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <span>Compare {$compareSheet.length} Products</span>
                </div>
                <div class="btn-shine"></div>
              </button>
            {:else}
              <div class="compare-hint" in:fade={{ duration: 300 }}>
                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Add at least one more product to enable comparison</span>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* Main Container */
  .compare-sheet-container {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 32px;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    overflow: hidden;
  }

  /* Header Section */
  .sheet-header {
    padding: 32px 32px 24px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .header-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clear-all-btn {
    padding: 12px 16px;
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: none;
    border-radius: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .clear-all-btn:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: scale(1.05);
  }

  /* Progress Bar */
  .progress-container {
    margin-top: 20px;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(226, 232, 240, 0.5);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 4px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .progress-labels {
    display: flex;
    justify-content: space-between;
  }

  /* Content Area */
  .sheet-content {
    padding: 32px;
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 60px 20px;
  }

  .empty-icon {
    width: 120px;
    height: 120px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .empty-features {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #64748b;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Products Grid */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 32px;
  }

  /* Product Card */
  .product-card {
    position: relative;
    background: linear-gradient(135deg, #ffffff, #f8fafc);
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(59, 130, 246, 0.3);
  }

  /* Card Header */
  .card-header {
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
  }

  .card-header-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
  }

  .product-number {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    flex-shrink: 0;
  }

  .product-info {
    flex: 1;
  }

  .product-name {
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 4px 0;
    line-height: 1.3;
  }

  .product-meta {
    font-size: 13px;
    color: #64748b;
    margin: 0;
  }

  /* Remove Button */
  .remove-btn {
    width: 36px;
    height: 36px;
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .remove-btn:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: scale(1.1);
  }

  /* Card Content */
  .card-content {
    padding: 20px;
  }

  .content-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .price-tag {
    font-size: 18px;
    font-weight: 700;
    color: #059669;
    background: rgba(16, 185, 129, 0.1);
    padding: 4px 12px;
    border-radius: 8px;
  }

  .status-badge {
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
  }

  /* Card Overlay */
  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .product-card:hover .card-overlay {
    opacity: 1;
  }

  /* Action Section */
  .action-section {
    display: flex;
    justify-content: center;
    padding-top: 24px;
    border-top: 1px solid rgba(226, 232, 240, 0.5);
  }

  /* Compare Button */
  .compare-btn {
    position: relative;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  }

  .compare-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
  }

  .btn-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .compare-btn:hover .btn-shine {
    left: 100%;
  }

  /* Compare Hint */
  .compare-hint {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #d97706;
    font-size: 14px;
    font-weight: 500;
    background: rgba(245, 158, 11, 0.1);
    padding: 12px 20px;
    border-radius: 12px;
    border: 1px solid rgba(245, 158, 11, 0.2);
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .sheet-header {
      padding: 24px 20px 20px;
    }

    .sheet-content {
      padding: 24px 20px;
    }

    .products-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .card-header {
      padding: 16px;
    }

    .card-content {
      padding: 16px;
    }

    .empty-state {
      padding: 40px 20px;
    }

    .empty-icon {
      width: 80px;
      height: 80px;
    }

    .header-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }

  @media (max-width: 480px) {
    .compare-btn {
      width: 100%;
      padding: 14px 24px;
    }

    .product-name {
      font-size: 15px;
    }

    .price-tag {
      font-size: 16px;
    }

    .empty-features {
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
