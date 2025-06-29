<script lang="ts">
  type Product = {
    name: string;
    price: string;
    rating: string;
    features: string[];
    specs: Record<string, string>;
  };

  export let products: Product[] = [];
  export let show: boolean = false;
  export let close: () => void = () => {};

  // Sample fallback if no products passed
  if (products.length === 0) {
    products = [
      {
        name: "Phone A",
        price: "$699",
        rating: "4.5",
        features: ["OLED", "5G", "128GB"],
        specs: { CPU: "Snapdragon 8", RAM: "8GB", Battery: "4000mAh" },
      },
      {
        name: "Phone B",
        price: "$799",
        rating: "4.7",
        features: ["AMOLED", "5G", "256GB"],
        specs: { CPU: "Snapdragon 8+", RAM: "12GB", Battery: "4500mAh" },
      },
    ];
  }

  const specKeys = Object.keys(products[0]?.specs || {});
</script>

{#if show}
  <div class="modal-backdrop" on:click={close}></div>
  <div class="modal">
    <div class="modal-header">
      <h2>Product Comparison</h2>
      <button on:click={close}>&times;</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Attribute</th>
          {#each products as p}
            <th>{p.name}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          {#each products as p}
            <td>{p.price}</td>
          {/each}
        </tr>
        <tr>
          <td>Rating</td>
          {#each products as p}
            <td>{p.rating}</td>
          {/each}
        </tr>
        <tr>
          <td>Features</td>
          {#each products as p}
            <td>{p.features.join(", ")}</td>
          {/each}
        </tr>
        {#each specKeys as key}
          <tr>
            <td>{key}</td>
            {#each products as p}
              <td>{p.specs[key]}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }

  .modal {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    max-width: 90%;
    z-index: 1000;
    overflow-x: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 0.75rem;
    text-align: center;
  }

  th {
    background-color: #f5f5f5;
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>
