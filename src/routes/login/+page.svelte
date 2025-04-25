<script>
// @ts-nocheck

    import LoginModal from '$lib/components/LoginModal.svelte';
    let showLogin = false;
  </script>
  
  <button on:click={() => (showLogin = true)}>Open Login</button>
  
  <LoginModal bind:isOpen={showLogin} />
  