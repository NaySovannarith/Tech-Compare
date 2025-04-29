<script lang="ts">

    let searchTerm = '';
    let compareList: any[] = []; // To store products added for comparison
  
    async function handleSearch() {
      // In a real application, you would fetch data based on the searchTerm
      // For this example, we'll simulate a search result
      const searchResults = [
        { id: 'product1', name: 'Awesome Phone X' },
        { id: 'product2', name: 'Super Camera Y' },
        { id: 'product3', name: 'Smart Watch Z' },
      ].filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
      // For now, let's just log the results. You'd typically display these to the user.
      console.log('Search results:', searchResults);
    }
  
    function addToCompare(product: { id: any; name: any; }) {
      if (!compareList.find(item => item.id === product.id)) {
        compareList = [...compareList, product];
        console.log('Added to compare:', product);
        // In a real app, you might want to notify the CompareSheet component
      } else {
        alert(`${product.name} is already in the compare list.`);
      }
    }
  </script>
  
  <div class="compare-search">
    <div class="search-bar">
      <input type="text" bind:value={searchTerm} placeholder="Write to add">
      <button on:click={handleSearch}>Compare</button>
    </div>
  
    <div class="add-to-compare">
      <p>Add to compare</p>
      <div class="sample-products">
        <button on:click={() => addToCompare({ id: 'sample1', name: 'iPhone 16 Pro Max' })}>
          <span class="plus-icon">+</span> iPhone 16 Pro Max
        </button>
        <button on:click={() => addToCompare({ id: 'sample2', name: 'Samsung Galaxy S25 Ultra' })}>
          <span class="plus-icon">+</span> Samsung Galaxy S25 Ultra
        </button>
        <button on:click={() => addToCompare({ id: 'sample3', name: 'Google Pixel 9 Pro' })}>
          <span class="plus-icon">+</span> Google Pixel 9 Pro
        </button>
        </div>
    </div>
  </div>
  
  <style>
    .compare-search {
  background-color: #f4fdfa;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 51, 46, 0.05);
  margin-bottom: 2rem;
  border: 1px solid #d1eae4;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.search-bar input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.search-bar button {
  padding: 0.75rem 1.25rem;
  background-color: #00332e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.add-to-compare p {
  margin: 1rem 0 0.5rem;
  font-weight: bold;
}

.sample-products {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sample-products button {
  padding: 0.5rem 1rem;
  background-color: #e0e0e0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.sample-products button:hover {
  background-color: #ccc;
}

.plus-icon {
  margin-right: 5px;
  font-weight: bold;
}
.sample-products {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 0.5rem;
}

.sample-products button {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1rem;
  background-color: #e6f4f1;
  border: 1px solid #a7d6cd;
  border-radius: 8px;
  color: #00332e;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
}

.sample-products button:hover {
  background-color: #d2ece7;
  transform: scale(1.02);
}

.plus-icon {
  margin-right: 6px;
  font-weight: bold;
  color: #007b7b;
}


</style>