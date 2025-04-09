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
  const goToLogin = () => goto('/login')

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

<header class="bg-[#00332e] text-white shadow-md">
  <!-- Top Header -->
  <div class="flex items-center justify-between px-6 py-3">
    <!-- Logo -->
    <div class="text-2xl font-bold tracking-wide flex items-center gap-2">
      
      <a href="/" class="hover:underline">Duuuuu.</a>
      
      
    </div>

    <!-- Search -->
    <div class="flex-1 max-w-xs mx-2 relative  ">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search...."
        class="w-full pl-4 pr-5py--1 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
      />
      <Search class="absolute right-3 top-1/2 -translate-y-2 text-black w-4 h-4" />
    </div>

    <!-- Icons & Login -->
    <div class="flex items-center gap-4"> <!-- Remove flex-col to keep them in the same row -->
      <Heart class="w-5 h-5" />
      <Bell class="w-5 h-5" /> 
      <button on:click={goToLogin}  class="flex items-center gap-2 border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition">
        <User class="w-4 h-4" />
        Login
      </button>
    
    

      <!-- Compare button under Login -->
     
    </div>
  </div>
  <div class="border-t border-white border-opacity-20">
    <nav class="flex items-center justify-between px-6 py-2 text-sm font-medium">
      <!-- Container for links with centered content -->
      <div class="flex items-center space-x-12 flex-grow justify-center"> <!-- Centering the links with flex-grow and justify-center -->
        <div class="relative" bind:this={productRef}>
          <span class="text-lg">Product</span>
          <button on:click={toggleProductDropdown} class="text-xs focus:outline-none">▼</button>
          {#if showProductDropdown}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/products/iphone">iPhone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/products/samsung">Samsung</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/products/oppo">Oppo</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/products/huawei">Huawei</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/products/xiaomi">Xiaomi</a></li>
            </ul>
          {/if}
        </div>
  
        <div class="relative" bind:this={accessoryRef}>
          <span class="text-lg">Accessories</span>
          <button on:click={toggleAccessoryDropdown} class="text-xs focus:outline-none">▼</button>
          {#if showAccessoryDropdown}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/case">Phone Case</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/charger">Charger</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/accessories/earbuds">Earbuds</a></li>
            </ul>
          {/if}
        </div>
  
        <div class="relative" bind:this={brandRef}>
          <span class="text-lg">Brand</span>
          <button on:click={toggleBrandDropdown} class="text-xs focus:outline-none">▼</button>
          {#if showBrandDropdown}
            <ul class="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brand/iphone">iPhone</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brand/samsung">Samsung</a></li>
              <li class="px-4 py-2 hover:bg-gray-200"><a href="/brand/google">Google</a></li>
            </ul>
          {/if}
        </div>
  
        <a class="hover:underline text-lg" href="/contact">Contact us</a> 
      </div>
      
  
      <!-- Compare button on the far right -->
      <div class="flex items-center ml-auto"> <!-- ml-auto pushes Compare button to the right -->
        <button  on:click={goToCompares} class="flex items-center gap-2 border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition mt-2">
         

          Compare
        </button>
      </div>
    </nav>
  </div>
  
  
  
  
</header>