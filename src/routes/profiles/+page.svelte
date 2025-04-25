<script>
  import { onMount } from 'svelte';

  // User information state
  let userInfo = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Anytown, USA",
    birthday: "1990-01-15"
  };

  // Copy of user info for editing
  let editableUserInfo = { ...userInfo };
  
  // User activity data
  let wishlist = [
    { id: 1, name: "Wireless Headphones", price: "$129.99", image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Smart Watch", price: "$249.99", image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Laptop Backpack", price: "$79.99", image: "/placeholder.svg?height=80&width=80" }
  ];
  
  let recentSearches = [
    { id: 1, term: "wireless earbuds", date: "2023-11-10" },
    { id: 2, term: "fitness tracker", date: "2023-11-08" },
    { id: 3, term: "portable charger", date: "2023-11-05" },
    { id: 4, term: "bluetooth speaker", date: "2023-11-01" }
  ];

  // Edit mode state
  let isEditing = false;

  // Toggle edit mode
  function toggleEdit() {
    if (isEditing) {
      // Cancel editing - reset to original values
      editableUserInfo = { ...userInfo };
    } else {
      // Start editing - create a copy to edit
      editableUserInfo = { ...userInfo };
    }
    isEditing = !isEditing;
  }

  // Save user information
  function saveUserInfo() {
    // Validate form fields
    if (!editableUserInfo.name || !editableUserInfo.email) {
      alert("Name and email are required fields");
      return;
    }
    
    // Update user information
    userInfo = { ...editableUserInfo };
    isEditing = false;
  }

  // Remove item from wishlist
  function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
  }

  // Clear recent search
  function clearRecentSearch(id) {
    recentSearches = recentSearches.filter(search => search.id !== id);
  }

  // Clear all recent searches
  function clearAllRecentSearches() {
    recentSearches = [];
  }
</script>

<div class="max-w-4xl mx-auto p-4 bg-white">
  <h2 class="text-2xl font-bold mb-6 text-primary">My Profile</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- User Information Section -->
    <div class="md:col-span-2">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-primary">User Information</h2>
          <button 
            on:click={toggleEdit} 
            class="px-4 py-2 rounded-md text-sm font-medium {isEditing ? 'bg-gray-200 hover:bg-gray-300' : 'bg-primary text-white hover:bg-primary/90'}"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        
        <form on:submit|preventDefault={saveUserInfo} class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                bind:value={editableUserInfo.name} 
                disabled={!isEditing}
                class="w-full p-2 border rounded-md {!isEditing ? 'bg-gray-50' : 'bg-white'}"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                bind:value={editableUserInfo.email} 
                disabled={!isEditing}
                class="w-full p-2 border rounded-md {!isEditing ? 'bg-gray-50' : 'bg-white'}"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                bind:value={editableUserInfo.phone} 
                disabled={!isEditing}
                class="w-full p-2 border rounded-md {!isEditing ? 'bg-gray-50' : 'bg-white'}"
              />
            </div>
            
            <div>
              <label for="birthday" class="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
              <input 
                type="date" 
                id="birthday" 
                bind:value={editableUserInfo.birthday} 
                disabled={!isEditing}
                class="w-full p-2 border rounded-md {!isEditing ? 'bg-gray-50' : 'bg-white'}"
              />
            </div>
            
            <div class="md:col-span-2">
              <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea 
                id="address" 
                bind:value={editableUserInfo.address} 
                disabled={!isEditing}
                class="w-full p-2 border rounded-md {!isEditing ? 'bg-gray-50' : 'bg-white'}"
                rows="2"
              ></textarea>
            </div>
          </div>
          
          {#if isEditing}
            <div class="flex justify-end">
              <button 
                type="submit" 
                class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save Changes
              </button>
            </div>
          {/if}
        </form>
      </div>
    </div>
    
    <!-- User Activity Section -->
    <div class="md:col-span-1">
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold text-primary mb-4">User Activity</h2>
        
        <!-- Wishlist -->
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-3">Saved Wishlist</h3>
          {#if wishlist.length > 0}
            <ul class="space-y-3">
              {#each wishlist as item}
                <li class="flex items-center justify-between border-b pb-2">
                  <div class="flex items-center">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} class="w-10 h-10 object-cover mr-3 rounded" />
                    <div>
                      <p class="font-medium">{item.name}</p>
                      <p class="text-sm text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <button 
                    on:click={() => removeFromWishlist(item.id)}
                    class="text-red-500 hover:text-red-700"
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
            <p class="text-gray-500 italic">Your wishlist is empty</p>
          {/if}
        </div>
        
        <!-- Recent Searches -->
        <div>
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-medium">Recent Searches</h3>
            {#if recentSearches.length > 0}
              <button 
                on:click={clearAllRecentSearches}
                class="text-sm text-primary hover:underline"
              >
                Clear All
              </button>
            {/if}
          </div>
          
          {#if recentSearches.length > 0}
            <ul class="space-y-2">
              {#each recentSearches as search}
                <li class="flex justify-between items-center">
                  <div>
                    <p class="font-medium">"{search.term}"</p>
                    <p class="text-xs text-gray-500">{search.date}</p>
                  </div>
                  <button 
                    on:click={() => clearRecentSearch(search.id)}
                    class="text-gray-400 hover:text-gray-600"
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
            <p class="text-gray-500 italic">No recent searches</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    background-color: #f9fafb;
  }
  
  /* Define primary color variables */
  :root {
    --color-primary: #6b21a8;
    --color-primary-hover: #7e22ce;
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .hover\:bg-primary\/90:hover {
    background-color: var(--color-primary-hover);
  }
</style>