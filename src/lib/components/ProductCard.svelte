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

<div class="flex justify-center items-center w-full py-2">
  <div class="flex bg-white rounded-2xl shadow-md overflow-hidden w-[38rem] h-[23rem] border border-gray-100 hover:shadow-xl transition duration-300">
    <!-- Image -->
    <div class="w-[40%] p-5 flex items-center justify-center">
      <img src={image} alt={title} class="h-48 object-contain" />
    </div>

    <!-- Details -->
    <div class="w-[60%] py-6 pr-7 pl-5 flex flex-col justify-between">
      <div class="flex flex-col gap-3">
        <p class="text-base font-semibold text-gray-500 italic">{brand}</p>
        <h2 class="text-2xl font-bold text-[#00332e] italic border-b border-gray-300 pb-1">{title}</h2>

        <div class="mt-3 space-y-2 text-[1.15rem] text-gray-700 font-medium">
          <p class="flex justify-between"><span>Storage</span><span class="text-[#00332e] font-semibold">{storage}</span></p>
          <p class="flex justify-between"><span>Memory (RAM)</span><span class="text-[#00332e] font-semibold">{memory}</span></p>
          <p class="flex justify-between"><span>Price</span><span class="text-[#00332e] font-semibold">{price}$</span></p>
        </div>
      </div>

      <!-- Button + Heart Icon Container -->
      <div class="mt-5 flex justify-between items-center">
        <!-- More Detail Button -->
        <a
          href="/product_list/product_detail"
          class="px-6 py-2 bg-[#00332e] text-white text-sm rounded-full hover:bg-[#00584f] transition-all duration-200 shadow-sm flex items-center gap-1"
        >
          More Detail →
        </a>

        <!-- Heart Icon aligned with More Detail Button -->
        <button
          type="button"
          on:click={() => goto('/wishlists')}
          class="w-5 h-5 cursor-pointer hover:text-red-500 transition ml-4"
          aria-label="Wishlists"
        >
          <Heart class="w-full h-full" />
        </button>
      </div>
    </div>
  </div>
</div>
