<script lang="ts">
  import { Search, Box, User, BarChart2, Sparkles, HelpCircle } from 'lucide-svelte';

  const icons = {
    search: Search,
    box: Box,
    user: User,
    'bar-chart': BarChart2,
    sparkles: Sparkles,
    'help-circle': HelpCircle,
  };

  export let name: keyof typeof icons; // ✅ Restrict input to known keys
</script>

<svelte:component this={icons[name]} class="w-5 h-5" />
