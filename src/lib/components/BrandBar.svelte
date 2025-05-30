<script lang="ts">
  import { goto } from '$app/navigation';
  import { brands } from '$lib/data/logo';

  const handleBrandClick = (brandName: string): void => {
    const route = `/brands/${brandName.toLowerCase()}`;
    goto(route);
  };
</script>

<div class="bg-white rounded-t-2xl p-6 flex flex-wrap justify-center gap-x-10 gap-y-6 shadow">
  {#each brands as { name, logo }}
    <img 
      src={logo || "/placeholder.svg"} 
      alt={name} 
      class="h-8 sm:h-12 object-contain cursor-pointer hover:opacity-80 transition-opacity"
      on:click={() => handleBrandClick(name)}
    />
  {/each}
</div>