<script lang="ts">
    import ProductCard from '$lib/components/ProductCard.svelte';
  
  
  
    const huaweiProducts = [
      {
        title: 'huawei P60 series',
        brand: 'Huawei',
        image: '/huawei/huawei P60.jpg',
        storage: '128GB',
        memory: '8GB',
        price: 790
      },
        {
            title: 'huawei P50 series',
            brand: 'Huawei',
            image: '/huawei/huawei P50.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 690
        },
        {
            title: 'huawei P40 series',
            brand: 'Huawei',
            image: '/huawei/huawei P40.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 590
        },
        {
            title: 'huawei P30 series',
            brand: 'Huawei',
            image: '/huawei/huawei P30.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 490
        },
        {
            title: 'huawei P20 series',
            brand: 'Huawei',
            image: '/huawei/huawei P20.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 390
        },
        {
            title: 'huawei P10 series',
            brand: 'Huawei',
            image: '/huawei/huawei P10.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        {
            title: 'huawei P9 series',
            brand: 'Huawei',
            image: '/huawei/huawei P9.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 190
        },
        {
            title: 'huawei P8 series',
            brand: 'Huawei',
            image: '/huawei/huawei P8.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 90
        }
    ];
  
  </script>
  
  <div class="mt-[100px] px-6 py-4 space-y-6">
    <!-- Price Range -->
    
  
    <!-- Products -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4">
        {#each huaweiProducts as product}
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
  </div>
  