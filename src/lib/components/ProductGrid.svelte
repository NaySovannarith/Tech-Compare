<script>
  import ProductCard from './ProductCard.svelte';

  const products = [
    {
        id: 115,
          title: 'iPhone 13 series',
          brand: 'Apple',
          image: '/iphones/iPhone 13.jpg',
          storage: '128GB',
          memory: '6GB',
          price: 690
      },
    {
      id: 101,
      title: 'iPhone 16 series',
      brand: 'Apple',
      image: '/iphones/iPhone 16.jpg',
      storage: '128GB',
      memory: '8GB',
      price: 790
    },
      {
        id: 116,
          title: 'iPhone 14 series',
          brand: 'Apple',
          image: '/iphones/iPhone 14.jpg',
          storage: '128GB',
          memory: '6GB',
          price: 790
      },
      {
        id: 119,
          title: 'iPhone 14 Plus series',
          brand: 'Apple',
          image: '/iphones/iPhone 14 Pro.jpg',
          storage: '128GB',
          memory: '6GB',
          price: 890
      }
  ];
</script>

<div class="bg-[#dfe6d8] py-8 px-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
    {#each products as product}
      <ProductCard
        id={product.id}
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
    <a
      href="/product_list"
      class="px-6 py-2 bg-[#00332e] text-white rounded-full shadow hover:bg-[#00584f] transition flex items-center gap-2 text-sm"
    >
      View All Phones →
    </a>
  </div>
  
</div>