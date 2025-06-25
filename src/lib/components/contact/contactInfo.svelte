<div class="contact-container">
  <div class="info">
    <h2>Contact Us</h2>
    <p>
      Not sure what you need? The team at Square Events will be happy to listen to you and suggest event ideas you hadn’t considered.
    </p>

    <div class="details">
      <div class="item">
        <span class="icon">📧</span> <span class="text">duuu_z@gmail.com</span>
      </div>
      <div class="item">
        <span class="icon">📞</span> <span class="text">Support: +855 11969451</span>
      </div>
    </div>
  </div>
</div>

<style>
  /* Full-screen background and centering */
  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

  }

  .info {
    max-width: 600px;
    width: 100%;
    color: #111827;
    text-align: left;
  }

  h2 {
    font-size: 56px;
    margin-bottom: 50px;
    font-weight: 700;
    color: #00332e;
    text-transform: uppercase;
  }

  p {
    font-size: 27px;
    color: #e5e7eb;
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
  }

  .details .item {
    display: flex;
    justify-content: left;
    gap: 14px;
    align-items: center;
    margin-bottom: 16px;
    font-size: 36px;
    color: #f3f4f6;
  }

  .icon {
    font-size: 22px;
    color: #00332e;
  }

  .text {
    font-size: 28px;
    color: #1f2937;
    font-weight: 500;
  }

  .details .item:hover {
    transform: translateY(-3px);
    transition: transform 0.2s ease;
  }

  /* Add some responsiveness */
  @media (max-width: 768px) {
    .info {
      max-width: 90%;
      padding: 20px;
    }

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }

    .details .item {
      font-size: 14px;
    }
  }
</style>
