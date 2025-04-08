<script>
  let searchQuery = '';
  import { goto } from '$app/navigation';

  const goToCompares = () => goto('/compares');
const goToLogin = () => goto('/login')
</script>

<header class="bg-[#00332e] text-white px-6 py-4 flex items-center justify-between shadow-md">
  <!-- Logo --> 
  <div class="text-xl font-bold tracking-wide" >
    <a href="/" class="hover:underline">Duuuuu.</a>
  </div>

  <!-- Search Bar -->
  <div class="flex-1 mx-6 max-w-md">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search..."
      class="w-full px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
    />
  </div>

  <!-- Navigation and Buttons -->
  <div class="flex items-center space-x-4">
    <!-- Nav Links -->
    <nav class="flex space-x-4 font-medium text-sm">
      <a href="/product_list" class="hover:underline">Product</a>
      <a href="/accessories" class="hover:underline">Accessories</a>
      <a href="/brands" class="hover:underline">Brands</a>
      <a href="/contact" class="hover:underline">Contact us</a>

    
    </nav>

    <!-- Compare Button -->
    <button
    on:click={goToCompares} 
    class="border border-white rounded px-3 py-1 text-sm hover:bg-white hover:text-[#00332e] transition duration-200 ease-in-out">
      Compare
    </button>

    <!-- Login Button -->
    <button
    on:click={goToLogin}
    class="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition duration-200 ease-in-out">
      Login
    </button>

  </div>
</header>
