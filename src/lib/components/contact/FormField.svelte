<script lang="ts">
  export let label = '';
  export let type: 'text' | 'email' | 'textarea' = 'text';
  export let value: string = '';
  export let placeholder: string = '';
  export let required: boolean = false;
</script>

<div class="form-field">
  <label for={label}>{label}</label>

  {#if type === 'textarea'}
    <textarea
      id={label}
      rows="4"
      bind:value
      placeholder={placeholder}
      {required}
    />
  {:else}
    <input
      id={label}
      type={type}
      bind:value
      placeholder={placeholder}
      {required}
    />
  {/if}
</div>

<style>
  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
  }

  label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    color: #333;
  }

  input,
  textarea {
    padding: 14px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9fafb;
    color: #333;
    width: 100%;
    transition: border 0.3s ease;
  }

  input:focus,
  textarea:focus {
    border-color: #3d2c66;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #aaa;
  }

  /* Adding styles for required fields */
  input[required],
  textarea[required] {
    border-color: #00332e;
  }
</style>
