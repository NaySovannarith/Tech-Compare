<script>
  // @ts-nocheck
  import { goto } from '$app/navigation';
  import { addToWishlist, wishlist } from '$lib/wishlist/wishlist';
  import { Heart } from 'lucide-svelte';
  import { get } from 'svelte/store';

  export let title;
  export let brand;
  export let image;
  export let storage;
  export let memory;
  export let price;

  const id = `${title}-${storage}-${memory}`;

  const product = {
    id,
    title,
    brand,
    image,
    storage,
    memory,
    price,
    thumbnail: image,
    description: `${storage} Storage / ${memory} RAM`,
  };

  $: isWishlisted = $wishlist.some(item => item.id === id);

  function toggleWishlist() {
    if (!isWishlisted) {
      addToWishlist(product);
    } else {
      wishlist.update(items => items.filter(item => item.id !== id));
    }
  }
</script>

<!-- Card container -->
<div class="flex justify-center items-center w-full py-1">
  <div class="flex bg-white rounded-2xl shadow-md overflow-hidden w-[36rem] h-[22rem] border border-gray-100 hover:shadow-xl transition duration-300">
    <!-- Image section -->
    <div class="w-[40%] p-4 flex items-center justify-center">
      <img src={image} alt={title} class="h-44 object-contain" />
    </div>

    <!-- Text/details section -->
    <div class="w-[60%] py-5 pr-6 pl-4 flex flex-col justify-between">
      <div class="flex flex-col gap-2">
        <p class="text-sm font-semibold text-gray-500 italic">{brand}</p>
        <h2 class="text-xl font-bold text-[#00332e] italic border-b border-gray-300 pb-1">{title}</h2>

        <div class="mt-2 space-y-2 text-[1rem] text-gray-700 font-medium">
          <p class="flex justify-between"><span>Storage</span><span class="text-[#00332e] font-semibold">{storage}</span></p>
          <p class="flex justify-between"><span>Memory (RAM)</span><span class="text-[#00332e] font-semibold">{memory}</span></p>
          <p class="flex justify-between"><span>Price</span><span class="text-[#00332e] font-semibold">{price}$</span></p>
        </div>
      </div>

      <!-- Button and Heart -->
      <div class="mt-4 flex justify-between items-center">
        <a
          href="/product_list/product_detail"
          class="px-5 py-1.5 bg-[#00332e] text-white text-sm rounded-full hover:bg-[#00584f] transition-all duration-200 shadow-sm flex items-center gap-1"
        >
          More Detail →
        </a>

        <button
          type="button"
          on:click={toggleWishlist}
          class="w-5 h-5 cursor-pointer transition"
          aria-label="Wishlists"
        >
          {#if isWishlisted}
            <Heart class="w-full h-full text-red-500" />
          {:else}
            <Heart class="w-full h-full text-gray-400 hover:text-red-500" />
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>
