<script>
    import { goto } from "$app/navigation";

  
  let email = "";
  let password = "";
  let showPassword = false;

  const gotologin = () => goto('/profiles');
  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

  function login() {
    // Replace with actual login logic
    console.log("Email:", email, "Password:", password);
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

    <div class="space-y-4">
      <!-- Email Input -->
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          bind:value={email}
          class="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
          placeholder="you@example.com"
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
          />
          <button
            type="button"
            class="absolute inset-y-0 right-2 flex items-center"
            on:click={togglePasswordVisibility}
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
        on:click={gotologin}
        
        class="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
      >
      
        LOGIN
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
          Don’t have an account? <a href="signup" class="text-green-800 hover:underline">Register</a>
        </p>
        <p>
          Forget Password? <a href="#" class="text-green-800 hover:underline">Reset Password</a>
        </p>
      </div>
    </div>
  </div>
</div>
