<script lang="ts">
    export let isOpen = false
  
    let email = ""
    let password = ""
    let showPassword = false
  
    const closeModal = () => (isOpen = false)
    const togglePassword = () => (showPassword = !showPassword)
    const login = () => {
      alert(`Email: ${email}, Password: ${password}`)
      closeModal()
    }
  
    const handleKeydown = (event: KeyboardEvent, action: () => void) => {
      if (event.key === "Enter" || event.key === " ") {
        action()
      }
    }
  </script>
  
  <style>
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 50;
      display: none;
    }
  
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      width: 90%;
      max-width: 400px;
      z-index: 100;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
      display: none;
    }
  
    .visible {
      display: block;
    }
  
    .input {
      width: 100%;
      padding: 0.75rem;
      margin: 0.5rem 0;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
    }
  
    .login-btn {
      background-color: #0f4d40;
      color: white;
      padding: 0.75rem;
      width: 100%;
      border: none;
      border-radius: 0.5rem;
      margin-top: 1rem;
      cursor: pointer;
    }
  
    .close-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }
    
    .password-container {
      position: relative;
    }
    
    .password-toggle {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
    }
  </style>
  
  <!-- Modal backdrop -->
  <div
  class={`modal ${isOpen ? 'visible' : ''}`}
  role="dialog"
  aria-modal="true"
  aria-labelledby="login-title"
>
  <form on:submit|preventDefault={login}>
    <!-- Close button -->
    <button
      type="button"
      class="close-btn"
      on:click={closeModal}
      aria-label="Close modal"
    >
      ✖
    </button>

    <h2 id="login-title">Login</h2>

    <!-- Email input -->
    <label for="email">Email</label>
    <input id="email" type="email" bind:value={email} class="input" placeholder="Enter email" />

    <!-- Password input -->
    <label for="password">Password</label>
    <div class="password-container" aria-live="polite">
      <input
        id="password"
        type={showPassword ? 'text' : 'password'}
        bind:value={password}
        class="input"
        placeholder="Enter password"
      />
      <button
        type="button"
        class="password-toggle"
        on:click={togglePassword}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? '🙈' : '👁️'}
      </button>
    </div>

    <!-- Login button -->
    <button type="submit" class="login-btn">
      Login
    </button>
  </form>
</div>