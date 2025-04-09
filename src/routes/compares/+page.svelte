<script>
    let searchQuery = '';
  </script>
  
  <div class="bg-[#00332e] min-h-screen text-white items-center justify-between shadow-md">
    <!-- Top Section -->
    <div class="p-6 max-w-6xl mx-auto">
      <!-- Title -->
      <h1 class="text-2xl font-bold mb-4">Compare</h1>
  
      <!-- Search Bar -->
      <div class="flex items-center mb-6">
        <div class="relative flex-grow">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold">+</span>
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Write to add"
            class="w-full pl-10 pr-32 py-3 rounded-full text-black focus:outline-none"
          />
          <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-400 text-white font-semibold px-5 py-1 rounded-full">
            Compare
          </button>
        </div>
      </div>
  
      <!-- Add to Compare -->
      <p class="mb-3 font-medium text-gray-300">Add to compare</p>
  
      <!-- Pills -->
      <div class="flex flex-wrap gap-3">
        {#each Array(15) as _, i}
          <div class="bg-[#1d4d43] px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-[#2b6659]">
            <span class="text-xl font-bold">+</span>
            <span>iphone 16 pro max</span>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Bottom Section -->
    <div class="bg-[#CDCACA] text-black px-6 py-10 mt-10 rounded-t-3xl">
      <div class="max-w-6xl mx-auto">
        <!-- Tabs -->
        <div class="flex justify-center mb-4">
          <div class="bg-white rounded-full p-1 inline-flex shadow-inner">
            <button class="px-4 py-1 font-semibold rounded-full bg-black text-white">Compare List</button>
            <button class="px-4 py-1 font-semibold rounded-full text-black">Compare Sheet</button>
          </div>
        </div>
  
        <!-- Titles -->
        <p class="text-sm text-gray-600">Others</p>
        <h2 class="text-lg font-bold mb-4">Common comparisons</h2>
  
        <!-- Comparison List -->
        <div class="space-y-6">
          {#each Array(5) as _, i}
            <div class="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
              <!-- Left Phone -->
              <div class="flex items-center space-x-4">
                <img src="https://via.placeholder.com/50" alt="Phone 1" />
                <div>
                  <p class="font-bold">Phone 14 Pro</p>
                  <p class="text-sm text-gray-500">Global . 8GB . 256GB</p>
                </div>
              </div>
  
              <!-- VS -->
              <div class="font-bold text-gray-700 text-xl">vs</div>
  
              <!-- Right Phone -->
              <div class="flex items-center space-x-4">
                <img src="https://via.placeholder.com/50" alt="Phone 2" />
                <div>
                  <p class="font-bold">Google Pixel 7 Pro</p>
                  <p class="text-sm text-gray-500">Global . 8GB . 256GB</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  