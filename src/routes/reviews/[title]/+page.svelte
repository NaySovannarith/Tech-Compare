<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';


  
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
  
  <div class="mt-[100px] max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-4">Leave a Review for</h1>
    <h2 class="text-xl text-gray-700 mb-6">{productTitle}</h2>
  
    <label class="block mb-2 font-semibold">Rating (1-5)</label>
    <input
      type="number"
      min="1"
      max="5"
      bind:value={rating}
      class="w-full border rounded px-3 py-2 mb-4"
    />
  
    <label class="block mb-2 font-semibold">Your Review</label>
    <textarea
      bind:value={reviewText}
      rows="5"
      placeholder="Write your thoughts..."
      class="w-full border rounded px-3 py-2 mb-6"
    ></textarea>
  
    <button
      on:click={submitReview}
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Submit Review
    </button>
  </div>
  