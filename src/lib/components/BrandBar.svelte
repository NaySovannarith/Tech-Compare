<script>
  import { brands } from '$lib/data/brands';
</script>

<div class="bg-white rounded-t-2xl p-6 flex flex-wrap justify-center gap-x-10 gap-y-6 shadow">
  {#each brands as { name, logo }}
    <img 
      src={logo} 
      alt={name} 
      class="h-6 sm:h-8 object-contain"
    />
  {/each}
</div>
