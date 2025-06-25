<script>
  import CompareList from '$lib/components/compares/compareList.svelte';
  import CompareSheet from '$lib/components/compares/compareSheet.svelte';

  let activeTab = 'sheet';
</script>

<div class="tabs-container">
  <div class="tabs">
    <button
      on:click={() => (activeTab = 'sheet')}
      class:active={activeTab === 'sheet'}
    >
      <span class="tab-icon">📑</span>
      Compare Sheet
    </button>
    <button
      on:click={() => (activeTab = 'history')}
      class:active={activeTab === 'history'}
    >
      <span class="tab-icon">📜</span>
      Compare History
    </button>
  </div>

  <div class="tab-content">
    {#if activeTab === 'sheet'}
      <CompareSheet />
    {:else}
      <CompareList />
    {/if}
  </div>
</div>

<style>
  :root {
    --primary-color: #00332e; /* Primary color set to #00332e */
    --primary-hover: #004d40; /* Slightly lighter for hover effects */
    --accent-light: #e6f4f1;
    --tab-bg: #f0fef9;
    --border-color: #cceee6;
    --shadow-color: rgba(0, 51, 46, 0.1);
    --hover-bg: #d8ede9;
    --active-tab-bg: #ffffff;
  }

  /* Container for tabs */
  .tabs-container {
    margin: 2rem auto;
    border: 1px solid var(--border-color);
    border-radius: 15px;
    background-color: var(--tab-bg);
    box-shadow: 0 4px 16px var(--shadow-color);
    overflow: hidden;
    max-width: 900px;
    padding: 10px;
  }

  /* Tab navigation */
  .tabs {
    display: flex;
    background-color: var(--accent-light);
    border-radius: 12px;
    overflow: hidden;
  }

  /* Individual tab button */
  .tabs button {
    flex: 1;
    padding: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: var(--primary-color);
    font-size: 16px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
  }

  /* Hover effect for tabs */
  .tabs button:hover {
    background-color: var(--hover-bg);
    box-shadow: inset 0 -3px 0 0 var(--primary-color);
    transform: translateY(-2px);
  }

  /* Active tab styling */
  .tabs button.active {
    background-color: var(--active-tab-bg);
    color: var(--primary-color);
    box-shadow: inset 0 -3px 0 0 var(--primary-color);
    font-weight: 700;
    transform: translateY(-2px);
  }

  /* Adding icons in the tabs */
  .tab-icon {
    margin-right: 8px;
    font-size: 18px;
  }

  /* Tab content styling */
  .tab-content {
    padding: 2rem;
    background-color: white;
    border-top: none;
    border-radius: 0 0 15px 15px;
    box-shadow: inset 0 1px 3px var(--shadow-color);
    animation: fadeIn 0.3s ease-in-out;
    min-height: 200px;
  }

  /* Fade-in animation for smooth transitions */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .tabs-container {
      margin: 1rem;
    }

    .tabs button {
      padding: 1rem;
      font-size: 14px;
    }

    .tab-content {
      padding: 1rem;
    }
  }
</style>
