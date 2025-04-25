<script lang="ts">
	import { goto } from '$app/navigation';
	import Empty from '$lib/components/wishlist/Empty.svelte';
	import { wishlist } from '$lib/wishlist/wishlist';

	function goBack() {
		history.length > 1 ? history.back() : goto('/');
	}

	

	// Remove item by ID
	function removeFromWishlist(id: string) {
		wishlist.update(items => items.filter(product => product.id !== id));
	}
</script>
	
    <div class=" mt-[100px] flex items-center justify-between mb-4 px-4 ">		
		
       <button
		on:click={goBack}
		class=" mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black border-2  border-gray-500 rounded-lg"
	>
	
		← Go Back
	</button>
	<h1 class="text-2xl font-bold text-center flex-1 mb-5 mt-6">My Wishlist (Test)</h1>
	
	<div class="w-[112px]"></div>
	</div>
	<p class="text-xl  text-center flex-1 mb-8 mt-4"> Save your faverite products with our WishList Feature.</p>


<div class="max-w-7xl mx-auto p-4 ">
	{#if $wishlist.length > 0}
		<ul class="space-y-4">
			{#each $wishlist as product (product.id)}
				<li class="flex items-center justify-between border p-4 rounded shadow">
					<div class="flex items-start gap-4 w-1/2">
						<img
						src={product.thumbnail}
						alt={product.title}
						class="h-16 w-16 object-cover rounded  bg-white"
					/>
					
			<div class="flex flex-col justify-center flex-1 ">
				<h2 class="font-medium">{product.title}</h2>
				<p class="text-sm text-gray-600">{product.description}</p>
			</div>
			</div>

			<div class="w-1/4 flex flex-col items-center justify-center text-center">
				<!-- <p class="text-sm text-gray-500 line-through">${(product.price + 10).toFixed(2)}</p> -->
				<p class="text-green-600 font-bold text-lg">${product.price.toFixed(2)}</p>
			  </div>
			

                  			<!-- Stock + Actions -->
			<div class="w-1/4 flex flex-col items-end justify-center text-right gap-1">
				<p class="text-green-600 text-sm">In Stock</p>
				<p class="text-xs text-gray-500">Added on: May 16, 2022</p>
				<button
				class="text-sm text-blue-600 hover:underline"
				on:click={() => goto(`/reviews/${encodeURIComponent(product.title)}`)}
			  >
				Leave a Review
			  </button>
			  
				  
				  
				<br />
				
					<button
						class="mt-auto bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
						on:click={() => removeFromWishlist(product.id)}
					>
						Remove
					</button>
				</li>
			{/each}
		</ul>
	{:else}
		<Empty />
	{/if}
</div>