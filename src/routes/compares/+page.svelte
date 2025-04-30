<script lang="ts">
// @ts-nocheck

  import CompareSearch from '$lib/components/compares/compareSearch.svelte';
  import CompareTabs from '$lib/components/compares/compareTabs.svelte';
  import CompareList from '$lib/components/compares/compareList.svelte';
  import CompareSheet from '$lib/components/compares/compareSheet.svelte';

  import { compareSheet } from '$lib/data/stores';
  import type { Product } from '$lib/data/stores';

  // This will hold the products selected for comparison

  // You'll need a mechanism to share the 'productsToCompare' state
  // between CompareSearch and CompareSheet. Svelte stores or Context API
  // are good options for this in a larger application.
  // For this simple example, we'll pass it as a prop and rely on events
  // or a store for more complex interactions.

  /**
   * @param {{ id: any; }} product
   */
  function handleAddToCompare(product: Product) {
    compareSheet.update((list) => {
      if (!list.find((item) => item.id ===product.id)) {
        return [...list, produdct];
      }
      return list;
    });
  }

  // In a real app, you might use a Svelte store to manage the compare list
  // and allow different components to react to changes.
</script>

<main class=" mt-[100px]">
  <CompareSearch on:addToCompare={handleAddToCompare} />

  <CompareTabs>
    <div slot="compareListContent">
      <CompareList />
    </div>
    <div slot="compareSheetContent">
      <CompareSheet compareItems={productsToCompare} />
    </div>
  </CompareTabs>
</main>

<style>
  main {
    font-family: sans-serif;
    padding: 20px;
  }
  body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background-color: #f9fafb;
  color: #333;
}

</style>
