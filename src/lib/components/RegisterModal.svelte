<script lang="ts">
  import { goto } from "$app/navigation";

  let username = $state("");
  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let showPassword = $state(false);
  let showConfirmPassword = $state(false);
  let errorMessage = $state("");
  let isLoading = $state(false);
  let acceptTerms = $state(false);

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

  function toggleConfirmPasswordVisibility() {
    showConfirmPassword = !showConfirmPassword;
  }

  function goBack() {
    history.length > 1 ? history.back() : goto("/");
  }

  async function register() {
    // Validation
    if (!username || !email || !password || !confirmPassword) {
      errorMessage = "Please fill in all fields";
      return;
    }

    if (password !== confirmPassword) {
      errorMessage = "Passwords do not match";
      return;
    }

    if (password.length < 6) {
      errorMessage = "Password must be at least 6 characters";
      return;
    }

    if (!acceptTerms) {
      errorMessage = "Please accept the terms and conditions";
      return;
    }

    isLoading = true;
    errorMessage = "";

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
          password_confirmation: confirmPassword
        })
      });

      const data = await res.json();

      if (!res.ok) {
        errorMessage = data.message || "Registration failed. Please try again.";
        return;
      }

      localStorage.setItem("token", data.token);
      alert("Registration successful! Welcome aboard!");
      goto("/login");
    } catch (err) {
      console.error("Registration error:", err);
      errorMessage = "Server error. Please try again.";
    } finally {
      isLoading = false;
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      register();
    }
  }
</script>

<div class="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm flex items-center justify-center z-50 p-3 overflow-y-auto">
  <div class="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-sm relative border border-white/20 animate-in fade-in duration-300 my-3">
    
    <!-- Decorative Elements -->
    <div class="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
    <div class="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
    
    <!-- Close Button -->
    <button 
      onclick={goBack}
      class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 group z-10"
      aria-label="Close register modal"
    >
      <svg class="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="p-6">
      <!-- Header -->
      <div class="text-center mb-5">
        <div class="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
          Create Account
        </h2>
        <p class="text-gray-600 text-sm">Join us today and get started</p>
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

      <form onsubmit={event => { event.preventDefault(); register(); }} class="space-y-4">
        <!-- Username Input -->
        <div class="space-y-1.5">
          <label for="username" class="block text-sm font-semibold text-gray-700 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Full Name
          </label>
          <input
            id="username"
            type="text"
            bind:value={username}
            onkeypress={handleKeyPress}
            class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-200 placeholder-gray-400 text-sm"
            placeholder="Enter your full name"
            disabled={isLoading}
            required
          />
        </div>

        <!-- Email Input -->
        <div class="space-y-1.5">
          <label for="email" class="block text-sm font-semibold text-gray-700 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            bind:value={email}
            onkeypress={handleKeyPress}
            class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-200 placeholder-gray-400 text-sm"
            placeholder="Enter your email address"
            disabled={isLoading}
            autocomplete="email"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="space-y-1.5">
          <label for="password" class="block text-sm font-semibold text-gray-700 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              bind:value={password}
              onkeypress={handleKeyPress}
              class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-200 placeholder-gray-400 pr-10 text-sm"
              placeholder="Create a strong password"
              disabled={isLoading}
              autocomplete="new-password"
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
          {#if password && password.length > 0}
            <div class="flex items-center gap-1.5 mt-1">
              <div class="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  class="h-full transition-all duration-300 {password.length < 6 ? 'bg-red-400 w-1/3' : password.length < 8 ? 'bg-yellow-400 w-2/3' : 'bg-green-400 w-full'}"
                ></div>
              </div>
              <span class="text-xs {password.length < 6 ? 'text-red-500' : password.length < 8 ? 'text-yellow-500' : 'text-green-500'}">
                {password.length < 6 ? 'Weak' : password.length < 8 ? 'Good' : 'Strong'}
              </span>
            </div>
          {/if}
        </div>

        <!-- Confirm Password Input -->
        <div class="space-y-1.5">
          <label for="confirmPassword" class="block text-sm font-semibold text-gray-700 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Confirm Password
          </label>
          <div class="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              bind:value={confirmPassword}
              onkeypress={handleKeyPress}
              class="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all duration-200 placeholder-gray-400 pr-10 text-sm"
              placeholder="Confirm your password"
              disabled={isLoading}
              autocomplete="new-password"
              required
            />
            <button
              type="button"
              onclick={toggleConfirmPasswordVisibility}
              disabled={isLoading}
              class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {#if showConfirmPassword}
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
          {#if confirmPassword && password && confirmPassword.length > 0}
            <div class="flex items-center gap-1.5 mt-1">
              {#if password === confirmPassword}
                <svg class="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-xs text-green-500">Passwords match</span>
              {:else}
                <svg class="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span class="text-xs text-red-500">Passwords don't match</span>
              {/if}
            </div>
          {/if}
        </div>

        <!-- Terms and Conditions -->
        <div class="flex items-start gap-2.5 text-sm pt-1">
  <input 
    type="checkbox"
    bind:checked={acceptTerms}
    class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-1 mt-0.5"
  />
      <p class="text-gray-600 leading-relaxed">
        I agree to the 
        <a href="/terms" class="text-green-600 hover:text-green-700 font-medium transition-colors">Terms of Service</a>
        and 
        <a href="/privacy" class="text-green-600 hover:text-green-700 font-medium transition-colors">Privacy Policy</a>
       </p>
      </div>

        <!-- Register Button -->
        <button
          type="submit"
          disabled={isLoading || !acceptTerms}
          class="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
        >
          {#if isLoading}
            <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating account...
          {:else}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Create Account
          {/if}
        </button>
      </form>

      <!-- Sign In Link -->
      <div class="mt-5 text-center">
        <p class="text-gray-600 text-sm">
          Already have an account? 
          <a href="/login" class="font-semibold text-green-600 hover:text-green-700 transition-colors ml-1">
            Sign in
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
