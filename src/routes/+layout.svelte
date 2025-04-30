<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    
  </script>
  

  <Header />
  
  <main class="min-h-screen pt-4 bg-grey-50 text-black">

    <slot />
    
  
  </main>
  
  <Footer />
  