<script>
  // @ts-nocheck
  import { wishlist } from '$lib/wishlist/wishlist';
  import Empty from '$lib/components/wishlist/Empty.svelte';

  let userInfo = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    birthday: "1990-01-15",
    address: "123 Main Street, Anytown, USA",
    avatar: "/placeholder.svg?height=200&width=200"
  };
  
  let editableUserInfo = { ...userInfo }; // Initialize editableUserInfo to reflect userInfo
  let recentSearches = [
    { id: 1, term: "wireless earbuds", date: "2023-11-10" },
    { id: 2, term: "fitness tracker", date: "2023-11-08" },
    { id: 3, term: "portable charger", date: "2023-11-05" }
  ];
  
  let isEditing = false;
  
  function toggleEdit() {
    isEditing = !isEditing;
  }
  
  function saveUserInfo() {
    userInfo = { ...editableUserInfo }; // Update userInfo with edited values
    toggleEdit(); // Close the edit mode
  }
  
  function logout() {
    alert("Logout functionality would go here");
  }
  
  function clearAllSearches() {
    recentSearches = [];
  }
  
  function removeFromWishlist(productId) {
    wishlist.update(items => items.filter(product => product.id !== productId));
  }
  
  function clearRecentSearch(searchId) {
    recentSearches = recentSearches.filter(search => search.id !== searchId);
  }
  function handleProfilePictureChange(event) {
    const file = event.target.files[0];
    if (file)  {
      const reader = new FileReader();
      reader.onload = (e) => {
        editableUserInfo.profilePicture = e.target.result; // Set the new image in editableUserInfo
      };
      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  }
  </script>
  
  <!-- Main container -->
  <div class="max-w-5xl mx-auto p-4 bg-white mt-16">
    <h1 class="text-3xl font-bold mb-4 mt-16">My Profile</h1>
  
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left column -->
      <div class="lg:col-span-2">
        <div class="border rounded-lg shadow-sm overflow-hidden">
          <div class="flex justify-between items-center p-4 border-b">
            <h2 class="text-lg font-semibold">Personal Information</h2>
            <button
              on:click={toggleEdit}
              class="px-3 py-1 rounded-lg text-sm bg-blue-600 text-white"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>
  
          <div class="p-4">
            <div class="flex flex-col items-center mb-6">
              <!-- Profile picture section -->
              <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
                <!-- Display the profile picture from editableUserInfo -->
                <img src={editableUserInfo.profilePicture} alt="User avatar" class="w-full h-full object-cover" />
              </div>
              {#if isEditing}
                <!-- Show file input for changing the profile picture when in edit mode -->
                <input
                  type="file"
                  accept="image/*"
                  on:change={handleProfilePictureChange}
                  class="mt-4"
                />
              {/if}
              <h3 class="font-medium">{editableUserInfo.name}</h3>
              <p class="text-sm text-gray-500">{editableUserInfo.email}</p>
            </div>
  
            <form on:submit|preventDefault={saveUserInfo} class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    bind:value={editableUserInfo.name} 
                    disabled={!isEditing}
                    class="w-full p-3 border rounded-lg {!isEditing ? 'bg-gray-50' : 'bg-white'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    bind:value={editableUserInfo.email} 
                    disabled={!isEditing}
                    class="w-full p-3 border rounded-lg {!isEditing ? 'bg-gray-50' : 'bg-white'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    bind:value={editableUserInfo.phone} 
                    disabled={!isEditing}
                    class="w-full p-3 border rounded-lg {!isEditing ? 'bg-gray-50' : 'bg-white'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label for="birthday" class="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
                  <input 
                    type="date" 
                    id="birthday" 
                    bind:value={editableUserInfo.birthday} 
                    disabled={!isEditing}
                    class="w-full p-3 border rounded-lg {!isEditing ? 'bg-gray-50' : 'bg-white'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
  
              {#if isEditing}
                <div class="flex justify-end mt-4">
                  <button class="px-4 py-2 bg-green-600 text-white rounded-lg">
                    Save Changes
                  </button>
                </div>
              {/if}
            </form>
          </div>
  
          <!-- Logout -->
          <div class="mt-6">
            <button
              on:click={logout}
              class="w-full py-3 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 flex items-center justify-center gap-2 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
  
      <!-- Right column -->
      <div class="lg:col-span-1">
        <!-- Wishlist -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div class="p-6 border-b">
            <h2 class="text-xl font-semibold text-gray-800">Wishlist</h2>
            <p class="text-gray-500 text-sm mt-1">Items you've saved for later</p>
          </div>
  
          <div class="p-6">
            {#if $wishlist && $wishlist.length > 0}
              <ul class="space-y-4">
                {#each $wishlist as product (product.id)}
                  <li class="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div class="flex items-center">
                      <div class="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} class="w-full h-full object-cover" />
                      </div>
                      <div class="ml-3">
                        <p class="font-medium text-gray-800 line-clamp-1">{product.title}</p>
                        <p class="text-sm text-green-600 font-semibold">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button 
                      on:click={() => removeFromWishlist(product.id)}
                      class="text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-50"
                      aria-label="Remove from wishlist"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </li>
                {/each}
              </ul>
            {:else}
              <p class="text-center py-4 text-gray-500">Your wishlist is empty</p>
            {/if}
          </div>
        </div>
  
        <!-- Recent Searches -->
        <div class="border rounded-lg shadow-sm overflow-hidden">
          <div class="flex justify-between items-center p-4 border-b">
            <div>
              <h2 class="text-lg font-semibold">User Activity</h2>
              <p class="text-sm text-gray-500">Recent Searches</p>
            </div>
            {#if recentSearches.length > 0}
              <button on:click={clearAllSearches} class="text-sm text-blue-600">
                Clear All
              </button>
            {/if}
          </div>
  
          <div class="p-6">
            {#if recentSearches.length > 0}
              <ul class="space-y-3">
                {#each recentSearches as search}
                  <li class="flex justify-between items-center hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div>
                      <p class="font-medium text-gray-800">"{search.term}"</p>
                      <p class="text-xs text-gray-500 mt-0.5">{search.date}</p>
                    </div>
                    <button 
                      on:click={() => clearRecentSearch(search.id)}
                      class="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100"
                      aria-label="Clear search"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                {/each}
              </ul>
            {:else}
              <div class="text-center py-4">
                <p class="text-gray-500 italic">No recent searches</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  