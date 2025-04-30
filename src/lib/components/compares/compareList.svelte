<script>
    // In a real application, you would have a way to store and retrieve the compare history
    let comparisonHistory = [
      { id: 1, products: ['iPhone 14 Pro', 'Google Pixel 7 Pro'] },
      { id: 2, products: ['Samsung Galaxy S24', 'OnePlus 12'] },
      { id: 3, products: ['Iphone 15', 'iphone 15 ProMax'] },
    ];
  </script>
  
  <div class="compare-list">
    <h2>Comparison History</h2>
    {#if comparisonHistory.length > 0}
      <ul>
        {#each comparisonHistory as historyItem}
          <li>
            {historyItem.products.join(' vs ')}
            <button>View Details</button>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No comparison history yet.</p>
    {/if}
  </div>
  
  <style>
    .compare-list {
  background-color: #f4fdfa;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #d1eae4;
  box-shadow: 0 2px 6px rgba(0, 51, 46, 0.05);
}

.compare-list h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #00332e;
}

.compare-list ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.compare-list li {
  background-color: #e6f4f1;
  margin-bottom: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 4px solid #00332e;
  box-shadow: 0 1px 3px rgba(0, 51, 46, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
}

.compare-list li:hover {
  background-color: #d8ede9;
}

.compare-list li span {
  font-weight: 500;
  color: #00332e;
}

.compare-list li button {
  background-color: transparent;
  border: 1px solid #00332e;
  color: #00332e;
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.compare-list li button:hover {
  background-color: #00332e;
  color: #ffffff;
}

  </style>