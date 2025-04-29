<script>
// @ts-nocheck

    // This will receive the list of products to compare from CompareSearch
    /**
   * @type {any[]}
   */
     export let compareItems = [];
  
    // In a real application, you would fetch detailed information for these products
    // based on their IDs. For now, we'll just display their names.
    const productDetails = {
      'sample1': { name: 'iPhone 16 Pro Max', display: '6.9 inch', camera: '48MP' },
      'sample2': { name: 'Samsung Galaxy S25 Ultra', display: '6.8 inch', camera: '200MP' },
      'sample3': { name: 'Google Pixel 9 Pro', display: '6.7 inch', camera: '50MP' },
      // ... more product details
    };
  
    /**
   * @param {{ id: any; }} product
   */
    function removeFromCompare(product) {
      compareItems = compareItems.filter(item => item.id !== product.id);
      // You might want to notify other components about this change
    }
  </script>
  
  <div class="compare-sheet">
    <h2>Compare Products</h2>
    {#if compareItems.length > 0}
      <div class="product-grid">
        <div class="product-header"></div>
        {#each compareItems as item}
          <div class="product-name">
            {productDetails[item.id]?.name || item.name}
            <button class="remove-button" on:click={() => removeFromCompare(item)}>Remove</button>
          </div>
        {/each}
  
        <div class="feature-row">
          <div class="feature-name">Display</div>
          {#each compareItems as item}
            <div class="feature-value">{productDetails[item.id]?.display || 'N/A'}</div>
          {/each}
        </div>
  
        <div class="feature-row">
          <div class="feature-name">Camera</div>
          {#each compareItems as item}
            <div class="feature-value">{productDetails[item.id]?.camera || 'N/A'}</div>
          {/each}
        </div>
  
        </div>
    {:else}
      <p>Add products to compare.</p>
    {/if}
  </div>
  
  <style>
    .compare-sheet {
      /* Styles for the compare sheet */
    }
  
    .compare-sheet h2 {
      margin-bottom: 10px;
    }
  
    .product-grid {
      display: grid;
      grid-template-columns: auto repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px;
    }
  
    .product-header {
      font-weight: bold;
    }
  
    .product-name {
      text-align: center;
      padding: 10px;
      background-color: #f0f0f0;
      border-radius: 4px;
      position: relative;
    }
  
    .remove-button {
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 5px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.8em;
      color: #777;
    }
  
    .feature-row {
      display: grid;
      grid-template-columns: auto repeat(auto-fit, minmax(150px, 1fr));
      padding: 8px 0;
      border-top: 1px solid #eee;
    }
  
    .feature-name {
      font-weight: bold;
    }
  
    .feature-value {
      text-align: center;
    }
  </style>