<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function goBack() {
		history.length > 1 ? history.back() : goto('/');
	}

	let productTitle = '';
	let reviewText = '';
	let rating = 5;

	$: titleParam = $page.params.title;

	onMount(() => {
		productTitle = decodeURIComponent(titleParam);
	});

	function submitReview() {
		console.log('Review submitted:', {
			productTitle,
			reviewText,
			rating
		});

		alert(`Thanks for your review on ${productTitle}!`);
		goto('/');
	}
</script>

<div class="  mt-[95px] bg-gray-100 min-h-screen p-4">
	<!-- Go Back Button -->
	<button
	on:click={goBack}
	class="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black border-2 border-gray-500 rounded-lg"
>
	← Go Back
</button>

	<div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-5">
		
		<!-- Product Info -->
		<div class="flex flex-col md:flex-row items-center md:items-start gap-6">
			<!-- <img src={product.thumbnail} class="w-48 h-48 object-cover rounded" /> -->
			<div>
				<h2 class="text-2xl font-bold">{productTitle}</h2>
				<p class="text-gray-600">Category: Electronics</p>
				<p class="text-lg mt-2 text-green-600 font-semibold">$99.99</p>
			</div>
		</div>

		<!-- Average Rating -->
		<div class="mt-6">
			<h3 class="text-xl font-semibold mb-2">Average Rating</h3>
			<div class="flex items-center gap-2">
				<div class="flex text-yellow-400 text-lg">★★★★☆</div>
				<p class="text-gray-700">(4.2 out of 5)</p>
			</div>
		</div>

		<!-- User Reviews -->
		<div class="mt-8">
			<h3 class="text-xl font-semibold mb-4">User Reviews</h3>

			<div class="space-y-6">
				<!-- Review 1 -->
				<div class="border-t pt-4">
					<div class="flex items-center justify-between">
						<p class="font-medium">John Doe</p>
						<div class="text-yellow-400">★★★★☆</div>
					</div>
					<p class="text-gray-700 mt-2">Great sound quality, comfortable fit. Battery lasts long. Totally worth it.</p>
				</div>

				<!-- Review 2 -->
				<div class="border-t pt-4">
					<div class="flex items-center justify-between">
						<p class="font-medium">Sarah L.</p>
						<div class="text-yellow-400">★★★★★</div>
					</div>
					<p class="text-gray-700 mt-2">Exceeded my expectations! The noise canceling is superb.</p>
				</div>
			</div>
		</div>

		<!-- Submit a Review -->
		<div class="mt-10 border-t pt-6">
			<h3 class="text-xl font-semibold mb-4">Write a Review</h3>
			<form class="space-y-4" on:submit|preventDefault={submitReview}>
				<label class="block font-semibold">Rating (1-5)</label>
				<input
					type="number"
					min="1"
					max="5"
					bind:value={rating}
					class="w-full border p-2 rounded"
				/>

				<label class="block font-semibold">Your Review</label>
				<textarea
					bind:value={reviewText}
					rows="5"
					placeholder="Write your thoughts..."
					class="w-full border p-2 rounded"
				></textarea>

				<button
					type="submit"
					class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
				>
					Submit Review
				</button>
			</form>
		</div>
	</div>
</div>
