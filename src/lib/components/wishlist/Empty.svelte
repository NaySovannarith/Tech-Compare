  <script>
  import { goto } from "$app/navigation";

    function addmore() {
		 goto('/');
	}
  </script>
<div class="flex flex-col items-center justify-center min-h-700px] py-24 px-4 bg-gray-100 rounded-lg shadow max-w-3xl mx-auto text-center">
    <h2 class="text-2xl font-bold mb-6 ">
        Your wishlist is empty! Start adding <br />
        your favorite items now.
    </h2>
    <button
    on:click={addmore}
    class="border-2 border-dashed border-gray-400 p-4 rounded cursor-pointer"
     >
     <img
     src="/images/adding.png"
     alt="Empty wishlist"
     class="w-64 h-64 object-contain opacity-80"
 />

        
    </button>


</div>