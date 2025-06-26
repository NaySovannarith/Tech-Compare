<script lang="ts">
  import { compareHistory } from '$lib/data/stores';
  import { fade, fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  function removeHistory(id: number) {
    compareHistory.update(history => history.filter(h => h.id !== id));
  }

  function viewDetail(compareItem: { id: number; products: string[]; }) {
    console.log('View detail for:', compareItem);
    // In the future: open modal or navigate to comparison table
  }

  function formatDate(timestamp: number) {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function getProductCount(products: string[]) {
    return products.length;
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4">
  <div class="max-w-7xl mx-auto">
    
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        Comparison History
      </h1>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">
        Review your past product comparisons and insights
      </p>
    </div>

    <!-- Main Container -->
    <div class="history-container">
      
      <!-- Header with Stats -->
      <div class="history-header">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Compare History
            </h3>
            <p class="text-slate-600 mt-1">Your comparison journey and insights</p>
          </div>
        </div>

        <!-- Stats Bar -->
        {#if $compareHistory.length > 0}
          <div class="stats-bar">
            <div class="stat-item">
              <span class="stat-number">{$compareHistory.length}</span>
              <span class="stat-label">Total Comparisons</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">
                {$compareHistory.reduce((acc: number, h) => acc + h.products.length, 0)}
              </span>
              <span class="stat-label">Products Analyzed</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">
                {Math.round($compareHistory.reduce((acc: number, h) => acc + h.products.length, 0) / $compareHistory.length)}
              </span>
              <span class="stat-label">Avg per Comparison</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Content Area -->
      <div class="history-content">
        {#if $compareHistory.length}
          <!-- History Grid -->
          <div class="history-grid">
            {#each $compareHistory as h, index (h.id)}
              <div 
                class="history-card group"
                in:fly={{ y: 50, duration: 500, delay: index * 100, easing: quintOut }}
                out:scale={{ duration: 300 }}
              >
                <!-- Card Header -->
                <div class="card-header">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="status-indicator">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div>
                        <div class="timestamp">{formatDate(h.id)}</div>
                        <div class="comparison-meta">
                          {getProductCount(h.products)} products compared
                        </div>
                      </div>
                    </div>
                    
                    <!-- Remove Button -->
                    <button
                      onclick={() => removeHistory(h.id)}
                      class="remove-button"
                      aria-label="Remove comparison from history"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Products Section -->
                <div class="products-section">
                  <h4 class="products-title">Products Compared</h4>
                  <div class="products-list">
                    {#each h.products as product, i}
                      <div class="product-tag">
                        <span class="product-name">{product}</span>
                      </div>
                      {#if i < h.products.length - 1}
                        <div class="vs-indicator">
                          <span>vs</span>
                        </div>
                      {/if}
                    {/each}
                  </div>
                </div>

                <!-- Action Section -->
                <div class="action-section">
                  <button
                    onclick={() => viewDetail(h)}
                    class="view-detail-btn"
                    aria-label="View detailed comparison"
                  >
                    <div class="btn-content">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      <span>View Details</span>
                    </div>
                    <div class="btn-shine"></div>
                  </button>
                </div>

                <!-- Card Overlay -->
                <div class="card-overlay"></div>
              </div>
            {/each}
          </div>
        {:else}
          <!-- Empty State -->
          <div class="empty-state" in:fade={{ duration: 600 }}>
            <div class="empty-icon">
              <svg class="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 class="empty-title">No Comparisons Yet</h4>
            <p class="empty-description">
              Start comparing products to see your history here. Your insights and analysis will be saved for future reference.
            </p>
            <div class="empty-features">
              <div class="feature-item">
                <div class="feature-icon">📊</div>
                <span>Track comparisons</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🔍</div>
                <span>Review insights</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📈</div>
                <span>Make better decisions</span>
              </div>
            </div>
            <button class="start-comparing-btn" aria-label="Start comparing products">
              Start Comparing Products
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* Main Container */
  .history-container {
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
  .history-header {
    padding: 32px 32px 24px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
  }

  /* Stats Bar */
  .stats-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 24px;
    background: rgba(248, 250, 252, 0.5);
    border-radius: 20px;
    border: 1px solid rgba(226, 232, 240, 0.3);
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .stat-number {
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stat-label {
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
    text-align: center;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(226, 232, 240, 0.5);
  }

  /* Content Area */
  .history-content {
    padding: 32px;
  }

  /* History Grid */
  .history-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;
  }

  /* History Card */
  .history-card {
    position: relative;
    background: linear-gradient(135deg, #ffffff, #f8fafc);
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .history-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
  }

  /* Card Header */
  .card-header {
    padding: 24px 24px 20px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
  }

  .status-indicator {
    width: 32px;
    height: 32px;
    background: rgba(34, 197, 94, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .timestamp {
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
  }

  .comparison-meta {
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
  }

  .remove-button {
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

  .remove-button:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: scale(1.1);
  }

  /* Products Section */
  .products-section {
    padding: 20px 24px;
  }

  .products-title {
    font-size: 14px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .product-tag {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 12px;
    padding: 8px 16px;
    transition: all 0.3s ease;
  }

  .product-tag:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15));
    border-color: rgba(59, 130, 246, 0.3);
    transform: scale(1.05);
  }

  .product-name {
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
  }

  .vs-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(148, 163, 184, 0.1);
    border-radius: 50%;
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
  }

  /* Action Section */
  .action-section {
    padding: 20px 24px 24px;
    border-top: 1px solid rgba(226, 232, 240, 0.5);
  }

  .view-detail-btn {
    position: relative;
    width: 100%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    padding: 14px 20px;
    border-radius: 16px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  .view-detail-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
  }

  .btn-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .view-detail-btn:hover .btn-shine {
    left: 100%;
  }

  /* Card Overlay */
  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  .history-card:hover .card-overlay {
    opacity: 1;
  }

  /* Empty State */
  .empty-state {
    text-align: center;
    padding: 80px 40px;
  }

  .empty-icon {
    width: 120px;
    height: 120px;
    margin: 0 auto 32px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .empty-title {
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 16px;
  }

  .empty-description {
    font-size: 16px;
    color: #64748b;
    max-width: 400px;
    margin: 0 auto 32px;
    line-height: 1.6;
  }

  .empty-features {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 40px;
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .feature-item span {
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
  }

  .start-comparing-btn {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  }

  .start-comparing-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .history-header {
      padding: 24px 20px 20px;
    }

    .history-content {
      padding: 24px 20px;
    }

    .history-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .stats-bar {
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    .stat-divider {
      width: 100%;
      height: 1px;
    }

    .empty-features {
      flex-direction: column;
      gap: 20px;
    }

    .empty-state {
      padding: 60px 20px;
    }
  }

  @media (max-width: 480px) {
    .card-header {
      padding: 20px 16px 16px;
    }

    .products-section {
      padding: 16px;
    }

    .action-section {
      padding: 16px;
    }

    .empty-icon {
      width: 80px;
      height: 80px;
    }

    .empty-title {
      font-size: 20px;
    }
  }
</style>
