<script lang="ts">
  import Info from "$lib/components/details/Info.svelte";
  import FullSpecs from "$lib/components/details/FullSpecs.svelte";
  import Video from "$lib/components/details/Video.svelte";
</script>

<div class="page-background">
  <div class="page-wrapper">
    <Info />
    <FullSpecs />
    <Video />
  </div>
</div>

<style>
  .page-background {
    background: #d9d9d9;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .page-wrapper {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1100px;
  }

</style>
