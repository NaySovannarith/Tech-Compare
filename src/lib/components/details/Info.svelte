<script lang="ts">
    export let title;
    export let image;
    export let specs;

    const actions = [
      { icon: "/details/wishlist.png", label: "Wishlist" },
      { icon: "/details/review.png", label: "Review" },
      { icon: "/details/compare.png", label: "Compare" },
      { icon: "/details/buy.png", label: "Buy" },
      { icon: "/details/share.png", label: "Share" }
    ];
</script>

<div class="scale-wrapper">
  <div class="info-actions-wrapper">
    <div class="product-info">
      <div class="image-wrapper">
        <div class="image-frame">
          <img src={image} alt={title} class="phone-image" />
        </div>
      </div>

      <div class="details-wrapper">
        <div class="title-bar">
          <h1>{title}</h1>
        </div>
        <div class="spec-cards">
          <div class="spec-card">
            <img src="/details/display.png" alt="Display" class="spec-icon" />
            <div class="spec-text">
              {#each specs[0].lines as line, i}
                <p class={i === 0 ? 'first-line' : 'other-lines'}>{line}</p>
              {/each}
            </div>
          </div>

          <div class="spec-card">
            <img src="/details/ardware.png" alt="Hardware" class="spec-icon" />
            <div class="spec-text">
              {#each specs[1].lines as line, i}
                <p class={i === 0 ? 'first-line' : 'other-lines'}>{line}</p>
              {/each}
            </div>
          </div>

          <div class="spec-card">
            <img src="/details/battery.png" alt="Battery" class="spec-icon" />
            <div class="spec-text">
              {#each specs[2].lines as line, i}
                <p class={i === 0 ? 'first-line' : 'other-lines'}>{line}</p>
              {/each}
            </div>
          </div>

          <div class="spec-card">
            <img src="/details/memory.png" alt="Memory" class="spec-icon" />
            <div class="spec-text">
              {#each specs[3].lines as line, i}
                <p class={i === 0 ? 'first-line' : 'other-lines'}>{line}</p>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="actions-bar">
      {#each actions as action, idx}
        <div class="action-button {idx !== 0 ? 'with-border' : ''}">
          <img src={action.icon} alt={action.label} class="action-icon" />
          <span>{action.label}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
  
<style>
  .scale-wrapper {
    transform: scale(0.9);
    transform-origin: top center;
  }
   
  .info-actions-wrapper {
    width: 1100px;
    display: flex;
    flex-direction: column;
  }
  
  .product-info {
    width: 1100px;
    height: 379px;
    display: flex;
  }

  .image-wrapper {
    width: 400px;
    height: 400px;
    background: #ffffff;
    border-top-left-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-frame {
    width: 310px;
    height: 385px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .phone-image {
    width: 310px;
    height: 385px;
    object-fit: contain;
    transform: scale(1.15);
  }

  .details-wrapper {
    width: 700px;
    display: flex;
    flex-direction: column;
  }

  .title-bar {
    height: 80px;
    background: #194640;
    border-top-right-radius: 25px;
    display: flex;
    align-items: center;
    padding-left: 27px;
  }

  .title-bar h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin: 0;
  }

  .spec-cards {
    height: 400px;
    display: flex;
    justify-content: space-between;
  }

  .spec-card {
    width: 175px;
    height: 320px;
    background: #ffffff;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 37px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .spec-icon {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }

  .spec-text {
    margin-top: 42px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;
  }

  .first-line {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    margin: 0;
  }

  .other-lines {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }

  .actions-bar {
    width: 1100px;
    height: 80px;
    background: #194640;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    overflow: hidden;
  }

  .action-button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
  }

  .with-border {
    border-left: 1px solid white;
  }

  .action-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 4px;
  }

  .action-button span {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
  }

  .action-button:active {
    transform: scale(0.95);
  }
</style>