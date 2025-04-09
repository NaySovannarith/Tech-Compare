<script>
    export let title;
    export let brand;
    export let image;
    export let storage;
    export let memory;
    export let price;
  </script>
  
  <div class="bg-white p-4 rounded-lg shadow w-full max-w-xs">
    <img src={image} alt={title} class="h-32 mx-auto object-contain" />
    <p class="mt-2 text-sm text-gray-500">{brand}</p>
    <h2 class="font-bold text-lg">{title}</h2>
    <p>Storage: {storage}</p>
    <p>Memory (RAM): {memory}</p>
    <p class="font-semibold mt-2">Price: ${price}</p>
    <button class="mt-2 px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 text-sm">View Detail</button>
  </div>
  