<script lang="ts">
	import { goto } from '$app/navigation';
	import Empty from '$lib/components/wishlist/Empty.svelte';
	import { wishlist } from '$lib/wishlist/wishlist';
	import { Heart } from 'lucide-svelte';

	function goBack() {
		history.length > 1 ? history.back() : goto('/');
	}

	function removeFromWishlist(id: string) {
		wishlist.update((items: any[]) => items.filter(product => product.id !== id));
	}
</script>

<div class="mt-[105px] bg-gray-100 min-h-screen">
	<div class="flex flex-col md:flex-row items-center justify-between mb-4 p-4">
		<button
			on:click={goBack}
			class="mb-4 md:mb-0 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black border-2 border-gray-500 rounded-lg"
		>
			← Go Back
		</button>
		<h1 class="text-2xl font-bold text-center mb-4 md:mb-0">My Wishlist</h1>
		<div class="w-[112px]"></div>
	</div>

	<div class="flex flex-col sm:flex-row justify-center items-center gap-2 text-xl text-center mb-8 mt-4 px-4">
		<span>Save your favorite products with our WishList Feature.</span>
		<Heart class="text-red-500 animate-pulse w-6 h-6" />
	</div>

	<div class="max-w-7xl mx-auto p-4">
		{#if $wishlist.length > 0}
			<ul class="space-y-4">
				{#each $wishlist as product (product.id)}
					<li class="container01 flex flex-col md:flex-row gap-4">
						<!-- Image and title/desc -->
						<div class="flex items-start gap-4 w-full md:w-1/2">
							<img
								src={product.image}
								alt={product.title}
								class="h-16 w-16 object-cover rounded bg-white"
							/>
							<div class="flex flex-col justify-center flex-1">
								<h2 class="font-medium">{product.title}</h2>
								<p class="text-sm text-gray-600">{product.description}</p>
							</div>
						</div>

						<!-- Price -->
						<div class="w-full md:w-1/4 flex flex-col items-start md:items-center justify-center text-left md:text-center">
							<p class="text-green-600 font-bold text-lg">${product.price.toFixed(2)}</p>
						</div>

						<!-- Stock + Actions -->
						<div class="w-full md:w-1/4 flex flex-col items-end justify-center text-right gap-1">
							<p class="text-green-600 text-sm"></p>
							<p class="text-xs text-gray-500">Added on: May 16, 2022</p>
							<button
								class="text-sm text-blue-600 hover:underline"
								on:click={() => goto(`/reviews/${encodeURIComponent(product.title)}`)}
							>
								Leave a Review
							</button>
							<button
								class="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
								on:click={() => removeFromWishlist(product.id)}
							>
								Remove
							</button>
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<Empty />
		{/if}
	</div>
</div>

<style>
	.container01 {
		border: 1px solid #e5e7eb;
		padding: 1rem;
		border-radius: 0.25rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
					0 1px 2px 0 rgba(0, 0, 0, 0.06);
		background-color: white;
	}
</style>
