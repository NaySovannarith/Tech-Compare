<script>
    let searchQuery = '';
    let compareItems = [searchQuery];
    // let isCompareSheet = false;
    let activeView = 'list'; // default view


    function handleSearch() {
    if (searchQuery.trim()) {
      // Add logic to add to compare list
      compareItems.push(searchQuery.trim()); // Add the searchQuery to the list
      console.log('Added to compare:', searchQuery);
      searchQuery = '';
    }
  }

  // @ts-ignore
  function switchView(list) {
    activeView = list;
  }

  </script>

  
  <div class="bg-[#00332e] mt-[150px] min-h-screen text-white items-center justify-between shadow-md"></div>

    <!-- Top Section -->
    <div class="p-6 max-w-6xl mx-auto">
      <!-- Title -->
      <h1 class="text-2xl text-white font-bold mb-4">Compare</h1>
  
      <!-- Search Bar --> 
      <div class="flex items-center mb-6">
        <div class="relative flex-grow">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-black font-bold">+</span>
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Write to add"
            class="w-full pl-10 pr-32 py-3 rounded-full text-black focus:outline-none"
          />
          <button 
          on:click={handleSearch}
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00332e] text-white font-semibold px-5 py-2 rounded-full {searchQuery.trim() ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'}"
          disabled={!searchQuery.trim()}
          >
            Compare
          </button>
        </div>
      </div>
  
      <!-- Add to Compare -->
      <p class="mb-3 font-medium text-gray-300">Add to compare</p>
  
      <!-- Pills -->
      <div class="flex text-white flex-wrap gap-3">
        {#each Array(15) as _, i}
          <div class="bg-[#1d4d43] px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-[#2b6659]">
            <span class="text-xl font-bold">+</span>
            <span>iphone 16 pro max</span>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Bottom Section -->
    <div class="w-full bg-[#CDCACA] text-[#00332e] py-10">
      <div class="max-w-6xl mx-auto px-6 h-screen">
        <!-- Tabs -->
        <div class="flex justify-center mb-4">
          <div class="bg-[#CDCACA] border-10 border-[#CDCACA] rounded-lg inline-flex p-0 shadow-2xl hover:bg-[#CDCACA] hover:text-white rounded-md px-4 py-2 transition">
            <button
            class={`px-4 py-1 font-semibold rounded-lg transition 
                    ${activeView === 'list' ? 'bg-white text-[#00332e]' : 'text-[#00332e]'}`}
            on:click={() => switchView('list')}
          >
            Compare List
          </button>
          <button
          class={`px-4 py-1 font-semibold rounded-lg transition 
                  ${activeView === 'sheet' ? 'bg-white text-[#00332e]' : 'text-black'}`}
          on:click={() => switchView('sheet')}
        >
          Compare Sheet
        </button>
          </div>
        </div>
  
        <!-- Titles -->
        <p class="text-sm text-gray-600">Others</p>
        <h2 class="text-lg font-bold mb-4">Common comparisons</h2>
  
        <!-- Comparison List -->
        <div class="space-y-6">
          {#each Array(5) as _, i}
            <div class="bg-white rounded-lg text-[#00332e]shadow-md p-4 flex items-center justify-between">
              <!-- Left Phone -->
              <div class="flex items-center space-x-4">
                <img src="https://via.placeholder.com/50" alt="Phone 1" />
                <div>
                  <p class="font-bold">Phone 14 Pro</p>
                  <p class="text-sm text-[#00332e]">Global . 8GB . 256GB</p>
                </div>
              </div>
  
              <!-- VS -->
              <div class="font-bold text-[#00332e] text-xl">vs</div>
  
              <!-- Right Phone -->
              <div class="flex items-center space-x-4">
                <img src="https://via.placeholder.com/50" alt="Phone 2" />
                <div>
                  <p class="font-bold">Google Pixel 7 Pro</p>
                  <p class="text-sm text-[#00332e]">Global . 8GB . 256GB</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
