<script>
  import ProductCard from './ProductCard.svelte';

  const products = [
    {
      
      title: 'iPhone 13 Series',
      brand: 'Apple',
      image: '/images/iphone13.png',
      storage: '128GB',
      memory: '8GB',
      price: 380
    },
    {
      
      title: 'iPhone 13 Series',
      brand: 'Apple',
      image: '/iphones/iphone 16.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 380
    },
    {
      
      title: 'iPhone 13 Series',
      brand: 'Apple',
      image: '/iphones/iphone 14.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 380
    },
    {
      
      title: 'iPhone 13 Series',
      brand: 'Apple',
      image: '/iphones/iphone 16.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 380
    }
  ];
</script>

<div class="bg-[#dfe6d8] py-8 px-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
    {#each products as product}
      <ProductCard
        title={product.title}
        brand={product.brand}
        image={product.image}
        storage={product.storage}
        memory={product.memory}
        price={product.price}
      />
    {/each}
  </div>

  <div class="flex justify-center mt-6">
    <button class="px-6 py-2 bg-white rounded-full shadow hover:shadow-md border flex items-center gap-2">
      View All Phones →
    </button>
  </div>
</div>