<script>
// @ts-nocheck

  
    
    import RegisterModal from '$lib/components/RegisterModal.svelte';
    let showRegister = false;
  </script>
 
 <button on:click={() => (showRegister = true)}>Open Login</button>
    
 <RegisterModal bind:isOpen={showRegister} />