<script>
    let activeTab = 'list'; // 'list' or 'sheet'
  
    /**
   * @param {string} tabName
   */
    function switchTab(tabName) {
      activeTab = tabName;
    }
  </script>
  
  <div class="compare-tabs">
    <button class:active={activeTab === 'list'} on:click={() => switchTab('list')}>Compare List</button>
    <button class:active={activeTab === 'sheet'} on:click={() => switchTab('sheet')}>Compare Sheet</button>
  
    <div class="tab-content">
      {#if activeTab === 'list'}
        <slot name="compareListContent"></slot>
      {:else if activeTab === 'sheet'}
        <slot name="compareSheetContent"></slot>
      {/if}
    </div>
  </div>
  
  <style>
    .compare-tabs {
      margin-top: 20px;
      background-color: #f4fdfa;
      box-shadow: 0 2px 6px rgba(0, 51, 46, 0.05);
      border: 1px solid #d1eae4;
      border-radius: 12px;
    }
  
    .compare-tabs button {
      padding: 10px 15px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-weight: bold;
      color: #555;
    }
  
    .compare-tabs button.active {
      color: #00332e;
      border-bottom: 2px solid #00332e;
    }
  
    .tab-content {
      padding: 15px;
    }
  </style>