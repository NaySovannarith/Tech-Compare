<script lang="ts">
    import ProductCard from '$lib/components/ProductCard.svelte';
  
  
  
    const huaweiProducts = [
      {
        id: 1,
        title: 'huawei P60 series',
        brand: 'Huawei',
        image: '/huawei/huawei P60.jpg',
        storage: '128GB',
        memory: '8GB',
        price: 790
      },
        {
            id: 2,
            title: 'huawei P50 series',
            brand: 'Huawei',
            image: '/huawei/huawei P50.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 690
        },
        {
            id: 3,
            title: 'huawei P40 series',
            brand: 'Huawei',
            image: '/huawei/huawei P40.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 590
        },
        {
            id: 4,
            title: 'huawei P30 series',
            brand: 'Huawei',
            image: '/huawei/huawei P30.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 490
        },
        {
            id: 5,
            title: 'huawei P20 series',
            brand: 'Huawei',
            image: '/huawei/huawei P20.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 390
        },
        {
            id: 6,
            title: 'huawei P10 series',
            brand: 'Huawei',
            image: '/huawei/huawei P10.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 290
        },
        {
            id: 7,
            title: 'huawei P9 series',
            brand: 'Huawei',
            image: '/huawei/huawei P9.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 190
        },
        {
            id: 8,
            title: 'huawei P8 series',
            brand: 'Huawei',
            image: '/huawei/huawei P8.jpg',
            storage: '128GB',
            memory: '8GB',
            price: 90
        }
    ];
  
  </script>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4"></div>
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
   

  