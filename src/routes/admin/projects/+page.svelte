<script>
     import ProjectTable from '$lib/components/admin/ProjectTable.svelte';
  let projects = [
    { id: 1, title: 'Redesign Website', status: 'In Progress' },
    { id: 2, title: 'Launch Marketing Campaign', status: 'Completed' },
  ];
</script>

<h1 class="text-2xl font-bold mb-6">Projects</h1>
<table class="min-w-full bg-white rounded-lg shadow overflow-hidden">
  <thead class="bg-gray-100 text-gray-600 text-left">
    <tr>
      <th class="p-4">Project</th>
      <th class="p-4">Status</th>
      <th class="p-4">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each projects as project}
      <tr class="border-t">
        <td class="p-4">{project.title}</td>
        <td class="p-4">{project.status}</td>
        <td class="p-4">
          <button class="text-blue-600 hover:underline">View</button>
          <button class="text-red-600 hover:underline ml-4">Archive</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
