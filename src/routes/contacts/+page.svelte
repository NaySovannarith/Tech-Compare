<script lang="ts">
    import ContactInfo from '$lib/components/contact/contactInfo.svelte';
    import ContactForm from '$lib/components/contact/contactForm.svelte';
  </script>
  
  <div class="contact-wrapper mt-[100px]">
    <ContactInfo />
    <ContactForm />
  </div>
  
  <style>
    .contact-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      color: white;
      min-height: 100vh;
      padding: 60px 40px;
      gap: 60px;
      align-items: center;
    }
  </style>
  