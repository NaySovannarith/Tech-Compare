<script>
// @ts-nocheck

  import { goto } from '$app/navigation';
  import { addToWishlist, removeFromWishlist, wishlist } from '$lib/wishlist/wishlist';
  import {
    Monitor,
    Cpu,
    Camera,
    Smartphone,
    Globe,
    MemoryStick,
    Database,
    Share,
  } from 'lucide-svelte';

  export let title;
  export let brand;
  export let image;
  export let storage;
  export let memory;
  export let price;

  const id = `${title}-${storage}-${memory}`;

  const product = {
    id,
    title,
    brand,
    image:"/iphones/iPhone 16.jpg",
    storage,
    memory,
    price,
    thumbnail: image,
    description: `${storage} Storage / ${memory} RAM`,
  };

  $: isWishlisted = $wishlist.some(item => item.id === id);

  function toggleWishlist() {
    isWishlisted ? removeFromWishlist(id) : addToWishlist(product);
  }

  const specs = [
    { icon: Monitor, label: "Display", value: "6.10-inch", sub: "1179x2556" },
    { icon: Cpu, label: "Processor", value: "Apple A18" },
    { icon: Camera, label: "Rear Camera", value: "48MP + 12MP" },
    { icon: Smartphone, label: "Front Camera", value: "12MP" },
    { icon: Globe, label: "OS", value: "iOS 18" },
    { icon: MemoryStick, label: "RAM", value: "8GB" },
    { icon: Database, label: "Storage", value: "128GB, 256GB, 512GB" },
  ];

  $: actions = [
    {
      icon: isWishlisted ? '/details/wishlist.png' : '/details/wishlist.png',
      label: isWishlisted ? 'Wishlisted' : 'Wishlist',
      click: toggleWishlist
    },
    {
      icon: '/details/review.png',
      label: 'Review',
      click: () => goto('/reviews')
    },
    {
      icon: '/details/compare.png',
      label: 'Compare',
      click: () => goto('/compares')
    },
    {
      icon: '/details/buy.png',
      label: 'Buy',
      click: () => goto('/buy')
    },
    {
      icon: '/details/share.png',
      label: 'Share',
      click: () => navigator.share?.({ title, url: window.location.href })
    }
  ];
</script>

<div class="container">
  <div class="card">
    <div class="left">
      <img src={product.image} alt={product.title} />
    </div>

    <div class="right">
      <h1>{product.title} iphone16</h1>
      <hr />
      <div class="spec-grid">
        {#each specs as spec}
          <div class="spec">
            <div class="icon-box">
              <svelte:component this={spec.icon} class="icon" />
            </div>
            <div class="text">
              <p class="label">{spec.label}</p>
              <p class="value">{spec.value}</p>
              {#if spec.sub}
                <p class="sub">{spec.sub}</p>
              {/if}
            </div>
          </div>
        {/each}
      </div>

      <div class="footer">
        <span><strong>Market Status:</strong> Released</span>
        <span><strong>Release Date:</strong> 9th September 2024</span>
        <span><strong>Official Website:</strong> <a href="https://apple.com">apple.com</a></span>
      </div>

      <div class="actions">
        {#each actions as action (action.label)}
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <div
            class="action"
            on:click={action.click}
            style="cursor: pointer;"
          >
            <div class="icon-circle">
              {#if typeof action.icon === 'string'}
                <img src={action.icon} alt={action.label} width="24" height="24" />
              {:else}
                <svelte:component this={action.icon} size={24} />
              {/if}
            </div>
            <span>{action.label}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    font-family: 'Poppins', sans-serif;
    padding: 25px;
    background: #d1d1d1;
    max-width: 1200px;
    margin: auto;
    border-radius: 30px;
    box-shadow: inset 0 0 8px #999;
  }

  .card {
    display: flex;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    border: 3px solid #e0e0e0;
  }

  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 20px;
  }

  .left img {
    max-height: 430px;
  }

  .right {
    flex: 2;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  .right h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  hr {
    border: none;
    height: 2px;
    background: #000;
    margin: 10px 0 20px;
  }

  .spec-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 25px;
  }

  .spec {
    display: flex;
    gap: 10px;
  }

  .icon-box {
    background: #f2f2f2;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text .label {
    font-size: 13px;
    color: #555;
    margin: 0;
  }

  .text .value {
    font-size: 17px;
    font-weight: 600;
    margin: 2px 0;
  }

  .text .sub {
    font-size: 12px;
    color: #888;
  }

  .footer {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: auto;
    gap: 10px;
  }

  .footer a {
    color: red;
    text-decoration: none;
  }

  .actions {
    background: #194640;
    margin-top: 25px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
  }

  .action {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
  }

  .icon-circle {
    background: white;
    padding: 10px;
    border-radius: 50%;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-circle img {
    width: 24px;
    height: 24px;
  }

  .action:hover span {
    text-decoration: underline;
  }

  .left img {
  max-height: 800px; /* increased height */
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  transform: scale(1.6); /* optional scale for emphasis */
}

.right h1 {
  font-size: 36px;       /* Make it larger */
  font-weight: 800;      /* Extra bold */
  margin-bottom: 15px;
  color: #222;           /* Optional: for clarity */
  text-transform: uppercase; /* Optional: all caps */
  text-shadow: 3px 4px 5px rgba(6, 95, 172, 0.2);
}

</style>
