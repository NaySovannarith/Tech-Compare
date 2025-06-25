<script lang="ts">
  import { goto } from "$app/navigation";
  import { user } from '$lib/data/auth';

  let email = $state("");
  let password = $state("");
  let showPassword = $state(false);
  let errorMessage = $state("");
  let isLoading = $state(false);

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

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

      localStorage.setItem("token", data.token);

      const profileRes = await fetch("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      });

      if (profileRes.ok) {
        const profileData = await profileRes.json();
        user.set(profileData);
      } else {
        user.set(null);
        localStorage.removeItem("token");
        errorMessage = "Failed to fetch user data.";
        return;
      }

      alert("Login successful!");
      goto("/");

    } catch (error) {
      console.error(error);
      errorMessage = "Server error. Please try again.";
    } finally {
      isLoading = false;
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleLogin();
    }
  }
</script>

<div class="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm flex items-center justify-center z-50 p-3 overflow-y-auto">
  <div class="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-sm relative border border-white/20 animate-in fade-in duration-300 my-4">
    
    <!-- Decorative Elements -->
    <div class="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
    <div class="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"></div>
    
    <!-- Close Button -->
    <button 
      onclick={goBack}
      class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 group z-10"
      aria-label="Close login modal"
    >
      <svg class="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="p-6">
      <!-- Header -->
      <div class="text-center mb-6">
        <div class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
          Welcome Back
        </h2>
        <p class="text-gray-600 text-sm">Sign in to your account to continue</p>
      </div>

      <!-- Error Message -->
      {#if errorMessage}
        <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 animate-in slide-in-from-top duration-300">
          <div class="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p class="text-red-700 text-xs font-medium">{errorMessage}</p>
        </div>
      {/if}

      <form onsubmit={event => { event.preventDefault(); handleLogin(); }} class="space-y-4">
        <!-- Email Input -->
        <div class="space-y-1.5">
          <label for="email" class="block text-xs font-semibold text-gray-700 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Address
          </label>
          <div class="relative">
            <input
              id="email"
              type="email"
              bind:value={email}
              onkeypress={handleKeyPress}
              class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 placeholder-gray-400 text-sm"
              placeholder="Enter your email address"
              disabled={isLoading}
              autocomplete="username"
              required
            />
          </div>
        </div>

        <!-- Password Input -->
        <div class="space-y-1.5">
          <label for="password" class="block text-xs font-semibold text-gray-700 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              bind:value={password}
              onkeypress={handleKeyPress}
              class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 placeholder-gray-400 pr-10 text-sm"
              placeholder="Enter your password"
              disabled={isLoading}
              autocomplete="current-password"
              required
            />
            <button
              type="button"
              onclick={togglePasswordVisibility}
              disabled={isLoading}
              class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {#if showPassword}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              {:else}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              {/if}
            </button>
          </div>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="flex items-center justify-between text-xs">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="w-3.5 h-3.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1" />
            <span class="text-gray-600">Remember me</span>
          </label>
          <a href="/forgot-password" class="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Forgot password?
          </a>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          disabled={isLoading}
          class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
        >
          {#if isLoading}
            <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing in...
          {:else}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In
          {/if}
        </button>
      </form>

      <!-- Divider -->
      <div class="relative my-5">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center text-xs">
          <span class="px-3 bg-white text-gray-500 font-medium">Or continue with</span>
        </div>
      </div>

      <!-- Social Login Buttons -->
      <div class="space-y-2.5">
        <button 
          type="button"
          disabled
          class="w-full flex items-center justify-center gap-2.5 px-3 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span class="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Continue with Google</span>
        </button>

        <button 
          type="button"
          disabled
          class="w-full flex items-center justify-center gap-2.5 px-3 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group text-sm"
        >
          <svg class="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span class="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Continue with Facebook</span>
        </button>
      </div>

      <!-- Sign Up Link -->
      <div class="mt-5 text-center">
        <p class="text-gray-600 text-xs">
          Don't have an account? 
          <a href="/signup" class="font-semibold text-blue-600 hover:text-blue-700 transition-colors ml-1">
            Create account
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slide-in-from-top {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-in {
    animation-fill-mode: both;
  }

  .fade-in {
    animation-name: fade-in;
  }

  .slide-in-from-top {
    animation-name: slide-in-from-top;
  }

  .duration-300 {
    animation-duration: 300ms;
  }
</style>
