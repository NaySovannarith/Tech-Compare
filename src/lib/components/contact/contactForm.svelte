<script lang="ts">
  import FormField from './FormField.svelte';

  let fullName = '';
  let email = '';
  let country = '';
  let message = '';
  let emailError = '';
  let messageError = '';

  function handleSubmit() {
    alert('Message sent successfully!');

    // Clear all form fields
    fullName = '';
    email = '';
    country = '';
    message = '';

    // Reset errors
    emailError = '';
    messageError = '';
  }

  // Regex for validating a basic email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validation logic
  $: {
    emailError = email && !emailRegex.test(email) ? 'Please enter a valid email address.' : '';
    messageError = message && message.length < 10 ? 'Message should be at least 10 characters long.' : '';
  }

  // Overall form validity
  $: isValid = fullName && email && !emailError && message && !messageError && country;
</script>

<form class="form-card" on:submit|preventDefault={handleSubmit}>
  <h3>We’d love to hear from you!<br />Let’s get in touch</h3>

  <FormField label="Full Name" bind:value={fullName} required />
  <FormField label="Email" type="email" bind:value={email} required />
  {#if emailError}<p class="error">{emailError}</p>{/if}

  <!-- Choose Country -->
  <div class="form-field">
    <label for="country">Choose Country</label>
    <select id="country" bind:value={country} required>
      <option value="" disabled>Select your country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="GB">United Kingdom</option>
      <option value="KH">Cambodia</option>
      <!-- Add more as needed -->
    </select>
  </div>

  <FormField label="Your Message" type="textarea" bind:value={message} required />
  {#if messageError}<p class="error">{messageError}</p>{/if}

  <button class="submit-btn" type="submit" disabled={!isValid}>
    Send Message
  </button>
</form>

<style>
  .form-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    max-width: 600px;
    width: 100%;
    color: #111827;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 8px;
    color: #111827;
    font-weight: 600;
    line-height: 1.4;
  }

  .submit-btn {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    background-color: #00332e;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 12px;
  }

  .submit-btn:hover:enabled {
    background-color: #2e1f56;
  }

  .submit-btn:disabled {
    background-color: #cbd5e1;
    cursor: not-allowed;
  }

  .form-field select {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #f9fafb;
    margin-top: 8px;
  }

  .form-field label {
    font-size: 16px;
    font-weight: 500;
    color: #111827;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-top: -8px;
    margin-bottom: 8px;
  }
</style>
