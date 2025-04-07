<script>
  let searchQuery = '';
</script>

<header class="bg-[#00332e] text-white px-6 py-4 flex items-center justify-between shadow-md">
  <!-- Logo -->
  <div class="text-xl font-bold tracking-wide">
    Duuu.
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
      <div class="relative group">
        <button class="hover:underline">Product</button>
        
      </div>
      <div class="relative group">
        <button class="hover:underline">Accessories</button>
      </div>
      <div class="relative group">
        <button class="hover:underline">Brands</button>
      </div>
      <div class="relative group">
        <button class="hover:underline">Contact us</button>
      </div>
    </nav>

    <!-- Compare Button -->
    <button class="border border-white rounded px-3 py-1 text-sm hover:bg-white hover:text-[#00332e] transition">
      Compare
    </button>

    <!-- Login Button -->
    <button class="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-[#00332e] transition">
      Login
    </button>

  </div>
</header>
