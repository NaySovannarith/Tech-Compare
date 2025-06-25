<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from "svelte";
  import { user } from '$lib/data/auth';

  async function fetchUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      user.set(null);
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/api/user', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.ok) {
        const userData = await res.json();
        user.set(userData);
      } else {
        user.set(null);
        localStorage.removeItem('token');
      }
    } catch (e) {
      console.error('Error fetching user:', e);
      user.set(null);
      localStorage.removeItem('token');
    }
  }

  onMount(() => {
    fetchUser();
  });

  function logout() {
    localStorage.removeItem('token');
    user.set(null);
  }
</script>

<Header {user} on:logout={logout} />

<main class="min-h-screen pt-4 bg-grey-50 text-black">
  <slot />
</main>

<Footer />
