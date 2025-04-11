<script lang="ts">
  import { onMount } from 'svelte';
  import { Search, Heart, Bell, User } from 'lucide-svelte';
  import { goto } from '$app/navigation';

  let searchQuery = '';
  let showProductDropdown = false;
  let showAccessoryDropdown = false;
  let showBrandDropdown = false;

  let productRef: HTMLElement;
  let accessoryRef: HTMLElement;
  let brandRef: HTMLElement;

  const goToCompares = () => goto('/compares');
  const goToLogin = () => goto('/login');

  const toggleProductDropdown = () => {
    showProductDropdown = !showProductDropdown;
    showAccessoryDropdown = false;
    showBrandDropdown = false;
  };

  const toggleAccessoryDropdown = () => {
    showAccessoryDropdown = !showAccessoryDropdown;
    showProductDropdown = false;
    showBrandDropdown = false;
  };

  const toggleBrandDropdown = () => {
    showBrandDropdown = !showBrandDropdown;
    showProductDropdown = false;
    showAccessoryDropdown = false;
  };

  const closeDropdowns = () => {
    showProductDropdown = false;
    showAccessoryDropdown = false;
    showBrandDropdown = false;
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      productRef && !productRef.contains(target) &&
      accessoryRef && !accessoryRef.contains(target) &&
      brandRef && !brandRef.contains(target)
    ) {
      closeDropdowns();
    }
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<!-- Fixed Header -->
<header class="fixed top-0 left-0 w-full z-50 bg-[#00332e] text-white shadow-md">
  <!-- Top Header -->
  <div class="flex items-center justify-between px-6 py-3">
    <!-- Logo -->
    <div class="text-2xl font-bold tracking-wide flex items-center gap-2">
      <a href="/" class="hover:underline">Duuuuu.</a>
    </div>

    <!-- Search -->
    <div class="flex-1 max-w-xs mx-2 relative">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search..."
        class="w-full pl-4 pr-5 py-1 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
      />
      <Search class="absolute right-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
    </div>

    <!-- Icons & Login -->
    <div class="flex items-center gap-4">
      <!-- Wishlist icon wrapped in a button for accessibility -->
      <button
        type="button"
        on:click={() => goto('/wishlists')}
        class="w-5 h-5 cursor-pointer hover:text-red-500 transition"
        aria-label="Wishlists"
      >
        <Heart class="w-full h-full" />
      </button>

      <Bell class="w-5 h-5" aria-label="Notifications" />

      <button
        on:click={goToLogin}
        class="flex items-center gap-2 border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition"
        aria-label="Login"
      >
        <User class="w-4 h-4" />
        Login
      </button>
    </div>
  </div>

  <!-- Navigation Bar -->
  <div class="border-t border-white border-opacity-20">
    <nav class="flex items-center justify-between px-6 py-2 text-sm font-medium">
      <!-- Centered Links -->
      <div class="flex items-center space-x-12 flex-grow justify-center">
        <!-- Products -->
        <div class="relative" bind:this={productRef}>
          <span class="text-lg">Products</span>
          <button
            on:click={toggleProductDropdown}
            class="text-xs focus:outline-none"
            aria-haspopup="true"
            aria-expanded={showProductDropdown}
          >
            ▼
          </button>

          {#if showProductDropdown}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/smartphones">Smartphone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/tablets">Tablet</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/computers">Computer</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/product_list/tvs">Tv</a></li>
            </ul>
          {/if}
        </div>

        <!-- Accessories -->
        <div class="relative" bind:this={accessoryRef}>
          <span class="text-lg">Accessories</span>
          <button
            on:click={toggleAccessoryDropdown}
            class="text-xs focus:outline-none"
            aria-haspopup="true"
            aria-expanded={showAccessoryDropdown}
          >
            ▼
          </button>

          {#if showAccessoryDropdown}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/cameras">Camera</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/earphones">Earphone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/headphones">Headphone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/smartwatches">Smartwatch</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/powerbanks">Powerbank</a></li>
            </ul>
          {/if}
        </div>

        <!-- Brands -->
        <div class="relative" bind:this={brandRef}>
          <span class="text-lg">Brand</span>
          <button
            on:click={toggleBrandDropdown}
            class="text-xs focus:outline-none"
            aria-haspopup="true"
            aria-expanded={showBrandDropdown}
          >
            ▼
          </button>

          {#if showBrandDropdown}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/iphone">iPhone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/samsung">Samsung</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brands/google">Google</a></li>
            </ul>
          {/if}
        </div>

        <a class="hover:underline text-lg" href="/contact">Contact us</a>
      </div>

      <!-- Compare Button -->
      <div class="flex items-center ml-auto">
        <button
          on:click={goToCompares}
          class="flex items-center gap-2 border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition mt-2"
        >
          Compare
        </button>
      </div>
    </nav>
  </div>
</header>
