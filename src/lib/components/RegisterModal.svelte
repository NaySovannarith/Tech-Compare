<script>
  import { goto } from "$app/navigation";

  let username = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let showPassword = false;

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

  function goBack() {
    history.length > 1 ? history.back() : goto("/");
  }

  async function register() {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: username,
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed.");
        return;
      }

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      alert("Registration successful!");
      goto("/login"); // Or /profiles, depending on your flow
    } catch (err) {
      console.error("Registration error:", err);
      alert("Server error. Please try again.");
    }
  }
</script>

<div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md relative">
    <!-- Close Icon -->
    <button
      on:click={goBack}
      class="absolute top-4 right-4 text-gray-500 hover:text-black"
    >
      ⤫
    </button>

    <h2 class="text-2xl font-semibold mb-6 text-center">Register</h2>

    <div class="space-y-4">
      <!-- Username -->
      <div>
        <label class="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          bind:value={username}
          class="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
          placeholder="yourusername"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          bind:value={email}
          class="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
          placeholder="you@example.com"
        />
      </div>

      <!-- Password -->
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

      <!-- Confirm Password -->
      <div>
        <label class="block text-sm font-medium mb-1">Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          bind:value={confirmPassword}
          class="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
          placeholder="••••••••"
        />
      </div>

      <!-- Register Button -->
      <button
        on:click={register}
        class="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
      >
        Register Now
      </button>
    </div>
  </div>
</div>
