<script>
    // @ts-nocheck
    
      import { goto } from '$app/navigation';
      import { addToWishlist, wishlist } from '$lib/wishlist/wishlist';
      import { Heart, HeartOff } from 'lucide-svelte';
      import { get } from 'svelte/store';

       
    
      export let title;
      export let brand;
      export let image;
      export let bluetooth;
      export let battery;
      export let price;
    
      const id = `${title}-${bluetooth}-${battery}`; // or pass `id` directly from ProductGrid
    
      const product = {
        id,
        title,
        brand,
        image,
        bluetooth,
        battery,
        price,
        thumbnail: image,
        description: `${bluetooth} Bluetooth / ${battery} Battery`,
      };
    
      // Reactive: check if product is already in wishlist
      $: isWishlisted = $wishlist.some(item => item.id === id);
    
      function toggleWishlist() {
        if (!isWishlisted) {
          addToWishlist(product);
        } else {
          wishlist.update(items => items.filter(item => item.id !== id));
        }
      }
    </script>
    
    <div class="flex bg-[#f5f5f5] hover:bg-[#e0e0e0] transition transform hover:-translate-y-2 hover:scale-105 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden w-full h-64 cursor-pointer">
      <!-- Image -->
      <div class="w-1/2 p-6 flex items-center justify-center bg-white">
        <img src={image} alt={title} class="h-48 object-contain" />
      </div>
    
      <!-- Details -->
      <div class="w-1/2 p-6 flex flex-col justify-between">
        <div>
          <p class="text-sm font-semibold text-gray-500">{brand.toUpperCase()}</p>
          <h2 class="text-xl font-semibold">{title}</h2>
    
          <div class="mt-3 space-y-2 text-base">
            <p class="flex justify-between"><span>Bluetooth</span> <span class="font-semibold">{bluetooth}</span></p>
            <p class="flex justify-between"><span>Battery</span> <span class="font-semibold">{battery}</span></p>
            <p class="flex justify-between"><span>Price</span> <span class="font-semibold">{price}$</span></p>
          </div>
        </div>
    
        <!-- More Detail Button + Heart -->
        <div class="flex items-center justify-between mt-4">
    
          <a href="/product_list/product_detail"
      class="mt-4 self-start px-5 py-2 bg-[#00332e] text-white text-sm rounded-full hover:bg-[#00584f] flex items-center gap-2 transition"
    >
      More Detail
      <span>→</span>
    </a>
    
    
          <!-- Heart Icon -->
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