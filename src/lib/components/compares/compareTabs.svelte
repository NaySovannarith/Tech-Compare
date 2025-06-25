<script>
  import CompareList from '$lib/components/compares/compareList.svelte';
  import CompareSheet from '$lib/components/compares/compareSheet.svelte';

  let activeTab = $state('sheet');
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
  <div class="max-w-7xl mx-auto">
    
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
        Product Comparison Hub
      </h1>
      <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Compare products side-by-side and track your comparison history with our advanced analysis tools
      </p>
    </div>

    <!-- Tabs Container -->
    <div class="tabs-container">
      
      <!-- Tab Navigation -->
      <div class="tabs-wrapper">
        <div class="tabs">
          <button
            onclick={() => (activeTab = 'sheet')}
            class="tab-button"
            class:active={activeTab === 'sheet'}
            aria-label="Switch to compare sheet view"
          >
            <div class="tab-content-wrapper">
              <div class="tab-icon-wrapper">
                <svg class="tab-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z"/>
                </svg>
              </div>
              <div class="tab-text">
                <span class="tab-title">Compare Sheet</span>
                <span class="tab-subtitle">Side-by-side analysis</span>
              </div>
            </div>
            <div class="tab-indicator"></div>
          </button>
          
          <button
            onclick={() => (activeTab = 'history')}
            class="tab-button"
            class:active={activeTab === 'history'}
            aria-label="Switch to comparison history view"
          >
            <div class="tab-content-wrapper">
              <div class="tab-icon-wrapper">
                <svg class="tab-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="tab-text">
                <span class="tab-title">Compare History</span>
                <span class="tab-subtitle">Past comparisons</span>
              </div>
            </div>
            <div class="tab-indicator"></div>
          </button>
        </div>
        
        <!-- Active Tab Background Slider -->
        <div class="tab-slider" class:slide-right={activeTab === 'history'}></div>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <div class="content-wrapper">
          {#if activeTab === 'sheet'}
            <div class="tab-panel">
              <CompareSheet />
            </div>
          {:else}
            <div class="tab-panel">
              <CompareList />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Main container */
  .tabs-container {
    max-width: 100%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 32px;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    overflow: hidden;
  }

  /* Tabs wrapper with relative positioning for slider */
  .tabs-wrapper {
    position: relative;
    padding: 12px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
    border-radius: 24px 24px 0 0;
  }

  /* Tab navigation container */
  .tabs {
    display: flex;
    position: relative;
    background: transparent;
    border-radius: 20px;
    gap: 8px;
  }

  /* Individual tab button */
  .tab-button {
    flex: 1;
    position: relative;
    padding: 20px 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
    overflow: hidden;
  }

  .tab-button:hover {
    transform: translateY(-2px);
  }

  .tab-button.active {
    transform: translateY(-4px);
  }

  /* Tab content wrapper */
  .tab-content-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    position: relative;
    z-index: 1;
  }

  /* Tab icon wrapper */
  .tab-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    transition: all 0.4s ease;
  }

  .tab-button.active .tab-icon-wrapper {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
  }

  /* Tab icon */
  .tab-icon {
    width: 24px;
    height: 24px;
    color: #64748b;
    transition: all 0.4s ease;
  }

  .tab-button.active .tab-icon {
    color: #3b82f6;
    transform: scale(1.1);
  }

  /* Tab text container */
  .tab-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  /* Tab title */
  .tab-title {
    font-size: 18px;
    font-weight: 600;
    color: #334155;
    transition: all 0.4s ease;
    line-height: 1.2;
  }

  .tab-button.active .tab-title {
    color: #1e293b;
    font-weight: 700;
  }

  /* Tab subtitle */
  .tab-subtitle {
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
    transition: all 0.4s ease;
  }

  .tab-button.active .tab-subtitle {
    color: #475569;
  }

  /* Tab indicator line */
  .tab-indicator {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .tab-button.active .tab-indicator {
    transform: translateX(-50%) scaleX(1);
  }

  /* Animated background slider */
  .tab-slider {
    position: absolute;
    top: 12px;
    left: 12px;
    width: calc(50% - 16px);
    height: calc(100% - 24px);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  .tab-slider.slide-right {
    transform: translateX(calc(100% + 8px));
  }

  /* Tab content area */
  .tab-content {
    background: linear-gradient(135deg, #ffffff, #f8fafc);
    border-radius: 0 0 24px 24px;
    min-height: 600px;
    position: relative;
    overflow: hidden;
  }

  .tab-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
  }

  /* Content wrapper */
  .content-wrapper {
    padding: 32px;
    position: relative;
  }

  /* Tab panel with animations */
  .tab-panel {
    animation: slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .tabs-container {
      margin: 16px;
      border-radius: 24px;
    }

    .tabs-wrapper {
      padding: 8px;
    }

    .tab-button {
      padding: 16px 12px;
    }

    .tab-content-wrapper {
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }

    .tab-text {
      align-items: center;
    }

    .tab-title {
      font-size: 16px;
    }

    .tab-subtitle {
      font-size: 12px;
    }

    .tab-icon-wrapper {
      width: 40px;
      height: 40px;
    }

    .tab-icon {
      width: 20px;
      height: 20px;
    }

    .content-wrapper {
      padding: 20px;
    }
  }

  @media (max-width: 480px) {
    .tab-content-wrapper {
      gap: 6px;
    }

    .tab-title {
      font-size: 14px;
    }

    .tab-subtitle {
      display: none;
    }

    .tab-icon-wrapper {
      width: 36px;
      height: 36px;
    }

    .content-wrapper {
      padding: 16px;
    }
  }

  /* Hover effects for better interactivity */
  .tab-button:hover .tab-icon-wrapper {
    transform: scale(1.05);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15));
  }

  .tab-button:hover .tab-title {
    color: #1e293b;
  }

  .tab-button:hover .tab-subtitle {
    color: #475569;
  }

  /* Focus states for accessibility */
  .tab-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }

  .tab-button:focus .tab-icon-wrapper {
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
</style>
