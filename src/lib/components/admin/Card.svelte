<script lang="ts">
  export let user: {
    name: string;
    email: string;
    role?: string;
    avatar?: string;
  } = {
    name: "Unknown User",
    email: "no-email@example.com",
    role: "Member",
    avatar: "https://ui-avatars.com/api/?name=User"
  };
</script>

<div class="bg-white shadow-md rounded-xl p-4 flex items-center space-x-4 hover:shadow-lg transition">
  <img
    src={user.avatar}
    alt={user.name}
    class="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
  />
  <div>
    <h2 class="text-lg font-semibold text-gray-900">{user.name}</h2>
    <p class="text-sm text-gray-600">{user.email}</p>
    {#if user.role}
      <p class="text-xs mt-1 inline-block px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full">
        {user.role}
      </p>
    {/if}
  </div>
</div>
    