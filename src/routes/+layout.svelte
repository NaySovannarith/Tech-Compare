<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    
  </script>


  <Header />
  
  <main class="min-h-screen p-4 bg-gray-50">
    <slot />
    
    
  </main>
  
  <Footer />
  