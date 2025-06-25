<!-- src/lib/components/LoginModal.svelte -->
<script lang="ts">
  import { goto } from "$app/navigation";
  import { loginWithBackend } from '$lib/data/custom-auth';
  import { user } from '$lib/data/auth';

  let email = "";
  let password = "";
  let showPassword = false;
  let errorMessage = "";
  let isLoading = false;

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

  async function handleLogin() {
    if (!email || !password) {
      errorMessage = "Please enter both email and password";
      return;
    }

    isLoading = true;
    errorMessage = "";

    try {
      await loginWithBackend(email, password);
      goto('/');
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else {
        errorMessage = "Login failed. Please try again.";
      }
      console.error(error);
    } finally {
      isLoading = false;
    }
  }

  function goBack() {
    history.length > 1 ? history.back() : goto('/');
  }
</script>


<div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md relative">
    <!-- Close Icon -->
    <button on:click={goBack}
    class="absolute top-4 right-4 text-gray-500 hover:text-black">
      ⤫
    </button>

    <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>

    {#if errorMessage}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {errorMessage}
      </div>
    {/if}

    <div class="space-y-4">
      <!-- Email Input -->
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          bind:value={email}
          class="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
          placeholder="you@example.com"
          disabled={isLoading}
        />
      </div>

      <!-- Password Input -->
      <div>
        <label class="block text-sm font-medium mb-1">Password</label>
        <div class="relative">
          <input
            type={showPassword ? "text" : "password"}
            bind:value={password}
            class="w-full border rounded px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-green-600"
            placeholder="••••••••"
            disabled={isLoading}
          />
          <button
            type="button"
            class="absolute inset-y-0 right-2 flex items-center"
            on:click={togglePasswordVisibility}
            disabled={isLoading}
          >
            {#if showPassword}
              👁️
            {:else}
              👁️‍🗨️
            {/if}
          </button>
        </div>
      </div>

      <!-- Login Button -->
      <button
        on:click={handleLogin}
        disabled={isLoading}
        class="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition disabled:bg-green-600 disabled:cursor-not-allowed"
      >
        {isLoading ? 'LOGGING IN...' : 'LOGIN'}
      </button>

      <hr class="my-4" />

      <!-- Social Logins -->
      <div class="space-y-2">
        <button class="w-full bg-red-500 text-white py-2 rounded flex items-center justify-center">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5 mr-2" />
          <a href="https://mail.google.com/" >Sign in with Google</a>
        </button>
        <button class="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center">
          <img src="https://www.svgrepo.com/show/157810/facebook.svg" alt="Facebook" class="w-5 h-5 mr-2" />
          <a href="https://www.facebook.com/login.php/"> Sign in with Facebook</a>
        </button>
      </div>

      <!-- Links -->
      <div class="text-sm text-center mt-4 space-y-1">
        <p>
          Don't have an account? <a href="signup" class="text-green-800 hover:underline">Register</a>
        </p>
        <p>
          Forget Password? <a href="#" class="text-green-800 hover:underline">Reset Password</a>
        </p>
      </div>
    </div>
  </div>
</div>
