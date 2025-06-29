<script lang="ts">
  import FormField from './FormField.svelte';

  let fullName = '';
  let email = '';
  let country = '';
  let message = '';
  let emailError = '';
  let messageError = '';
  let isSubmitting = false;
  let submitMessage = '';
  let submitError = '';

  // Your API base URL - update this to match your Laravel backend URL
  const API_BASE_URL = 'http://localhost:8000/api'; // Change this to your actual backend URL

  async function handleSubmit() {
    if (!isValid) return;

    isSubmitting = true;
    submitMessage = '';
    submitError = '';

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          country,
          message
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        submitMessage = data.message || 'Message sent successfully!';
        
        // Clear all form fields
        fullName = '';
        email = '';
        country = '';
        message = '';

        // Reset errors
        emailError = '';
        messageError = '';
      } else {
        // Handle validation errors from backend
        if (data.errors) {
          let errorMessages = [];
          for (const field in data.errors) {
            errorMessages.push(...data.errors[field]);
          }
          submitError = errorMessages.join(' ');
        } else {
          submitError = data.message || 'Failed to send message. Please try again.';
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      submitError = 'Network error. Please check your connection and try again.';
    } finally {
      isSubmitting = false;
    }
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
  <h3>We'd love to hear from you!<br />Let's get in touch</h3>

  {#if submitMessage}
    <div class="success-message">
      <p>{submitMessage}</p>
    </div>
  {/if}

  {#if submitError}
    <div class="error-message">
      <p>{submitError}</p>
    </div>
  {/if}

  <FormField label="Full Name" bind:value={fullName} required />
  <FormField label="Email" type="email" bind:value={email} required />
  {#if emailError}<p class="error">{emailError}</p>{/if}

  <!-- Choose Country -->
  <div class="form-field text-black">
    <label for="country">Choose Country</label>
    <select id="country" bind:value={country} required>
      <option value="" disabled>Select your country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="GB">United Kingdom</option>
      <option value="KH">Cambodia</option>
      <option value="AU">Australia</option>
      <option value="DE">Germany</option>
      <option value="FR">France</option>
      <option value="JP">Japan</option>
      <option value="SG">Singapore</option>
      <option value="TH">Thailand</option>
      <!-- Add more as needed -->
    </select>
  </div>

  <FormField label="Your Message" type="textarea" bind:value={message} required />
  {#if messageError}<p class="error">{messageError}</p>{/if}

  <button class="submit-btn" type="submit" disabled={!isValid || isSubmitting}>
    {#if isSubmitting}
      Sending...
    {:else}
      Send Message
    {/if}
  </button>
</form>

<style>
  .success-message {
    background-color: #d4edda;
    color: #155724;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
  }

  .error-message {
    background-color: #f8d7da;
    color: #721c24;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>