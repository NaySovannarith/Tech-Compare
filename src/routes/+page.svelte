<script lang="ts">
  import BrandBar from '$lib/components/BrandBar.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { products } from '$lib/data/products';
</script>

<!-- Horizontally scrollable image section -->
<div class="w-full overflow-x-auto hide-scrollbar mt-[50px]">
  <div class="flex gap-4 px-4 py-6 w-max">
    <img
      src="/images/product.jpg"
      alt="Phone 1"
      class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0"
    />
    <img
      src="/images/tv.jpg"
      alt="Phone 2"
      class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0"
    />
    <!-- svelte-ignore a11y_media_has_caption -->
    <video
    src="/images/vs.mp4"
    class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0"
    autoplay
    muted
    loop
    playsinline
  ></video>
  
    <img
      src="/images/ipad.jpg"
      alt="Phone 3"
      class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0"
    />
    <img
      src="/images/iphone.jpg"
      alt="Phone 3"
      class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0"
    />
    <img
      src="/images/tablet.jpg"
      alt="Phone 3"
      class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0"
    />
  </div>
</div>


<!-- Product Grid -->
<div class="min-h-screen bg-[#e3eadd] p-6 rounded-t-3xl">
  <BrandBar />

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
    {#each products as product}
      <ProductCard {...product} />
    {/each}
  </div>
</div>

<style>
  /* Hide the scrollbars */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
</style>