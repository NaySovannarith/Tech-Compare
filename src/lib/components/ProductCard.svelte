<script>
  export let title;
  export let brand;
  export let image;
  export let storage;
  export let memory;
  export let price;
</script>

<div class="flex bg-[#f5f5f5] rounded-2xl shadow-lg overflow-hidden w-full h-64">
  <!-- Image -->
  <div class="w-1/2 p-6 flex items-center justify-center bg-white">
    <img src={image} alt={title} class="h-48 object-contain" />
  </div>

  <!-- Details -->
  <div class="w-1/2 p-6 flex flex-col justify-between">
    <div>
      <p class="text-sm font-semibold text-gray-500">{brand.toUpperCase()}</p>
      <h2 class="text-2xl font-semibold">{title}</h2>

      <div class="mt-3 space-y-2 text-base">
        <p class="flex justify-between"><span>Storage</span> <span class="font-semibold">{storage}</span></p>
        <p class="flex justify-between"><span>Memory (RAM)</span> <span class="font-semibold">{memory}</span></p>
        <p class="flex justify-between"><span>Price</span> <span class="font-semibold">{price}$</span></p>
      </div>
    </div>

    <button
      class="mt-4 self-start px-5 py-2 bg-[#00332e] text-white text-sm rounded-full hover:bg-[#00584f] flex items-center gap-2 transition"
    >
      More Detail
      <span>→</span>
    </button>
  </div>
</div>
