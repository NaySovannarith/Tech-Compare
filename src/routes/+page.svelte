<script lang="ts">
  import BrandBar from "$lib/components/BrandBar.svelte";
  import ProductCard from "$lib/components/ProductCard.svelte";
  import { products } from "$lib/data/products";
</script>

<!-- Scrollable Image Section with Center Focus -->
<div
  class="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar mt-[100px]"
>
  <div class="flex gap-6 px-10 py-6 w-max relative">
    <div class="snap-center transition-all duration-300 flex-shrink-0">
      <img
        src="/images/product.jpg"
        alt="Phone 1"
        class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0 blur-sm hover:blur-0 transition duration-300"
      />
    </div>

    <div class="snap-center transition-all duration-300 flex-shrink-0">
      <img
        src="/images/ipad.jpg"
        alt="Phone 2"
        class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0 blur-sm hover:blur-0 transition duration-300"
      />
    </div>

    <div class="snap-center transition-all duration-300 flex-shrink-0">
      <!-- svelte-ignore a11y_media_has_caption -->
      <video
        src="/images/vs.mp4"
        class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0 blur-sm hover:blur-0 transition duration-300"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>

    <div class="snap-center transition-all duration-300 flex-shrink-0">
      <img
        src="/images/iphone.jpg"
        alt="Phone 3"
        class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0 blur-sm hover:blur-0 transition duration-300"
      />
    </div>

    <div class="snap-center transition-all duration-300 flex-shrink-0">
      <img
        src="/images/tv.jpg"
        alt="Phone 4"
        class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0 blur-sm hover:blur-0 transition duration-300"
      />
    </div>

    <div class="snap-center transition-all duration-300 flex-shrink-0">
      <img
        src="/images/tablet.jpg"
        alt="Phone 5"
        class="h-[400px] w-auto rounded-2xl object-cover flex-shrink-0 blur-sm hover:blur-0 transition duration-300"
      />
    </div>
  </div>
</div>

<!-- Product Grid -->
<div class="min-h-screen bg-[#a3d5c7] p-6 rounded-t-3xl">
  <BrandBar />
</div>

<!-- Product Grid Section with light green background -->
<div class="min-h-screen bg-[#a3d5c7] px-6 py-10">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {#each products as product}
      <ProductCard {...product} />
    {/each}
  </div>

  <div class="mt-6 text-center">
    <button class="bg-white px-4 py-2 rounded-md shadow hover:bg-gray-200">
      View All Phones
    </button>
  </div>
</div>

<style>
  /* Hide the scrollbars */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
  }
</style>
