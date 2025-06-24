<!-- src/routes/+layout.svelte (or wherever your navigation component is) -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { Search, Heart, Bell, User, LogOut } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { wishlist } from '$lib/wishlist/wishlist';
  // Import the user store
  import { user } from '$lib/data/auth';

  let searchQuery = '';
  let activeDropdown: 'categories' | 'accessory' | 'brand' | 'profile' | null = null;

  let productRef: HTMLElement;
  let accessoryRef: HTMLElement;
  let brandRef: HTMLElement;
  let profileRef: HTMLElement;

  const goToCompares = () => goto('/compares');
  const goToLogin = () => goto('/login');
  const goToProfile = () => goto('/profiles');

  const toggleDropdown = (type: 'categories' | 'accessory' | 'brand' | 'profile') => {
    activeDropdown = activeDropdown === type ? null : type;
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      productRef && !productRef.contains(target) &&
      brandRef && !brandRef.contains(target) &&
      profileRef && !profileRef.contains(target)
    ) {
      activeDropdown = null;
    }
  };

  const handleLogout = () => {
    user.logout();
    activeDropdown = null;
    goto('/');
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<!-- Fixed Header -->
<header class="fixed top-0 left-0 w-full z-50 bg-[#00332e] text-white shadow-md">
  <div class="flex items-center justify-between flex-wrap gap-6 px-6 py-3">
    <!-- Left Section: Logo + Search + Nav -->
    <div class="flex items-center gap-20 flex-wrap">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 text-2xl font-bold tracking-wide hover:underline">
        <img src="/images/image.png" alt="Duuuuu Logo" class="h-12 w-12 object-cover" />
      </a>

      <!-- Search -->
      <div class="relative">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search..."
          class="w-56 pl-4 pr-5 py-1 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
        />
        <Search class="absolute right-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
      </div>

      <!-- Nav Menu -->
      <nav class="flex items-center gap-10 text-sm font-medium">
        <!-- Products -->
        <div class="relative" bind:this={productRef}>
          <button
            on:click={() => toggleDropdown('categories')}
            class={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
              activeDropdown === 'categories' ? 'bg-white text-[#00332e]' : 'hover:bg-[#6B9071]'
            }`}
          >
            Categories ▼  
          </button>
          {#if activeDropdown === 'categories'}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10 text-sm">
              <li class="relative group">
    <div class="flex items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer">
      Smartphones
      <svg class="ml-2 w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </div>
    <ul class="absolute left-full top-0 ml-1 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-20">
  <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/smartphones">All </a></li>
    <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/iphone">iPhone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/samsung">Samsung</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/google">Google</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/huawei">Huawei</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/vivo">Vivo</a></li>
    </ul>
  </li>


  <!-- Accessories submenu -->
  <li class="relative group">
    <div class="flex items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer">
      Accessories
      <svg class="ml-2 w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" />
      </svg>
    </div>
    <ul class="absolute left-full top-0 ml-1 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-20">
      <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/cameras">Camera</a></li>
      <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/earbuds">Earbuds</a></li>
      <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/headphones">Headphones</a></li>
      <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/powerbanks">Powerbank</a></li>
        <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/tablet">Tablet</a></li>
  <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/computers">Laptop</a></li>
  <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/smartwatches">Smartwatch</a></li>

  <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/tvs">TV</a></li>
    </ul>
  </li>
</ul>

          {/if}
        </div>

        <!-- Brands -->
        <div class="relative" bind:this={brandRef}>
          <button
            on:click={() => toggleDropdown('brand')}
            class={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
              activeDropdown === 'brand' ? 'bg-white text-[#00332e]' : 'hover:bg-[#6B9071]'
            }`}
          >
            Brand ▼
          </button>
          {#if activeDropdown === 'brand'}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10 text-sm">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/iphone">iPhone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/samsung">Samsung</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/google">Google</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/huawei">Huawei</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/vivo">Vivo</a></li>
            </ul>
          {/if}
        </div>

        <!-- Contact -->
        <a class="hover:underline" href="/contacts">Contact us</a>

        <!-- Compare Button -->
        <button
          on:click={goToCompares}
          class="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition"
        >
          Compare
        </button>
      </nav>
    </div>

    <!-- Right Section: Wishlist & Login/Profile -->
    <div class="flex items-center gap-8">
      <!-- Wishlist -->
      <div class="relative">
        <button
          type="button"
          on:click={() => goto('/wishlists')}
          class="w-5 h-5 cursor-pointer hover:text-red-500 transition relative"
          aria-label="Wishlists"
        >
          <Heart class="w-full h-full" />
          {#if $wishlist.length > 0}
            <span class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full transition-transform transform scale-100">
              {$wishlist.length}
            </span>
          {/if}
        </button>
      </div>

      <!-- Auth Section -->
      {#if $user}
        <!-- Logged in -->
        <div class="relative" bind:this={profileRef}>
          <button
            on:click={() => toggleDropdown('profile')}
            class="flex items-center gap-2 border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition"
            aria-label="Profile"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'profile'}
          >
            {#if $user.avatar}
              <img src={$user.avatar || "/placeholder.svg"} alt="Profile" class="w-5 h-5 rounded-full object-cover" />
            {:else}
              <User class="w-4 h-4" />
            {/if}
            {$user.name}
          </button>

          {#if activeDropdown === 'profile'}
            <ul class="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10 text-sm">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/profiles" class="flex items-center gap-2"><User class="w-4 h-4" /> My Profile</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/orders" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg> My Compare</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/settings" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg> Settings</a></li>
              <li class="border-t">
                <button on:click={handleLogout} class="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center gap-2 text-red-600">
                  <LogOut class="w-4 h-4" />
                  Logout
                </button>
              </li>
            </ul>
          {/if}
        </div>
      {:else}
        <!-- Not logged in -->
        <button
          on:click={goToLogin}
          class="flex items-center gap-2 border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition"
          aria-label="Login"
        >
          <User class="w-4 h-4" />
          Login
        </button>
      {/if}
    </div>
  </div>
</header>
