<script lang="ts">
  export let fullSpecs;
</script>

<div class="full-specs-wrapper">
  <div class="full-specs-header">Full Specification</div>
  {#each fullSpecs as spec}
    <div class="category-row">
      <div class="category-block">
        {spec.category}
      </div>
      <div class="specs-items">
        {#each spec.items as item}
          <div class="spec-row">
            <div class="label-block">{item.label || ''}</div>
            <div class="value-block">{item.value}</div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
  
<style>
    .full-specs-wrapper {
      width: 900px;
      margin-top: 0px;
      background: white;
      border-radius: 4px;
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
      border: 1px solid #ccc;
    }
  
    .full-specs-header {
      height: 60px;
      background: #194640;
      color: white;
      font-size: 30px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
  
    .category-row {
      display: flex;
      border-bottom: 1px solid #ccc;
    }
  
    .category-block {
      width: 130px;
      background: #e8f0ef;
      color: #194640;
      font-size: 18px;
      font-weight: 600;
      padding: 15px;
      border-right: 1px solid #ccc;
      display: flex;
      align-items: start;
      justify-content: start;
    }
  
    .specs-items {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  
    .spec-row {
      display: flex;
      height: 38px;
      border-top: 1px solid #ccc;
    }
  
    .label-block {
      width: 170px;
      background: #f9f9f9;
      font-size: 18px;
      font-weight: 500;
      color: black;
      display: flex;
      align-items: center;
      padding-left: 15px;
      border-right: 1px solid #ccc;
    }
  
    .value-block {
      width: 600px;
      background: white;
      font-size: 16px;
      font-weight: 400;
      color: black;
      display: flex;
      align-items: center;
      padding-left: 15px;
    }
</style>