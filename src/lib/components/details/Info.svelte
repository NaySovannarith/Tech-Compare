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
            <img src="/details/hardware.png" alt="Hardware" class="spec-icon" />
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
            <span>{action.label}</span>
          </div>
        {/each}
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

  .icon {
    width: 24px;
    height: 24px;
    color: #222;
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

  .icon-circle svg {
    color: #194640;
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
