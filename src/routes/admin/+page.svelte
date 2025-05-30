<script>
  import UserTable from '$lib/components/admin/UserTable.svelte';
  import ProjectTable from '$lib/components/admin/ProjectTable.svelte';
  import Card from '$lib/components/admin/Card.svelte';
  import ProjectCard from '$lib/components/admin/ProjectCard.svelte';
  import ProjectManager from '$lib/components/admin/ProjectManager.svelte';

  let show = 'users'; // Toggle to 'projects' if needed
</script>

<div class="flex min-h-screen">
  <!-- Main content area -->
  <main class="flex-1 pt-4 px-6 bg-gray-100">
    <Card />
    {#if show === 'users'}
      <UserTable />
    {:else if show === 'projects'}
      <ProjectTable />
    {/if}
  </main>
</div>

<style>
  .flex {
    display: flex;
  }
</style>
