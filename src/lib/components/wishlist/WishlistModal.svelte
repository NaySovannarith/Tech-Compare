<script>
  import { goto } from "$app/navigation";
  import { Heart } from "lucide-svelte";
  import { onMount, onDestroy } from 'svelte';


    export let product;
    export let onClose;

      onMount(() => {
    document.body.style.overflow = 'hidden'; // disable scroll
  });

  onDestroy(() => {
    document.body.style.overflow = ''; // restore scroll
  });
    
  </script>
  
  <div class=" modal-backdrop fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg w-[90%] max-w-xl shadow-xl relative">
      <button class="absolute top-2 right-3 text-xl" on:click={onClose}>×</button>
      <div class="mb-4 flex items-center gap-2">
        <h2 class="text-xl font-semibold ">Added to Wish List</h2> 
        <Heart class="w-4 h-4 animate-pulse text-pink-500" />
      </div>

       
      <div class="bg-[#2c2c2c] text-sm flex items-center gap-2 p-3 rounded mb-5">
        <span class="text-green-400 text-lg">●</span>
        <span class="text-white">1 item added to 
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_missing_attribute -->
          <a on:click={() => goto('/wishlists')} class=" cursor-pointer underline text-blue-400 hover:text-blue-300">
            My Wish Lists</a>.</span>
      </div>

  
      <div class="mt-6 flex gap-6">
        <img src={product.image} alt={product.title} class="h-20 w-20 object-cover rounded" />
        <div>
          <p class="font-bold">{product.title}</p>
          <p class="text-sm text-gray-600">{product.description}</p>
          <p class="text-green-700 font-semibold mt-2">${product.price}</p>
        </div>
      </div>

      <!-- Horizontal line -->
      <hr class="border-t border-gray-700 my-6" />
  
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="mt-8 flex justify-end gap-6">
        <button on:click={onClose} class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Stay Here</button>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_missing_attribute -->
        <a on:click={() => goto('/wishlists')} 
          class="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded hover:bg-blue-700">View My Wish Lists</a>
      </div>
    </div>
  </div>

   <style>
  .modal-backdrop {
    @apply fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50;
  }
</style>
  
  