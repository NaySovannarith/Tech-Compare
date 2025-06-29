<script lang="ts">
  import { wishlist } from '$lib/wishlist/wishlist';
  import { Heart } from 'lucide-svelte';
  import WishlistModal from './wishlist/WishlistModal.svelte';
  import { get } from 'svelte/store';

  export let id: number;
  export let title: string;
  export let brand: string;
  export let image: string;
  export let resolution: string;
  export let size: string;
  export let price: number;

  let showModal = false;
  let imageError = false;

  const product = {
    id,
    title,
    brand,
    image,
    resolution,
    size,
    price,
    thumbnail: image,
    description: `${resolution} Resolution / ${size} Size`
  };

  $: isWishlisted = Array.isArray($wishlist) &&
    $wishlist.some(item => Number(item?.product?.id) === id);

  async function toggleWishlist() {
    if (!isWishlisted) {
      await wishlist.addToWishlist(id);
      showModal = true;
    } else {
      const allItems = get(wishlist);
      const item = Array.isArray(allItems)
        ? allItems.find(item => Number(item?.product?.id) === id)
        : null;
      if (item) {
        await wishlist.removeWishlist(item.id);
      }
      showModal = false;
    }
  }

  function handleImageError() {
    imageError = true;
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }
</script>

<div class="flex justify-center items-center w-full py-2">
  <div class="flex bg-white rounded-2xl shadow-md overflow-hidden w-[38rem] h-[23rem] border border-gray-100 hover:shadow-2xl transition transform duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-[#FFFFFF] cursor-pointer">
    <!-- Image -->
    <div class="w-[40%] p-5 flex items-center justify-center bg-gray-50">
      {#if !imageError}
        <img 
          src={image} 
          alt={title} 
          class="h-48 object-contain"
          on:error={handleImageError}
        />
      {:else}
        <div class="h-48 w-full flex items-center justify-center bg-gray-200 rounded">
          <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
          </svg>
        </div>
      {/if}
    </div>

    <!-- Details -->
    <div class="w-[60%] py-6 pr-7 pl-5 flex flex-col justify-between">
      <div class="flex flex-col gap-3">
        <p class="text-base font-semibold text-gray-500 italic">{brand}</p>
        <h2 class="text-2xl font-bold text-[#00332e] italic border-b border-gray-300 pb-1 line-clamp-2">
          {title}
        </h2>

        <div class="mt-3 space-y-2 text-[1.15rem] text-gray-700 font-medium">
          <p class="flex justify-between">
            <span>Resolution</span>
            <span class="text-[#00332e] font-semibold">{resolution}</span>
          </p>
          <p class="flex justify-between">
            <span>Size</span>
            <span class="text-[#00332e] font-semibold">{size}</span>
          </p>
          <p class="flex justify-between">
            <span>Price</span>
            <span class="text-[#00332e] font-semibold text-lg">{formatPrice(price)}</span>
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-5 flex justify-between items-center">
        <a
          href="/product_list/product_detail/{id}"
          class="px-6 py-2 bg-[#00332e] text-white text-sm rounded-full hover:bg-[#00584f] transition-all duration-200 shadow-sm flex items-center gap-1"
        >
          More Detail →
        </a>

        <button
          type="button"
          on:click={toggleWishlist}
          class="w-5 h-5 cursor-pointer transition hover:scale-110"
          aria-label="Toggle Wishlist"
        >
          {#if isWishlisted}
            <Heart class="w-full h-full text-red-500 fill-current" />
          {:else}
            <Heart class="w-full h-full text-gray-400 hover:text-red-500" />
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>

{#if showModal}
  <WishlistModal product={product} onClose={() => (showModal = false)} />
{/if}

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
