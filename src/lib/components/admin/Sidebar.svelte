<script lang="ts">
  import { Icon } from "lucide-svelte";
  import Icons from '$lib/components/admin/Icon.svelte'; 

  let active = 'Product';

  const menu = [
    { name: 'Dashboard', icon: 'search' },
    { name: 'Product', icon: 'box' },
    { name: 'Customers', icon: 'user' },
    { name: 'Analysis', icon: 'bar-chart' },
    { name: 'Promote', icon: 'sparkles' },
    { name: 'Help', icon: 'help-circle' },
  ];
</script>

<aside class="w-64 min-h-screen bg-white border-r px-4 py-6">
  <div class="mb-10 flex items-center gap-2 px-2">
    <img src="/logo.svg" alt="logo" class="h-6" />
    <span class="text-xl font-semibold tracking-wide text-gray-700">OUUUU.</span>
  </div>

  <nav class="space-y-2">
    {#each menu as item}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition 
                ${active === item.name 
                  ? 'bg-violet-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
        on:click={() => active = item.name}
      >
        <div class="flex items-center gap-3">
          <Icon name={item.icon} class="w-5 h-5" />
          <span>{item.name}</span>
        </div>
        {#if active === item.name}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        {/if}
      </div>
    {/each}
  </nav>
</aside>
