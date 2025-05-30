<!-- src/lib/components/ProjectTable.svelte -->
    <script lang="ts">
  import ProjectTable from '$lib/components/admin/ProjectTable.svelte';

  type Project = {
    title: string;
    status: 'Completed' | 'In Progress' | 'Pending';
  };

  let projects: Project[] = [
    { title: 'Redesign Website', status: 'In Progress' },
    { title: 'Launch Campaign', status: 'Completed' }
  ];



</script>

<table class="min-w-full bg-white rounded-lg shadow overflow-hidden">
  <thead class="bg-gray-100 text-gray-600 text-left">
    <tr>
      <th class="p-4">Title</th>
      <th class="p-4">Status</th>
      <th class="p-4">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each projects as project}
      <tr class="border-t hover:bg-gray-50 transition">
        <td class="p-4">{project.title}</td>
        <td class="p-4">
          <span class="px-3 py-1 rounded-full text-sm font-medium
            {project.status === 'Completed' ? 'bg-green-100 text-green-700' :
              project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
              'bg-gray-200 text-gray-600'}">
            {project.status}
          </span>
        </td>
        <td class="p-4 space-x-3">
          <button class="text-blue-600 hover:underline">View</button>
          <button class="text-red-600 hover:underline">Archive</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
