<script lang="ts">
  import { goto } from "$app/navigation";
  import { user } from '$lib/data/auth';

  let email = "";
  let password = "";
  let showPassword = false;
  let errorMessage = "";
  let isLoading = false;

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

  // Add this goBack function because you used it in your template
  function goBack() {
    history.length > 1 ? history.back() : goto('/');
  }

  async function handleLogin() {
    if (!email || !password) {
      errorMessage = "Please enter both email and password";
      return;
    }

    isLoading = true;
    errorMessage = "";

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        errorMessage = data.message || "Login failed. Please try again.";
        return;
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);

      // Fetch user profile using token
      const profileRes = await fetch("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      });

      if (profileRes.ok) {
        const profileData = await profileRes.json();
        user.set(profileData);  // update user store
      } else {
        user.set(null);
        localStorage.removeItem("token");
        errorMessage = "Failed to fetch user data.";
        return;
      }

      alert("Login successful!");
      goto("/"); // Redirect after login

    } catch (error) {
      console.error(error);
      errorMessage = "Server error. Please try again.";
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md relative">
    <!-- Close Icon -->
    <button on:click={goBack}
      class="absolute top-4 right-4 text-gray-500 hover:text-black"
      aria-label="Close login modal"
    >
      ⤫
    </button>

    <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>

    {#if errorMessage}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
        {errorMessage}
      </div>
    {/if}

    <div class="space-y-4">
      <!-- Email Input -->
      <div>
        <label class="block text-sm font-medium mb-1" for="email">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          class="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
          placeholder="you@example.com"
          disabled={isLoading}
          autocomplete="username"
          required
        />
      </div>

      <!-- Password Input -->
      <div>
        <label class="block text-sm font-medium mb-1" for="password">Password</label>
        <div class="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            bind:value={password}
            class="w-full border rounded px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-green-600"
            placeholder="••••••••"
            disabled={isLoading}
            autocomplete="current-password"
            required
          />
          <button
            type="button"
            class="absolute inset-y-0 right-2 flex items-center"
            on:click={togglePasswordVisibility}
            disabled={isLoading}
            aria-label={showPassword ? "Hide password" : "Show password"}
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
        on:click|preventDefault={handleLogin}
        disabled={isLoading}
        class="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition disabled:bg-green-600 disabled:cursor-not-allowed"
      >
        {isLoading ? 'LOGGING IN...' : 'LOGIN'}
      </button>

      <hr class="my-4" />

      <!-- Social Logins -->
      <div class="space-y-2">
        <button class="w-full bg-red-500 text-white py-2 rounded flex items-center justify-center" disabled>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
        <button class="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center" disabled>
          <img src="https://www.svgrepo.com/show/157810/facebook.svg" alt="Facebook" class="w-5 h-5 mr-2" />
          Sign in with Facebook
        </button>
      </div>

      <!-- Links -->
      <div class="text-sm text-center mt-4 space-y-1">
        <p>
          Don't have an account? <a href="signup" class="text-green-800 hover:underline">Register</a>
        </p>
        <p>
          Forget Password? <a href="# " class="text-green-800 hover:underline">Reset Password</a>
        </p>
      </div>
    </div>
  </div>
</div>
