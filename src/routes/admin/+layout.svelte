<script>
  import Sidebar from '$lib/components/admin/Sidebar.svelte';
</script>

<div class="flex min-h-screen bg-gray-100 pt-24">
  <Sidebar />
  <div class="flex-1 p-8 overflow-auto">
    <slot />
  </div>
</div>
