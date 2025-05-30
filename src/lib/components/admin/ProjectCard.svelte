<script lang="ts">
  export let project: {
    title: string;
    description?: string;
    status?: "active" | "pending" | "completed";
    deadline?: string;
  } = {
    title: "Untitled Project",
    description: "No description provided.",
    status: "pending",
    deadline: "No deadline"
  };

  const statusColor = {
    active: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-blue-100 text-blue-700"
  };
</script>

<div class="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
  <div class="flex items-center justify-between mb-2">
    <h2 class="text-lg font-semibold text-gray-900">{project.title}</h2>
    {#if project.status}
      <span
        class={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[project.status]}`}
      >
        {project.status}
      </span>
    {/if}
  </div>

  <p class="text-sm text-gray-700 mb-3">
    {project.description}
  </p>

  {#if project.deadline}
    <p class="text-xs text-gray-500">
      <span class="font-medium">Deadline:</span> {project.deadline}
    </p>
  {/if}
</div>
