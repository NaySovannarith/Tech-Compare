<script>
    import { brands } from '$lib/data/brands';
  </script>
  
  <div class="bg-white rounded-md p-4 flex flex-wrap justify-center gap-6 shadow">
    {#each brands as brand}
    <img src="/images/11.png" alt="home"  class="h-6 sm:h-8 object-contain" />
    {/each}
  </div>
  