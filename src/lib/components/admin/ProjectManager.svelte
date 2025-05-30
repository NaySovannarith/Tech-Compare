<script lang="ts">
  let categories = ['All', 'Phone', 'Tablet', 'Television', 'Accessories', 'Laptop'];
  let selectedCategory = 'Phone';

  let brand = 'boAt & Airdopes 161 ANC';
  let design = 'TWS Earbuds';
  let connectivity = 'Wireless';

  let bluetooth = 'Yes 5.3';
  let range = '10 m';
  let mic = 'Yes, Quad Mic';
  let assistant = 'Yes';
  let water = 'Yes';
  let controls = 'Touch';
  let music = 'Play/Pause';
  let call = 'Answer/ Hold/ Reject';
  let bass = 'Yes';
  let response = 'Yes';
</script>

<div class="flex min-h-screen bg-gray-100">
  <!-- Sidebar -->
  <aside class="w-64 bg-white shadow-md p-6 space-y-6">
    <div class="flex items-center space-x-2">
      <img src="/logo.png" alt="Logo" class="h-10" />
      <span class="font-semibold text-xl text-green-700">OUUUU.</span>
    </div>
    <nav class="flex flex-col space-y-2">
      <a href="#" class="flex items-center space-x-2 text-purple-700 font-medium bg-purple-100 px-4 py-2 rounded">
        <i class="lucide lucide-box w-4 h-4" /> <span>Product</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
        <i class="lucide lucide-user w-4 h-4" /> <span>Customers</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
        <i class="lucide lucide-bar-chart w-4 h-4" /> <span>Analysis</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
        <i class="lucide lucide-sparkles w-4 h-4" /> <span>Promote</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
        <i class="lucide lucide-help-circle w-4 h-4" /> <span>Help</span>
      </a>
    </nav>
    <div class="absolute bottom-6 left-6 flex items-center space-x-3">
      <img src="/user.png" alt="User" class="w-8 h-8 rounded-full" />
      <div>
        <p class="text-sm font-semibold">Nith</p>
        <p class="text-xs text-gray-500">Project Manager</p>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 p-8 space-y-6">
    <h1 class="text-2xl font-bold text-center">Products Management</h1>

    <!-- Tabs -->
    <div class="flex items-center space-x-4 justify-center">
      {#each categories as category}
        <button
          on:click={() => selectedCategory = category}
          class={`px-4 py-2 rounded-full border ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {category}
        </button>
      {/each}
      <button class="text-gray-500 text-xl">&rarr;</button>
    </div>

    <!-- Create Product Card -->
    <div class="bg-white p-6 rounded-lg shadow-md flex justify-between">
      <div class="w-2/3 space-y-4">
        <button class="border px-4 py-1 rounded">Create</button>

        <div>
          <label class="font-semibold block mb-1">Phone brand and model</label>
          <select class="border px-4 py-2 rounded w-full">
            <option>Apple / iPhone 15</option>
          </select>
        </div>

        <div>
          <label class="font-semibold block mb-1">Product Type:</label>
          <input class="border px-4 py-2 rounded w-full" placeholder="Enter product type..." />
        </div>

        <h2 class="font-bold text-lg">Product Information:</h2>

        <table class="w-full text-sm">
          <thead><tr><th class="text-left">GENERAL:</th></tr></thead>
          <tbody>
            <tr><td class="font-medium">Brand & Model</td><td>{brand}</td></tr>
            <tr><td class="font-medium">Design</td><td>{design}</td></tr>
            <tr><td class="font-medium">Connectivity</td><td>{connectivity}</td></tr>
            <tr><td colspan="2"><button class="text-xs text-blue-600">More Options →</button></td></tr>
          </tbody>

          <thead><tr><th class="pt-4 text-left">FEATURES:</th></tr></thead>
          <tbody>
            <tr><td class="font-medium">Bluetooth</td><td>{bluetooth}</td></tr>
            <tr><td class="font-medium">Bluetooth Range</td><td>{range}</td></tr>
            <tr><td class="font-medium">Microphone</td><td>{mic}</td></tr>
            <tr><td class="font-medium">Voice Assistant</td><td>{assistant}</td></tr>
            <tr><td class="font-medium">Water Resistant</td><td>{water}</td></tr>
            <tr><td class="font-medium">Controls</td><td>{controls}</td></tr>
            <tr><td class="font-medium">Music Controls</td><td>{music}</td></tr>
            <tr><td class="font-medium">Call Controls</td><td>{call}</td></tr>
            <tr><td colspan="2"><button class="text-xs text-blue-600">More Options →</button></td></tr>
          </tbody>

          <thead><tr><th class="pt-4 text-left">SOUND FEATURES:</th></tr></thead>
          <tbody>
            <tr><td class="font-medium">Deep Bass</td><td>{bass}</td></tr>
            <tr><td class="font-medium">Frequency Response</td><td>{response}</td></tr>
            <tr><td colspan="2"><button class="text-xs text-blue-600">More Options →</button></td></tr>
          </tbody>
        </table>

        <button class="mt-4 px-4 py-1 bg-gray-200 rounded text-sm">More Options →</button>
      </div>

      <!-- Product Image & Save -->
      <div class="w-1/3 flex flex-col items-center justify-between">
        <button class="bg-blue-600 text-white px-4 py-2 rounded self-end">Save</button>
        <img src="/iphones/iPhone 15.jpg" alt="iPhone" class="w-48 h-auto mt-4 rounded-lg" />
      </div>
    </div>
  </main>
</div>
