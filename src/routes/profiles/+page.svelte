<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { wishlist } from '$lib/wishlist/wishlist';
  import { user } from '$lib/data/auth';
  import type { User } from '$lib/data/auth';
  import { derived, get } from 'svelte/store';

  const userInfoDerived = derived(user, ($user) => {
    if ($user) {
      return {
        id: $user.id,
        name: $user.name || "Jane Doe",
        email: $user.email || "jane.doe@example.com",
        phone: $user.phone || "",
        birthday: $user.birthday ? $user.birthday.split('T')[0] : "1990-01-15",
        address: $user.address || "",
        avatar: $user.avatar || "/placeholder.svg?height=200&width=200",
        profilePicture: ($user as any).profile_picture || $user.profilePicture || "",
      };
    }
    return {
      id: 0,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "",
      birthday: "1990-01-15",
      address: "",
      avatar: "/placeholder.svg?height=200&width=200",
      profilePicture: "",
    };
  });

  let editableUserInfo: User = $state(get(userInfoDerived));
  let selectedFile: File | null = $state(null);
  let previewUrl: string = $state("");
  let isEditing = $state(false);

  // Debounced effect to reduce frequent updates
  let updateTimeout: number;
  $effect(() => {
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      const currentUser = get(userInfoDerived);
      if (currentUser) {
        editableUserInfo = { ...currentUser };
      }
    }, 100);
  });

  onMount(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('Fresh user data:', userData);
        user.set(userData);
      } else if (response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        goto('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  });

  function toggleEdit() {
    isEditing = !isEditing;
    if (!isEditing) {
      selectedFile = null;
      if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
      previewUrl = "";
    }
  }

  async function saveUserInfo() {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found, please login again.');
      goto('/login');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', editableUserInfo.name);
      formData.append('email', editableUserInfo.email);
      formData.append('phone', editableUserInfo.phone || '');
      formData.append('birthday', editableUserInfo.birthday || '');
      formData.append('address', editableUserInfo.address || '');
      
      if (selectedFile) {
        formData.append('profile_picture', selectedFile);
      }
      
      formData.append('_method', 'PUT');

      const res = await fetch('http://localhost:8000/api/user', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        console.log('Update response:', result);
        localStorage.setItem('user', JSON.stringify(result.user));
        user.set(result.user);
        
        alert('Profile updated successfully!');
        selectedFile = null;
        if (previewUrl && previewUrl.startsWith('blob:')) {
          URL.revokeObjectURL(previewUrl);
        }
        previewUrl = "";
        toggleEdit();
      } else {
        alert(result.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error('Profile update error:', err);
      alert('Server error while updating profile');
    }
  }

  function handleProfilePictureChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
      selectedFile = file;
      previewUrl = URL.createObjectURL(file);
    }
  }

  function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement | null;
  if (img && img.src !== '/placeholder.svg?height=200&width=200') {
    console.log('Image load error, falling back to placeholder');
    img.src = '/placeholder.svg?height=200&width=200';
  }
}

  const goToProductDetail = () => goto('/product_list/product_detail');
  
  function removeFromWishlist(id: string) {
    wishlist.update(items => items.filter(item => item.id !== id));
  }

  type RecentSearch = {
    id: number;
    term: string;
    date: string;
  };

  let recentSearches: RecentSearch[] = $state([
    { id: 1, term: "wireless earbuds", date: "2023-11-10" },
    { id: 2, term: "fitness tracker", date: "2023-11-08" },
    { id: 3, term: "portable charger", date: "2023-11-05" }
  ]);

  function clearAllSearches() {
    recentSearches = [];
  }

  function clearRecentSearch(id: number) {
    recentSearches = recentSearches.filter(search => search.id !== id);
  }

  function handleLogout(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    user.set(null);
    goto('/login');
  }

  // Cleanup on component destroy
  $effect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
      clearTimeout(updateTimeout);
    };
  });
</script>

<svelte:head>
  <title>My Profile</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-20">
  <div class="container mx-auto px-4 py-8 max-w-7xl">
    <!-- IMPROVED HEADER -->
    <div class="mb-10">
      <div class="flex items-center gap-4 mb-3">
        <div class="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg">
          <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h1 class="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            My Profile
          </h1>
          <p class="text-gray-600 text-lg mt-1">Manage your account settings and preferences</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- IMPROVED MAIN PROFILE SECTION -->
      <div class="lg:col-span-2">
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <!-- IMPROVED HEADER -->
          <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white p-8">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-2xl font-bold">Personal Information</h2>
                  <p class="text-indigo-100 text-sm">Update your profile details</p>
                </div>
              </div>
              <button
                onclick={toggleEdit}
                class="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
              >
                {#if isEditing}
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                {:else}
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Profile
                {/if}
              </button>
            </div>
          </div>

          <div class="p-8">
            <!-- IMPROVED PROFILE PICTURE SECTION -->
            <div class="flex flex-col items-center mb-10">
              <div class="relative group">
                <div class="h-36 w-36 border-4 border-white shadow-2xl rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center ring-4 ring-indigo-100">
                  {#if previewUrl}
                    <img 
                      src={previewUrl || "/placeholder.svg"} 
                      alt="Profile preview" 
                      class="w-full h-full object-cover"
                      onerror={handleImageError}
                    />
                  {:else if editableUserInfo.profilePicture}
                    <img 
                      src={editableUserInfo.profilePicture || "/placeholder.svg"} 
                      alt="User profile" 
                      class="w-full h-full object-cover"
                      onerror={(e) => {
                        const img = e.target as HTMLImageElement | null;
                        if (img) {
                          if (editableUserInfo.avatar && img.src !== editableUserInfo.avatar) {
                            img.src = editableUserInfo.avatar;
                          } else if (img.src !== '/placeholder.svg?height=200&width=200') {
                            img.src = '/placeholder.svg?height=200&width=200';
                          }
                        }
                      }}
                    />
                  {:else}
                    <img 
                      src={editableUserInfo.avatar || "/placeholder.svg"} 
                      alt="User avatar" 
                      class="w-full h-full object-cover"
                      onerror={handleImageError}
                    />
                  {/if}
                </div>
                {#if isEditing}
                  <label class="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div class="text-center">
                      <svg class="h-8 w-8 text-white mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span class="text-xs text-white font-medium">Change Photo</span>
                    </div>
                    <input type="file" accept="image/*" onchange={handleProfilePictureChange} class="hidden" />
                  </label>
                {/if}
              </div>

              <div class="text-center mt-6">
                <h3 class="text-3xl font-bold text-gray-900 mb-2">{editableUserInfo.name}</h3>
                <p class="text-gray-600 flex items-center justify-center gap-2 text-lg">
                  <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {editableUserInfo.email}
                </p>
                <div class="mt-3 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Active Member
                </div>
              </div>

              {#if selectedFile}
                <div class="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <p class="text-sm text-green-700 flex items-center gap-2 font-medium">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    New image selected: {selectedFile.name}
                  </p>
                </div>
              {/if}
            </div>

            <!-- IMPROVED FORM FIELDS -->
            <form onsubmit={async (event) => {
              event.preventDefault();
              await saveUserInfo();
            }}>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-3">
                  <label for="name" class="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    bind:value={editableUserInfo.name}
                    disabled={!isEditing}
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 {isEditing ? 'border-indigo-300 bg-white' : 'bg-gray-50'}"
                  />
                </div>

                <div class="space-y-3">
                  <label for="email" class="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    bind:value={editableUserInfo.email}
                    disabled={!isEditing}
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 {isEditing ? 'border-indigo-300 bg-white' : 'bg-gray-50'}"
                  />
                </div>

                <div class="space-y-3">
                  <label for="phone" class="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    bind:value={editableUserInfo.phone}
                    disabled={!isEditing}
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 {isEditing ? 'border-indigo-300 bg-white' : 'bg-gray-50'}"
                  />
                </div>

                <div class="space-y-3">
                  <label for="birthday" class="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Birthday
                  </label>
                  <input
                    id="birthday"
                    type="date"
                    bind:value={editableUserInfo.birthday}
                    disabled={!isEditing}
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 {isEditing ? 'border-indigo-300 bg-white' : 'bg-gray-50'}"
                  />
                </div>

                <div class="md:col-span-2 space-y-3">
                  <label for="address" class="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <svg class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    bind:value={editableUserInfo.address}
                    disabled={!isEditing}
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 {isEditing ? 'border-indigo-300 bg-white' : 'bg-gray-50'}"
                  />
                </div>
              </div>

              {#if isEditing}
                <div class="flex justify-end mt-10">
                  <button
                    type="submit"
                    class="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Save Changes
                  </button>
                </div>
              {/if}
            </form>

            <div class="border-t border-gray-200 my-10"></div>

            <!-- IMPROVED LOGOUT BUTTON -->
            <button
              onclick={handleLogout}
              class="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Logout"
            >
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      <!-- IMPROVED SIDEBAR -->
      <div class="space-y-8">
        <!-- WISHLIST CARD -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div class="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6">
            <div class="flex items-center gap-4">
              <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold">Wishlist</h3>
                <p class="text-pink-100 text-sm">Your saved items</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            {#if $wishlist && $wishlist.length > 0}
              <div class="space-y-4">
                {#each $wishlist as product (product.id)}
                  <div class="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-gray-100">
                    <button 
                      onclick={() => goToProductDetail()}
                      class="flex items-center flex-1 text-left hover:bg-gray-100 p-2 rounded-lg transition-colors"
                    >
                      <div class="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-md">
                        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} class="w-full h-full object-cover" />
                      </div>
                      <div class="ml-3 flex-1">
                        <p class="font-semibold text-gray-900 text-sm truncate">{product.title}</p>
                        <p class="text-green-600 font-bold text-sm">${product.price.toFixed(2)}</p>
                      </div>
                    </button>
                    
                    <button 
                      onclick={() => removeFromWishlist(product.id)}
                      class="opacity-0 group-hover:opacity-100 transition-all duration-200 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg"
                      aria-label="Remove {product.title} from wishlist"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                {/each}
              </div>
            {:else}
              <div class="text-center py-12">
                <svg class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p class="text-gray-500 mb-4">Your wishlist is empty</p>
                <button class="px-4 py-2 border-2 border-gray-300 rounded-xl text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto font-medium">
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
                  </svg>
                  Browse Products
                </button>
              </div>
            {/if}
          </div>
        </div>

        <!-- RECENT SEARCHES CARD -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold">Recent Searches</h3>
                  <p class="text-emerald-100 text-sm">Your search history</p>
                </div>
              </div>
              {#if recentSearches.length > 0}
                <button
                  onclick={clearAllSearches}
                  class="text-white hover:bg-white/20 px-3 py-1.5 rounded-lg text-sm transition-colors font-medium"
                >
                  Clear All
                </button>
              {/if}
            </div>
          </div>
          <div class="p-6">
            {#if recentSearches.length > 0}
              <div class="space-y-3">
                {#each recentSearches as search (search.id)}
                  <div class="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group border border-gray-100">
                    <div class="flex-1">
                      <p class="font-semibold text-gray-900 text-sm">"{search.term}"</p>
                      <p class="text-gray-500 text-xs">{search.date}</p>
                    </div>
                    <button
                      onclick={() => clearRecentSearch(search.id)}
                      class="opacity-0 group-hover:opacity-100 transition-all duration-200 text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100"
                      aria-label="Clear search for {search.term}"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                {/each}
              </div>
            {:else}
              <div class="text-center py-12">
                <svg class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p class="text-gray-500">No recent searches</p>
              </div>
            {/if}
          </div>
        </div>

        <!-- STATS CARD -->
        <div class="bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-600 text-white rounded-2xl shadow-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-2xl">Account Stats</h3>
                <p class="text-indigo-100">Your activity overview</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p class="text-3xl font-bold">{$wishlist ? $wishlist.length : 0}</p>
                <p class="text-sm text-indigo-100">Wishlist Items</p>
              </div>
              <div class="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p class="text-3xl font-bold">{recentSearches.length}</p>
                <p class="text-sm text-indigo-100">Recent Searches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<<<<<<< BETA
</div>
=======
</div>
>>>>>>> main
