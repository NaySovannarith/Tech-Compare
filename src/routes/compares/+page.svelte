<script lang="ts">
  import { iphone15ProMax } from '../../lib/data/products/smartphones/apple';
  import * as apple from '../../lib/data/products/smartphones/apple';
  import type {Smartphone} from '$lib/types/smartphone';
  import type { PhonePreview } from '$lib/types/phonePreview';

    let searchQuery = '';
    let compareItems: PhonePreview[] = [];
    let activeView = 'list';
    console.log('apple: apple');

    
    function toPhonePreview(phone: Smartphone): PhonePreview{
      return {
      id: phone.id,
      name: phone.name,
      brand: phone.brand,
      storage: phone.performance?.storageOptions?.[0] || 'Unknown',
      memory: phone.performance?.ram || 'Unknown',
      price: {
        base: phone.price.base,
        currency: phone.price.currency
      },
      region: phone.regions?.[0] || 'Unknown',
      image: phone.design?.images?.front || '' // Assuming this is a single image path
    };
  }

    function handleSearch() {
      const key = searchQuery.trim().toLowerCase();
      console.log('Search key:', key);
      console.log('All phones:', Object.values(apple)); 

      const phone: Smartphone | undefined = Object.values(apple).find(
        (p: any) => p.name.toLowercase().includes(key)
      );
    
    if (key && phone) {
      console.log('Match found:', phone);
      if (!compareItems.find(item => item.name === phone.name)) {
        compareItems.push(toPhonePreview(phone));
        console.log('Added to compare:', phone);
      } else {
        console.log('Already in compare list');
      }
      searchQuery = '';
    } else {
      console.log('Product not found:', iphone15ProMax);
    }
  }

  // @ts-ignore
  function switchView(list) {
    activeView = list;
  }

  </script>

    <!-- Top Section -->
    <div class="p-6 max-w-6xl mx-auto mt-6">
      <!-- Title -->
      <h1 class="text-2xl text-white font-bold mt-20">Compare</h1>
  
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
        {#each compareItems as item}
          <div 
          class="bg-[#1d4d43] px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-[#2b6659]">
          <img src={item.image} alt={item.name} class="w-8 h-8 rounded"
          />
            <span class="text-xl font-bold">+</span>
            <span>{item.name}</span>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Bottom Section -->
    <div class="w-full bg-[#CDCACA] text-[#00332e] py-10">
      <div class="max-w-6xl mx-auto px-6 h-screen">
        <!-- Tabs -->
        <div class="flex justify-center mb-4">
          <div class="bg-[#CDCACA] shadow-2xl-inner rounded-lg border-5 inline-flex p-2  hover:text-white rounded-md px-1/2 py-1/2 transition">
            <button
            class={`px-4 py-1 font-semibold shadow-lg rounded-lg hover:bg-[#6B9071] transition 
                    ${activeView === 'list' ? 'bg-[#00332e] text-white' : 'text-[#00332e]'}`}
            on:click={() => switchView('list')}
          >
            Compare List
          </button>
          <button
          class={`px-4 py-1 font-semibold shadow-lg rounded-lg hover:bg-[#6B9071] transition 
                  ${activeView === 'sheet' ? 'bg-[#00332e] text-white' : 'text-[#00332e]'}`}
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
            <div class="bg-white rounded-lg text-[#00332e] shadow-md p-4 flex items-center justify-between">
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
