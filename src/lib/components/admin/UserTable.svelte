<!-- src/lib/components/UserTable.svelte -->
<script lang="ts">
 import type { User } from '$lib/types/user'
  type User = {
    id: number;
    name: string;
    email: string;
    role?: string; // optional field
  };

  let users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  ];
</script>


<table class="min-w-full bg-white rounded-lg shadow overflow-hidden">
  <thead class="bg-gray-100 text-gray-600 text-left">
    <tr>
      <th class="p-4">Name</th>
      <th class="p-4">Email</th>
      <th class="p-4">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr class="border-t hover:bg-gray-50 transition">
        <td class="p-4">{user.name}</td>
        <td class="p-4">{user.email}</td>
        <td class="p-4 space-x-3">
          <button class="text-blue-600 hover:underline">Edit</button>
          <button class="text-red-600 hover:underline">Delete</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
